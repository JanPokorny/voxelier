// All mutable, cross-module editor state lives here in one object. ES module
// imports are read-only bindings you can't reassign from another module, so the
// split modules share state by reading and writing properties of `S`.
import type * as THREE from "three";
import type {
  Box,
  Drag,
  DropInfo,
  MeasField,
  MeasLabel,
  Node,
  ObjectNode,
  Pending,
  SceneNode,
  Seg,
  Tool,
  VoxelMap,
  Xform,
} from "./types.ts";

export type State = {
  // ---- model / editor ----
  root: SceneNode; // root scene (set by start() before first use)
  path: Node[]; // array of groups root..context
  context: SceneNode; // current group (= path[last])
  editObject: ObjectNode | null; // object being voxel-edited, or null
  selection: Set<string>; // selected child ids within context
  clipboard: Node[]; // detached node clones
  tool: Tool; // voxel tool when editing an object
  selColor: number; // current draw colour (any 0xRRGGBB)
  collapsed: Set<string>; // tree: ids of collapsed groups

  // ---- render outputs ----
  meshes: THREE.Mesh[]; // all meshes added this rebuild
  pickMeshes: THREE.Mesh[]; // meshes raycast for picking
  childMeshes: Record<string, THREE.Mesh[]>; // childId -> [meshes] (scene mode)
  childBox: Record<string, Box>; // childId -> {min,max}
  editXform: Xform;

  // ---- edited object: chunked surface meshing ----
  editChunkVox: Map<number, VoxelMap>; // chunkKey -> Map<voxelKey,color>
  editChunkMesh: Map<number, THREE.Mesh>; // chunkKey -> THREE.Mesh
  editDirty: Set<number>; // chunkKeys awaiting a re-mesh
  editRemesh: number; // pending requestAnimationFrame id
  voxVer: number; // bumped on any voxel change (chrome/colour caches)

  // ---- pointer interaction ----
  painting: boolean;
  lastVox: number | null;
  drag: Drag | null;

  // ---- tree drag&drop + context menu + row-click window ----
  dragId: string | null;
  dropInfo: DropInfo | null;
  dropRow: HTMLElement | null;
  ctxMenuEl: HTMLElement | null;
  pending: Pending | null;

  // ---- measurements ----
  measMode: boolean;
  liveMeas: Seg[] | null;
  frozenMeas: Seg[][];
  measLabels: MeasLabel[];
  measFieldCache: MeasField | null;

  // ---- persistence debounce ----
  saveT: number | null;
};

export const S: State = {
  root: null!, // set by start() before anything reads it
  path: [],
  context: null!,
  editObject: null,
  selection: new Set(),
  clipboard: [],
  tool: "add",
  selColor: 0xd4a373,
  collapsed: new Set(),

  meshes: [],
  pickMeshes: [],
  childMeshes: {},
  childBox: {},
  editXform: { off: { x: 0, y: 0, z: 0 }, rot: 0 },

  editChunkVox: new Map(),
  editChunkMesh: new Map(),
  editDirty: new Set(),
  editRemesh: 0,
  voxVer: 0,

  painting: false,
  lastVox: null,
  drag: null,

  dragId: null,
  dropInfo: null,
  dropRow: null,
  ctxMenuEl: null,
  pending: null,

  measMode: false,
  liveMeas: null,
  frozenMeas: [],
  measLabels: [],
  measFieldCache: null,

  saveT: null,
};
