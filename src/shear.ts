// Arbitrary-angle voxel rotation by the three-shear (Paeth) algorithm. The
// document model only stores 90° Y poses (Rot), so any finer angle — or any
// rotation about a horizontal axis — is baked into the voxels themselves:
// explode the box list to cells, rotate the cell grid, then re-pack into boxes.
//
// Paeth rotation decomposes a rotation by θ into three shears
//   u -= round(v·tan(θ/2));  v += round(u·sin θ);  u -= round(v·tan(θ/2))
// each shifting whole rows/columns by an integer that depends only on the
// perpendicular axis. Every shear is therefore a bijection of the cell grid, so
// the rotation never drops or doubles a voxel and leaves no holes. Shears stay
// accurate only for |θ|<90°, so larger angles peel off exact 90° quarter-turns
// first and shear the rest. Turning about an INTEGER pivot keeps every cell on
// the grid; a shared pivot across many objects makes the whole set turn rigidly
// (relative positions preserved, so no piece newly intersects another).
import type { Box3, Vec } from "./types.ts";
import { key } from "./math.ts";

type Cell = { x: number; y: number; z: number; c: number };
// the two in-plane axis names for a rotation about axis 0=X / 1=Y / 2=Z, ordered
// so one +90° step is (u,v) -> (-v,u) — matching rotY/rotAxis handedness
const PLANE: Record<number, [keyof Vec, keyof Vec]> = {
  0: ["y", "z"],
  1: ["x", "z"],
  2: ["x", "y"],
};

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

// rotate every cell in place about the line parallel to `axis` through the
// integer point (pu,pv) of the rotation plane, by `degrees`
function rotateCells(
  cells: Cell[],
  axis: number,
  degrees: number,
  pu: number,
  pv: number,
): void {
  let deg = ((degrees % 360) + 360) % 360; // 0..359
  if (deg > 180) deg -= 360; // -179..180
  if (deg === 0) return;
  const quarters = Math.round(deg / 90);
  const rem = (deg - quarters * 90) * Math.PI / 180; // remainder in (-45,45]°
  const q = ((quarters % 4) + 4) % 4;
  const t = Math.tan(rem / 2), s = Math.sin(rem);
  const [U, V] = PLANE[axis];
  for (const c of cells) {
    let u = c[U] - pu, v = c[V] - pv; // integer offsets from the pivot
    for (let i = 0; i < q; i++) { // exact 90° turns: (u,v) -> (-v,u)
      const nu = -v, nv = u;
      u = nu;
      v = nv;
    }
    if (rem) { // three shears for the ≤45° remainder (integer shifts, no holes)
      u -= Math.round(v * t);
      v += Math.round(u * s);
      u -= Math.round(v * t);
    }
    c[U] = pu + u;
    c[V] = pv + v;
  }
}

// re-pack a cell set into a small disjoint box list (greedy: grow each seed cell
// along X, then Z, then Y as far as same-colour unused cells allow)
function compact(cells: Cell[]): Box3[] {
  // unused cell key -> colour; a consumed cell is deleted, so one map serves as
  // both the colour lookup and the used set (half the hashing on this hot path)
  const avail = new Map<number, number>();
  for (const c of cells) avail.set(key(c.x, c.y, c.z), c.c);
  const free = (x: number, y: number, z: number, col: number): boolean =>
    avail.get(key(x, y, z)) === col;
  const rowFree = (
    x0: number,
    x1: number,
    y: number,
    z: number,
    col: number,
  ) => {
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
  const seeds = cells.slice().sort((a, b) =>
    a.y - b.y || a.z - b.z || a.x - b.x
  );
  const out: Box3[] = [];
  for (const cell of seeds) {
    const x0 = cell.x, y0 = cell.y, z0 = cell.z, col = cell.c;
    if (!avail.has(key(x0, y0, z0))) continue;
    let x1 = x0 + 1;
    while (free(x1, y0, z0, col)) x1++;
    let z1 = z0 + 1;
    while (rowFree(x0, x1, y0, z1, col)) z1++;
    let y1 = y0 + 1;
    while (slabFree(x0, x1, z0, z1, y1, col)) y1++;
    for (let y = y0; y < y1; y++) {
      for (let z = z0; z < z1; z++) {
        for (let x = x0; x < x1; x++) avail.delete(key(x, y, z));
      }
    }
    out.push({ x0, y0, z0, x1, y1, z1, c: col });
  }
  return out;
}

// Rigidly rotate world-space `boxes` about the axis-parallel line through the
// (rounded) pivot, by `degrees`, then re-express the result in some frame via
// `toLocal` and re-pack into boxes. The caller passes one shared pivot for every
// object in a selection so they all turn as a single rigid unit.
export function rigidRotateWorld(
  boxes: Box3[],
  degrees: number,
  axis: number,
  pu: number,
  pv: number,
  toLocal: (x: number, y: number, z: number) => Vec,
): Box3[] {
  const cells = explode(boxes);
  rotateCells(cells, axis, degrees, Math.round(pu), Math.round(pv));
  for (const c of cells) {
    const l = toLocal(c.x, c.y, c.z);
    c.x = l.x;
    c.y = l.y;
    c.z = l.z;
  }
  return compact(cells);
}
