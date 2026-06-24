// All mutable, cross-module editor state lives here in one object. ES module
// imports are read-only bindings you can't reassign from another module, so the
// split modules share state by reading and writing properties of `S`.
import type * as THREE from "three";
import type {
  Box,
  Drag,
  MeasLabel,
  Node,
  ObjectNode,
  SceneNode,
  Seg,
  Tool,
  Xform,
} from "./types.ts";

export type State = {
  // ---- model / editor ----
  root: SceneNode; // root scene (set by start() before first use)
  path: Node[]; // array of groups root..context
  readonly context: SceneNode; // derived: tail of path (the deepest entered group)
  editObject: ObjectNode | null; // object being voxel-edited, or null
  selection: Set<string>; // selected child ids within context
  tool: Tool; // voxel tool when editing an object
  selColor: number; // current draw colour (any 0xRRGGBB)
  collapsed: Set<string>; // tree: ids of collapsed groups

  // ---- render outputs ----
  meshes: THREE.Mesh[]; // all meshes added this rebuild
  pickMeshes: THREE.Mesh[]; // meshes raycast for picking
  childMeshes: Record<string, THREE.Mesh[]>; // childId -> [meshes] (scene mode)
  childBox: Record<string, Box>; // childId -> {min,max}
  sceneBox: Box | null; // world AABB of all geometry (for camera depth + shadows)
  editXform: Xform;
  voxVer: number; // bumped on any box change (chrome/colour caches)

  // ---- pointer interaction ----
  painting: boolean;
  lastVox: number | null;
  drag: Drag | null;

  // ---- measurements ----
  measMode: boolean;
  liveMeas: Seg[] | null;
  frozenMeas: Seg[][];
  measLabels: MeasLabel[];
};

export const S: State = {
  root: null!, // set by start() before anything reads it
  path: [],
  // derived from path (its tail) so the two can never desync — path is the
  // single source of truth for where the editor is in the tree
  get context(): SceneNode {
    return this.path[this.path.length - 1] as SceneNode;
  },
  editObject: null,
  selection: new Set(),
  tool: "add",
  selColor: 0xd4a373,
  collapsed: new Set(),

  meshes: [],
  pickMeshes: [],
  childMeshes: {},
  childBox: {},
  sceneBox: null,
  editXform: { off: { x: 0, y: 0, z: 0 }, rot: 0 },
  voxVer: 0,

  painting: false,
  lastVox: null,
  drag: null,

  measMode: false,
  liveMeas: null,
  frozenMeas: [],
  measLabels: [],
};
