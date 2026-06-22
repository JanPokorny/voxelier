// Moving the "you are here" cursor through the tree: ascend/exit, select a node
// (enter its parent context), or enter a node (descend into a group or open an
// object for painting). The edit mode is implicit in what you've entered.
import { S } from "./state.ts";
import { findPath } from "./model.ts";
import { rebuild } from "./render.ts";
import { updateChrome } from "./ui.ts";
import { frameView } from "./camera.ts";
import { clearMeasure } from "./measure.ts";
import type { Node, SceneNode } from "./types.ts";

export function ascend(): void {
  if (S.path.length > 1) {
    const c = S.path.pop()!;
    S.context = S.path[S.path.length - 1] as SceneNode;
    S.selection = new Set([c.id]);
    S.editObject = null;
    clearMeasure();
    rebuild();
    updateChrome();
  }
}
export function exitObject(): void {
  const o = S.editObject!;
  S.editObject = null;
  S.selection = new Set([o.id]);
  clearMeasure();
  rebuild();
  updateChrome();
}
export function escapeUp(): void {
  if (S.editObject) exitObject();
  else ascend();
}

export function selectNode(node: Node): void { // select a node from the tree (enters its parent context)
  const p = findPath(node);
  if (!p) return;
  S.path = p.slice(0, -1);
  S.context = S.path[S.path.length - 1] as SceneNode;
  S.selection = new Set([node.id]);
  S.editObject = null;
  rebuild();
  updateChrome();
}
export function isEntered(node: Node): boolean { // is this node the one currently being edited/descended into?
  return node.type === "object"
    ? S.editObject === node
    : (S.context === node && !S.editObject);
}
export function enterNode(node: Node, fit?: boolean): void { // click in tree / dbl-click in canvas: descend or voxel-edit
  const p = findPath(node);
  if (!p) return;
  if (node.type === "scene") {
    S.path = p;
    S.context = node;
    S.selection.clear();
    S.editObject = null;
    S.tool = "add";
  } else {
    S.path = p.slice(0, -1);
    S.context = S.path[S.path.length - 1] as SceneNode;
    S.editObject = node;
    S.selection.clear();
    S.tool = "add";
  }
  clearMeasure();
  rebuild();
  updateChrome();
  if (fit) frameView();
}
