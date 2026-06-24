// Shared domain types. THREE types are imported where scene objects cross a
// module boundary.
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
// An axis-aligned box of cells, half-open [x0,x1) x [y0,y1) x [z0,z1), with a
// single 0xRRGGBB colour. An object's shape is a set of disjoint such boxes.
export type Box3 = {
  x0: number;
  y0: number;
  z0: number;
  x1: number;
  y1: number;
  z1: number;
  c: number;
};
// A box region without colour — an add/erase/paint target (a Box3 sans colour).
export type Region = Omit<Box3, "c">;

type NodeBase = {
  id: string;
  name: string;
  pos: Vec;
  rot: Rot;
  vis: Vis;
};
export type ObjectNode = NodeBase & { type: "object"; boxes: Box3[] };
export type SceneNode = NodeBase & { type: "scene"; children: Node[] };
export type Node = ObjectNode | SceneNode;

// ---- editor tools ----
export type Tool = "add" | "erase" | "paint" | "measure";

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
  has: (x: number, y: number, z: number) => boolean;
  mn: Vec;
  mx: Vec;
  toW: (x: number, y: number, z: number) => THREE.Vector3;
  empty: boolean;
};

// ---- pointer drag ----
// One loosely-shaped record covers every drag mode (pan/orbit/move/rotobj/box);
// measurement has no mode of its own — it piggybacks on a pan/orbit drag via the
// `meas` field below. Fields are populated per mode at pointerdown, kept
// permissive on purpose so the pointer handlers stay terse.
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
  dirty?: boolean; // rotobj: a rotation was applied during the drag (commit even if net steps == 0)
  clickId?: string | null;
  meas?: "freeze" | "clear";
  // in-progress box-brush footprint; vertical extent is y0 ± hy, no explicit y1
  box?: {
    x0: number;
    y0: number;
    z0: number;
    x1: number;
    z1: number;
    hy: number;
  };
  occ?: Box3[]; // obstacles: move = other objects (world); box add = own solids (local)
  sel?: Box3[]; // moving selection boxes (world)
  minY?: number; // move: lowest world y0 of the selection at drag start (ground clamp)
};

// Pending drop target while dragging a tree row.
export type DropInfo = {
  parent?: SceneNode | null;
  index?: number;
  wrap?: Node;
};

// A scheduled tree-row click (distinguishes single enter vs. double-click fit).
export type Pending = { node: Node; timer: number };
