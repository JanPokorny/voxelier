// Scene meshing for the box model: gather each object's colour boxes in world
// space, emit just the surface cells of the union (boundaryCells), and feed them
// to the per-cell mesher (surfaceGeo) with a grid-indexed has() so baked edge AO
// still works — but interior cells are never visited. The edited object is meshed
// on its own in object-local space and rebuilt (rAF-debounced) as boxes change.
import * as THREE from "three";
import { S } from "./state.ts";
import { addv, rotY, xcompose } from "./math.ts";
import {
  addBox,
  boundaryCells,
  buildIndex,
  eraseBox,
  growBounds,
  paintBox,
  worldBox,
} from "./boxes.ts";
import {
  AO,
  boxGeo,
  col,
  dimCol,
  dir,
  editGroup,
  FACE,
  matGlass,
  matGlassDepth,
  matSurf,
  overlay,
  scene,
  wake,
} from "./scene-env.ts";
import { contextXform, emptyBox, nodeBox, VIS } from "./model.ts";
import { invalidateField } from "./measure.ts";
import type {
  Box,
  Box3,
  Cell,
  Node,
  ObjectNode,
  Region,
  Rot,
  Vec,
} from "./types.ts";

// Fixed key-light direction (the original +50,+110,+38 offset, normalised). The
// light + its shadow camera are anchored to the scene's world bounds — not the
// view — so shadows don't shift when the camera pans or orbits.
const LIGHT_DIR = new THREE.Vector3(50, 110, 38).normalize();
function fitShadow(box: Box): void {
  if (box.max.x < box.min.x) return; // empty scene: keep the prior frustum
  const cx = (box.min.x + box.max.x) / 2,
    cy = (box.min.y + box.max.y) / 2,
    cz = (box.min.z + box.max.z) / 2;
  const R = 0.5 *
      Math.hypot(
        box.max.x - box.min.x,
        box.max.y - box.min.y,
        box.max.z - box.min.z,
      ) +
    8;
  const d = R + 130; // set the light back far enough that the box stays in front
  dir.position.set(
    cx + LIGHT_DIR.x * d,
    cy + LIGHT_DIR.y * d,
    cz + LIGHT_DIR.z * d,
  );
  dir.target.position.set(cx, cy, cz);
  dir.target.updateMatrixWorld();
  const sc = dir.shadow.camera;
  sc.left = -R;
  sc.right = R;
  sc.top = R;
  sc.bottom = -R;
  sc.near = Math.max(1, d - R - 20);
  sc.far = d + R + 20;
  sc.updateProjectionMatrix();
}

export function disposeMeshes(): void {
  for (const m of S.meshes) {
    scene.remove(m);
    if (m.geometry && m.geometry !== boxGeo) m.geometry.dispose();
  }
  S.meshes = [];
  editGroup.clear();
  if (S.editRemesh) {
    cancelAnimationFrame(S.editRemesh);
    S.editRemesh = 0;
  }
  S.editMesh = null;
}

// Core surface mesher: build a BufferGeometry of the exterior faces of `arr`,
// culling internal faces and baking per-vertex edge AO against the full field via
// has(x,y,z). `arr` holds only surface cells, but has() answers for the whole
// solid, so the result is identical to meshing every cell.
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

