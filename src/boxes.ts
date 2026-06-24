// Box algebra: an object's shape is a set of disjoint axis-aligned colour boxes
// (half-open cell ranges). Editing is constructive — add/erase/paint subtract
// the target region from overlapping boxes (≤6 fragments each) and optionally
// re-add it. A grid index answers point queries fast. The renderer meshes box
// faces directly (see render.ts).
import { rotY } from "./math.ts";
import type { Box, Box3, Region, Rot, Vec } from "./types.ts";

export const region = (
  x0: number,
  y0: number,
  z0: number,
  x1: number,
  y1: number,
  z1: number,
  c: number,
): Box3 => ({ x0, y0, z0, x1, y1, z1, c });

// Is cell (x,y,z) inside box b? (half-open [x0,x1) etc.)
const contains = (b: Box3, x: number, y: number, z: number): boolean =>
  x >= b.x0 && x < b.x1 && y >= b.y0 && y < b.y1 && z >= b.z0 && z < b.z1;

// b minus r, as up to six disjoint fragments that keep b's colour.
function subtract(b: Box3, r: Region, out: Box3[]): void {
  const ix0 = Math.max(b.x0, r.x0),
    iy0 = Math.max(b.y0, r.y0),
    iz0 = Math.max(b.z0, r.z0);
  const ix1 = Math.min(b.x1, r.x1),
    iy1 = Math.min(b.y1, r.y1),
    iz1 = Math.min(b.z1, r.z1);
  if (ix0 >= ix1 || iy0 >= iy1 || iz0 >= iz1) { // no real overlap
    out.push(b);
    return;
  }
  const c = b.c;
  if (b.x0 < ix0) out.push({ ...b, x1: ix0 });
  if (ix1 < b.x1) out.push({ ...b, x0: ix1 });
  if (b.y0 < iy0) {
    out.push({ x0: ix0, y0: b.y0, z0: b.z0, x1: ix1, y1: iy0, z1: b.z1, c });
  }
  if (iy1 < b.y1) {
    out.push({ x0: ix0, y0: iy1, z0: b.z0, x1: ix1, y1: b.y1, z1: b.z1, c });
  }
  if (b.z0 < iz0) {
    out.push({ x0: ix0, y0: iy0, z0: b.z0, x1: ix1, y1: iy1, z1: iz0, c });
  }
  if (iz1 < b.z1) {
    out.push({ x0: ix0, y0: iy0, z0: iz1, x1: ix1, y1: iy1, z1: b.z1, c });
  }
}

// Carve region `r` out of every box. Returns a fresh, still-disjoint box list.
export function eraseBox(boxes: Box3[], r: Region): Box3[] {
  const out: Box3[] = [];
  for (const b of boxes) subtract(b, r, out);
  return out;
}
// Carve `r` out, then lay the region back on top with colour `c`.
export function addBox(boxes: Box3[], r: Region, c: number): Box3[] {
  const out = eraseBox(boxes, r);
  out.push({ ...r, c });
  return out;
}
// Flood-fill: recolour the connected (face-adjacent) run of same-colour cells
// containing (x,y,z) to colour `c`. Every box is a solid single-colour cuboid,
// so a box is wholly inside or outside the region — we flood at the box level
// (same-colour boxes that share a face). Returns a fresh box list, or null when
// nothing changes: an empty seed cell, or a region already colour `c`.
export function fillBox(
  boxes: Box3[],
  x: number,
  y: number,
  z: number,
  c: number,
): Box3[] | null {
  let start = -1;
  for (let i = 0; i < boxes.length; i++) {
    if (contains(boxes[i], x, y, z)) {
      start = i;
      break;
    }
  }
  if (start === -1) return null; // seed cell is empty
  const orig = boxes[start].c;
  if (orig === c) return null; // region already this colour
  // two boxes share a face iff they overlap (open) on two axes and touch on the third
  const touch = (a: Box3, b: Box3): boolean => {
    const ox = a.x0 < b.x1 && b.x0 < a.x1,
      oy = a.y0 < b.y1 && b.y0 < a.y1,
      oz = a.z0 < b.z1 && b.z0 < a.z1;
    return (oy && oz && (a.x1 === b.x0 || b.x1 === a.x0)) ||
      (ox && oz && (a.y1 === b.y0 || b.y1 === a.y0)) ||
      (ox && oy && (a.z1 === b.z0 || b.z1 === a.z0));
  };
  const comp = new Set<number>([start]);
  const stack = [start];
  while (stack.length) {
    const a = boxes[stack.pop()!];
    for (let j = 0; j < boxes.length; j++) {
      if (!comp.has(j) && boxes[j].c === orig && touch(a, boxes[j])) {
        comp.add(j);
        stack.push(j);
      }
    }
  }
  return boxes.map((b, i) => comp.has(i) ? { ...b, c } : b);
}

