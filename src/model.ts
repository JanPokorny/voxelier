// The data model: node factories, visibility tables, tree queries, accumulated
// transforms and node AABBs. A node is an `object` (a set of colour boxes) or a
// `scene` (a group of children); the document root is a scene.
import { S } from "./state.ts";
import { addv, pathXform, rotY, uid } from "./math.ts";
import { growBounds, worldBox } from "./boxes.ts";
import type {
  Box,
  Box3,
  Node,
  ObjectNode,
  Rot,
  SceneNode,
  Vec,
  Vis,
  Xform,
} from "./types.ts";

// muted colours used to build the example (voxels store an arbitrary 0xRRGGBB)
export const DEFAULT_COLORS = [
  0x6b705c,
  0xa5a58d,
  0xb7b7a4,
  0xdcd6c4,
  0xcb997e,
  0xddbea9,
  0xf0e6d2,
  0x8d6e63,
  0xd4a373,
  0x9c6644,
  0xb5838d,
  0x6d6875,
  0x7d8597,
  0x5c677d,
  0x6a994e,
  0xa7c4bc,
];

// vis: 'visible' | 'deemphasized' | 'hidden' (inherited by descendants). The
// ordinal is the strength of de-emphasis, so a child inherits max(self, ancestor).
export const VIS: Record<Vis, number> = {
  visible: 0,
  deemphasized: 1,
  hidden: 2,
};
export const VIS_CYCLE: Record<Vis, Vis> = {
  visible: "deemphasized",
  deemphasized: "hidden",
  hidden: "visible",
};

export const newObject = (): ObjectNode => ({
  type: "object",
  id: uid(),
  name: "",
  pos: { x: 0, y: 0, z: 0 },
  rot: 0,
  vis: "visible",
  boxes: [],
});
export const newScene = (name = ""): SceneNode => ({
  type: "scene",
  id: uid(),
  name,
  pos: { x: 0, y: 0, z: 0 },
  rot: 0,
  vis: "visible",
  children: [],
});
export function clone(n: Node): Node {
  const base = {
    id: uid(),
    name: n.name,
    pos: { ...n.pos },
    rot: n.rot,
    vis: n.vis,
  };
  return n.type === "object"
    ? { type: "object", ...base, boxes: n.boxes.map((b) => ({ ...b })) }
    : { type: "scene", ...base, children: n.children.map(clone) };
}

export const childById = (id: string): Node | undefined =>
  S.context.children.find((c) => c.id === id);
export function findPath(
  target: Node,
  node: Node = S.root,
  acc: Node[] = [],
): Node[] | null {
  acc.push(node); // backtracking DFS: push on entry, pop on a dead end
  if (node === target) return acc.slice(); // fresh root..target copy for the caller
  if (node.type === "scene") {
    for (const ch of node.children) {
      const r = findPath(target, ch, acc);
      if (r) return r;
    }
  }
  acc.pop();
  return null;
}
export function findById(id: string, n: Node = S.root): Node | null {
  if (n.id === id) return n;
  if (n.type === "scene") {
    for (const c of n.children) {
      const r = findById(id, c);
      if (r) return r;
    }
  }
  return null;
}
export function parentOf(node: Node): SceneNode | null {
  const p = findPath(node);
  // a node only ever appears in a scene's children, so any parent is a SceneNode
  return p && p.length > 1 ? p[p.length - 2] as SceneNode : null;
}
export function isDescendant(node: Node, t: Node): boolean {
  if (node === t) return true;
  if (node.type !== "scene") return false;
  return node.children.some((c) => isDescendant(c, t));
}

export const contextXform = (): Xform => pathXform(S.path); // root -> context
export const worldXform = (node: Node): Xform =>
  pathXform(findPath(node) || [S.root]);

// AABB helpers
// Sentinel "inside-out" box that growBounds overwrites on the first real cell.
// 1e9 (a finite value well past any voxel coord), not ±Infinity, on purpose: an
// empty box's centroid (min+max)/2 must stay finite — rotateSelectionBy recentres
// on it for a geometry-less node, and Infinity would make that 0/… NaN and corrupt
// the position.
export const emptyBox = (): Box => ({
  min: { x: 1e9, y: 1e9, z: 1e9 },
  max: { x: -1e9, y: -1e9, z: -1e9 },
});
// still the inside-out sentinel — no real cell has grown it (max < min on every
// axis, so the x check suffices). Centralises the emptyBox emptiness invariant.
export const boxEmpty = (b: Box): boolean => b.max.x < b.min.x;
// Flatten a node subtree's object boxes into `out` under an accumulated
// transform. Pass a node's own pos/rot to get its boxes in the parent frame, or
// identity to get them in the node's own frame (e.g. for a thumbnail).
export function nodeBoxes(node: Node, off: Vec, rot: Rot, out: Box3[]): Box3[] {
  if (node.type === "object") {
    for (const b of node.boxes) out.push(worldBox(b, rot, off));
  } else {
    for (const ch of node.children) {
      nodeBoxes(ch, addv(off, rotY(ch.pos, rot)), (rot + ch.rot) & 3, out);
    }
  }
  return out;
}
// world AABB of a node given an accumulated transform
export function nodeBox(node: Node, off: Vec, rot: Rot, box: Box): Box {
  if (node.type === "object") {
    growBounds(node.boxes.map((b) => worldBox(b, rot, off)), box);
  } else {
    for (const ch of node.children) {
      nodeBox(ch, addv(off, rotY(ch.pos, rot)), (rot + ch.rot) & 3, box);
    }
  }
  return box;
}
