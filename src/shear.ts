// Arbitrary-angle voxel rotation about the Y axis by the three-shear (Paeth)
// algorithm. The document model only stores 90° poses (Rot), so a finer angle is
// baked into the voxels themselves: explode the box list to cells, rotate the
// cell grid, then re-pack the result into boxes.
//
// Paeth rotation decomposes a rotation by θ into three shears
//   x -= round(z·tan(θ/2));  z += round(x·sin θ);  x -= round(z·tan(θ/2))
// each shifting whole rows/columns by an integer that depends only on the
// perpendicular axis. Every shear is therefore a bijection of the cell grid, so
// the rotation never drops or doubles a voxel and leaves no holes — unlike a
// direct round-the-coordinates rotation. Shears stay accurate only for |θ|<90°,
// so larger angles peel off exact 90° quarter-turns first and shear the rest.
import { key } from "./math.ts";
import type { Box3 } from "./types.ts";

type Cell = { x: number; y: number; z: number; c: number };

// round half away from zero, so re-centring can't creep over repeated turns
const rndSym = (v: number): number => (v < 0 ? -Math.round(-v) : Math.round(v));

// explode a disjoint box list into individual coloured cells
function explode(boxes: Box3[]): Cell[] {
  const out: Cell[] = [];
  for (const b of boxes) {
    for (let x = b.x0; x < b.x1; x++) {
      for (let y = b.y0; y < b.y1; y++) {
        for (let z = b.z0; z < b.z1; z++) out.push({ x, y, z, c: b.c });
      }
    }
  }
  return out;
}

// horizontal (X/Z) centre of a cell set — the pivot the rotation turns about
function xzCentre(cells: Cell[]): { cx: number; cz: number } {
  let mnx = Infinity, mnz = Infinity, mxx = -Infinity, mxz = -Infinity;
  for (const c of cells) {
    if (c.x < mnx) mnx = c.x;
    if (c.z < mnz) mnz = c.z;
    if (c.x > mxx) mxx = c.x;
    if (c.z > mxz) mxz = c.z;
  }
  return { cx: (mnx + mxx) / 2, cz: (mnz + mxz) / 2 };
}

// q exact 90° turns about the origin: (x,z) -> (-z,x), matching rotY(v,1)
function applyQuarter(cells: Cell[], q: number): void {
  for (const c of cells) {
    for (let i = 0; i < q; i++) {
      const nx = -c.z, nz = c.x;
      c.x = nx;
      c.z = nz;
    }
  }
}

// the three shears for angle θ (radians, |θ| ≤ 45°) about (cx,cz)
function applyShear(cells: Cell[], theta: number, cx: number, cz: number): void {
  const t = Math.tan(theta / 2), s = Math.sin(theta);
  for (const c of cells) {
    let a = c.x - cx, b = c.z - cz;
    a -= Math.round(b * t);
    b += Math.round(a * s);
    a -= Math.round(b * t);
    c.x = Math.round(cx + a); // a,b are integer up to float error; round guards it
    c.z = Math.round(cz + b);
  }
}

// re-pack a cell set into a small disjoint box list (greedy: grow each seed cell
// along X, then Z, then Y as far as same-colour unused cells allow)
function compact(cells: Cell[]): Box3[] {
  const colorAt = new Map<number, number>();
  for (const c of cells) colorAt.set(key(c.x, c.y, c.z), c.c);
  const used = new Set<number>();
  const free = (x: number, y: number, z: number, col: number): boolean => {
    const k = key(x, y, z);
    return !used.has(k) && colorAt.get(k) === col;
  };
  const rowFree = (x0: number, x1: number, y: number, z: number, col: number) => {
    for (let x = x0; x < x1; x++) if (!free(x, y, z, col)) return false;
    return true;
  };
  const slabFree = (
    x0: number,
    x1: number,
    z0: number,
    z1: number,
    y: number,
    col: number,
  ) => {
    for (let z = z0; z < z1; z++) if (!rowFree(x0, x1, y, z, col)) return false;
    return true;
  };
  // seed in a stable order so the decomposition is deterministic
  const seeds = cells.slice().sort((a, b) => a.y - b.y || a.z - b.z || a.x - b.x);
  const out: Box3[] = [];
  for (const cell of seeds) {
    const x0 = cell.x, y0 = cell.y, z0 = cell.z, col = cell.c;
    if (used.has(key(x0, y0, z0))) continue;
    let x1 = x0 + 1;
    while (free(x1, y0, z0, col)) x1++;
    let z1 = z0 + 1;
    while (rowFree(x0, x1, y0, z1, col)) z1++;
    let y1 = y0 + 1;
    while (slabFree(x0, x1, z0, z1, y1, col)) y1++;
    for (let y = y0; y < y1; y++) {
      for (let z = z0; z < z1; z++) {
        for (let x = x0; x < x1; x++) used.add(key(x, y, z));
      }
    }
    out.push({ x0, y0, z0, x1, y1, z1, c: col });
  }
  return out;
}

// Rotate a box list about the Y axis by `degrees`, baking the angle into fresh
// voxels and keeping the result centred on the original's horizontal centre.
export function shearRotateY(boxes: Box3[], degrees: number): Box3[] {
  if (!boxes.length) return [];
  let deg = ((degrees % 360) + 360) % 360; // 0..359
  if (deg > 180) deg -= 360; // -179..180
  if (deg === 0) return boxes.map((b) => ({ ...b }));

  const cells = explode(boxes);
  const before = xzCentre(cells);
  const quarters = Math.round(deg / 90);
  const rem = deg - quarters * 90; // remainder in [-45,45]°
  const q = ((quarters % 4) + 4) % 4;
  if (q) applyQuarter(cells, q);
  if (rem) {
    const m = xzCentre(cells); // shear about the post-quarter centre
    applyShear(cells, rem * Math.PI / 180, m.cx, m.cz);
  }
  // translate so the rotated block stays on the original centre (rotate in place)
  const after = xzCentre(cells);
  const dx = rndSym(before.cx - after.cx), dz = rndSym(before.cz - after.cz);
  if (dx || dz) for (const c of cells) (c.x += dx, c.z += dz);
  return compact(cells);
}
