// Scene meshing for the box model: gather each object's colour boxes in world
// space and greedily mesh them (boxFaceGeo, see mesh.ts) — one merged quad per
// exposed face rectangle, so cost is O(boxes), not O(surface cells). The edited
// object is meshed on its own in object-local space, rebuilt (rAF-debounced) as
// boxes change. Shading is directional light + cast shadows + smooth per-vertex
// ambient occlusion baked into the face vertices (see mesh.ts) for soft corners.
// "Half-visible" (deemphasized) groups render as opaque solids cut open by a
// per-group camera-facing clipping plane (meshCutGroup / updateCutPlanes).
import * as THREE from "three";
import { S } from "./state.ts";
import { addv, rotY, xcompose } from "./math.ts";
import {
  addBox,
  contains,
  eraseBox,
  fillBox,
  growBounds,
  worldBox,
} from "./boxes.ts";
import { boxFaceGeo } from "./mesh.ts";
import {
  cam,
  camera,
  col,
  dir,
  editGroup,
  matGlassDepth,
  matSurf,
  matTemp,
  ndc,
  overlay,
  raycaster,
  scene,
  wake,
} from "./scene-env.ts";
import { boxEmpty, contextXform, emptyBox, nodeBox } from "./model.ts";
import { cutHeight } from "./cutplane.ts";
import { invalidateField } from "./measure.ts";
import type { Box, Box3, Node, ObjectNode, Region, Rot, Vec } from "./types.ts";

// Fixed key-light direction. Steeper than a "golden-hour" sun (elev ~72°, not
// ~60°) so that objects raised off the floor — e.g. a houseplant's foliage on a
// thin stem — drop their shadow close underneath instead of flinging it a body-
// width away, where it reads as a detached floating blob. The horizontal bias is
// kept (same azimuth) so cube faces still shade with clear light/dark sides.
const LIGHT_DIR = new THREE.Vector3(40, 150, 30).normalize();
function fitShadow(box: Box): void {
  if (boxEmpty(box)) return; // empty scene: keep the prior frustum
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
  // normalBias ~2 shadow texels (texel = 2R/mapSize). Offsetting the receiver
  // along its normal kills self-shadow acne on large near-horizontal faces lit
  // head-on — most visibly the 1-tall floor, which a half-texel bias left
  // speckled — while staying small enough that contact shadows don't peter-pan.
  dir.shadow.normalBias = 4 * R / dir.shadow.mapSize.x;
}

// every scene mesh added by the current rebuild (incl. the edit mesh and glass
// depth-prepass siblings). Render-internal: only this module adds/disposes them,
// so it lives here, not in the shared S object.
let meshes: THREE.Mesh[] = [];
function disposeMeshes(): void {
  // a glass surface and its depth-prepass sibling share one geometry, so track
  // what's been freed to dispose each BufferGeometry exactly once
  const freed = new Set<THREE.BufferGeometry>();
  for (const m of meshes) {
    scene.remove(m);
    const g = m.geometry;
    if (g && !freed.has(g)) {
      g.dispose();
      freed.add(g);
    }
  }
  meshes = [];
  for (const m of cutMats) m.dispose();
  cutMats = [];
  cutGroups = [];
  cutKey = "";
  editPickExtra = [];
  disposeSelWire();
  editGroup.clear();
  if (editRemesh) {
    cancelAnimationFrame(editRemesh);
    editRemesh = 0;
  }
  editMesh = null;
}
// Extra surfaces the edit-mode pointer can pick besides the edited object: the
// "temporarily deemphasized" (more-opaque) neighbours, so an Add can land on
// them. Set each rebuild, kept across edit remeshes (which don't rebuild them).
let editPickExtra: THREE.Mesh[] = [];

