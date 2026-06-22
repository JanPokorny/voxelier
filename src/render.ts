// Scene meshing: gather world voxels (walk), build surface meshes with baked edge
// AO or glass, and (re)build the whole scene or just the edited object. The edited
// object is partitioned into chunks so edits re-mesh only what changed.
import * as THREE from "three";
import { S } from "./state.ts";
import { addv, key, parseKey, rotY, xcompose } from "./math.ts";
import {
  AO,
  boxGeo,
  col,
  dimCol,
  editGroup,
  FACE,
  matGlass,
  matGlassDepth,
  matSurf,
  overlay,
  scene,
} from "./scene-env.ts";
import { contextXform, emptyBox, growBox, VIS } from "./model.ts";
import { invalidateField } from "./measure.ts";
import type { Node, Rot, Vec, Voxel } from "./types.ts";

export function disposeMeshes(): void {
  for (const m of S.meshes) {
    scene.remove(m);
    if (m.geometry && m.geometry !== boxGeo) m.geometry.dispose();
    (m as THREE.Mesh & { dispose?: () => void }).dispose?.();
  }
  S.meshes = [];
  editGroup.clear();
  if (S.editRemesh) {
    cancelAnimationFrame(S.editRemesh);
    S.editRemesh = 0;
  }
  S.editChunkVox = new Map();
  S.editChunkMesh = new Map();
  S.editDirty = new Set();
}

