// Editing commands invoked from the tree menu, keyboard and pointer: visibility,
// rename, create/delete/duplicate, clipboard, reparent/group, rotate and nudge.
import { S } from "./state.ts";
import { addv, rndSym, rotY, xcompose, xinvert } from "./math.ts";
import {
  boxEmpty,
  childById,
  clone,
  contextXform,
  emptyBox,
  findPath,
  isDescendant,
  newObject,
  newScene,
  nodeBox,
  parentOf,
  VIS_CYCLE,
  worldXform,
} from "./model.ts";
import { growBounds, worldBox } from "./boxes.ts";
import { goal } from "./scene-env.ts";
import { rebuild } from "./render.ts";
import { startRename, updateChrome } from "./ui.ts";
import { enterNode, selectNode } from "./navigation.ts";
import { save } from "./persistence.ts";
import { clipKind, getNodeClip, getVoxClip, setNodeClip } from "./clipboard.ts";
import { rigidRotateWorld } from "./shear.ts";
import type { Box3, Node, ObjectNode, Rot, SceneNode, Vec } from "./types.ts";

// re-mesh the scene, refresh the chrome and persist — the tail of most edits
const commit = (): void => {
  rebuild();
  updateChrome();
  save();
};

export function cycleVis(node: Node): void {
  node.vis = VIS_CYCLE[node.vis];
  commit();
}

// selected context children, resolved to live nodes (dropping stale ids)
const selectedNodes = (): Node[] =>
  [...S.selection].map((id) => childById(id)).filter((n): n is Node => !!n);
// clone keeping the original pose, so a duplicate/paste lands exactly on top of
// its source (the copy becomes the selection, ready to be dragged off)

// add a fresh empty object at the camera focus into `parent`, reveal it, enter it
const spawnObject = (parent: SceneNode, fit: boolean): void => {
  const o = newObject();
  o.pos = { x: Math.round(goal.target.x), y: 0, z: Math.round(goal.target.z) };
  parent.children.push(o);
  S.collapsed.delete(parent.id);
  enterNode(o, fit); // fit only when spawning into the open context; nested stays put
  save();
  startRename(o); // a fresh object opens ready to be named
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
  const dups = selectedNodes().map(clone);
  if (!dups.length) return;
  S.context.children.push(...dups);
  S.selection = new Set(dups.map((d) => d.id));
  commit();
}
export function copySelection(): void {
  const ns = selectedNodes().map(clone);
  if (ns.length) setNodeClip(ns); // copying nothing is a no-op, not a clipboard clear
}
export function cutSelection(): void {
  copySelection();
  deleteSelection();
}
// Paste into the scene. If voxel data was the last thing copied (from the object
// editor's select tool), it lands as a fresh object containing those voxels;
// otherwise the copied nodes are pasted as siblings.
// `into` is the target group (defaults to the current context, e.g. for Ctrl+V);
// the tree menu passes the right-clicked group so a paste lands inside it.
export function pasteClipboard(into: SceneNode = S.context): void {
  if (clipKind() === "vox") {
    pasteVoxAsObject(into);
    return;
  }
  const ns = getNodeClip().map(clone);
  if (!ns.length) return;
  into.children.push(...ns);
  enterPasteTarget(into);
  S.selection = new Set(ns.map((d) => d.id));
  commit();
}
// Create a new object from the voxel clipboard (normalised, min at the origin)
// at the camera focus, and select it.
function pasteVoxAsObject(into: SceneNode): void {
  const v = getVoxClip();
  if (!v.length) return;
  const o = newObject();
  o.boxes = v.map((b) => ({ ...b }));
  // place at the camera focus, converted from world to the (possibly
  // transformed) local frame of the group the new object lives in
  const x = worldXform(into);
  const l = rotY(
    { x: goal.target.x - x.off.x, y: 0, z: goal.target.z - x.off.z },
    -x.rot,
  );
  o.pos = { x: Math.round(l.x), y: 0, z: Math.round(l.z) };
  into.children.push(o);
  enterPasteTarget(into);
  S.selection = new Set([o.id]);
  commit();
}
// reveal the paste target and, if it isn't the current context, make it the
// context so the freshly pasted (now context-child) nodes are selectable there
function enterPasteTarget(into: SceneNode): void {
  S.collapsed.delete(into.id);
  if (into !== S.context) {
    S.path = findPath(into) ?? S.path;
    S.editObject = null;
  }
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
  startRename(g); // a fresh group opens ready to be named
}
// Group the whole selection into one fresh group that takes `anchor`'s slot and
// pose (the right-clicked item), then reparent each selected sibling into it with
// its world pose preserved. The anchor must itself be part of the selection.
export function groupSelection(anchor: Node): void {
  const nodes = selectedNodes();
  if (nodes.length < 2) return; // a single node groups via wrapNodeInGroup
  const g = newScene("Group");
  g.pos = { ...anchor.pos };
  g.rot = anchor.rot;
  const idx = S.context.children.indexOf(anchor);
  S.context.children.splice(Math.max(0, idx), 0, g); // g must be in the tree before reparenting
  for (const n of nodes) reparentNode(n, g, g.children.length);
  S.collapsed.delete(g.id);
  S.selection = new Set([g.id]);
  commit();
}

