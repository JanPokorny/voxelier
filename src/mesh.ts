// Greedy box-face mesher: one merged quad per exposed face rectangle, so cost is
// O(boxes), not O(surface cells) — a 1000³ box is six quads, not six million.
// Pure geometry (no DOM / editor state), so it can be tested and benchmarked
// headless. Shading is per-vertex ambient occlusion baked into the face vertices
// for soft corners (see the note by AO_PASSES).
import * as THREE from "three";
import type { Box3 } from "./types.ts";

// The six faces, each as { axis, high side, the two in-plane axes ordered so the
// quad winds CCW toward an outward normal }.
const FACE6 = [
  { a: 0, hi: true, u: 1, v: 2, n: [1, 0, 0] },
  { a: 0, hi: false, u: 2, v: 1, n: [-1, 0, 0] },
  { a: 1, hi: true, u: 2, v: 0, n: [0, 1, 0] },
  { a: 1, hi: false, u: 0, v: 2, n: [0, -1, 0] },
  { a: 2, hi: true, u: 0, v: 1, n: [0, 0, 1] },
  { a: 2, hi: false, u: 1, v: 0, n: [0, 0, -1] },
] as const;
type Rect = [number, number, number, number]; // [u0, v0, u1, v1]
// Smooth, spread-out ambient occlusion baked into the mesh. Per exposed face we
// build a 2D occupancy field of the outside cell layer (1 = solid occluder) over
// the face's span plus an AO_R margin, then blur it with a few separable box
// passes — a 3-pass box blur closely approximates a Gaussian. A vertex's
// occlusion is the blurred (0..1) field at its position: the Gaussian-weighted
// fraction of its neighbourhood that is solid, so the shadow fades smoothly
// across the whole radius. The blur uses running sums, so its cost is
// independent of AO_R — the spread can be widened freely. Gouraud-interpolated;
// an interior vertex ≥ AO_R from every edge sees no occluder -> brightness 1, so
// flat masses split into boxes stay seamless.
const AO_PASSES = 3; // box-blur passes; 3 ≈ a Gaussian
const AO_BOX = 2; // box radius per pass
const AO_R = AO_PASSES * AO_BOX; // total blur half-width = spread radius, in cells
const AO_DARK = 0.5; // brightness of a fully-occluded (rim/corner) vertex
// Growable Float32 vertex buffer: quads write straight into typed storage (a
// plain number[] costs a push per element AND a whole-array conversion when the
// BufferAttribute is built — both show up at millions of vertices).
class VertBuf {
  private a = new Float32Array(1 << 12);
  private n = 0;
  push3(x: number, y: number, z: number): void {
    if (this.n + 3 > this.a.length) {
      const b = new Float32Array(this.a.length * 2);
      b.set(this.a);
      this.a = b;
    }
    this.a[this.n++] = x;
    this.a[this.n++] = y;
    this.a[this.n++] = z;
  }
  get length(): number {
    return this.n;
  }
  trimmed(): Float32Array {
    return this.a.slice(0, this.n);
  }
}
// One separable box-blur pass with zero padding (out-of-field reads as open),
// dividing by the full window so each occluder spreads over 2·AO_BOX+1 cells.
// Blurs `count` lines of `len` elements; line k starts at k·lineStride with
// elements elemStride apart — call once per axis with the strides swapped.
function aoBlur1D(
  src: Float32Array,
  dst: Float32Array,
  count: number,
  len: number,
  lineStride: number,
  elemStride: number,
): void {
  const div = 2 * AO_BOX + 1;
  for (let k = 0; k < count; k++) {
    const base = k * lineStride;
    let sum = 0;
    for (let t = 0; t <= AO_BOX && t < len; t++) {
      sum += src[base + t * elemStride];
    }
    for (let p = 0; p < len; p++) {
      dst[base + p * elemStride] = sum / div;
      const add = p + AO_BOX + 1, rem = p - AO_BOX;
      if (add < len) sum += src[base + add * elemStride];
      if (rem >= 0) sum -= src[base + rem * elemStride];
    }
  }
}
export function boxFaceGeo(
  boxes: Box3[],
  colorOf: (c: number) => THREE.Color,
  ao: boolean,
): THREE.BufferGeometry | null {
  const pos = new VertBuf(), nor = new VertBuf(), colr = new VertBuf();
  const lo = boxes.map((b) => [b.x0, b.y0, b.z0]);
  const hi = boxes.map((b) => [b.x1, b.y1, b.z1]);
  // Per-axis plane buckets: a face at plane p can only be hidden by a box whose
  // OPPOSITE side sits exactly at p, so bucket box indices by each lo/hi plane
  // coordinate once and look covers up per face — O(candidates on that plane),
  // not a scan of every box for every face (quadratic, the old hotspot).
  const loAt = [0, 1, 2].map(() => new Map<number, number[]>());
  const hiAt = [0, 1, 2].map(() => new Map<number, number[]>());
  const put = (m: Map<number, number[]>, k: number, i: number) => {
    const arr = m.get(k);
    if (arr) arr.push(i);
    else m.set(k, [i]);
  };
  for (let j = 0; j < boxes.length; j++) {
    for (let a = 0; a < 3; a++) {
      put(loAt[a], lo[j][a], j);
      put(hiAt[a], hi[j][a], j);
    }
  }
  const NONE: number[] = [];
  // Uniform grid over box indices for AO occluder lookup: a face's occluders are
  // the boxes crossing its outside cell layer, found via the handful of grid
  // cells the field rect spans and rasterised as whole rectangles — no per-cell
  // point queries (which made AO cost field-area × boxes-per-cell, the hotspot).
  const GC = 16;
  const gcell = (v: number): number => Math.floor(v / GC);
  let grid: number[][] = [], gn = [0, 0, 0], g0 = [0, 0, 0];
  if (ao && boxes.length) {
    const mn = [Infinity, Infinity, Infinity],
      mx = [-Infinity, -Infinity, -Infinity];
    for (let j = 0; j < boxes.length; j++) {
      for (let a = 0; a < 3; a++) {
        if (lo[j][a] < mn[a]) mn[a] = lo[j][a];
        if (hi[j][a] > mx[a]) mx[a] = hi[j][a];
      }
    }
    g0 = mn.map(gcell);
    gn = mx.map((v, a) => gcell(v - 1) - g0[a] + 1);
    grid = Array.from({ length: gn[0] * gn[1] * gn[2] }, () => []);
    for (let j = 0; j < boxes.length; j++) {
      for (let gx = gcell(lo[j][0]); gx <= gcell(hi[j][0] - 1); gx++) {
        for (let gy = gcell(lo[j][1]); gy <= gcell(hi[j][1] - 1); gy++) {
          for (let gz = gcell(lo[j][2]); gz <= gcell(hi[j][2] - 1); gz++) {
            grid[((gx - g0[0]) * gn[1] + (gy - g0[1])) * gn[2] + (gz - g0[2])]
              .push(j);
          }
        }
      }
    }
  }
  for (let i = 0; i < boxes.length; i++) {
    const c = colorOf(boxes[i].c), cr = c.r, cg = c.g, cb = c.b;
    const blo = lo[i], bhi = hi[i];
    for (const f of FACE6) {
      const { a, u, v } = f, plane = f.hi ? bhi[a] : blo[a];
      const wo = f.hi ? plane : plane - 1; // outside cell layer, for AO sampling
      // faces of neighbouring boxes that abut (and so hide) this one — a box is
      // never its own candidate (its lo < its hi on every axis)
      const covers: Rect[] = [];
      for (const j of (f.hi ? loAt : hiAt)[a].get(plane) ?? NONE) {
        const u0 = Math.max(lo[j][u], blo[u]), u1 = Math.min(hi[j][u], bhi[u]);
        const v0 = Math.max(lo[j][v], blo[v]), v1 = Math.min(hi[j][v], bhi[v]);
        if (u0 < u1 && v0 < v1) covers.push([u0, v0, u1, v1]);
      }
      // face rectangle minus the covered rectangles -> exposed sub-rectangles
      let pieces: Rect[] = [[blo[u], blo[v], bhi[u], bhi[v]]];
      for (const cv of covers) {
        const next: Rect[] = [];
        for (const p of pieces) {
          const iu0 = Math.max(p[0], cv[0]),
            iv0 = Math.max(p[1], cv[1]),
            iu1 = Math.min(p[2], cv[2]),
            iv1 = Math.min(p[3], cv[3]);
          if (iu0 >= iu1 || iv0 >= iv1) {
            next.push(p);
            continue;
          }
          if (p[0] < iu0) next.push([p[0], p[1], iu0, p[3]]);
          if (iu1 < p[2]) next.push([iu1, p[1], p[2], p[3]]);
          if (p[1] < iv0) next.push([iu0, p[1], iu1, iv0]);
          if (iv1 < p[3]) next.push([iu0, iv1, iu1, p[3]]);
        }
        pieces = next;
        if (!pieces.length) break;
      }
      const o = [0, 0, 0];
      o[a] = plane; // constant across the face; emit() fills the in-plane axes
      // AO at a face vertex: read the blurred outside-layer occupancy field (see
      // the note by AO_PASSES). The field is built lazily and shared by every
      // vertex of the face, so fully-covered faces (no exposed pieces) cost
      // nothing, and each vertex is a single array read.
      let field: Float32Array | null = null;
      let fu0 = 0, fv0 = 0, fh = 0; // field origin (u,v) and v-row stride
      const buildField = (): Float32Array => {
        fu0 = blo[u] - AO_R;
        fv0 = blo[v] - AO_R;
        const fw = bhi[u] - blo[u] + 2 * AO_R + 1;
        fh = bhi[v] - blo[v] + 2 * AO_R + 1;
        const s = new Float32Array(fw * fh); // outside-layer occupancy (0/1)
        // rasterise every box crossing the outside layer `wo`: whole-rectangle
        // fills from the few grid cells the field spans, duplicates harmless
        const ga = gcell(wo) - g0[a];
        let any = false;
        if (ga >= 0 && ga < gn[a]) {
          const cell = [0, 0, 0]; // grid coords; {a,u,v} permute 0..2
          cell[a] = ga;
          const gu1 = Math.min(gcell(fu0 + fw - 1) - g0[u], gn[u] - 1);
          const gv1 = Math.min(gcell(fv0 + fh - 1) - g0[v], gn[v] - 1);
          for (let gu = Math.max(gcell(fu0) - g0[u], 0); gu <= gu1; gu++) {
            cell[u] = gu;
            for (let gv = Math.max(gcell(fv0) - g0[v], 0); gv <= gv1; gv++) {
              cell[v] = gv;
              for (
                const j of grid[(cell[0] * gn[1] + cell[1]) * gn[2] + cell[2]]
              ) {
                if (lo[j][a] > wo || hi[j][a] <= wo) continue; // misses the layer
                const u0 = Math.max(lo[j][u], fu0),
                  u1 = Math.min(hi[j][u], fu0 + fw);
                const v0 = Math.max(lo[j][v], fv0),
                  v1 = Math.min(hi[j][v], fv0 + fh);
                for (let iu = u0; iu < u1; iu++) {
                  s.fill(
                    1,
                    (iu - fu0) * fh + (v0 - fv0),
                    (iu - fu0) * fh + (v1 - fv0),
                  );
                }
                any = any || u0 < u1 && v0 < v1;
              }
            }
          }
        }
        if (!any) return (field = s); // nothing occludes: skip the blur, AO == 1
        const d = new Float32Array(fw * fh); // ping-pong scratch
        for (let p = 0; p < AO_PASSES; p++) { // each pass blurs both axes
          aoBlur1D(s, d, fw, fh, fh, 1); // along v (contiguous rows)
          aoBlur1D(d, s, fh, fw, 1, fh); // along u (strided columns)
        }
        return (field = s); // both sweeps land the result back in s
      };
      const vbright = (vu: number, vv: number): number => {
        if (!ao) return 1;
        const f = field ?? buildField();
        const occ = f[(vu - fu0) * fh + (vv - fv0)]; // blurred solid fraction
        return AO_DARK + (1 - AO_DARK) * (1 - occ);
      };
      // one quad (two CCW triangles) with per-vertex AO baked into the vertex
      // colours (Gouraud), written straight into the buffers
      const emit = (uu: number, vv: number, br: number) => {
        o[u] = uu;
        o[v] = vv;
        pos.push3(o[0], o[1], o[2]);
        nor.push3(f.n[0], f.n[1], f.n[2]);
        colr.push3(cr * br, cg * br, cb * br);
      };
      const quad = (qu0: number, qv0: number, qu1: number, qv1: number) => {
        const bA = vbright(qu0, qv0), bB = vbright(qu1, qv0);
        const bC = vbright(qu1, qv1), bD = vbright(qu0, qv1);
        emit(qu0, qv0, bA);
        emit(qu1, qv0, bB);
        emit(qu1, qv1, bC);
        emit(qu0, qv0, bA);
        emit(qu1, qv1, bC);
        emit(qu0, qv1, bD);
      };
      for (const p of pieces) {
        const [pu0, pv0, pu1, pv1] = p;
        if (!ao) { // glass: no AO, one quad
          quad(pu0, pv0, pu1, pv1);
          continue;
        }
        // AO only varies within AO_R of an edge, so mesh a per-cell band AO_R
        // deep around the rim (the gradient needs the vertices) and leave the
        // interior — every vertex ≥ AO_R from any edge, so AO == 1 — as one quad.
        const iu0 = pu0 + AO_R, iu1 = pu1 - AO_R;
        const iv0 = pv0 + AO_R, iv1 = pv1 - AO_R;
        if (iu0 >= iu1 || iv0 >= iv1) { // too small to have a bright interior
          for (let cu = pu0; cu < pu1; cu++) {
            for (let cv = pv0; cv < pv1; cv++) quad(cu, cv, cu + 1, cv + 1);
          }
          continue;
        }
        for (let cu = pu0; cu < pu1; cu++) { // bottom & top bands (full width)
          for (let cv = pv0; cv < iv0; cv++) quad(cu, cv, cu + 1, cv + 1);
          for (let cv = iv1; cv < pv1; cv++) quad(cu, cv, cu + 1, cv + 1);
        }
        for (let cv = iv0; cv < iv1; cv++) { // left & right bands (interior rows)
          for (let cu = pu0; cu < iu0; cu++) quad(cu, cv, cu + 1, cv + 1);
          for (let cu = iu1; cu < pu1; cu++) quad(cu, cv, cu + 1, cv + 1);
        }
        quad(iu0, iv0, iu1, iv1); // bright interior (AO == 1)
      }
    }
  }
  if (!pos.length) return null;
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos.trimmed(), 3));
  g.setAttribute("normal", new THREE.BufferAttribute(nor.trimmed(), 3));
  g.setAttribute("color", new THREE.BufferAttribute(colr.trimmed(), 3));
  return g;
}
