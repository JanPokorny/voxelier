// Editing commands invoked from the tree menu, keyboard and pointer: visibility,
// rename, create/delete/duplicate, clipboard, reparent/group, rotate and nudge.
import { S } from "./state.ts";
import { addv, rotY, xcompose, xinvert } from "./math.ts";
import {
  childById,
  clone,
  contextXform,
  emptyBox,
  isDescendant,
  newObject,
  newScene,
  nodeBox,
  parentOf,
  VIS_CYCLE,
  worldXform,
} from "./model.ts";
import { goal } from "./scene-env.ts";
import { rebuild } from "./render.ts";
import { updateChrome } from "./ui.ts";
import { enterNode, selectNode } from "./navigation.ts";
import { save } from "./persistence.ts";
import type { Node, SceneNode } from "./types.ts";

export function cycleVis(node: Node): void {
  node.vis = VIS_CYCLE[node.vis || "visible"];
  rebuild();
  updateChrome();
  save();
}
export function renameNode(node: Node): void {
  const n = prompt("Name", node.name || "");
  if (n != null) {
    node.name = n.trim();
    updateChrome();
    save();
  }
}

// selected context children, resolved to live nodes (dropping stale ids)
const selectedNodes = (): Node[] =>
  [...S.selection].map((id) => childById(id)).filter((n): n is Node => !!n);
// a clone nudged +5 on x/z, so a duplicate/paste lands visibly offset
const cloneShift = (n: Node): Node => {
  const d = clone(n);
  d.pos = { x: n.pos.x + 5, y: n.pos.y, z: n.pos.z + 5 };
  return d;
};

export function createObject(): void {
  const o = newObject();
  o.pos = { x: Math.round(goal.target.x), y: 0, z: Math.round(goal.target.z) };
  S.context.children.push(o);
  enterNode(o, true);
  save();
}
export function deleteSelection(): void {
  if (!S.selection.size) return;
  S.context.children = S.context.children.filter((c) => !S.selection.has(c.id));
  S.selection.clear();
  rebuild();
  updateChrome();
  save();
}
export function duplicateSelection(): void {
  const dups = selectedNodes().map(cloneShift);
  if (!dups.length) return;
  S.context.children.push(...dups);
  S.selection = new Set(dups.map((d) => d.id));
  rebuild();
  updateChrome();
  save();
}
export function copySelection(): void {
  S.clipboard = selectedNodes().map(clone);
}
export function cutSelection(): void {
  copySelection();
  deleteSelection();
}
export function pasteClipboard(): void {
  if (!S.clipboard.length) return;
  const ns = S.clipboard.map(cloneShift);
  S.context.children.push(...ns);
  S.selection = new Set(ns.map((d) => d.id));
  rebuild();
  updateChrome();
  save();
}

// ---- tree reparenting (drag & drop) ----
export function reparentNode(
  node: Node,
  newParent: SceneNode,
  index: number,
): boolean { // move node under newParent at index, preserving world pose
  if (node === newParent || isDescendant(node, newParent)) return false;
  const A = parentOf(node) as SceneNode | null;
  if (!A) return false;
  const Wn = xcompose(worldXform(A), { off: { ...node.pos }, rot: node.rot });
  const local = xcompose(xinvert(worldXform(newParent)), Wn);
  const ai = A.children.indexOf(node);
  A.children.splice(ai, 1);
  if (A === newParent && ai < index) index--;
  node.pos = {
    x: Math.round(local.off.x),
    y: Math.round(local.off.y),
    z: Math.round(local.off.z),
  };
  node.rot = local.rot & 3;
  newParent.children.splice(
    Math.max(0, Math.min(index, newParent.children.length)),
    0,
    node,
  );
  return true;
}
// wrap a node in a fresh group that takes its place (world pose preserved)
export function wrapNode(node: Node): SceneNode | null {
  const par = parentOf(node) as SceneNode | null;
  if (!par) return null;
  const idx = par.children.indexOf(node);
  const g = newScene();
  g.name = "Group";
  g.pos = { ...node.pos };
  g.rot = node.rot;
  par.children.splice(idx, 1, g); // g takes the node's slot (and its world pose)
  node.pos = { x: 0, y: 0, z: 0 };
  node.rot = 0;
  g.children = [node];
  return g;
}
// wrap a target node in a new group, then drop another node in — used when one
// object is dragged onto another in the tree.
export function wrapInGroup(target: Node, dragged: Node): boolean {
  if (dragged === target || isDescendant(dragged, target)) return false;
  const g = wrapNode(target);
  if (!g) return false;
  reparentNode(dragged, g, g.children.length); // bring the dragged piece in, world pose preserved
  S.collapsed.delete(g.id);
  S.selection = new Set([g.id]);
  rebuild();
  updateChrome();
  save();
  return true;
}

// ---- right-click (context-menu) actions on a tree node ----
export function duplicateNode(node: Node): void {
  const par = parentOf(node) as SceneNode | null;
  if (!par) return;
  const d = cloneShift(node);
  par.children.splice(par.children.indexOf(node) + 1, 0, d);
  selectNode(d);
  save();
}
export function deleteNode(node: Node): void {
  const par = parentOf(node) as SceneNode | null;
  if (!par) return;
  par.children = par.children.filter((c) => c !== node);
  S.selection.delete(node.id);
  if (S.editObject === node) S.editObject = null;
  rebuild();
  updateChrome();
  save();
}
export function addObjectIn(group: SceneNode): void { // new empty object inside a group (enter it)
  const o = newObject();
  group.children.push(o);
  S.collapsed.delete(group.id);
  enterNode(o, true);
  save();
}
export function addGroupIn(group: SceneNode): void { // new empty group inside a group
  const g = newScene();
  g.name = "Group";
  group.children.push(g);
  S.collapsed.delete(group.id);
  selectNode(g);
  save();
}
export function rotateSelectionBy(steps: number): void { // rotate selection in 90° steps about each piece's own centre
  const dir = steps < 0 ? -1 : 1;
  for (let n = 0; n < Math.abs(steps); n++) {
    const x = contextXform();
    for (const id of S.selection) {
      const ch = childById(id);
      if (!ch) continue;
      const before = nodeBox(
        ch,
        addv(x.off, rotY(ch.pos, x.rot)),
        (x.rot + ch.rot) & 3,
        emptyBox(),
      );
      ch.rot = (ch.rot + dir) & 3;
      const after = nodeBox(
        ch,
        addv(x.off, rotY(ch.pos, x.rot)),
        (x.rot + ch.rot) & 3,
        emptyBox(),
      );
      const dW = {
        x: (before.min.x + before.max.x) / 2 - (after.min.x + after.max.x) / 2,
        z: (before.min.z + before.max.z) / 2 - (after.min.z + after.max.z) / 2,
      };
      const dL = rotY(
        { x: Math.round(dW.x), y: 0, z: Math.round(dW.z) },
        (4 - x.rot) & 3,
      );
      ch.pos.x += dL.x;
      ch.pos.z += dL.z;
    }
  }
  if (S.selection.size) rebuild();
}
export function rotateSelection(): void {
  if (S.selection.size) {
    rotateSelectionBy(1);
    save();
  }
}
export function nudgeY(d: number): void {
  for (const id of S.selection) {
    const c = childById(id);
    if (c) c.pos.y += d;
  }
  if (S.selection.size) {
    rebuild();
    save();
  }
}
