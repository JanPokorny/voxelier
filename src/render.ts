// Scene meshing for the box model: gather each object's colour boxes in world
// space and greedily mesh them (boxFaceGeo) — one merged quad per exposed face
// rectangle, so cost is O(boxes), not O(surface cells). The edited object is
// meshed on its own in object-local space, rebuilt (rAF-debounced) as boxes
// change. (Trade-off: no baked per-cell edge AO; shading is directional + shadows.)
import * as THREE from "three";
import { S } from "./state.ts";
import { addv, rotY, xcompose } from "./math.ts";
import {
  addBox,
  buildIndex,
  eraseBox,
  growBounds,
  paintBox,
  worldBox,
} from "./boxes.ts";
import {
  boxGeo,
  col,
  dimCol,
  dir,
  editGroup,
  matGlass,
  matGlassDepth,
  matSurf,
  overlay,
  scene,
  wake,
} from "./scene-env.ts";
import { contextXform, emptyBox, nodeBox, VIS } from "./model.ts";
import { invalidateField } from "./measure.ts";
import type { Box, Box3, Node, ObjectNode, Region, Rot, Vec } from "./types.ts";

// Fixed key-light direction. Steeper than a "golden-hour" sun (elev ~72°, not
// ~60°) so that objects raised off the floor — e.g. a houseplant's foliage on a
// thin stem — drop their shadow close underneath instead of flinging it a body-
// width away, where it reads as a detached floating blob. The horizontal bias is
// kept (same azimuth) so cube faces still shade with clear light/dark sides.
const LIGHT_DIR = new THREE.Vector3(40, 150, 30).normalize();
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
  // bias ~half a shadow texel (texel = 2R / mapSize): enough to avoid acne but
  // small enough that the shadow still meets contact edges (no light rim)
  dir.shadow.normalBias = R / dir.shadow.mapSize.x;
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