// ---- right-click (context-menu) actions on a tree node ----
export function duplicateNode(node: Node): void {
  const par = parentOf(node);
  if (!par) return;
  const d = clone(node);
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
// dissolve a group: lift its children into its parent (in place, world pose
// preserved), then drop the now-empty group. Root has no parent to lift into.
export function ungroupNode(node: SceneNode): void {
  const par = parentOf(node);
  if (!par) return;
  const kids = [...node.children]; // snapshot; reparentNode mutates the lists
  let at = par.children.indexOf(node); // land the children in the group's slot
  for (const ch of kids) {
    reparentNode(ch, par, at);
    at = par.children.indexOf(ch) + 1; // keep them contiguous and in order
  }
  par.children = par.children.filter((c) => c !== node);
  S.selection = new Set(kids.map((k) => k.id));
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
  startRename(g); // a fresh group opens ready to be named
}
// Rotate the selection in 90° steps about the COMBINED centre of all selected
// items, so a multi-selection turns as one rigid unit (each piece both spins and
// orbits the shared pivot) rather than each piece spinning about its own centre.
// A single item still rotates about its own centre (its box centre is the pivot).
export function rotateSelectionBy(steps: number): void {
  const ids = [...S.selection];
  if (!ids.length) return;
  const dir = steps < 0 ? 3 : 1; // one 90° step as a positive quarter (3 == -1)
  // invariant across the loop: we rotate context children, not the path that
  // defines the context frame, so the context transform never changes here
  const x = contextXform(), inv = xinvert(x);
  // world AABB of a context child under the current context transform
  const childWorldBox = (ch: Node) =>
    nodeBox(ch, addv(x.off, rotY(ch.pos, x.rot)), (x.rot + ch.rot) & 3, emptyBox());
  for (let n = 0; n < Math.abs(steps); n++) {
    // combined world AABB centre of the whole selection -> the shared pivot
    const all = emptyBox();
    for (const id of ids) {
      const b = childWorldBox(childById(id)!);
      if (b.min.x < all.min.x) all.min.x = b.min.x;
      if (b.min.z < all.min.z) all.min.z = b.min.z;
      if (b.max.x > all.max.x) all.max.x = b.max.x;
      if (b.max.z > all.max.z) all.max.z = b.max.z;
    }
    const px = (all.min.x + all.max.x) / 2, pz = (all.min.z + all.max.z) / 2;
    // a world rotation by `dir` quarters about the pivot, as an {off,rot} xform:
    // rotY(v - P, dir) + P == rotY(v, dir) + (P - rotY(P, dir))
    const rp = rotY({ x: px, y: 0, z: pz }, dir);
    const pivotTurn = { rot: dir, off: { x: px - rp.x, y: 0, z: pz - rp.z } };
    for (const id of ids) {
      const ch = childById(id);
      if (!ch) continue;
      // compose the pivot turn onto the child's world pose, then bring it back
      // into the context frame — turning the whole group rigidly about the pivot
      const world = xcompose(x, { off: ch.pos, rot: ch.rot });
      const local = xcompose(inv, xcompose(pivotTurn, world));
      ch.pos = {
        x: rndSym(local.off.x),
        y: rndSym(local.off.y),
        z: rndSym(local.off.z),
      };
      ch.rot = local.rot & 3;
    }
  }
  rebuild();
}
export function rotateSelection(): void {
  if (S.selection.size) {
    rotateSelectionBy(1); // already re-meshes; refresh chrome so tree thumbnails track the new pose
    updateChrome();
    save();
  }
}

// ---- baked rotation (Alt = 15° steps, Shift = a horizontal axis): rotate the
// whole selection as one rigid unit about a shared pivot, baking the angle into
// each object's voxels via the three-shear algorithm. Since a single shared
// pivot turns every leaf object together, the relative arrangement is preserved
// and no piece newly intersects another. The ORIGINAL voxels are snapshotted and
// re-rotated by the absolute angle each step (no compounding round-off), so a
// drag can swing freely back and forth before being committed on release. ----
type LeafSnap = { node: ObjectNode; boxes: Box3[]; off: Vec; rot: Rot };
let fineBase: { leaves: LeafSnap[]; piv: Vec } | null = null;

// every object at or under `node` (a direct selection may be a group)
const collectObjects = (node: Node, out: ObjectNode[]): void => {
  if (node.type === "object") out.push(node);
  else for (const ch of node.children) collectObjects(ch, out);
};
export function beginFineRotate(): void {
  const leaves: LeafSnap[] = [];
  const seen = new Set<ObjectNode>();
  const all = emptyBox(); // combined world AABB -> the shared pivot
  for (const id of S.selection) {
    const ch = childById(id);
    if (!ch) continue;
    const objs: ObjectNode[] = [];
    collectObjects(ch, objs);
    for (const o of objs) {
      if (seen.has(o)) continue; // a node selected both directly and via a group
      seen.add(o);
      const x = worldXform(o);
      const wb = o.boxes.map((b) => worldBox(b, x.rot, x.off));
      leaves.push({ node: o, boxes: o.boxes.map((b) => ({ ...b })), off: x.off, rot: x.rot });
      growBounds(wb, all);
    }
  }
  const piv = boxEmpty(all) ? { x: 0, y: 0, z: 0 } : {
    x: (all.min.x + all.max.x) / 2,
    y: (all.min.y + all.max.y) / 2,
    z: (all.min.z + all.max.z) / 2,
  };
  fineBase = { leaves, piv };
}
// rotate the snapshot by `deg` about world `axis` (0=X,1=Y,2=Z) through the pivot
export function fineRotateSelectionTo(deg: number, axis: number): void {
  if (!fineBase || !fineBase.leaves.length) return;
  const p = fineBase.piv;
  // the two in-plane pivot coords for this rotation axis
  const [pu, pv] = axis === 0 ? [p.y, p.z] : axis === 1 ? [p.x, p.z] : [p.x, p.y];
  for (const lf of fineBase.leaves) {
    const wb = lf.boxes.map((b) => worldBox(b, lf.rot, lf.off));
    // rotate in world, then map back through the object's own (unchanged) pose,
    // so its pos/rot stay put and the turn lives entirely in the baked voxels
    lf.node.boxes = rigidRotateWorld(wb, deg, axis, pu, pv, (x, y, z) =>
      rotY({ x: x - lf.off.x, y: y - lf.off.y, z: z - lf.off.z }, -lf.rot));
  }
  rebuild();
}
export function endFineRotate(): void { // drop the snapshot; the baked boxes stay
  fineBase = null;
}
export function nudgeY(d: number): void {
  for (const id of S.selection) {
    const c = childById(id);
    if (c) c.pos.y += d;
  }
  if (S.selection.size) commit();
}