export function colorCounts(boxes: Box3[], into: Map<number, number>): void {
  for (const b of boxes) {
    const v = (b.x1 - b.x0) * (b.y1 - b.y0) * (b.z1 - b.z0);
    into.set(b.c, (into.get(b.c) || 0) + v);
  }
}
// world AABB of a box list, grown into `box` (min inclusive, max exclusive)
export function growBounds(boxes: Box3[], box: Box): void {
  for (const b of boxes) {
    if (b.x0 < box.min.x) box.min.x = b.x0;
    if (b.y0 < box.min.y) box.min.y = b.y0;
    if (b.z0 < box.min.z) box.min.z = b.z0;
    if (b.x1 > box.max.x) box.max.x = b.x1;
    if (b.y1 > box.max.y) box.max.y = b.y1;
    if (b.z1 > box.max.z) box.max.z = b.z1;
  }
}

// Map a box into world space under a 90° Y-rotation + translation. 90° turns map
// axis-aligned boxes to axis-aligned boxes, so we rotate the two corner cells and
// re-derive min/max.
export function worldBox(b: Box3, rot: Rot, off: Vec): Box3 {
  const a = rotY({ x: b.x0, y: b.y0, z: b.z0 }, rot);
  const d = rotY({ x: b.x1 - 1, y: b.y1 - 1, z: b.z1 - 1 }, rot);
  return {
    x0: Math.min(a.x, d.x) + off.x,
    y0: Math.min(a.y, d.y) + off.y,
    z0: Math.min(a.z, d.z) + off.z,
    x1: Math.max(a.x, d.x) + off.x + 1,
    y1: Math.max(a.y, d.y) + off.y + 1,
    z1: Math.max(a.z, d.z) + off.z + 1,
    c: b.c,
  };
}

// Uniform-grid point index over a box list: a cell maps to the boxes touching it,
// so has() tests only a handful of boxes regardless of total count.
const GC = 16;
const gi = Math.floor;
export type BoxIndex = (x: number, y: number, z: number) => boolean;
export function buildIndex(boxes: Box3[]): BoxIndex {
  if (!boxes.length) return () => false;
  let mnx = Infinity,
    mny = Infinity,
    mnz = Infinity,
    mxx = -Infinity,
    mxy = -Infinity,
    mxz = -Infinity;
  for (const b of boxes) {
    if (b.x0 < mnx) mnx = b.x0;
    if (b.y0 < mny) mny = b.y0;
    if (b.z0 < mnz) mnz = b.z0;
    if (b.x1 > mxx) mxx = b.x1;
    if (b.y1 > mxy) mxy = b.y1;
    if (b.z1 > mxz) mxz = b.z1;
  }
  const gx0 = gi(mnx / GC), gy0 = gi(mny / GC), gz0 = gi(mnz / GC);
  const nx = gi((mxx - 1) / GC) - gx0 + 1,
    ny = gi((mxy - 1) / GC) - gy0 + 1,
    nz = gi((mxz - 1) / GC) - gz0 + 1;
  const grid: Box3[][] = Array.from({ length: nx * ny * nz }, () => []);
  const at = (gx: number, gy: number, gz: number) =>
    ((gx - gx0) * ny + (gy - gy0)) * nz + (gz - gz0);
  for (const b of boxes) {
    for (let gx = gi(b.x0 / GC); gx <= gi((b.x1 - 1) / GC); gx++) {
      for (let gy = gi(b.y0 / GC); gy <= gi((b.y1 - 1) / GC); gy++) {
        for (let gz = gi(b.z0 / GC); gz <= gi((b.z1 - 1) / GC); gz++) {
          grid[at(gx, gy, gz)].push(b);
        }
      }
    }
  }
  return (x, y, z) => {
    const gx = gi(x / GC), gy = gi(y / GC), gz = gi(z / GC);
    if (gx < gx0 || gy < gy0 || gz < gz0) return false;
    if (gx - gx0 >= nx || gy - gy0 >= ny || gz - gz0 >= nz) return false;
    for (const b of grid[at(gx, gy, gz)]) {
      if (contains(b, x, y, z)) return true;
    }
    return false;
  };
}
export const boxesHas = (
  boxes: Box3[],
  x: number,
  y: number,
  z: number,
): boolean => boxes.some((b) => contains(b, x, y, z));

// Do any two boxes from the two lists overlap (selection shifted by d)?
export const boxesOverlap = (
  a: Box3[],
  b: Box3[],
  dx: number,
  dy: number,
  dz: number,
): boolean =>
  a.some((p) =>
    b.some((q) =>
      p.x0 + dx < q.x1 && q.x0 < p.x1 + dx &&
      p.y0 + dy < q.y1 && q.y0 < p.y1 + dy &&
      p.z0 + dz < q.z1 && q.z0 < p.z1 + dz
    )
  );
