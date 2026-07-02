// Full re-pack of a box list into (usually) fewer disjoint boxes, boxes -> boxes
// with no per-voxel explosion. Coordinate compression makes that exact: collect
// the distinct face planes per axis; between adjacent planes occupancy and
// colour are constant, so the solid is a small grid of "super-cells" and any
// greedy growth over unit cells stops exactly on those planes anyway — greedy
// over super-cells yields the identical decomposition at O(planes³) cost,
// independent of world size (a 100000-wide slab is as cheap as a 10-wide one).
// Several axis orders are tried and the fewest-box result wins. Exact on
// occupancy and colour — only the decomposition changes.
//
// Runs synchronously on the main thread at editor close (rebox.ts), so cost is
// kept bounded: pathologically fragmented solids get fewer greedy restarts, and
// past a grid-size cap the list is returned unchanged.
import type { Box3 } from "./types.ts";

export function repackBoxes(boxes: Box3[]): Box3[] {
  if (!boxes.length) return [];
  // sorted unique plane coordinates per axis; every box face lies on one
  const raw: number[][] = [[], [], []];
  for (const b of boxes) {
    raw[0].push(b.x0, b.x1);
    raw[1].push(b.y0, b.y1);
    raw[2].push(b.z0, b.z1);
  }
  const planes = raw.map((a) => [...new Set(a)].sort((p, q) => p - q));
  const dims = planes.map((a) => a.length - 1);
  const [nx, ny, nz] = dims;
  if (nx * ny * nz > 8_000_000) return boxes; // pathological — bail unchanged
  // plane coordinate -> interval index per axis (box faces are exact members)
  const idx = planes.map((a) => new Map(a.map((v, i) => [v, i])));
  const at = (i: number, j: number, k: number): number => (i * ny + j) * nz + k;
  // super-cell colour+1 (0 = empty); constant per super-cell by construction
  const grid = new Int32Array(nx * ny * nz);
  for (const b of boxes) {
    const x1 = idx[0].get(b.x1)!, y1 = idx[1].get(b.y1)!, z1 = idx[2].get(b.z1)!;
    for (let i = idx[0].get(b.x0)!; i < x1; i++) {
      for (let j = idx[1].get(b.y0)!; j < y1; j++) {
        for (let k = idx[2].get(b.z0)!; k < z1; k++) grid[at(i, j, k)] = b.c + 1;
      }
    }
  }
  // solid super-cells, with decoded coords for the per-order seed sorts
  const seeds: number[] = [], si: number[] = [], sj: number[] = [], sk: number[] = [];
  for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
      for (let k = 0; k < nz; k++) {
        if (grid[at(i, j, k)]) {
          seeds.push(at(i, j, k));
          si.push(i);
          sj.push(j);
          sk.push(k);
        }
      }
    }
  }
  const sc = [si, sj, sk];
  const used = new Uint8Array(nx * ny * nz);
  // One greedy pass: visit seeds sorted against the growth order (major = the
  // last-grown axis; interval order == real-coordinate order), grow each box
  // along perm[0], then perm[1], then perm[2] while every super-cell of the
  // next slab is unconsumed and the same colour.
  const pack = (perm: number[]): Box3[] => {
    used.fill(0);
    const order = Array.from({ length: seeds.length }, (_, i) => i).sort((a, b) =>
      sc[perm[2]][a] - sc[perm[2]][b] || sc[perm[1]][a] - sc[perm[1]][b] ||
      sc[perm[0]][a] - sc[perm[0]][b]
    );
    const p = [0, 0, 0]; // probe scratch
    // is the slab at interval hi[g] on axis g (extent [lo,hi) on the other two
    // axes) entirely unconsumed same-colour super-cells?
    const slabFree = (lo: number[], hi: number[], g: number, col: number): boolean => {
      if (hi[g] >= dims[g]) return false;
      const u = (g + 1) % 3, v = (g + 2) % 3;
      p[g] = hi[g];
      for (let i = lo[u]; i < hi[u]; i++) {
        p[u] = i;
        for (let j = lo[v]; j < hi[v]; j++) {
          p[v] = j;
          const t = at(p[0], p[1], p[2]);
          if (used[t] || grid[t] !== col) return false;
        }
      }
      return true;
    };
    const out: Box3[] = [];
    for (const s of order) {
      const t = seeds[s];
      if (used[t]) continue; // consumed by an earlier box
      const col = grid[t];
      const lo = [si[s], sj[s], sk[s]], hi = [si[s] + 1, sj[s] + 1, sk[s] + 1];
      for (const g of perm) {
        while (slabFree(lo, hi, g, col)) hi[g]++;
      }
      for (let i = lo[0]; i < hi[0]; i++) {
        for (let j = lo[1]; j < hi[1]; j++) {
          for (let k = lo[2]; k < hi[2]; k++) used[at(i, j, k)] = 1;
        }
      }
      out.push({
        x0: planes[0][lo[0]],
        y0: planes[1][lo[1]],
        z0: planes[2][lo[2]],
        x1: planes[0][hi[0]],
        y1: planes[1][hi[1]],
        z1: planes[2][hi[2]],
        c: col - 1,
      });
    }
    return out;
  };
  // full restart set for normal content; on pathologically fragmented solids
  // (very many super-cells) restarts stop paying for themselves — keep two so
  // the synchronous call stays well under a frame's worth of jank
  const perms = seeds.length > 65_536
    ? [[0, 2, 1], [2, 0, 1]]
    : [[0, 2, 1], [2, 0, 1], [1, 0, 2], [0, 1, 2], [2, 1, 0], [1, 2, 0]];
  let best: Box3[] | null = null;
  for (const perm of perms) {
    const r = pack(perm);
    if (!best || r.length < best.length) best = r;
  }
  return best!;
}
