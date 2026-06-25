// Undo/redo via full-document snapshots. Every committed edit funnels through
// save() (persistence.ts), which calls record() here to push a snapshot of the
// whole document plus the editor's place in it (path, selection, edit target,
// collapsed groups). Ctrl-Z walks back through the snapshots, Ctrl-Shift-Z /
// Ctrl-Y walk forward; making a fresh edit after undoing drops the redo tail.
import { S } from "./state.ts";
import { de, flush, save } from "./persistence.ts";
import type { SerNode } from "./persistence.ts";
import { peekUid, seedUid } from "./math.ts";
import { findById } from "./model.ts";
import { rebuild } from "./render.ts";
import { updateChrome } from "./ui.ts";
import type { Node, ObjectNode, SceneNode } from "./types.ts";

type Snap = {
  rootJSON: string;
  uid: number;
  pathIds: string[];
  selection: string[];
  editId: string | null;
  collapsed: string[];
};

const MAX = 200; // cap on retained snapshots
const stack: Snap[] = [];
let index = -1; // position of the current state within stack
let restoring = false; // true while applying a snapshot, so save() won't re-record

const snapshot = (rootJSON: string): Snap => ({
  rootJSON,
  uid: peekUid(),
  pathIds: S.path.map((n) => n.id),
  selection: [...S.selection],
  editId: S.editObject ? S.editObject.id : null,
  collapsed: [...S.collapsed],
});

// Capture the current document state as a new history entry. The caller passes
// the already-serialised root (shared with the localStorage write) so the tree
// is serialised once per save. No-op while a restore is in flight, and skipped
// when the document is unchanged (so saves that only touch navigation/selection
// don't pile up dead undo steps).
export function record(rootJSON: string): void {
  if (restoring) return;
  const snap = snapshot(rootJSON);
  const prev = stack[index];
  // dedup on the document only: record() is only reached via save() (after a
  // real mutation) or a baseline flush; navigation that changes editId alone
  // never calls save(), and restore() reproduces rootJSON exactly — so the
  // editId is never the deciding difference here.
  if (prev && prev.rootJSON === snap.rootJSON) return;
  stack.length = index + 1; // drop any redo tail
  stack.push(snap);
  if (stack.length > MAX) stack.shift();
  index = stack.length - 1;
}

function restore(snap: Snap): void {
  restoring = true;
  seedUid(snap.uid);
  S.root = de(JSON.parse(snap.rootJSON) as SerNode) as SceneNode;
  S.path = []; // rebuild root..context from saved ids
  let node: Node = S.root;
  for (const id of snap.pathIds) {
    const next: Node | null | undefined = node.id === id
      ? node
      : (node.type === "scene" ? node.children.find((c) => c.id === id) : null);
    if (!next) break;
    node = next;
    S.path.push(node);
  }
  if (!S.path.length) S.path = [S.root];
  S.editObject = snap.editId ? findById(snap.editId) as ObjectNode : null;
  S.selection = new Set(
    snap.selection.filter((id) => S.context.children.some((c) => c.id === id)),
  );
  S.collapsed = new Set(snap.collapsed);
  S.drag = null;
  S.sel3d = null;
  S.painting = false;
  S.lastVox = null;
  rebuild();
  updateChrome();
  save(); // persist; the debounced record() dedups against the unchanged snapshot
  restoring = false;
}

// flush() first so any edits still inside the save-debounce window are recorded
// as the current top of the stack before we step off it.
export function undo(): void {
  flush();
  if (index > 0) restore(stack[--index]);
}
export function redo(): void {
  flush();
  if (index < stack.length - 1) restore(stack[++index]);
}
