// The "half-visible" cutaway: a deemphasized group is not drawn translucent —
// it is clipped, dollhouse-style, by up to three axis-aligned half-space cuts
// on its camera-facing sides (x, z, and y for roofs / "walls-down" stumps).
// The cuts are chosen once per view SECTOR — an azimuth quadrant × elevation
// band, applied with hysteresis in render.ts — and hold for every direction in
// the sector, so the cut geometry is completely static while the camera orbits
// within it and whole walls drop at once at sector boundaries (the scheme The
// Sims and dollhouse-mode BIM viewers use, adapted to voxel boxes). cutCorner
// picks the cuts that keep the largest voxel volume while covering no
// fully-visible geometry from any direction in the sector. Pure math (no
// three.js / DOM) so selfcheck can exercise it headless; render.ts owns the
// THREE.Plane objects and the sector state.
import type { Box3, Vec } from "./types.ts";

// Cut values in camera-sign coordinates: with axis signs (sx, sy, sz) — each
// +1/-1, the sign of the view axis component, i.e. which side faces the camera
// — the kept region is { p | p.x·sx ≤ cut.x ∧ p.y·sy ≤ cut.y ∧ p.z·sz ≤ cut.z }.
// Infinity = no cut on that axis. Along any ray toward the camera every signed
// coordinate is non-decreasing (the sector fixes the signs), so clipping a
// covering fragment's nearest point also clips everything closer to the camera
// — the same monotonicity the old single plane relied on, per axis.
export type Cut3 = { x: number; y: number; z: number };
export type Sign = 1 | -1;

const EPS = 1e-3; // "strictly in front" slack for the flush-contact rule below
const MARGIN = 0.01; // keep cuts strictly below the covering fragments
const STEP = 6; // sample-lattice pitch in cells; coverage thinner than this on
// screen can slip between samples, which is below anything the cut must reveal
const MAX_CAND = 48; // per-axis cap on candidate cut positions in the sweep

// sample coordinates spanning [lo, hi]: both ends plus interior points every
// ≤ STEP cells, written into `out` (reused across boxes to avoid garbage)
function axisSamples(lo: number, hi: number, out: number[]): void {
  out.length = 0;
  const n = Math.max(1, Math.ceil((hi - lo) / STEP));
  for (let i = 0; i <= n; i++) out.push(lo + ((hi - lo) * i) / n);
}

// For one view direction d (unit, pointing at the camera), collect the group's
// nearest covering surface point for every occluder lattice sample: the kept
// region must exclude each such point, else it would cover the sample. Points
// are floored to whole cells in signed coordinates (conservative) and deduped.
// Samples inside an occluder are equivalent to the surface sample where their
// ray exits it, so the lattice can sample boxes solid.
//
// Flush contact is NOT coverage: when the sample's ray runs into group solid
// at (or straddling) the very point where it leaves the sample's own box, that
// surface point is a contact face — a wall standing on a floor slab, a desk
// sitting on the ground — which could never be seen anyway, so the sample
// constrains nothing (counting it would erase every grounded group entirely).
function gatherEntries(
  group: Box3[],
  occluders: Box3[],
  d: Vec,
  sx: Sign,
  sy: Sign,
  sz: Sign,
  seen: Set<string>,
  pts: [number, number, number][],
): void {
  const xs: number[] = [], ys: number[] = [], zs: number[] = [];
  for (const b of occluders) {
    axisSamples(b.x0, b.x1, xs);
    axisSamples(b.y0, b.y1, ys);
    axisSamples(b.z0, b.z1, zs);
    for (const ox of xs) {
      for (const oy of ys) {
        for (const oz of zs) {
          // where the ray s + t·d leaves the sample's own box — group geometry
          // at or before this is contact/embedding, not coverage
          let ex = Infinity;
          if (d.x !== 0) ex = ((d.x > 0 ? b.x1 : b.x0) - ox) / d.x;
          if (d.y !== 0) {
            ex = Math.min(ex, ((d.y > 0 ? b.y1 : b.y0) - oy) / d.y);
          }
          if (d.z !== 0) {
            ex = Math.min(ex, ((d.z > 0 ? b.z1 : b.z0) - oz) / d.z);
          }
          // nearest group entry strictly beyond `ex` (slab ray-box test per
          // group box). On a zero ray component the box is hit only if the
          // sample is strictly inside its span on that axis — sliding along a
          // face is grazing contact, not coverage.
          let best = Infinity, blocked = false;
          for (const q of group) {
            let t0 = -Infinity, t1 = Infinity;
            if (d.x === 0) {
              if (ox <= q.x0 || ox >= q.x1) continue;
            } else {
              const ta = (q.x0 - ox) / d.x, tb = (q.x1 - ox) / d.x;
              t0 = Math.max(t0, Math.min(ta, tb));
              t1 = Math.min(t1, Math.max(ta, tb));
            }
            if (d.y === 0) {
              if (oy <= q.y0 || oy >= q.y1) continue;
            } else {
              const ta = (q.y0 - oy) / d.y, tb = (q.y1 - oy) / d.y;
              t0 = Math.max(t0, Math.min(ta, tb));
              t1 = Math.min(t1, Math.max(ta, tb));
            }
            if (d.z === 0) {
              if (oz <= q.z0 || oz >= q.z1) continue;
            } else {
              const ta = (q.z0 - oz) / d.z, tb = (q.z1 - oz) / d.z;
              t0 = Math.max(t0, Math.min(ta, tb));
              t1 = Math.min(t1, Math.max(ta, tb));
            }
            if (t0 >= t1) continue;
            if (t0 > ex + EPS) {
              if (t0 < best) best = t0;
            } else if (t1 > ex + EPS) {
              // group solid flush at (or straddling) the sample's own surface:
              // the sightline ends on a contact face — skip the whole sample
              blocked = true;
              break;
            }
          }
          if (blocked || best === Infinity) continue;
          const px = Math.floor((ox + best * d.x) * sx);
          const py = Math.floor((oy + best * d.y) * sy);
          const pz = Math.floor((oz + best * d.z) * sz);
          const key = px + "," + py + "," + pz;
          if (!seen.has(key)) {
            seen.add(key);
            pts.push([px, py, pz]);
          }
        }
      }
    }
  }
}

