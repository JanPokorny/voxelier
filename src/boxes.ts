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
export const contains = (b: Box3, x: number, y: number, z: number): boolean =>
  x >= b.x0 && x < b.x1 && y >= b.y0 && y < b.y1 && z >= b.z0 && z < b.z1;

// b translated by (dx,dy,dz), keeping its colour
export const shiftBox = (
  b: Box3,
  dx: number,
  dy: number,
  dz: number,
): Box3 => ({
  x0: b.x0 + dx,
  y0: b.y0 + dy,
  z0: b.z0 + dz,
  x1: b.x1 + dx,
  y1: b.y1 + dy,
  z1: b.z1 + dz,
  c: b.c,
});

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
// Grow `nb` by absorbing boxes that share its colour and an exactly matching
// face (equal extents on the other two axes, touching on the third), rescanning
// after every merge since the grown box may now match more. This undoes
// subtract()'s fragmentation for the common cases as it happens: erasing and
// re-adding a cell of a large box heals it back into one box instead of leaving
// the six carve fragments, and row-by-row builds coalesce into slabs.
function absorb(out: Box3[], nb: Box3): void {
  for (let i = 0; i < out.length;) {
    const q = out[i];
    if (q.c !== nb.c) {
      i++;
      continue;
    }
    const ey = q.y0 === nb.y0 && q.y1 === nb.y1,
      ez = q.z0 === nb.z0 && q.z1 === nb.z1,
      ex = q.x0 === nb.x0 && q.x1 === nb.x1;
    if (ey && ez && (q.x1 === nb.x0 || nb.x1 === q.x0)) {
      nb.x0 = Math.min(nb.x0, q.x0);
      nb.x1 = Math.max(nb.x1, q.x1);
    } else if (ex && ez && (q.y1 === nb.y0 || nb.y1 === q.y0)) {
      nb.y0 = Math.min(nb.y0, q.y0);
      nb.y1 = Math.max(nb.y1, q.y1);
    } else if (ex && ey && (q.z1 === nb.z0 || nb.z1 === q.z0)) {
      nb.z0 = Math.min(nb.z0, q.z0);
      nb.z1 = Math.max(nb.z1, q.z1);
    } else {
      i++;
      continue;
    }
    out.splice(i, 1);
    i = 0;
  }
  out.push(nb);
}
// Carve `r` out, then lay the region back on top with colour `c`, merging it
// with exactly-abutting same-colour boxes (see absorb).
export function addBox(boxes: Box3[], r: Region, c: number): Box3[] {
  const out = eraseBox(boxes, r);
  absorb(out, { ...r, c });
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

// Intersect every box with region `r`, keeping colour — the part of a box list
// that lies inside `r`. Used to capture a voxel selection's content.
export function clipBoxes(boxes: Box3[], r: Region): Box3[] {
  const out: Box3[] = [];
  for (const b of boxes) {
    const x0 = Math.max(b.x0, r.x0),
      y0 = Math.max(b.y0, r.y0),
      z0 = Math.max(b.z0, r.z0);
    const x1 = Math.min(b.x1, r.x1),
      y1 = Math.min(b.y1, r.y1),
      z1 = Math.min(b.z1, r.z1);
    if (x0 < x1 && y0 < y1 && z0 < z1) {
      out.push({ x0, y0, z0, x1, y1, z1, c: b.c });
    }
  }
  return out;
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
const gc = (v: number): number => Math.floor(v / GC); // cell coord -> grid cell
export function buildIndex(
  boxes: Box3[],
): (x: number, y: number, z: number) => boolean {
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
  const gx0 = gc(mnx), gy0 = gc(mny), gz0 = gc(mnz);
  const nx = gc(mxx - 1) - gx0 + 1,
    ny = gc(mxy - 1) - gy0 + 1,
    nz = gc(mxz - 1) - gz0 + 1;
  const grid: Box3[][] = Array.from({ length: nx * ny * nz }, () => []);
  const at = (gx: number, gy: number, gz: number) =>
    ((gx - gx0) * ny + (gy - gy0)) * nz + (gz - gz0);
  for (const b of boxes) {
    for (let gx = gc(b.x0); gx <= gc(b.x1 - 1); gx++) {
      for (let gy = gc(b.y0); gy <= gc(b.y1 - 1); gy++) {
        for (let gz = gc(b.z0); gz <= gc(b.z1 - 1); gz++) {
          grid[at(gx, gy, gz)].push(b);
        }
      }
    }
  }
  return (x, y, z) => {
    const gx = gc(x), gy = gc(y), gz = gc(z);
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

// Do any two boxes from the two lists overlap (list `a` shifted by d)? Runs on
// every collision probe of a move/box drag, so gate the pairwise test behind
// `a`'s combined AABB: O(n + m) when clear (the common case) instead of O(n·m).
export function boxesOverlap(
  a: Box3[],
  b: Box3[],
  dx: number,
  dy: number,
  dz: number,
): boolean {
  if (!a.length || !b.length) return false;
  const bb = {
    min: { x: 1e9, y: 1e9, z: 1e9 },
    max: { x: -1e9, y: -1e9, z: -1e9 },
  };
  growBounds(a, bb);
  const x0 = bb.min.x + dx, y0 = bb.min.y + dy, z0 = bb.min.z + dz;
  const x1 = bb.max.x + dx, y1 = bb.max.y + dy, z1 = bb.max.z + dz;
  for (const q of b) {
    if (
      x0 < q.x1 && q.x0 < x1 && y0 < q.y1 && q.y0 < y1 &&
      z0 < q.z1 && q.z0 < z1 &&
      a.some((p) =>
        p.x0 + dx < q.x1 && q.x0 < p.x1 + dx &&
        p.y0 + dy < q.y1 && q.y0 < p.y1 + dy &&
        p.z0 + dz < q.z1 && q.z0 < p.z1 + dz
      )
    ) return true;
  }
  return false;
}