// The edited object's surface mesh and its pending rAF id. Render-internal scratch
// (rebuilt on edit, see scheduleEditRemesh) — never read outside this module, and
// not document state, so it lives here rather than in the shared S object.
let editMesh: THREE.Mesh | null = null;
let editRemesh = 0; // pending requestAnimationFrame id, 0 when none
// the voxel-selection box wireframe (object-local, under editGroup so it inherits
// the edit pose). Rebuilt by buildEditMesh alongside the surface mesh.
let selWire: THREE.LineSegments | null = null;
function disposeSelWire(): void {
  if (!selWire) return;
  editGroup.remove(selWire);
  selWire.geometry.dispose();
  (selWire.material as THREE.Material).dispose();
  selWire = null;
}

// Mesh one solid (a world box list) at one of two render tiers and return its
// surface mesh: "opaque" (full colour + AO) or "temp" (translucent, temporarily
// deemphasized). The translucent tier skips AO and gets a depth-prepass sibling
// for clean ordering. Explicitly deemphasized ("half-visible") groups take a
// third path entirely: meshCutGroup below.
type Tier = "opaque" | "temp";
function meshSurface(
  boxes: Box3[],
  colorOf: (c: number) => THREE.Color,
  { tier = "opaque", childId }: {
    tier?: Tier;
    childId?: string; // present => pickable, tagged with this context-child id
  } = {},
): THREE.Mesh | null {
  if (!boxes.length) return null;
  const translucent = tier !== "opaque";
  const g = boxFaceGeo(boxes, colorOf, !translucent);
  if (!g) return null;
  const m = new THREE.Mesh(g, tier === "temp" ? matTemp : matSurf);
  m.castShadow = true;
  m.receiveShadow = true;
  scene.add(m);
  meshes.push(m);
  if (translucent) {
    // depth-only sibling: lays down the nearest-surface depth before the colour pass
    m.renderOrder = 2;
    const dp = new THREE.Mesh(g, matGlassDepth);
    dp.renderOrder = 1;
    dp.castShadow = false;
    dp.receiveShadow = false;
    scene.add(dp);
    meshes.push(dp);
  }
  if (childId != null) {
    m.userData.childId = childId;
    S.pickMeshes.push(m);
    (S.childMeshes[childId] || (S.childMeshes[childId] = [])).push(m);
  }
  return m;
}

// ---- "half-visible" cutaway groups ----
// Each deemphasized group is rendered whole — an opaque surface plus a flat-
// coloured BackSide sibling standing in for the solid interior the cut exposes —
// and clipped by a single camera-facing plane. updateCutPlanes re-aims the
// planes as the camera turns so the kept half is the largest depth-slab that
// covers no fully-visible geometry (see cutplane.ts). cutOccluders is that
// fully-visible geometry in world space, captured each rebuild; the edited
// object is appended live since its boxes change without a rebuild.
type CutGroup = { boxes: Box3[]; aabb: Box; plane: THREE.Plane };
let cutGroups: CutGroup[] = [];
let cutMats: THREE.Material[] = []; // per-group materials (each holds its plane)
let cutOccluders: Box3[] = [];
let cutKey = ""; // azim/elev/voxVer snapshot the current planes were aimed for
const CUT_INSIDE = 0x66594e; // flat colour of solids revealed inside the cut
function meshCutGroup(boxes: Box3[]): void {
  const g = boxFaceGeo(boxes, col, true);
  if (!g) return;
  const plane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 1e9); // aimed by updateCutPlanes
  const surf = new THREE.MeshLambertMaterial({
    vertexColors: true,
    side: THREE.FrontSide,
    clippingPlanes: [plane],
    clipShadows: true, // the discarded half must not shade the revealed interior
  });
  const m = new THREE.Mesh(g, surf);
  m.castShadow = m.receiveShadow = true;
  scene.add(m);
  meshes.push(m);
  // back faces of the same shell, flat-coloured: looking past the cut you see
  // the shell's inner surface as solid "cut material" instead of through it
  const inside = new THREE.MeshLambertMaterial({
    color: CUT_INSIDE,
    side: THREE.BackSide,
    clippingPlanes: [plane],
  });
  const im = new THREE.Mesh(g, inside);
  scene.add(im);
  meshes.push(im);
  cutMats.push(surf, inside);
  const aabb = emptyBox();
  growBounds(boxes, aabb);
  cutGroups.push({ boxes, aabb, plane });
}
// Re-aim every cut group's clipping plane for the current camera angle (called
// each rendered frame; cheap). Cached on (angle, geometry version): with an
// orthographic camera, pan and zoom can't change what covers what.
export function updateCutPlanes(): void {
  if (!cutGroups.length) return;
  const key = `${cam.azim.toFixed(3)}/${cam.elev.toFixed(3)}/${S.voxVer}`;
  if (key === cutKey) return;
  cutKey = key;
  const ce = Math.cos(cam.elev); // unit view axis, pointing at the camera
  const k = {
    x: ce * Math.sin(cam.azim),
    y: Math.sin(cam.elev),
    z: ce * Math.cos(cam.azim),
  };
  let occ = cutOccluders;
  if (S.editObject) {
    occ = occ.concat(
      S.editObject.boxes.map((b) =>
        worldBox(b, S.editXform.rot, S.editXform.off)
      ),
    );
  }
  for (const g of cutGroups) {
    // clipping keeps distanceToPoint = normal·p + constant ≥ 0, i.e. p·k ≤ H
    g.plane.normal.set(-k.x, -k.y, -k.z);
    g.plane.constant = Math.min(cutHeight(g.boxes, g.aabb, occ, k), 1e9);
  }
}

