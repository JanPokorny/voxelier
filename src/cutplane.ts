// The "half-visible" cutaway: a deemphasized group is not drawn translucent —
// it is clipped, dollhouse-style, by up to three axis-aligned half-space cuts
// on its camera-facing sides (x, z, and y for roofs / "walls-down" stumps).
// The cuts are chosen once per view SECTOR — an azimuth quadrant × elevation
// band, applied with hysteresis in render.ts — and hold for every direction in
// the sector, so the cut geometry is completely static while the camera orbits
// within it and whole walls drop at once at sector boundaries (the scheme The
// Sims and dollhouse-mode BIM viewers use, adapted to voxel boxes). The cuts
// keep the largest voxel volume that covers no fully-visible geometry from any
// direction in the sector. Computing them means ray-casting a sample lattice
// of every visible box, so cutJob exposes the work as resumable units render's
// frame loop can spread over several frames — a sector flip must never blow a
// frame budget. Pure math (no three.js / DOM) so selfcheck can exercise it
// headless; render.ts owns the THREE.Plane objects and the sector state.
import type { Box3, Vec } from "./types.ts";

// Cut values in camera-sign coordinates: with axis signs (sx, sy, sz) — each
// +1/-1, the sign of the view axis component, i.e. which side faces the camera
// — the kept region is { p | p.x·sx ≤ cut.x ∧ p.y·sy ≤ cut.y ∧ p.z·sz ≤ cut.z }.
// Infinity = no cut on that axis. Along any ray toward the camera every signed
// coordinate is non-decreasing (the sector fixes the signs), so clipping a
// covering fragment's nearest point also clips everything closer to the camera
// — the same monotonicity a single view-facing plane would rely on, per axis.
export type Cut3 = { x: number; y: number; z: number };
export type Sign = 1 | -1;
type Pt = [number, number, number];

const EPS = 1e-3; // "strictly in front" slack for the flush-contact rule below
const MARGIN = 0.01; // keep cuts strictly below the covering fragments
const STEP = 6; // sample-lattice pitch in cells; coverage thinner than this on
// screen can slip between samples, which is below anything the cut must reveal
const MAX_CAND = 48; // per-axis cap on candidate cut positions in the sweep
const CHUNK = 1536; // max lattice samples per work unit (and per occluder box)

// sample coordinates spanning [lo, hi]: both ends plus interior points every
// ≤ STEP cells, written into `out` (reused across boxes to avoid garbage)
function axisSamples(lo: number, hi: number, out: number[]): void {
  out.length = 0;
  const n = Math.max(1, Math.ceil((hi - lo) / STEP));
  for (let i = 0; i <= n; i++) out.push(lo + ((hi - lo) * i) / n);
}
const axisCount = (lo: number, hi: number): number =>
  Math.max(1, Math.ceil((hi - lo) / STEP)) + 1;
const latticeCount = (b: Box3): number =>
  axisCount(b.x0, b.x1) * axisCount(b.y0, b.y1) * axisCount(b.z0, b.z1);
// halve oversized boxes (a world-sized floor) along their longest axis until
// each fits a work unit, so no single unit can blow the frame budget. Each
// sub-box keeps a reference to the box it came from: samples are taken on the
// sub-box lattice, but a sample's own-box exit (the flush-contact rule) must
// see the ORIGINAL solid — a ray "exiting" through an internal split plane is
// still inside the occluder, and treating that as its surface would turn the
// wall standing on it into coverage.
function splitBig(b: Box3, root: Box3, subs: Box3[], roots: Box3[]): void {
  if (latticeCount(b) <= CHUNK) {
    subs.push(b);
    roots.push(root);
    return;
  }
  const dx = b.x1 - b.x0, dy = b.y1 - b.y0, dz = b.z1 - b.z0;
  if (dx >= dy && dx >= dz) {
    const m = b.x0 + (dx >> 1);
    splitBig({ ...b, x1: m }, root, subs, roots);
    splitBig({ ...b, x0: m }, root, subs, roots);
  } else if (dy >= dz) {
    const m = b.y0 + (dy >> 1);
    splitBig({ ...b, y1: m }, root, subs, roots);
    splitBig({ ...b, y0: m }, root, subs, roots);
  } else {
    const m = b.z0 + (dz >> 1);
    splitBig({ ...b, z1: m }, root, subs, roots);
    splitBig({ ...b, z0: m }, root, subs, roots);
  }
}

// Maintain the Pareto-minimal covering set incrementally: a point dominated
// component-wise is excluded by whatever cut excludes its dominator, so only
// the staircase of minima matters — and it stays tiny (points accumulate on
// the group's faces), so most insertions bail on the first few comparisons
// instead of growing an unbounded point list.
function insertPt(par: Pt[], x: number, y: number, z: number): void {
  for (let i = 0; i < par.length; i++) {
    const a = par[i];
    if (a[0] <= x && a[1] <= y && a[2] <= z) return; // dominated (or equal)
  }
  for (let i = par.length - 1; i >= 0; i--) {
    const a = par[i];
    if (x <= a[0] && y <= a[1] && z <= a[2]) par.splice(i, 1);
  }
  par.push([x, y, z]);
}