// Mesh one solid (a world box list) as a surface. Opaque surfaces bake edge AO
// into the vertex colours; transparent ones read as glass.
function meshSurface(
  boxes: Box3[],
  colorOf: (c: number) => THREE.Color,
  { transparent = false, ao = false, pick = false, childId = null }: {
    transparent?: boolean;
    ao?: boolean;
    pick?: boolean;
    childId?: string | null;
  } = {},
): THREE.Mesh | null {
  if (!boxes.length) return null;
  const has = buildIndex(boxes);
  const g = surfaceGeo(boundaryCells(boxes, has), has, colorOf, ao);
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

// Visit every visible object (skipping the one being edited) with its accumulated
// world transform, the context child it belongs to (owner) and whether it reads
// as glass (tr). The single traversal behind meshing, collision and measuring.
export type ObjCb = (
  node: ObjectNode,
  off: Vec,
  rot: Rot,
  owner: string | null,
  tr: boolean,
) => void;
export function eachObject(
  node: Node,
  off: Vec,
  rot: Rot,
  owner: string | null,
  vis: number,
  cb: ObjCb,
): void {
  const ev = Math.max(vis, VIS[node.vis || "visible"]);
  if (node === S.editObject || ev >= 2) return; // invisible -> skip
  if (node.type === "object") cb(node, off, rot, owner, ev === 1);
  else {
    for (const ch of node.children) {
      eachObject(
        ch,
        addv(off, rotY(ch.pos, rot)),
        (rot + ch.rot) & 3,
        node === S.context ? ch.id : owner,
        ev,
        cb,
      );
    }
  }
}
const worldBoxesInto = (
  n: ObjectNode,
  off: Vec,
  rot: Rot,
  into: Box3[],
): Box3[] => {
  for (const b of n.boxes) into.push(worldBox(b, rot, off));
  return into;
};

// ---- edited object: a single mesh in object-local space (editGroup carries the
// pose), rebuilt on a debounced frame as the box list changes ----
export function buildEditMesh(): void {
  const { off, rot } = S.editXform;
  editGroup.position.set(off.x, off.y, off.z);
  editGroup.rotation.set(0, -rot * Math.PI / 2, 0); // rotY(v,rot) == Y-rotation by -rot·90°
  editGroup.updateMatrixWorld(true);
  if (S.editMesh) {
    editGroup.remove(S.editMesh);
    S.editMesh.geometry.dispose();
    const i = S.meshes.indexOf(S.editMesh);
    if (i >= 0) S.meshes.splice(i, 1);
  }
  const boxes = S.editObject!.boxes;
  const has = buildIndex(boxes);
  const g = surfaceGeo(boundaryCells(boxes, has), has, col, true);
  S.editMesh = g ? new THREE.Mesh(g, matSurf) : null;
  if (S.editMesh) {
    S.editMesh.castShadow = S.editMesh.receiveShadow = true;
    editGroup.add(S.editMesh);
    S.meshes.push(S.editMesh);
  }
  S.pickMeshes = S.editMesh ? [S.editMesh] : [];
}
function scheduleEditRemesh(): void {
  if (S.editRemesh) return;
  S.editRemesh = requestAnimationFrame(() => {
    S.editRemesh = 0;
    buildEditMesh();
    wake();
  });
}
function afterEdit(): void {
  S.voxVer++;
  invalidateField();
  scheduleEditRemesh();
}
// Edited-object box ops (region is half-open [x0,x1)×…). add lays colour `c`,
// erase carves, paint recolours only already-filled cells.
export function editAdd(r: Region, c: number): void {
  S.editObject!.boxes = addBox(S.editObject!.boxes, r, c);
  afterEdit();
}
export function editErase(r: Region): void {
  S.editObject!.boxes = eraseBox(S.editObject!.boxes, r);
  afterEdit();
}
export function editPaint(r: Region, c: number): void {
  S.editObject!.boxes = paintBox(S.editObject!.boxes, r, c);
  afterEdit();
}

export function rebuild(): void {
  disposeMeshes();
  S.pickMeshes = [];
  S.childMeshes = {};
  S.childBox = {};
  S.voxVer++;
  invalidateField();
  const O = { x: 0, y: 0, z: 0 };
  const sceneBox = emptyBox(); // world bounds of all geometry, for shadow fitting

  if (S.editObject) {
    S.editXform = xcompose(contextXform(), {
      off: S.editObject.pos,
      rot: S.editObject.rot,
    });
    const others: Box3[] = [];
    eachObject(
      S.root,
      O,
      0,
      null,
      0,
      (n, off, rot) => worldBoxesInto(n, off, rot, others),
    );
    growBounds(others, sceneBox);
    meshSurface(others, (c) => col(c), { transparent: true }); // everything else: glass
    buildEditMesh(); // edited object: opaque, in 3D
    nodeBox(S.editObject, S.editXform.off, S.editXform.rot, sceneBox); // eachObject skips it
  } else {
    // owner -> a current-context child; otherwise dimmed (descended past).
    const gE = new Map<string, Box3[]>(), gT = new Map<string, Box3[]>();
    const ctxE: Box3[] = [], ctxT: Box3[] = [];
    eachObject(S.root, O, 0, null, 0, (n, off, rot, owner, tr) => {
      const wb = worldBoxesInto(n, off, rot, []);
      growBounds(wb, sceneBox);
      if (owner) {
        const m = tr ? gT : gE, arr = m.get(owner);
        if (arr) arr.push(...wb);
        else m.set(owner, wb);
        growBounds(wb, S.childBox[owner] || (S.childBox[owner] = emptyBox()));
      } else (tr ? ctxT : ctxE).push(...wb);
    });
    meshSurface(ctxE, (c) => dimCol(c), { ao: true });
    meshSurface(ctxT, (c) => dimCol(c), { transparent: true });
    for (const id of new Set([...gE.keys(), ...gT.keys()])) {
      const e = gE.get(id);
      if (e) {
        meshSurface(e, (c) => col(c), { ao: true, pick: true, childId: id });
      }
      const t = gT.get(id);
      if (t) meshSurface(t, (c) => col(c), { transparent: true }); // not pickable
    }
  }
  fitShadow(sceneBox); // anchor the light/shadow frustum to the scene, not the view
  refreshOverlay();
  wake(); // the scene changed — make sure it gets drawn
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
