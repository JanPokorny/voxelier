// All mutable, cross-module editor state lives here in one object. ES module
// imports are read-only bindings you can't reassign from another module, so the
// split modules share state by reading and writing properties of `S`.
export const S = {
  // ---- model / editor ----
  root: null, // root scene
  path: [], // array of groups root..context
  context: null, // current group (= path[last])
  editObject: null, // object being voxel-edited, or null
  selection: new Set(), // selected child ids within context
  clipboard: [], // detached node clones
  tool: "add", // voxel tool when editing an object
  selColor: 0xd4a373, // current draw colour (any 0xRRGGBB)
  collapsed: new Set(), // tree: ids of collapsed groups

  // ---- render outputs ----
  meshes: [], // all meshes added this rebuild
  pickMeshes: [], // meshes raycast for picking
  childMeshes: {}, // childId -> [meshes] (scene mode)
  childBox: {}, // childId -> {min,max}
  editXform: { off: { x: 0, y: 0, z: 0 }, rot: 0 },

  // ---- edited object: chunked surface meshing ----
  editChunkVox: new Map(), // chunkKey -> Map<voxelKey,color> (membership)
  editChunkMesh: new Map(), // chunkKey -> THREE.Mesh
  editDirty: new Set(), // chunkKeys awaiting a re-mesh
  editRemesh: 0, // pending requestAnimationFrame id
  voxVer: 0, // bumped on any voxel change (chrome/colour caches)

  // ---- pointer interaction ----
  painting: false,
  lastVox: null,
  drag: null,

  // ---- tree drag&drop + context menu + row-click window ----
  dragId: null,
  dropInfo: null,
  dropRow: null,
  ctxMenuEl: null,
  pending: null,

  // ---- measurements ----
  measMode: false,
  liveMeas: null,
  frozenMeas: [],
  measLabels: [],
  measFieldCache: null,

  // ---- persistence debounce ----
  saveT: null,
};