// Core surface mesher: build a BufferGeometry of the exterior faces of `arr`,
// culling internal faces and baking per-vertex edge AO against the full voxel
// field via `has(x,y,z)` — which may see voxels outside `arr` (e.g. the cells of
// a neighbouring chunk), so seams between chunks shade identically to one mesh.
type Cell = { x: number; y: number; z: number; c: number };
// Per face, per corner: the three AO probe offsets (relative to the empty
// neighbour cell). Precomputed once so the inner mesher does pure has() lookups
// and zero per-vertex allocation.
const FACE_AO = FACE.map((f) =>
  f.v.map((w) => {
    const sa = w[f.a] ? 1 : -1, sb = w[f.b] ? 1 : -1;
    const ax = [0, 0, 0], bx = [0, 0, 0];
    ax[f.a] = sa;
    bx[f.b] = sb;
    return [ax, bx, [ax[0] + bx[0], ax[1] + bx[1], ax[2] + bx[2]]];
  })
);
const TRI = [0, 1, 2, 0, 2, 3];
function surfaceGeo(
  arr: Cell[],
  has: (x: number, y: number, z: number) => boolean,
  colorOf: (c: number) => THREE.Color,
  ao: boolean,
): THREE.BufferGeometry | null {
  const pos: number[] = [], nor: number[] = [], colr: number[] = [];
  const bri = [1, 1, 1, 1];
  for (const d of arr) {
    const c = colorOf(d.c), cr = c.r, cg = c.g, cb = c.b;
    for (let fi = 0; fi < 6; fi++) {
      const f = FACE[fi], dx = f.d[0], dy = f.d[1], dz = f.d[2];
      const nx = d.x + dx, ny = d.y + dy, nz = d.z + dz;
      if (has(nx, ny, nz)) continue; // hidden internal face
      if (ao) {
        const fa = FACE_AO[fi];
        for (let i = 0; i < 4; i++) {
          const [oa, ob, oc] = fa[i];
          const A = has(nx + oa[0], ny + oa[1], nz + oa[2]),
            B = has(nx + ob[0], ny + ob[1], nz + ob[2]),
            C = has(nx + oc[0], ny + oc[1], nz + oc[2]);
          bri[i] =
            AO[(A && B) ? 0 : 3 - ((A ? 1 : 0) + (B ? 1 : 0) + (C ? 1 : 0))];
        }
      }
      for (const i of TRI) {
        const w = f.v[i], b = bri[i];
        pos.push(d.x + w[0], d.y + w[1], d.z + w[2]);
        nor.push(dx, dy, dz);
        colr.push(cr * b, cg * b, cb * b);
      }
    }
  }
  if (!pos.length) return null;
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("normal", new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute("color", new THREE.Float32BufferAttribute(colr, 3));
  return g;
}

// A surface of only the exterior faces. Opaque surfaces bake per-vertex edge AO
// into the vertex colours; transparent ones read as glass.
export function addSurface(
  arr: Cell[],
  colorOf: (c: number) => THREE.Color,
  { transparent = false, ao = false, pick = false, childId = null }: {
    transparent?: boolean;
    ao?: boolean;
    pick?: boolean;
    childId?: string | null;
  } = {},
): THREE.Mesh | null {
  if (!arr.length) return null;
  const set = new Set();
  for (const d of arr) set.add(key(d.x, d.y, d.z));
  const g = surfaceGeo(arr, (x, y, z) => set.has(key(x, y, z)), colorOf, ao);
  if (!g) return null;
  const m = new THREE.Mesh(g, transparent ? matGlass : matSurf);
  m.castShadow = true;
  m.receiveShadow = true;
  scene.add(m);
  S.meshes.push(m);
  if (transparent) {
    // depth-only sibling: lays down the nearest-glass depth before the colour pass
    m.renderOrder = 2;
    const dp = new THREE.Mesh(g, matGlassDepth);
    dp.renderOrder = 1;
    dp.castShadow = false;
    dp.receiveShadow = false;
    scene.add(dp);
    S.meshes.push(dp);
  }
  if (pick) {
    m.userData.childId = childId;
    m.userData.emph = !transparent;
    S.pickMeshes.push(m);
    (S.childMeshes[childId!] || (S.childMeshes[childId!] = [])).push(m);
  }
  return m;
}

// gather every world voxel (skipping the object being edited).
//   tr    = effectively transparent (this node or an ancestor is transparent)
//   owner = id of the current context's direct child this voxel belongs to
export function walk(
  node: Node,
  off: Vec,
  rot: Rot,
  owner: string | null,
  vis: number,
  out: Voxel[],
): void {
  const ev = Math.max(vis, VIS[node.vis || "visible"]);
  if (node === S.editObject || ev >= 2) return; // invisible -> skip
  const tr = ev === 1;
  if (node.type === "object") {
    for (const [k, c] of node.voxels) {
      const w = addv(rotY(parseKey(k), rot), off);
      out.push({ x: w.x, y: w.y, z: w.z, c, owner, tr });
    }
  } else {for (const ch of node.children) {
      walk(
        ch,
        addv(off, rotY(ch.pos, rot)),
        (rot + ch.rot) & 3,
        (node === S.context) ? ch.id : owner,
        ev,
        out,
      );
    }}
}

// ---- edited object: chunked surface meshing ----
// The object is partitioned into CH³ object-local chunks. Edits re-mesh only the
// touched chunks (plus neighbours, whose boundary faces / AO depend on the changed
// cell), so a paint stroke or a large box fill never re-meshes the whole object.
// Geometry is built in object-local space; editGroup carries the world pose.
const CH = 32;
const chunkKeyOf = (x: number, y: number, z: number): number =>
  key(Math.floor(x / CH), Math.floor(y / CH), Math.floor(z / CH));
const editHas = (x: number, y: number, z: number): boolean =>
  S.editObject!.voxels.has(key(x, y, z));

function remeshChunk(ck: number): void {
  const old = S.editChunkMesh.get(ck);
  if (old) {
    editGroup.remove(old);
    old.geometry.dispose();
    const i = S.meshes.indexOf(old);
    if (i >= 0) S.meshes.splice(i, 1);
    const j = S.pickMeshes.indexOf(old);
    if (j >= 0) S.pickMeshes.splice(j, 1);
    S.editChunkMesh.delete(ck);
  }
  const vm = S.editChunkVox.get(ck);
  if (!vm || !vm.size) return;
  const arr: Cell[] = [];
  for (const [vk, c] of vm) {
    const p = parseKey(vk);
    arr.push({ x: p.x, y: p.y, z: p.z, c });
  }
  const g = surfaceGeo(arr, editHas, col, true);
  if (!g) return;
  const m = new THREE.Mesh(g, matSurf);
  m.castShadow = m.receiveShadow = true;
  editGroup.add(m);
  S.meshes.push(m);
  S.pickMeshes.push(m);
  S.editChunkMesh.set(ck, m);
}
function scheduleRemesh(): void {
  if (S.editRemesh) return;
  S.editRemesh = requestAnimationFrame(() => {
    S.editRemesh = 0;
    for (const ck of S.editDirty) remeshChunk(ck);
    S.editDirty.clear();
  });
}
function markDirty(x: number, y: number, z: number): void {
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      for (let dz = -1; dz <= 1; dz++) {
        S.editDirty.add(chunkKeyOf(x + dx, y + dy, z + dz));
      }
    }
  }
  scheduleRemesh();
}
// Set/clear a single edited-object voxel and update chunk membership. `defer`
// skips the per-cell dirty marking for bulk edits (the caller marks a range).
export function editSet(
  x: number,
  y: number,
  z: number,
  c: number,
  defer = false,
): void {
  const vk = key(x, y, z);
  S.editObject!.voxels.set(vk, c);
  const ck = chunkKeyOf(x, y, z);
  let m = S.editChunkVox.get(ck);
  if (!m) S.editChunkVox.set(ck, m = new Map());
  m.set(vk, c);
  S.voxVer++;
  if (!defer) markDirty(x, y, z);
}
export function editDelete(
  x: number,
  y: number,
  z: number,
  defer = false,
): void {
  const vk = key(x, y, z);
  if (!S.editObject!.voxels.delete(vk)) return;
  const ck = chunkKeyOf(x, y, z), m = S.editChunkVox.get(ck);
  if (m) {
    m.delete(vk);
    if (!m.size) S.editChunkVox.delete(ck);
  }
  S.voxVer++;
  if (!defer) markDirty(x, y, z);
}
// mark every chunk a [x0..x1]×… cell range can touch (grown by one for borders)
export function markDirtyRange(
  x0: number,
  y0: number,
  z0: number,
  x1: number,
  y1: number,
  z1: number,
): void {
  const lo = (k: number) => Math.floor((k - 1) / CH),
    hi = (k: number) => Math.floor((k + 1) / CH);
  for (let cx = lo(x0); cx <= hi(x1); cx++) {
    for (let cy = lo(y0); cy <= hi(y1); cy++) {
      for (let cz = lo(z0); cz <= hi(z1); cz++) {
        S.editDirty.add(key(cx, cy, cz));
      }
    }
  }
  scheduleRemesh();
}

