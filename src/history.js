// Undo/redo via full-document snapshots. Every committed edit funnels through
// save() (persistence.js), which calls record() here to push a snapshot of the
// whole document plus the editor's place in it (path, selection, edit target,
// collapsed groups). Ctrl-Z walks back through the snapshots, Ctrl-Shift-Z /
// Ctrl-Y walk forward; making a fresh edit after undoing drops the redo tail.
import { S } from './state.js';
import { ser, de, save } from './persistence.js';
import { peekUid, seedUid } from './math.js';
import { findById } from './model.js';
import { rebuild } from './render.js';
import { updateChrome } from './ui.js';

const MAX = 200;          // cap on retained snapshots
const stack = [];
let index = -1;           // position of the current state within stack
let restoring = false;    // true while applying a snapshot, so save() won't re-record

const snapshot = () => ({
  rootJSON: JSON.stringify(ser(S.root)),
  uid: peekUid(),
  pathIds: S.path.map(n => n.id),
  selection: [...S.selection],
  editId: S.editObject ? S.editObject.id : null,
  collapsed: [...S.collapsed],
});

// Capture the current document state as a new history entry. No-op while a
// restore is in flight, and skipped when the document is unchanged (so saves
// that only touch navigation/selection don't pile up dead undo steps).
export function record() {
  if (restoring) return;
  const snap = snapshot();
  const prev = stack[index];
  if (prev && prev.rootJSON === snap.rootJSON && prev.editId === snap.editId) return;
  stack.length = index + 1;             // drop any redo tail
  stack.push(snap);
  if (stack.length > MAX) stack.shift();
  index = stack.length - 1;
}

function restore(snap) {
  restoring = true;
  seedUid(snap.uid);
  S.root = de(JSON.parse(snap.rootJSON));
  S.path = [];                          // rebuild root..context from saved ids
  let node = S.root;
  for (const id of snap.pathIds) {
    const next = node.id === id ? node : (node.type === 'scene' ? node.children.find(c => c.id === id) : null);
    if (!next) break;
    node = next; S.path.push(node);
  }
  if (!S.path.length) S.path = [S.root];
  S.context = S.path[S.path.length - 1];
  S.editObject = snap.editId ? findById(snap.editId) : null;
  S.selection = new Set(snap.selection.filter(id => S.context.children.some(c => c.id === id)));
  S.collapsed = new Set(snap.collapsed);
  S.drag = null; S.painting = false; S.lastVox = null;
  rebuild(); updateChrome();
  save();                               // persist; record() bails (restoring still true)
  restoring = false;
}

export function undo() { if (index > 0) restore(stack[--index]); }
export function redo() { if (index < stack.length - 1) restore(stack[++index]); }