// valid prefix lengths of `arr` (sorted descending on component c) that end on
// a tie-run boundary — the cut positions worth trying on that axis — strided
// down to MAX_CAND entries (always keeping 0 and the full length)
function prefixLens(arr: [number, number, number][], c: 0 | 1 | 2): number[] {
  const out = [0];
  let i = 0;
  while (i < arr.length) {
    const v = arr[i][c];
    do i++; while (i < arr.length && arr[i][c] === v);
    out.push(i);
  }
  if (out.length <= MAX_CAND) return out;
  const capped = new Set<number>();
  for (let j = 0; j < MAX_CAND; j++) {
    capped.add(out[Math.floor((j * (out.length - 1)) / (MAX_CAND - 1))]);
  }
  return [...capped];
}

// The cuts for one group and one view sector: gather covering points over the
// sector's representative directions, reduce them to the Pareto-minimal set
// (a point dominated component-wise is excluded by whatever cut excludes its
// dominator), then sweep candidate x-cuts × z-cuts (the y-cut mops up the
// rest) and keep the combination with the largest kept voxel volume. All-
// Infinity when nothing of the group ever fronts a visible sample: no cut.
export function cutCorner(
  group: Box3[],
  occluders: Box3[],
  dirs: Vec[],
  sx: Sign,
  sy: Sign,
  sz: Sign,
): Cut3 {
  const inf: Cut3 = { x: Infinity, y: Infinity, z: Infinity };
  if (!group.length) return inf;
  const seen = new Set<string>();
  const pts: [number, number, number][] = [];
  for (const d of dirs) {
    gatherEntries(group, occluders, d, sx, sy, sz, seen, pts);
  }
  if (!pts.length) return inf;
  // Pareto-minimal filter: sorted ascending, an earlier point with ≤ y and ≤ z
  // (x already ≤ by the sort) dominates
  pts.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
  const par: [number, number, number][] = [];
  outer: for (const p of pts) {
    for (const a of par) {
      if (a[1] <= p[1] && a[2] <= p[2]) continue outer;
    }
    par.push(p);
  }
  // signed per-axis intervals of the group's boxes, for kept-volume evaluation
  const iv = group.map((q) => [
    Math.min(q.x0 * sx, q.x1 * sx),
    Math.max(q.x0 * sx, q.x1 * sx),
    Math.min(q.y0 * sy, q.y1 * sy),
    Math.max(q.y0 * sy, q.y1 * sy),
    Math.min(q.z0 * sz, q.z1 * sz),
    Math.max(q.z0 * sz, q.z1 * sz),
  ]);
  const vol = (X: number, Y: number, Z: number): number => {
    let v = 0;
    for (const e of iv) {
      const a = Math.min(e[1], X) - e[0];
      if (a <= 0) continue;
      const b = Math.min(e[3], Y) - e[2];
      if (b <= 0) continue;
      const c = Math.min(e[5], Z) - e[4];
      if (c > 0) v += a * b * c;
    }
    return v;
  };
  // sweep: an x-cut handles the points with the largest x; of the rest, a
  // z-cut handles the largest z; the y-cut must clear whatever remains
  const byX = par.slice().sort((a, b) => b[0] - a[0]);
  let best = -1;
  const cut: Cut3 = { ...inf };
  for (const i of prefixLens(byX, 0)) {
    const X = i === 0 ? Infinity : byX[i - 1][0] - MARGIN;
    const rest = byX.slice(i).sort((a, b) => b[2] - a[2]);
    const sufY = new Array<number>(rest.length + 1).fill(Infinity);
    for (let j = rest.length - 1; j >= 0; j--) {
      sufY[j] = Math.min(sufY[j + 1], rest[j][1]);
    }
    for (const j of prefixLens(rest, 2)) {
      const Z = j === 0 ? Infinity : rest[j - 1][2] - MARGIN;
      const Y = sufY[j] === Infinity ? Infinity : sufY[j] - MARGIN;
      const v = vol(X, Y, Z);
      if (v > best) {
        best = v;
        cut.x = X;
        cut.y = Y;
        cut.z = Z;
      }
    }
  }
  return cut;
}
