// Full re-pack of a box list: explode to cells, then greedily re-grow disjoint
// boxes from sorted seeds under several axis orders, keeping the fewest-box
// result. Exact on occupancy and colour — only the decomposition changes.
// Cost is O(cell volume), so callers gate by volume (see rebox.ts).
//
// SELF-CONTAINED ON PURPOSE: this function's source is stringified into the
// background worker's blob (rebox.ts), so it must not reference imports or
// module scope — the packed cell key is duplicated from math.ts for that reason.
import type { Box3 } from "./types.ts";

export function repackBoxes(boxes: Box3[]): Box3[] {
  const B = 1 << 16, ST = 1 << 17; // 17-bit-per-axis cell key (see math.ts)
  const key = (x: number, y: number, z: number): number =>
    (x + B) + (y + B) * ST + (z + B) * ST * ST;
  // explode into parallel coordinate/colour arrays + a cell -> colour map
  const cx: number[] = [],
    cy: number[] = [],
    cz: number[] = [],
    cc: number[] = [];
  for (const b of boxes) {
    for (let x = b.x0; x < b.x1; x++) {
      for (let y = b.y0; y < b.y1; y++) {
        for (let z = b.z0; z < b.z1; z++) {
          cx.push(x);
          cy.push(y);
          cz.push(z);
          cc.push(b.c);
        }
      }
    }
  }
  const n = cx.length;
  const colorAt = new Map<number, number>();
  for (let i = 0; i < n; i++) colorAt.set(key(cx[i], cy[i], cz[i]), cc[i]);
  const ax = [cx, cy, cz];
  // One greedy pass: visit seeds sorted against the growth order (major = the
  // last-grown axis), grow each box along perm[0], then perm[1], then perm[2]
  // while every cell of the next slab is an unconsumed cell of the same colour.
  const pack = (perm: number[]): Box3[] => {
    const order = Array.from({ length: n }, (_, i) => i).sort((a, b) =>
      ax[perm[2]][a] - ax[perm[2]][b] || ax[perm[1]][a] - ax[perm[1]][b] ||
      ax[perm[0]][a] - ax[perm[0]][b]
    );
    const avail = new Map(colorAt); // unconsumed cell -> colour (delete on use)
    const p = [0, 0, 0]; // probe scratch
    // is the slab at coord hi[g] on axis g (extent [lo,hi) on the other two
    // axes) entirely free same-colour cells?
    const slabFree = (
      lo: number[],
      hi: number[],
      g: number,
      col: number,
    ): boolean => {
      const u = (g + 1) % 3, v = (g + 2) % 3;
      p[g] = hi[g];
      for (let i = lo[u]; i < hi[u]; i++) {
        p[u] = i;
        for (let j = lo[v]; j < hi[v]; j++) {
          p[v] = j;
          if (avail.get(key(p[0], p[1], p[2])) !== col) return false;
        }
      }
      return true;
    };
    const out: Box3[] = [];
    for (const s of order) {
      const col = avail.get(key(cx[s], cy[s], cz[s]));
      if (col === undefined) continue; // consumed by an earlier box
      const lo = [cx[s], cy[s], cz[s]], hi = [cx[s] + 1, cy[s] + 1, cz[s] + 1];
      for (const g of perm) {
        while (slabFree(lo, hi, g, col)) hi[g]++;
      }
      for (let x = lo[0]; x < hi[0]; x++) {
        for (let y = lo[1]; y < hi[1]; y++) {
          for (let z = lo[2]; z < hi[2]; z++) avail.delete(key(x, y, z));
        }
      }
      out.push({
        x0: lo[0],
        y0: lo[1],
        z0: lo[2],
        x1: hi[0],
        y1: hi[1],
        z1: hi[2],
        c: col,
      });
    }
    return out;
  };
  // more restarts for small solids, fewer once the explosion itself is the cost
  const perms = n > 250_000
    ? [[0, 2, 1], [2, 0, 1]]
    : [[0, 2, 1], [2, 0, 1], [1, 0, 2], [0, 1, 2], [2, 1, 0], [1, 2, 0]];
  let best: Box3[] | null = null;
  for (const perm of perms) {
    const r = pack(perm);
    if (!best || r.length < best.length) best = r;
  }
  return best ?? [];
}
