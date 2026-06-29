// Moving the "you are here" cursor through the tree: ascend/exit, select a node
// (enter its parent context), or enter a node (descend into a group or open an
// object for painting). The edit mode is implicit in what you've entered.
import { S } from "./state.ts";
import { findPath } from "./model.ts";
import { rebuild, selectionRender } from "./render.ts";
import { updateChrome } from "./ui.ts";
import { frameView } from "./camera.ts";
import { clearMeasure } from "./measure.ts";
import { clearSelection } from "./select.ts";
import type { Node, ObjectNode } from "./types.ts";

// Leave edit mode with exactly `id` selected in the current context — the shared
// tail of ascend/exitObject/selectNode. The rendered scene depends only on the
// context (path tail) and the edit object; selection is a separate overlay. So
// when neither changed (a plain re-select within the same context) we skip the
// AO-meshing rebuild via selectionRender, which still re-meshes when a glass
// object's selected-state flips (it draws solid while selected). Callers snapshot
// the context and edit object before mutating S.path.
const selectOnly = (
  id: string,
  prevCtx: Node,
  prevEdit: ObjectNode | null,
): void => {
  const prevSel = new Set(S.selection);
  clearSelection(); // stamp/drop any voxel selection before leaving the object
  S.selection = new Set([id]);
  S.editObject = null;
  clearMeasure();
  if (S.context !== prevCtx || prevEdit) rebuild();
  else selectionRender(prevSel);
  updateChrome();
};

export function ascend(): void {
  if (S.path.length <= 1) return;
  const prevCtx = S.context, prevEdit = S.editObject;
  selectOnly(S.path.pop()!.id, prevCtx, prevEdit);
}
export function exitObject(): void {
  selectOnly(S.editObject!.id, S.context, S.editObject);
}
export function escapeUp(): void {
  if (S.editObject) exitObject();
  else ascend();
}

export function selectNode(node: Node): void { // select a node from the tree (enters its parent context)
  const p = findPath(node);
  if (!p) return;
  const prevCtx = S.context, prevEdit = S.editObject;
  S.path = p.slice(0, -1);
  selectOnly(node.id, prevCtx, prevEdit);
}
export function enterNode(node: Node, fit?: boolean): void { // dbl-click in tree/canvas: descend or voxel-edit
  const p = findPath(node);
  if (!p) return;
  clearSelection(); // commit any voxel selection in the object we're leaving
  if (node.type === "scene") {
    S.path = p;
    S.editObject = null;
  } else {
    S.path = p.slice(0, -1);
    S.editObject = node;
  }
  S.selection.clear();
  S.tool = "view"; // open objects in the non-destructive View (pan) tool
  clearMeasure();
  rebuild(); // entering always changes the context or edit object -> re-mesh
  updateChrome();
  if (fit) frameView();
}
