// The data model: node factories, visibility tables, tree queries, accumulated
// transforms and node AABBs. A node is an `object` (a Map of voxels) or a
// `scene` (a group of children); the document root is a scene.
import { S } from "./state.ts";
import { addv, keyToWorld, pathXform, rotY, uid } from "./math.ts";
import type {
  Box,
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

// vis: 'visible' | 'transparent' | 'invisible' (inherited by descendants)
export const VIS: Record<Vis, number> = {
  visible: 0,
  transparent: 1,
  invisible: 2,
};
export const VIS_CYCLE: Record<Vis, Vis> = {
  visible: "transparent",
  transparent: "invisible",
  invisible: "visible",
};

export const newObject = (): ObjectNode => ({
  type: "object",
  id: uid(),
  name: "",
  pos: { x: 0, y: 0, z: 0 },
  rot: 0,
  vis: "visible",
  voxels: new Map(),
});
export const newScene = (): SceneNode => ({
  type: "scene",
  id: uid(),
  name: "",
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
    ? { type: "object", ...base, voxels: new Map(n.voxels) }
    : { type: "scene", ...base, children: n.children.map(clone) };
}

export const childById = (id: string): Node | undefined =>
  S.context.children.find((c) => c.id === id);
export function findPath(
  target: Node,
  node: Node = S.root,
  acc: Node[] = [],
): Node[] | null {
  const a = [...acc, node];
  if (node === target) return a;
  if (node.type === "scene") {
    for (const ch of node.children) {
      const r = findPath(target, ch, a);
      if (r) return r;
    }
  }
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
export function parentOf(node: Node): Node | null {
  const p = findPath(node);
  return p && p.length > 1 ? p[p.length - 2] : null;
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
export const emptyBox = (): Box => ({
  min: { x: 1e9, y: 1e9, z: 1e9 },
  max: { x: -1e9, y: -1e9, z: -1e9 },
});
// grow an AABB to contain the unit voxel at (x,y,z)
export const growBox = (b: Box, x: number, y: number, z: number): void => {
  b.min.x = Math.min(b.min.x, x);
  b.min.y = Math.min(b.min.y, y);
  b.min.z = Math.min(b.min.z, z);
  b.max.x = Math.max(b.max.x, x + 1);
  b.max.y = Math.max(b.max.y, y + 1);
  b.max.z = Math.max(b.max.z, z + 1);
};
// world AABB of a node given an accumulated transform
export function nodeBox(node: Node, off: Vec, rot: Rot, box: Box): Box {
  if (node.type === "object") {
    for (const [k] of node.voxels) {
      const w = keyToWorld(k, rot, off);
      growBox(box, w.x, w.y, w.z);
    }
  } else {
    for (const ch of node.children) {
      nodeBox(ch, addv(off, rotY(ch.pos, rot)), (rot + ch.rot) & 3, box);
    }
  }
  return box;
}
