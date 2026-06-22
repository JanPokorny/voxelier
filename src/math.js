// Pure, stateless helpers and the transform algebra (a transform is {off,rot}).
// rotY rotates a vector about Y in 90° steps; compose nests Y inside X; invert
// undoes one; pathXform accumulates a root..node path. These are the only pieces
// the runnable selfcheck exercises.
// Voxel cells pack into one integer key instead of a "x,y,z" string: 17 bits per
// axis (signed, biased by 2^16) keeps |coord| < 65536 and the packed value below
// 2^51, so a Map<int,int> stays exact and avoids per-cell string alloc/parsing.
const VBIAS = 1 << 16, VSTRIDE = 1 << 17;
export const key = (x, y, z) =>
  (x + VBIAS) + (y + VBIAS) * VSTRIDE + (z + VBIAS) * VSTRIDE * VSTRIDE;
export const parseKey = (k) => {
  const xb = k % VSTRIDE;
  k = (k - xb) / VSTRIDE;
  const yb = k % VSTRIDE;
  k = (k - yb) / VSTRIDE;
  return { x: xb - VBIAS, y: yb - VBIAS, z: k - VBIAS };
};
export const addv = (a, b) => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });
export function rotY(v, r) {
  let { x, y, z } = v;
  r = ((r % 4) + 4) % 4;
  for (let i = 0; i < r; i++) {
    const nx = -z, nz = x;
    x = nx;
    z = nz;
  }
  return { x, y, z };
}
export const xcompose = (X, Y) => ({
  rot: (X.rot + Y.rot) & 3,
  off: addv(rotY(Y.off, X.rot), X.off),
});
export const xinvert = (T) => {
  const r = (4 - (T.rot & 3)) & 3, o = rotY(T.off, r);
  return { rot: r, off: { x: -o.x, y: -o.y, z: -o.z } };
};
export const pathXform = (p) =>
  p.slice(1).reduce((X, n) => xcompose(X, { off: n.pos, rot: n.rot }), {
    off: { x: 0, y: 0, z: 0 },
    rot: 0,
  });
export const hex = (v) =>
  "#" + (v >>> 0).toString(16).padStart(6, "0").slice(-6);

// node ids — a single monotonic counter, seeded from storage on load
let _uid = 1;
export const uid = () => "n" + (_uid++);
export const peekUid = () => _uid;
export const seedUid = (v) => {
  _uid = v;
};
