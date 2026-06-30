// Pure helpers and the transform algebra (a transform is {off,rot}), plus the
// one piece of module state: a monotonic node-id counter (see uid, at the bottom).
// Voxel cells pack into one integer key instead of a "x,y,z" string: 17 bits per
// axis (signed, biased by 2^16) keeps |coord| < 65536 and the packed value below
// 2^51, so a Map<int,int> stays exact and avoids per-cell string alloc/parsing.
import type { Node, Rot, Vec, Xform } from "./types.ts";

const VBIAS = 1 << 16, VSTRIDE = 1 << 17;
export const key = (x: number, y: number, z: number): number =>
  (x + VBIAS) + (y + VBIAS) * VSTRIDE + (z + VBIAS) * VSTRIDE * VSTRIDE;
export const addv = (a: Vec, b: Vec): Vec => ({
  x: a.x + b.x,
  y: a.y + b.y,
  z: a.z + b.z,
});
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
  "#" + (v & 0xffffff).toString(16).padStart(6, "0");

// round half away from zero (symmetric). Math.round rounds half toward +∞, so
// rotation re-centring of an even×odd footprint (half-integer centre delta)
// wouldn't cancel over a full turn — the object would creep across the scene.
export const rndSym = (v: number): number =>
  v < 0 ? -Math.round(-v) : Math.round(v);

// node ids — a single monotonic counter, seeded from storage on load
let _uid = 1;
export const uid = (): string => "n" + (_uid++);
export const peekUid = (): number => _uid;
export const seedUid = (v: number): void => {
  _uid = v;
};
