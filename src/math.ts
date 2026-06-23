// Pure, stateless helpers and the transform algebra (a transform is {off,rot}).
// rotY rotates a vector about Y in 90° steps; compose nests Y inside X; invert
// undoes one; pathXform accumulates a root..node path. These are the only pieces
// the runnable selfcheck exercises.
// Voxel cells pack into one integer key instead of a "x,y,z" string: 17 bits per
// axis (signed, biased by 2^16) keeps |coord| < 65536 and the packed value below
// 2^51, so a Map<int,int> stays exact and avoids per-cell string alloc/parsing.
import type { Node, Rot, Vec, Xform } from "./types.ts";

const VBIAS = 1 << 16, VSTRIDE = 1 << 17;
export const key = (x: number, y: number, z: number): number =>
  (x + VBIAS) + (y + VBIAS) * VSTRIDE + (z + VBIAS) * VSTRIDE * VSTRIDE;
export const parseKey = (k: number): Vec => {
  const xb = k % VSTRIDE;
  k = (k - xb) / VSTRIDE;
  const yb = k % VSTRIDE;
  k = (k - yb) / VSTRIDE;
  return { x: xb - VBIAS, y: yb - VBIAS, z: k - VBIAS };
};
export const addv = (a: Vec, b: Vec): Vec => ({
  x: a.x + b.x,
  y: a.y + b.y,
  z: a.z + b.z,
});
// Fused parseKey -> rotY -> +off: world coords of a packed voxel key under a
// transform, in a single allocation (the gather loops run this per voxel).
export const keyToWorld = (k: number, rot: Rot, off: Vec): Vec => {
  const xb = k % VSTRIDE;
  k = (k - xb) / VSTRIDE;
  const yb = k % VSTRIDE;
  const x = xb - VBIAS, y = off.y + yb - VBIAS, z = (k - yb) / VSTRIDE - VBIAS;
  switch (rot & 3) {
    case 1:
      return { x: off.x - z, y, z: off.z + x };
    case 2:
      return { x: off.x - x, y, z: off.z - z };
    case 3:
      return { x: off.x + z, y, z: off.z - x };
    default:
      return { x: off.x + x, y, z: off.z + z };
  }
};
export function rotY(v: Vec, r: Rot): Vec {
  const { x, y, z } = v;
  switch (r & 3) { // r & 3 normalises negatives too (-1 & 3 === 3)
    case 1:
      return { x: -z, y, z: x };
    case 2:
      return { x: -x, y, z: -z };
    case 3:
      return { x: z, y, z: -x };
    default:
      return { x, y, z };
  }
}
export const xcompose = (X: Xform, Y: Xform): Xform => ({
  rot: (X.rot + Y.rot) & 3,
  off: addv(rotY(Y.off, X.rot), X.off),
});
export const xinvert = (T: Xform): Xform => {
  const r = (4 - (T.rot & 3)) & 3, o = rotY(T.off, r);
  return { rot: r, off: { x: -o.x, y: -o.y, z: -o.z } };
};
export const pathXform = (p: Node[]): Xform =>
  p.slice(1).reduce<Xform>((X, n) => xcompose(X, { off: n.pos, rot: n.rot }), {
    off: { x: 0, y: 0, z: 0 },
    rot: 0,
  });
export const hex = (v: number): string =>
  "#" + (v >>> 0).toString(16).padStart(6, "0").slice(-6);

// node ids — a single monotonic counter, seeded from storage on load
let _uid = 1;
export const uid = (): string => "n" + (_uid++);
export const peekUid = (): number => _uid;
export const seedUid = (v: number): void => {
  _uid = v;
};
