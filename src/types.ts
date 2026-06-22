// Shared domain types for the editor. Kept in one place so the model, render,
// interaction and UI layers all speak the same vocabulary. Three.js types are
// imported where geometry/scene objects cross a module boundary.
import type * as THREE from "three";

// ---- geometry / transform algebra ----
export type Vec = { x: number; y: number; z: number };
// A rotation count in 90° steps about the Y axis, normalised to 0..3.
export type Rot = number;
// A rigid transform: rotate by `rot`, then translate by `off`.
export type Xform = { off: Vec; rot: Rot };
// An axis-aligned bounding box (min inclusive, max exclusive in voxel space).
export type Box = { min: Vec; max: Vec };

// ---- the document model ----
export type Vis = "visible" | "transparent" | "invisible";
// voxel field: packed-int cell key -> 0xRRGGBB colour
export type VoxelMap = Map<number, number>;

type NodeBase = {
  id: string;
  name: string;
  pos: Vec;
  rot: Rot;
  vis: Vis;
};
export type ObjectNode = NodeBase & { type: "object"; voxels: VoxelMap };
export type SceneNode = NodeBase & { type: "scene"; children: Node[] };
export type Node = ObjectNode | SceneNode;

// ---- editor tools ----
export type Tool = "add" | "erase" | "paint" | "measure";

// A world (or object-local) voxel produced by walk(): position, colour, the
// context child it belongs to (owner) and whether it renders as glass (tr).
export type Voxel = {
  x: number;
  y: number;
  z: number;
  c: number;
  owner?: string | null;
  tr?: boolean;
};

// ---- measurement ----
// One labelled dimension segment between two world points.
export type Seg = {
  a: THREE.Vector3;
  b: THREE.Vector3;
  mid: THREE.Vector3;
  len: number;
  filled: boolean;
  nolabel?: boolean;
};
export type MeasLabel = { el: HTMLElement; w: THREE.Vector3 };
export type MeasField = {
  set: Set<number>;
  mn: Vec;
  mx: Vec;
  toW: (x: number, y: number, z: number) => THREE.Vector3;
  empty: boolean;
};

// ---- pointer drag ----
// One loosely-shaped record covers every drag mode (pan/orbit/move/rotobj/box/
// measure); fields are populated per mode at pointerdown. Kept permissive on
// purpose so the pointer handlers stay terse.
export type Drag = {
  mode: "pan" | "orbit" | "move" | "rotobj" | "box";
  x: number;
  y: number;
  sx: number;
  sy: number;
  dx?: number;
  dy?: number;
  dz?: number;
  dyBase?: number;
  hyBase?: number;
  shiftAnchorY?: number | null;
  start?: Vec | null;
  steps?: number;
  clickId?: string | null;
  meas?: "freeze" | "clear";
  box?: {
    x0: number;
    y0: number;
    z0: number;
    x1: number;
    z1: number;
    hy: number;
  };
  occ?: Set<number>;
  sel?: Voxel[];
};

// Pending drop target while dragging a tree row.
export type DropInfo = {
  parent?: SceneNode | null;
  index?: number;
  wrap?: Node;
};

// A scheduled tree-row click (distinguishes single enter vs. double-click fit).
export type Pending = { node: Node; timer: number };
