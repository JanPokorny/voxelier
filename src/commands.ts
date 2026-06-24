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

// re-mesh the scene, refresh the chrome and persist — the tail of most edits
const commit = (): void => {
  rebuild();
  updateChrome();
  save();
};
// round half away from zero (symmetric). Math.round rounds half toward +∞, so
// rotation re-centring of an even×odd footprint (half-integer centre delta)
// wouldn't cancel over a full turn — the object would creep across the scene.
const rndSym = (v: number): number => (v < 0 ? -Math.round(-v) : Math.round(v));

export function cycleVis(node: Node): void {
  node.vis = VIS_CYCLE[node.vis];
  commit();
}
export function renameNode(node: Node): void {
  const n = prompt("Name", node.name || "");
  if (n != null) {
    node.name = n.trim();
    updateChrome();
    save();
  }
}

// detached node clones for copy/paste — private to this module's clipboard flow
let clipboard: Node[] = [];
// selected context children, resolved to live nodes (dropping stale ids)
const selectedNodes = (): Node[] =>
  [...S.selection].map((id) => childById(id)).filter((n): n is Node => !!n);
// a clone nudged +5 on x/z, so a duplicate/paste lands visibly offset
const cloneShift = (n: Node): Node => {
  const d = clone(n);
  d.pos = { x: n.pos.x + 5, y: n.pos.y, z: n.pos.z + 5 };
  return d;
};

// add a fresh empty object at the camera focus into `parent`, reveal it, enter it
const spawnObject = (parent: SceneNode, fit: boolean): void => {
  const o = newObject();
  o.pos = { x: Math.round(goal.target.x), y: 0, z: Math.round(goal.target.z) };
  parent.children.push(o);
  S.collapsed.delete(parent.id);
  enterNode(o, fit); // fit only when spawning into the open context; nested stays put
  save();
};
export function createObject(): void {
  spawnObject(S.context, true);
}
export function deleteSelection(): void {
  if (!S.selection.size) return;
  S.context.children = S.context.children.filter((c) => !S.selection.has(c.id));
  S.selection.clear();
  commit();
}
export function duplicateSelection(): void {
  const dups = selectedNodes().map(cloneShift);
  if (!dups.length) return;
  S.context.children.push(...dups);
  S.selection = new Set(dups.map((d) => d.id));
  commit();
}
export function copySelection(): void {
  clipboard = selectedNodes().map(clone);
}
export function cutSelection(): void {
  copySelection();
  deleteSelection();
}
export function pasteClipboard(): void {
  if (!clipboard.length) return;
  const ns = clipboard.map(cloneShift);
  S.context.children.push(...ns);
  S.selection = new Set(ns.map((d) => d.id));
  commit();
}

// ---- tree reparenting (drag & drop) ----
export function reparentNode(
  node: Node,
  newParent: SceneNode,
  index: number,
): boolean { // move node under newParent at index, preserving world pose
  if (node === newParent || isDescendant(node, newParent)) return false;
  const A = parentOf(node);
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
function wrapNode(node: Node): SceneNode | null {
  const par = parentOf(node);
  if (!par) return null;
  const idx = par.children.indexOf(node);
  const g = newScene("Group");
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
  commit();
  return true;
}
// wrap a single node in a fresh group and select it (context-menu "New group")
export function wrapNodeInGroup(node: Node): void {
  const g = wrapNode(node);
  if (!g) return;
  S.collapsed.delete(g.id);
  selectNode(g);
  save();
}

// ---- right-click (context-menu) actions on a tree node ----
export function duplicateNode(node: Node): void {
  const par = parentOf(node);
  if (!par) return;
  const d = cloneShift(node);
  par.children.splice(par.children.indexOf(node) + 1, 0, d);
  selectNode(d);
  save();
}
export function deleteNode(node: Node): void {
  const par = parentOf(node);
  if (!par) return;
  par.children = par.children.filter((c) => c !== node);
  S.selection.delete(node.id);
  if (S.editObject === node) S.editObject = null;
  commit();
}
export function addObjectIn(group: SceneNode): void { // new empty object inside a group
  spawnObject(group, false);
}
export function addGroupIn(group: SceneNode): void { // new empty group inside a group
  const g = newScene("Group");
  group.children.push(g);
  S.collapsed.delete(group.id);
  selectNode(g);
  save();
}
export function rotateSelectionBy(steps: number): void { // rotate selection in 90° steps about each piece's own centre
  const dir = steps < 0 ? -1 : 1;
  // invariant across the loop: we rotate context children, not the path that
  // defines the context frame, so the context transform never changes here
  const x = contextXform();
  // world AABB of a context child under the current context transform
  const childWorldBox = (ch: Node) =>
    nodeBox(ch, addv(x.off, rotY(ch.pos, x.rot)), (x.rot + ch.rot) & 3, emptyBox());
  for (let n = 0; n < Math.abs(steps); n++) {
    for (const id of S.selection) {
      const ch = childById(id);
      if (!ch) continue;
      const before = childWorldBox(ch);
      ch.rot = (ch.rot + dir) & 3;
      const after = childWorldBox(ch);
      const dW = {
        x: (before.min.x + before.max.x) / 2 - (after.min.x + after.max.x) / 2,
        z: (before.min.z + before.max.z) / 2 - (after.min.z + after.max.z) / 2,
      };
      const dL = rotY(
        { x: rndSym(dW.x), y: 0, z: rndSym(dW.z) },
        -x.rot, // world recentre delta -> context-local (inverse rotation)
      );
      ch.pos.x += dL.x;
      ch.pos.z += dL.z;
    }
  }
  if (S.selection.size) rebuild();
}
export function rotateSelection(): void {
  if (S.selection.size) {
    rotateSelectionBy(1); // already re-meshes; refresh chrome so tree thumbnails track the new pose
    updateChrome();
    save();
  }
}
export function nudgeY(d: number): void {
  for (const id of S.selection) {
    const c = childById(id);
    if (c) c.pos.y += d;
  }
  if (S.selection.size) commit();
}