// Visit every visible object (skipping the one being edited) with its
// accumulated world transform, the context child it belongs to (owner) and the
// topmost deemphasized node covering it (dRoot: the "half-visible" cut group it
// renders under, or null when fully visible). The single traversal behind
// meshing, collision and measuring.
export type ObjCb = (
  node: ObjectNode,
  off: Vec,
  rot: Rot,
  owner: string | null,
  dRoot: string | null,
) => void;
export function eachObject(
  node: Node,
  off: Vec,
  rot: Rot,
  owner: string | null,
  dRoot: string | null,
  cb: ObjCb,
): void {
  if (node === S.editObject || node.vis === "hidden") return;
  const dr = dRoot ?? (node.vis === "deemphasized" ? node.id : null);
  if (node.type === "object") cb(node, off, rot, owner, dr);
  else {
    for (const ch of node.children) {
      eachObject(
        ch,
        addv(off, rotY(ch.pos, rot)),
        (rot + ch.rot) & 3,
        node === S.context ? ch.id : owner,
        dr,
        cb,
      );
    }
  }
}
// append to (and lazily create) a keyed box list — the per-group accumulators
const groupInto = (m: Map<string, Box3[]>, id: string): Box3[] => {
  let a = m.get(id);
  if (!a) m.set(id, a = []);
  return a;
};
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
function buildEditMesh(): void {
  const { off, rot } = S.editXform;
  editGroup.position.set(off.x, off.y, off.z);
  editGroup.rotation.set(0, -rot * Math.PI / 2, 0); // rotY(v,rot) == Y-rotation by -rot·90°
  editGroup.updateMatrixWorld(true);
  if (editMesh) {
    editGroup.remove(editMesh);
    editMesh.geometry.dispose();
    const i = meshes.indexOf(editMesh);
    if (i >= 0) meshes.splice(i, 1);
  }
  // mesh the object's voxels, plus a lifted (floating) selection's content so it
  // stays visible while it is dragged/rotated out of the object
  const sel = S.sel3d;
  const meshBoxes = sel && sel.lifted
    ? S.editObject!.boxes.concat(sel.boxes)
    : S.editObject!.boxes;
  const g = boxFaceGeo(meshBoxes, col, true);
  editMesh = g ? new THREE.Mesh(g, matSurf) : null;
  if (editMesh) {
    editMesh.castShadow = editMesh.receiveShadow = true;
    editGroup.add(editMesh);
    meshes.push(editMesh);
  }
  // the edited object plus the temporarily-deemphasized neighbours are pickable,
  // so an Add can land against either (the more-transparent ones are excluded)
  S.pickMeshes = editMesh ? [editMesh, ...editPickExtra] : [...editPickExtra];
  if (sel) buildSelWire(sel.region);
  else disposeSelWire();
}
// the selection marquee as a box wireframe in object-local space
function buildSelWire(r: Region): void {
  disposeSelWire();
  const bg = new THREE.BoxGeometry(r.x1 - r.x0, r.y1 - r.y0, r.z1 - r.z0);
  const w = new THREE.LineSegments(
    new THREE.EdgesGeometry(bg),
    new THREE.LineBasicMaterial({ color: 0xffd479, depthTest: false }),
  );
  bg.dispose();
  w.position.set((r.x0 + r.x1) / 2, (r.y0 + r.y1) / 2, (r.z0 + r.z1) / 2);
  w.renderOrder = 1000;
  editGroup.add(w);
  selWire = w;
}
export function scheduleEditRemesh(): void {
  if (editRemesh) return;
  editRemesh = requestAnimationFrame(() => {
    editRemesh = 0;
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
// erase carves; fill (below) flood-fills a connected same-colour region.
export function editAdd(r: Region, c: number): void {
  S.editObject!.boxes = addBox(S.editObject!.boxes, r, c);
  afterEdit();
}
export function editErase(r: Region): void {
  S.editObject!.boxes = eraseBox(S.editObject!.boxes, r);
  afterEdit();
}
// Lay a whole box list (each with its own colour) onto the edited object — the
// paste/drop side of the selection tool.
export function editStamp(boxes: Box3[]): void {
  let bs = S.editObject!.boxes;
  for (const b of boxes) bs = addBox(bs, b, b.c);
  S.editObject!.boxes = bs;
  afterEdit();
}
// Flood-fill the connected same-colour region containing `cell` with colour `c`.
// Returns whether anything actually changed (false for an empty seed cell or a
// region already that colour), so callers can skip side effects on a no-op.
export function editFill(cell: Vec, c: number): boolean {
  const next = fillBox(S.editObject!.boxes, cell.x, cell.y, cell.z, c);
  if (!next) return false; // empty seed cell or already that colour — nothing to do
  S.editObject!.boxes = next;
  afterEdit();
  return true;
}
// Eyedropper: the colour of the voxel under the pointer, picking from ANY visible
// solid (the edited object or other scene objects), or null when over empty space.
// We raycast every current mesh, step half a voxel along the view ray into the
// front-most surface to land inside its cell, then look that world cell up against
// every visible object's world boxes.
export function eyedropColor(): number | null {
  if (!meshes.length) return null;
  raycaster.setFromCamera(ndc, camera);
  const h = raycaster.intersectObjects(meshes, false)[0];
  if (!h) return null;
  const d = raycaster.ray.direction;
  const cx = Math.floor(h.point.x + d.x * 0.5),
    cy = Math.floor(h.point.y + d.y * 0.5),
    cz = Math.floor(h.point.z + d.z * 0.5);
  const colorAt = (boxes: Box3[], off: Vec, rot: Rot): number | null => {
    // world cell -> object-local (the inverse of worldBox's cell mapping), so
    // each box is tested in place instead of being transformed to world
    const l = rotY({ x: cx - off.x, y: cy - off.y, z: cz - off.z }, -rot);
    for (const b of boxes) if (contains(b, l.x, l.y, l.z)) return b.c;
    return null;
  };
  // edited object first (it's the opaque front surface), then everyone else
  if (S.editObject) {
    const c = colorAt(S.editObject.boxes, S.editXform.off, S.editXform.rot);
    if (c != null) return c;
  }
  let result: number | null = null;
  eachObject(S.root, { x: 0, y: 0, z: 0 }, 0, null, null, (n, off, rot) => {
    if (result == null) result = colorAt(n.boxes, off, rot);
  });
  return result;
}

// context-child owner ids rendered deemphasized (explicitly, independent of
// selection), refreshed every scene-mode rebuild. selectionRender() uses it to
// decide whether a selection change needs a re-mesh (a selected deemphasized
// object is drawn opaque) or just a cheap overlay refresh.
const deemphOwners = new Set<string>();
// Reflect a selection change: re-mesh only when a deemphasized owner's selected-
// state flipped (so it switches between opaque and translucent); otherwise just
// redraw the selection outlines. `prevSel` is the selection set before the change.
export function selectionRender(prevSel: Set<string>): void {
  for (const id of deemphOwners) {
    if (prevSel.has(id) !== S.selection.has(id)) {
      rebuild();
      return;
    }
  }
  refreshOverlay();
}

export function rebuild(): void {
  disposeMeshes();
  S.pickMeshes = [];
  S.childMeshes = {};
  S.childBox = {};
  deemphOwners.clear();
  S.voxVer++;
  invalidateField();
  const O = { x: 0, y: 0, z: 0 };
  const sceneBox = emptyBox(); // world bounds of all geometry, for shadow fitting

  if (S.editObject) {
    S.editXform = xcompose(contextXform(), {
      off: S.editObject.pos,
      rot: S.editObject.rot,
    });
    // Everything else is outside the focus: fully-visible objects go
    // "temporarily deemphasized" — more opaque, and still pickable so an Add
    // can land against them — while "half-visible" (deemphasized) groups render
    // as plane-cut solids, not pickable.
    const tempO: Box3[] = [];
    const cut = new Map<string, Box3[]>();
    eachObject(
      S.root,
      O,
      0,
      null,
      null,
      (n, off, rot, _owner, dRoot) =>
        worldBoxesInto(n, off, rot, dRoot ? groupInto(cut, dRoot) : tempO),
    );
    growBounds(tempO, sceneBox);
    const tm = meshSurface(tempO, col, { tier: "temp" });
    editPickExtra = tm ? [tm] : [];
    for (const boxes of cut.values()) {
      growBounds(boxes, sceneBox);
      meshCutGroup(boxes);
    }
    cutOccluders = tempO; // + the edited object, appended live in updateCutPlanes
    buildEditMesh(); // edited object: opaque, in 3D
    nodeBox(S.editObject, S.editXform.off, S.editXform.rot, sceneBox); // eachObject skips it
  } else {
    // owner -> a current-context child (in focus, full colour); otherwise it's
    // outside the open group, so "temporarily deemphasized" (more opaque). A
    // "half-visible" (deemphasized) group instead renders as a plane-cut solid,
    // grouped under the node that set the state.
    const gFocus = new Map<string, Box3[]>();
    const cut = new Map<string, Box3[]>();
    const outTemp: Box3[] = [], occ: Box3[] = [];
    eachObject(S.root, O, 0, null, null, (n, off, rot, owner, dRoot) => {
      const wb = worldBoxesInto(n, off, rot, []);
      growBounds(wb, sceneBox);
      let dr = dRoot;
      if (owner) {
        if (dr) {
          deemphOwners.add(owner); // explicitly deemphasized (selection-independent)
          // a selected deemphasized object renders opaque so it stays pickable
          // and its meshes are tracked (childMeshes) — otherwise it can't be
          // clicked and doesn't follow the pointer while being dragged
          if (S.selection.has(owner)) dr = null;
        }
        growBounds(wb, S.childBox[owner] || (S.childBox[owner] = emptyBox()));
      }
      if (dr) groupInto(cut, dr).push(...wb);
      else {
        occ.push(...wb); // rendered fully — constrains the cut planes
        if (owner) groupInto(gFocus, owner).push(...wb);
        else outTemp.push(...wb);
      }
    });
    meshSurface(outTemp, col, { tier: "temp" }); // outside the group: more opaque
    for (const [id, boxes] of gFocus) {
      meshSurface(boxes, col, { childId: id }); // in focus: opaque + pickable
    }
    for (const boxes of cut.values()) meshCutGroup(boxes); // half-visible: plane-cut
    cutOccluders = occ;
  }
  S.sceneBox = sceneBox; // camera depth range reads this (see updateCamera)
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
    // skip the empty-box sentinel (a selected object with no voxels) — its
    // min>max would build a degenerate scene-spanning wireframe
    if (b && !boxEmpty(b)) overlay.add(boxLines(b.min, b.max, 0xf0e6d2));
  }
}