// Greedy box-face mesher: one merged quad per exposed face rectangle, so cost is
// O(boxes), not O(surface cells) — a 1000³ box is six quads, not six million.
// The six faces, each as { axis, high side, the two in-plane axes ordered so the
// quad winds CCW toward an outward normal }.
const FACE6 = [
  { a: 0, hi: true, u: 1, v: 2, n: [1, 0, 0] },
  { a: 0, hi: false, u: 2, v: 1, n: [-1, 0, 0] },
  { a: 1, hi: true, u: 2, v: 0, n: [0, 1, 0] },
  { a: 1, hi: false, u: 0, v: 2, n: [0, -1, 0] },
  { a: 2, hi: true, u: 0, v: 1, n: [0, 0, 1] },
  { a: 2, hi: false, u: 1, v: 0, n: [0, 0, -1] },
] as const;
type Rect = [number, number, number, number]; // [u0, v0, u1, v1]
// brightness by number of occluding outside-layer cells around a face vertex
// (0 = open -> full bright, 3 = deep concave corner -> darkest), matching the old
// baked edge AO ramp.
const AO4 = [1.0, 0.88, 0.74, 0.5];
function boxFaceGeo(
  boxes: Box3[],
  colorOf: (c: number) => THREE.Color,
  ao: boolean,
): THREE.BufferGeometry | null {
  const pos: number[] = [], nor: number[] = [], colr: number[] = [];
  const lo = boxes.map((b) => [b.x0, b.y0, b.z0]);
  const hi = boxes.map((b) => [b.x1, b.y1, b.z1]);
  const has = ao ? buildIndex(boxes) : null; // for AO occluder sampling
  for (let i = 0; i < boxes.length; i++) {
    const c = colorOf(boxes[i].c), cr = c.r, cg = c.g, cb = c.b;
    const blo = lo[i], bhi = hi[i];
    for (const f of FACE6) {
      const { a, u, v } = f, plane = f.hi ? bhi[a] : blo[a];
      const wo = f.hi ? plane : plane - 1; // outside cell layer, for AO sampling
      // faces of neighbouring boxes that abut (and so hide) this one
      const covers: Rect[] = [];
      for (let j = 0; j < boxes.length; j++) {
        if (j === i) continue;
        if ((f.hi ? lo[j][a] : hi[j][a]) !== plane) continue; // not abutting
        const u0 = Math.max(lo[j][u], blo[u]), u1 = Math.min(hi[j][u], bhi[u]);
        const v0 = Math.max(lo[j][v], blo[v]), v1 = Math.min(hi[j][v], bhi[v]);
        if (u0 < u1 && v0 < v1) covers.push([u0, v0, u1, v1]);
      }
      // face rectangle minus the covered rectangles -> exposed sub-rectangles
      let pieces: Rect[] = [[blo[u], blo[v], bhi[u], bhi[v]]];
      for (const cv of covers) {
        const next: Rect[] = [];
        for (const p of pieces) {
          const iu0 = Math.max(p[0], cv[0]),
            iv0 = Math.max(p[1], cv[1]),
            iu1 = Math.min(p[2], cv[2]),
            iv1 = Math.min(p[3], cv[3]);
          if (iu0 >= iu1 || iv0 >= iv1) {
            next.push(p);
            continue;
          }
          if (p[0] < iu0) next.push([p[0], p[1], iu0, p[3]]);
          if (iu1 < p[2]) next.push([iu1, p[1], p[2], p[3]]);
          if (p[1] < iv0) next.push([iu0, p[1], iu1, iv0]);
          if (iv1 < p[3]) next.push([iu0, iv1, iu1, p[3]]);
        }
        pieces = next;
        if (!pieces.length) break;
      }
      // Flat per-cell AO on a 1-cell border ring (interior stays one bright
      // quad). Flat shading -> no cross-cell interpolation, so split seams and
      // convex edges read identically on both sides — no stray light/dark lines.
      const occAt = (cu: number, cv: number): number => {
        let n = 0;
        const cell = [0, 0, 0];
        cell[a] = wo;
        for (let du = -1; du <= 0; du++) {
          for (let dv = -1; dv <= 0; dv++) {
            cell[u] = cu + du;
            cell[v] = cv + dv;
            if (has!(cell[0], cell[1], cell[2])) n++;
          }
        }
        return n;
      };
      const cellBright = (cu: number, cv: number): number =>
        (AO4[Math.min(occAt(cu, cv), 3)] +
          AO4[Math.min(occAt(cu + 1, cv), 3)] +
          AO4[Math.min(occAt(cu + 1, cv + 1), 3)] +
          AO4[Math.min(occAt(cu, cv + 1), 3)]) / 4;
      const quad = (
        qu0: number,
        qv0: number,
        qu1: number,
        qv1: number,
        br: number,
      ) => {
        const o = [0, 0, 0];
        const P = (uu: number, vv: number): [number, number, number] => {
          o[a] = plane;
          o[u] = uu;
          o[v] = vv;
          return [o[0], o[1], o[2]];
        };
        const A = P(qu0, qv0),
          B = P(qu1, qv0),
          C = P(qu1, qv1),
          D = P(qu0, qv1);
        const R = cr * br, G = cg * br, Bl = cb * br;
        for (const q of [A, B, C, A, C, D]) {
          pos.push(q[0], q[1], q[2]);
          nor.push(f.n[0], f.n[1], f.n[2]);
          colr.push(R, G, Bl);
        }
      };
      for (const p of pieces) {
        const [pu0, pv0, pu1, pv1] = p;
        if (!has) { // glass: no AO, one quad
          quad(pu0, pv0, pu1, pv1, 1);
          continue;
        }
        const cell = (cu: number, cv: number) =>
          quad(cu, cv, cu + 1, cv + 1, cellBright(cu, cv));
        for (let cu = pu0; cu < pu1; cu++) { // bottom & top rows of the ring
          cell(cu, pv0);
          if (pv1 - 1 > pv0) cell(cu, pv1 - 1);
        }
        for (let cv = pv0 + 1; cv < pv1 - 1; cv++) { // left & right columns
          cell(pu0, cv);
          if (pu1 - 1 > pu0) cell(pu1 - 1, cv);
        }
        if (pu0 + 1 < pu1 - 1 && pv0 + 1 < pv1 - 1) {
          quad(pu0 + 1, pv0 + 1, pu1 - 1, pv1 - 1, 1); // bright interior
        }
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

// Mesh one solid (a world box list) as a surface; transparent ones read as glass
// (and skip AO).
function meshSurface(
  boxes: Box3[],
  colorOf: (c: number) => THREE.Color,
  { transparent = false, pick = false, childId = null }: {
    transparent?: boolean;
    pick?: boolean;
    childId?: string | null;
  } = {},
): THREE.Mesh | null {
  if (!boxes.length) return null;
  const g = boxFaceGeo(boxes, colorOf, !transparent);
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
  const g = boxFaceGeo(S.editObject!.boxes, col, true);
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
    meshSurface(ctxE, (c) => dimCol(c));
    meshSurface(ctxT, (c) => dimCol(c), { transparent: true });
    for (const id of new Set([...gE.keys(), ...gT.keys()])) {
      const e = gE.get(id);
      if (e) {
        meshSurface(e, (c) => col(c), { pick: true, childId: id });
      }
      const t = gT.get(id);
      if (t) meshSurface(t, (c) => col(c), { transparent: true }); // not pickable
    }
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
    if (b) overlay.add(boxLines(b.min, b.max, 0xf0e6d2));
  }
}
