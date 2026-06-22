// localStorage persistence. ser/de are pure (de)serialisers for a node tree;
// save is debounced; load restores the root and the id counter.
import { S } from './state.js';
import { peekUid, seedUid } from './math.js';
import { record } from './history.js';

const LS = 'voxelier-v7';

export function ser(n) {
  const b = { id: n.id, nm: n.name || '', p: n.pos, r: n.rot, vs: n.vis || 'visible' };
  return n.type === 'object' ? { t: 'o', ...b, v: [...n.voxels] } : { t: 's', ...b, c: n.children.map(ser) };
}
export function de(d) {
  const b = { id: d.id, name: d.nm || '', pos: d.p, rot: d.r, vis: d.vs || 'visible' };
  return d.t === 'o' ? { type: 'object', ...b, voxels: new Map(d.v) } : { type: 'scene', ...b, children: d.c.map(de) };
}
export function save() {
  record();                       // synchronous undo snapshot (no-op during restore)
  clearTimeout(S.saveT);
  S.saveT = setTimeout(() => {
    try { localStorage.setItem(LS, JSON.stringify({ uid: peekUid(), root: ser(S.root) })); } catch (_) { /* quota / private mode */ }
  }, 250);
}
export function load() {
  try {
    const d = JSON.parse(localStorage.getItem(LS)); if (!d || !d.root) return false;
    seedUid(d.uid || 1); S.root = de(d.root); return true;
  } catch (_) { return false; }
}