// (re)build the edited object's chunk meshes and make them the pick targets
export function buildEditMesh(): void {
  const { off, rot } = S.editXform;
  editGroup.position.set(off.x, off.y, off.z);
  editGroup.rotation.set(0, -rot * Math.PI / 2, 0); // rotY(v,rot) == a three.js Y-rotation by -rot·90°
  editGroup.updateMatrixWorld(true);
  S.editChunkVox = new Map();
  for (const [vk, c] of S.editObject!.voxels) {
    const p = parseKey(vk), ck = chunkKeyOf(p.x, p.y, p.z);
    let m = S.editChunkVox.get(ck);
    if (!m) S.editChunkVox.set(ck, m = new Map());
    m.set(vk, c);
  }
  S.editChunkMesh = new Map();
  S.editDirty = new Set();
  S.pickMeshes = [];
  for (const ck of S.editChunkVox.keys()) remeshChunk(ck);
}

export function rebuild(): void {
  disposeMeshes();
  S.pickMeshes = [];
  S.childMeshes = {};
  S.childBox = {};
  S.voxVer++;
  invalidateField();
  const all: Voxel[] = [];
  walk(S.root, { x: 0, y: 0, z: 0 }, 0, null, 0, all);

  if (S.editObject) {
    S.editXform = xcompose(contextXform(), {
      off: S.editObject.pos,
      rot: S.editObject.rot,
    });
    addSurface(all, (c) => col(c), { transparent: true }); // everything else: transparent
    buildEditMesh(); // edited object: opaque, in 3D
  } else {
    // owner -> current context's children; otherwise dimmed (descended past).
    const gE: Record<string, Voxel[]> = {},
      gT: Record<string, Voxel[]> = {},
      ctxE: Voxel[] = [],
      ctxT: Voxel[] = [];
    for (const v of all) {
      if (v.owner) {
        (v.tr
          ? (gT[v.owner] || (gT[v.owner] = []))
          : (gE[v.owner] || (gE[v.owner] = []))).push(v);
        growBox(
          S.childBox[v.owner] || (S.childBox[v.owner] = emptyBox()),
          v.x,
          v.y,
          v.z,
        );
      } else (v.tr ? ctxT : ctxE).push(v);
    }
    addSurface(ctxE, (c) => dimCol(c), { ao: true });
    addSurface(ctxT, (c) => dimCol(c), { transparent: true });
    for (const id of new Set([...Object.keys(gE), ...Object.keys(gT)])) {
      if (gE[id]) {
        addSurface(gE[id], (c) => col(c), {
          ao: true,
          pick: true,
          childId: id,
        });
      }
      if (gT[id]) addSurface(gT[id], (c) => col(c), { transparent: true }); // transparent: not pickable
    }
  }
  refreshOverlay();
}

// ---- overlay outlines ----
function boxLines(min: Vec, max: Vec, color: number): THREE.LineSegments {
  const g = new THREE.BoxGeometry(max.x - min.x, max.y - min.y, max.z - min.z);
  const e = new THREE.LineSegments(
    new THREE.EdgesGeometry(g),
    new THREE.LineBasicMaterial({ color, depthTest: false }),
  );
  e.position.set((min.x + max.x) / 2, (min.y + max.y) / 2, (min.z + max.z) / 2);
  e.renderOrder = 999;
  g.dispose();
  return e;
}
export function refreshOverlay(): void {
  for (const c of overlay.children) {
    (c as THREE.LineSegments & { geometry?: { dispose?: () => void } }).geometry
      ?.dispose?.();
  }
  overlay.clear();
  overlay.position.set(0, 0, 0);
  if (S.editObject) return;
  for (const id of S.selection) {
    const b = S.childBox[id];
    if (b) overlay.add(boxLines(b.min, b.max, 0xf0e6d2));
  }
}
