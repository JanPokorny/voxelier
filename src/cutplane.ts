// The "half-visible" cutaway: a deemphasized group is not drawn translucent —
// it is cut by a single camera-facing plane into a kept half (rendered as a
// normal solid) and a discarded half. cutHeight picks that plane: the kept half
// is the largest depth-slab that covers no fully-visible geometry from the
// current camera angle, so a deemphasized shell (e.g. a house) opens up exactly
// enough to reveal what it contains. Pure math (no three.js / DOM) so selfcheck
// can exercise it headless; render.ts owns the THREE.Plane objects.
import type { Box, Box3, Vec } from "./types.ts";

// A point's "height" along the view axis is h(p) = p·k, with k the unit vector
// pointing from the scene toward the camera; the kept half is { p | h(p) ≤ H }.
// Only occluder geometry inside the group's AABB constrains the plane: like any
// opaque object, the kept half may still hide scenery that merely lies behind
// it — the cut exists to reveal what is INSIDE the group, not to make it
// transparent to the whole scene. (Without the clip, a visible floor running on
// behind a cut-away house would force the entire house off.)
const EPS = 1e-3; // ignore grazing contact (a sample exactly on a group face)
const MARGIN = 0.01; // keep the plane strictly behind the last covering fragment
const STEP = 6; // sample-lattice pitch in cells; coverage thinner than this on
// screen can slip between samples, which is below anything the cut must reveal

// sample coordinates spanning [lo, hi]: both ends plus interior points every
// ≤ STEP cells, written into `out` (reused across boxes to avoid garbage)
function axisSamples(lo: number, hi: number, out: number[]): void {
  out.length = 0;
  const n = Math.max(1, Math.ceil((hi - lo) / STEP));
  for (let i = 0; i <= n; i++) out.push(lo + ((hi - lo) * i) / n);
}

// The plane height H for one group: for every lattice sample s of every
// occluder box (clipped to the group's AABB), find the group's nearest surface
// along the ray from s toward the camera; the kept half must stop just behind
// that surface, else it would cover s. Samples inside an occluder are
// equivalent to the surface sample where their ray exits it, so the lattice
// can sample boxes solid. Infinity = nothing of the group fronts any visible
// sample, no cut needed.
export function cutHeight(
  group: Box3[],
  aabb: Box,
  occluders: Box3[],
  k: Vec,
): number {
  let H = Infinity;
  if (!group.length) return H;
  const xs: number[] = [], ys: number[] = [], zs: number[] = [];
  for (const b of occluders) {
    const x0 = Math.max(b.x0, aabb.min.x), x1 = Math.min(b.x1, aabb.max.x);
    const y0 = Math.max(b.y0, aabb.min.y), y1 = Math.min(b.y1, aabb.max.y);
    const z0 = Math.max(b.z0, aabb.min.z), z1 = Math.min(b.z1, aabb.max.z);
    if (x0 >= x1 || y0 >= y1 || z0 >= z1) continue;
    axisSamples(x0, x1, xs);
    axisSamples(y0, y1, ys);
    axisSamples(z0, z1, zs);
    for (const sx of xs) {
      for (const sy of ys) {
        for (const sz of zs) {
          const hs = sx * k.x + sy * k.y + sz * k.z;
          if (hs - MARGIN >= H) continue; // can't tighten H from here
          // nearest group entry along s + t·k, t > 0 (slab ray-box test per
          // group box). A box straddling s (t0 < 0 < t1) fronts it immediately,
          // so its entry clamps to 0. On a zero ray component the box is hit
          // only if the sample is strictly inside its span on that axis —
          // sliding along a face is grazing contact, not coverage.
          let best = Infinity;
          for (const q of group) {
            let t0 = -Infinity, t1 = Infinity;
            if (k.x === 0) {
              if (sx <= q.x0 || sx >= q.x1) continue;
            } else {
              const ta = (q.x0 - sx) / k.x, tb = (q.x1 - sx) / k.x;
              t0 = Math.max(t0, Math.min(ta, tb));
              t1 = Math.min(t1, Math.max(ta, tb));
            }
            if (k.y === 0) {
              if (sy <= q.y0 || sy >= q.y1) continue;
            } else {
              const ta = (q.y0 - sy) / k.y, tb = (q.y1 - sy) / k.y;
              t0 = Math.max(t0, Math.min(ta, tb));
              t1 = Math.min(t1, Math.max(ta, tb));
            }
            if (k.z === 0) {
              if (sz <= q.z0 || sz >= q.z1) continue;
            } else {
              const ta = (q.z0 - sz) / k.z, tb = (q.z1 - sz) / k.z;
              t0 = Math.max(t0, Math.min(ta, tb));
              t1 = Math.min(t1, Math.max(ta, tb));
            }
            if (t0 < t1 && t1 > EPS) {
              const e = t0 > 0 ? t0 : 0;
              if (e < best) best = e;
            }
          }
          if (hs + best - MARGIN < H) H = hs + best - MARGIN;
        }
      }
    }
  }
  return H;
}