// For one view direction d (unit, pointing at the camera), collect the group's
// nearest covering surface point for every lattice sample of the occluder
// boxes occ[o0..o1): the kept region must exclude each such point, else it
// would cover the sample. Points are floored to whole cells in signed
// coordinates (conservative) and folded into the Pareto set `par`. Samples
// inside an occluder are equivalent to the surface sample where their ray
// exits it, so the lattice can sample boxes solid.
//
// Flush contact is NOT coverage: when the sample's ray runs into group solid
// at (or straddling) the very point where it leaves the sample's own box, that
// surface point is a contact face — a wall standing on a floor slab, a desk
// sitting on the ground — which could never be seen anyway, so the sample
// constrains nothing (counting it would erase every grounded group entirely).
function gatherEntries(
  group: Box3[],
  occ: Box3[],
  occRoot: Box3[], // per sub-box, the original solid (for the own-box exit)
  o0: number,
  o1: number,
  d: Vec,
  sx: Sign,
  sy: Sign,
  sz: Sign,
  par: Pt[],
): void {
  const n = group.length;
  // per-box slab bounds ordered entry-first for this direction (no min/max in
  // the hot test; on a zero component the original order doubles as the
  // inside-span test), reciprocals to trade divisions for multiplies, and the
  // group's AABB for a per-occluder sweep reject
  const bx0 = new Float64Array(n), bx1 = new Float64Array(n);
  const by0 = new Float64Array(n), by1 = new Float64Array(n);
  const bz0 = new Float64Array(n), bz1 = new Float64Array(n);
  let ax0 = Infinity, ax1 = -Infinity, ay0 = Infinity, ay1 = -Infinity;
  let az0 = Infinity, az1 = -Infinity;
  for (let i = 0; i < n; i++) {
    const q = group[i];
    if (d.x >= 0) {
      bx0[i] = q.x0;
      bx1[i] = q.x1;
    } else {
      bx0[i] = q.x1;
      bx1[i] = q.x0;
    }
    if (d.y >= 0) {
      by0[i] = q.y0;
      by1[i] = q.y1;
    } else {
      by0[i] = q.y1;
      by1[i] = q.y0;
    }
    if (d.z >= 0) {
      bz0[i] = q.z0;
      bz1[i] = q.z1;
    } else {
      bz0[i] = q.z1;
      bz1[i] = q.z0;
    }
    if (q.x0 < ax0) ax0 = q.x0;
    if (q.x1 > ax1) ax1 = q.x1;
    if (q.y0 < ay0) ay0 = q.y0;
    if (q.y1 > ay1) ay1 = q.y1;
    if (q.z0 < az0) az0 = q.z0;
    if (q.z1 > az1) az1 = q.z1;
  }
  const rx = d.x !== 0 ? 1 / d.x : 0;
  const ry = d.y !== 0 ? 1 / d.y : 0;
  const rz = d.z !== 0 ? 1 / d.z : 0;
  const xs: number[] = [], ys: number[] = [], zs: number[] = [];
  for (let bi = o0; bi < o1; bi++) {
    const b = occ[bi];
    // sweep reject: no ray from this box toward the camera can reach the group
    if (
      (d.x > 0
        ? ax1 <= b.x0
        : d.x < 0
        ? ax0 >= b.x1
        : ax1 <= b.x0 || ax0 >= b.x1) ||
      (d.y > 0
        ? ay1 <= b.y0
        : d.y < 0
        ? ay0 >= b.y1
        : ay1 <= b.y0 || ay0 >= b.y1) ||
      (d.z > 0
        ? az1 <= b.z0
        : d.z < 0
        ? az0 >= b.z1
        : az1 <= b.z0 || az0 >= b.z1)
    ) continue;
    const r = occRoot[bi];
    axisSamples(b.x0, b.x1, xs);
    axisSamples(b.y0, b.y1, ys);
    axisSamples(b.z0, b.z1, zs);
    for (const ox of xs) {
      for (const oy of ys) {
        for (const oz of zs) {
          // where the ray s + t·d leaves the sample's own solid — group
          // geometry at or before this is contact/embedding, not coverage
          let ex = Infinity;
          if (rx !== 0) ex = ((d.x > 0 ? r.x1 : r.x0) - ox) * rx;
          if (ry !== 0) {
            const e = ((d.y > 0 ? r.y1 : r.y0) - oy) * ry;
            if (e < ex) ex = e;
          }
          if (rz !== 0) {
            const e = ((d.z > 0 ? r.z1 : r.z0) - oz) * rz;
            if (e < ex) ex = e;
          }
          // nearest group entry strictly beyond `ex` (slab ray-box test per
          // group box). On a zero ray component the box is hit only if the
          // sample is strictly inside its span on that axis — sliding along a
          // face is grazing contact, not coverage.
          let best = Infinity, blocked = false;
          for (let i = 0; i < n; i++) {
            let t0 = -Infinity, t1 = Infinity;
            if (rx === 0) {
              if (ox <= bx0[i] || ox >= bx1[i]) continue;
            } else {
              const a = (bx0[i] - ox) * rx, e = (bx1[i] - ox) * rx;
              if (a > t0) t0 = a;
              if (e < t1) t1 = e;
            }
            if (ry === 0) {
              if (oy <= by0[i] || oy >= by1[i]) continue;
            } else {
              const a = (by0[i] - oy) * ry, e = (by1[i] - oy) * ry;
              if (a > t0) t0 = a;
              if (e < t1) t1 = e;
            }
            if (rz === 0) {
              if (oz <= bz0[i] || oz >= bz1[i]) continue;
            } else {
              const a = (bz0[i] - oz) * rz, e = (bz1[i] - oz) * rz;
              if (a > t0) t0 = a;
              if (e < t1) t1 = e;
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
          insertPt(
            par,
            Math.floor((ox + best * d.x) * sx),
            Math.floor((oy + best * d.y) * sy),
            Math.floor((oz + best * d.z) * sz),
          );
        }
      }
    }
  }
}

// valid prefix lengths of `arr` (sorted descending on component c) that end on
// a tie-run boundary — the cut positions worth trying on that axis — strided
// down to MAX_CAND entries (always keeping 0 and the full length)
function prefixLens(arr: Pt[], c: 0 | 1 | 2): number[] {
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

// The cuts for one group from its gathered covering points: reduce them to the
// Pareto-minimal set (a point dominated component-wise is excluded by whatever
// cut excludes its dominator), then sweep candidate x-cuts × z-cuts (the y-cut
// mops up the rest) and keep the combination with the largest kept voxel
// volume. All-Infinity when nothing of the group fronts a visible sample.
function solveCuts(
  group: Box3[],
  pts: Pt[],
  sx: Sign,
  sy: Sign,
  sz: Sign,
): Cut3 {
  const inf: Cut3 = { x: Infinity, y: Infinity, z: Infinity };
  if (!group.length || !pts.length) return inf;
  // Pareto-minimal filter: sorted ascending, an earlier point with ≤ y and ≤ z
  // (x already ≤ by the sort) dominates
  pts.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
  const par: Pt[] = [];
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

// A resumable cut computation for every group of one view sector. The gather
// work is pre-split into units of ≤ CHUNK lattice samples; step() runs units
// until done or `stop()` says the frame budget is spent (checked between
// units), returning true once all units have run — cuts() is then ready. The
// caller keeps the previous cuts up while a job is in flight, so a sector flip
// costs a few small slices instead of one long frame.
export type CutJob = {
  step: (stop: () => boolean) => boolean;
  cuts: () => Cut3[];
};
export function cutJob(
  groups: Box3[][],
  occluders: Box3[],
  dirs: Vec[],
  sx: Sign,
  sy: Sign,
  sz: Sign,
): CutJob {
  const occ: Box3[] = [], occRoot: Box3[] = [];
  for (const b of occluders) splitBig(b, b, occ, occRoot);
  // chunks of consecutive occluder boxes totalling ≤ CHUNK samples each
  const chunks: [number, number][] = [];
  let start = 0, load = 0;
  for (let i = 0; i < occ.length; i++) {
    load += latticeCount(occ[i]);
    if (load >= CHUNK || i === occ.length - 1) {
      chunks.push([start, i + 1]);
      start = i + 1;
      load = 0;
    }
  }
  const units: [number, number, number][] = []; // [group, dir, chunk]
  for (let gi = 0; gi < groups.length; gi++) {
    for (let di = 0; di < dirs.length; di++) {
      for (let ci = 0; ci < chunks.length; ci++) units.push([gi, di, ci]);
    }
  }
  const acc = groups.map(() => [] as Pt[]);
  let next = 0;
  let solved: Cut3[] | null = null;
  return {
    step(stop: () => boolean): boolean {
      while (next < units.length) {
        const [gi, di, ci] = units[next++];
        const [a, b] = chunks[ci];
        gatherEntries(
          groups[gi],
          occ,
          occRoot,
          a,
          b,
          dirs[di],
          sx,
          sy,
          sz,
          acc[gi],
        );
        if (next < units.length && stop()) return false;
      }
      return true;
    },
    cuts(): Cut3[] {
      solved ??= groups.map((g, i) => solveCuts(g, acc[i], sx, sy, sz));
      return solved;
    },
  };
}

// convenience one-shot wrapper (selfcheck uses this)
export function cutCorner(
  group: Box3[],
  occluders: Box3[],
  dirs: Vec[],
  sx: Sign,
  sy: Sign,
  sz: Sign,
): Cut3 {
  const j = cutJob([group], occluders, dirs, sx, sy, sz);
  j.step(() => false);
  return j.cuts()[0];
}
