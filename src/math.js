// Pure, stateless helpers and the transform algebra (a transform is {off,rot}).
// rotY rotates a vector about Y in 90° steps; compose nests Y inside X; invert
// undoes one; pathXform accumulates a root..node path. These are the only pieces
// the runnable selfcheck exercises.
export const key = (x, y, z) => x + ',' + y + ',' + z;
export const parseKey = k => { const a = k.split(','); return { x: +a[0], y: +a[1], z: +a[2] }; };
export const addv = (a, b) => ({ x: a.x + b.x, y: a.y + b.y, z: a.z + b.z });
export function rotY(v, r) { let { x, y, z } = v; r = ((r % 4) + 4) % 4; for (let i = 0; i < r; i++) { const nx = -z, nz = x; x = nx; z = nz; } return { x, y, z }; }
export const xcompose = (X, Y) => ({ rot: (X.rot + Y.rot) & 3, off: addv(rotY(Y.off, X.rot), X.off) });
export const xinvert = T => { const r = (4 - (T.rot & 3)) & 3, o = rotY(T.off, r); return { rot: r, off: { x: -o.x, y: -o.y, z: -o.z } }; };
export const pathXform = p => p.slice(1).reduce((X, n) => xcompose(X, { off: n.pos, rot: n.rot }), { off: { x: 0, y: 0, z: 0 }, rot: 0 });
export const hex = v => '#' + (v >>> 0).toString(16).padStart(6, '0').slice(-6);

// node ids — a single monotonic counter, seeded from storage on load
let _uid = 1;
export const uid = () => 'n' + (_uid++);
export const peekUid = () => _uid;
export const seedUid = v => { _uid = v; };
