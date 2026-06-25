// Moving the "you are here" cursor through the tree: ascend/exit, select a node
// (enter its parent context), or enter a node (descend into a group or open an
// object for painting). The edit mode is implicit in what you've entered.
import { S } from "./state.ts";
import { findPath } from "./model.ts";
import { rebuild } from "./render.ts";
import { updateChrome } from "./ui.ts";
import { frameView } from "./camera.ts";
import { clearMeasure } from "./measure.ts";
import type { Node } from "./types.ts";

// re-mesh + refresh the chrome after a navigation change (no persistence:
// moving the cursor doesn't alter the document)
const refresh = (): void => {
  rebuild();
  updateChrome();
};
// leave edit mode with exactly `id` selected in the current context — the shared
// tail of ascend/exitObject/selectNode
const selectOnly = (id: string): void => {
  S.selection = new Set([id]);
  S.editObject = null;
  clearMeasure();
  refresh();
};

export function ascend(): void {
  if (S.path.length > 1) selectOnly(S.path.pop()!.id);
}
export function exitObject(): void {
  selectOnly(S.editObject!.id);
}
export function escapeUp(): void {
  if (S.editObject) exitObject();
  else ascend();
}

export function selectNode(node: Node): void { // select a node from the tree (enters its parent context)
  const p = findPath(node);
  if (!p) return;
  S.path = p.slice(0, -1);
  selectOnly(node.id);
}
export function enterNode(node: Node, fit?: boolean): void { // dbl-click in tree/canvas: descend or voxel-edit
  const p = findPath(node);
  if (!p) return;
  if (node.type === "scene") {
    S.path = p;
    S.editObject = null;
  } else {
    S.path = p.slice(0, -1);
    S.editObject = node;
  }
  S.selection.clear();
  S.tool = "add";
  clearMeasure();
  refresh();
  if (fit) frameView();
}
