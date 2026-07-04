// The "half-visible" cutaway: a deemphasized group is not drawn translucent —
// it is cut by a single camera-facing plane into a kept half (rendered as a
// normal solid) and a discarded half. cutHeight picks that plane: the kept half
// is the largest depth-slab that covers no fully-visible geometry from the
// current camera angle. A shell (e.g. a house) opens up to reveal what it
// contains; a solid standing in front of visible scenery gets cut down to
// whatever fronts nothing. Pure math (no three.js / DOM) so selfcheck can
// exercise it headless; render.ts owns the THREE.Plane objects.
import type { Box3, Vec } from "./types.ts";

// A point's "height" along the view axis is h(p) = p·k, with k the unit vector
// pointing from the scene toward the camera; the kept half is { p | h(p) ≤ H }.
const EPS = 1e-3; // "strictly in front" slack for the flush-contact rule below
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
// occluder box, find the group's nearest surface along the ray from s toward
// the camera; the kept half must stop just behind that surface, else it would
// cover s. Samples inside an occluder are equivalent to the surface sample
// where their ray exits it, so the lattice can sample boxes solid. Infinity =
// nothing of the group fronts any visible sample, no cut needed.
//
// Flush contact is NOT coverage: when the sample's ray runs into group solid
// at (or straddling) the very point where it leaves the sample's own box, that
// surface point is a contact face — a wall standing on a floor slab, a desk
// sitting on the ground — which could never be seen anyway, so the sample
// constrains nothing (counting it would erase every grounded group entirely).
export function cutHeight(
  group: Box3[],
  occluders: Box3[],
  k: Vec,
): number {
  let H = Infinity;
  if (!group.length) return H;
  const xs: number[] = [], ys: number[] = [], zs: number[] = [];
  for (const b of occluders) {
    // this box can't lower H if even its h-minimal corner is already behind it
    const bh = k.x * (k.x > 0 ? b.x0 : b.x1) +
      k.y * (k.y > 0 ? b.y0 : b.y1) +
      k.z * (k.z > 0 ? b.z0 : b.z1);
    if (bh - MARGIN >= H) continue;
    axisSamples(b.x0, b.x1, xs);
    axisSamples(b.y0, b.y1, ys);
    axisSamples(b.z0, b.z1, zs);
    for (const sx of xs) {
      for (const sy of ys) {
        for (const sz of zs) {
          const hs = sx * k.x + sy * k.y + sz * k.z;
          if (hs - MARGIN >= H) continue; // can't tighten H from here
          // where the ray s + t·k leaves the sample's own box — group geometry
          // at or before this is contact/embedding, not coverage
          let ex = Infinity;
          if (k.x !== 0) ex = ((k.x > 0 ? b.x1 : b.x0) - sx) / k.x;
          if (k.y !== 0) {
            ex = Math.min(ex, ((k.y > 0 ? b.y1 : b.y0) - sy) / k.y);
          }
          if (k.z !== 0) {
            ex = Math.min(ex, ((k.z > 0 ? b.z1 : b.z0) - sz) / k.z);
          }
          // nearest group entry strictly beyond `ex` (slab ray-box test per
          // group box). On a zero ray component the box is hit only if the
          // sample is strictly inside its span on that axis — sliding along a
          // face is grazing contact, not coverage.
          let best = Infinity, blocked = false;
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
          if (!blocked && hs + best - MARGIN < H) H = hs + best - MARGIN;
        }
      }
    }
  }
  return H;
}
