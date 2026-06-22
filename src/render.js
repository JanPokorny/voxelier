// Scene meshing: gather world voxels (walk), build instanced/surface meshes with
// baked edge AO or glass, and (re)build the whole scene or just the edited object.
import * as THREE from 'three';
import { S } from './state.js';
import { addv, rotY, parseKey, xcompose } from './math.js';
import { scene, boxGeo, matSolid, matSurf, matGlass, matGlassDepth, FACE, AO, overlay, col, dimCol, _m } from './scene-env.js';
import { VIS, contextXform, emptyBox, growBox } from './model.js';
import { invalidateField } from './measure.js';

export function disposeMeshes() { for (const m of S.meshes) { scene.remove(m); if (m.geometry && m.geometry !== boxGeo) m.geometry.dispose(); m.dispose?.(); } S.meshes = []; }

// instanced cubes — used only for the object being voxel-edited
export function addMesh(arr, colorOf, { pick = false, childId = null } = {}) {
  if (!arr.length) return null;
  const m = new THREE.InstancedMesh(boxGeo, matSolid, arr.length);
  for (let i = 0; i < arr.length; i++) {
    const d = arr[i];
    _m.makeTranslation(d.x + 0.5, d.y + 0.5, d.z + 0.5); m.setMatrixAt(i, _m); m.setColorAt(i, colorOf(d.c));
  }
  m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true;
  m.castShadow = m.receiveShadow = true;
  scene.add(m); S.meshes.push(m);
  if (pick) { m.userData.childId = childId; m.userData.emph = true; S.pickMeshes.push(m); (S.childMeshes[childId] || (S.childMeshes[childId] = [])).push(m); }
  return m;
}

// A surface of only the exterior faces. Opaque surfaces bake per-vertex edge
// ambient occlusion into the vertex colours; transparent ones read as glass.
export function addSurface(arr, colorOf, { transparent = false, ao = false, pick = false, childId = null } = {}) {
  if (!arr.length) return null;
  const set = new Set(); for (const d of arr) set.add(d.x + ',' + d.y + ',' + d.z);
  const has = (x, y, z) => set.has(x + ',' + y + ',' + z);
  const pos = [], nor = [], colr = [];
  for (const d of arr) {
    const c = colorOf(d.c);
    for (const f of FACE) {
      const nx = d.x + f.d[0], ny = d.y + f.d[1], nz = d.z + f.d[2];
      if (has(nx, ny, nz)) continue;                                   // hidden internal face
      const na = f.a, nb = f.b;                                        // the two in-plane axes
      const vert = [];
      for (const w of f.v) {
        let b = 1;
        if (ao) {
          const sa = w[na] ? 1 : -1, sb = w[nb] ? 1 : -1;
          const pa = [nx, ny, nz]; pa[na] += sa;
          const pb = [nx, ny, nz]; pb[nb] += sb;
          const pc = [nx, ny, nz]; pc[na] += sa; pc[nb] += sb;
          const A = has(pa[0], pa[1], pa[2]), B = has(pb[0], pb[1], pb[2]), C = has(pc[0], pc[1], pc[2]);
          b = AO[(A && B) ? 0 : 3 - ((A ? 1 : 0) + (B ? 1 : 0) + (C ? 1 : 0))];
        }
        vert.push([d.x + w[0], d.y + w[1], d.z + w[2], c.r * b, c.g * b, c.b * b]);
      }
      for (const i of [0, 1, 2, 0, 2, 3]) {
        const v = vert[i];
        pos.push(v[0], v[1], v[2]); nor.push(f.d[0], f.d[1], f.d[2]); colr.push(v[3], v[4], v[5]);
      }
    }
  }
  if (!pos.length) return null;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(colr, 3));
  const m = new THREE.Mesh(g, transparent ? matGlass : matSurf); m.castShadow = true; m.receiveShadow = true;
  scene.add(m); S.meshes.push(m);
  if (transparent) {
    // depth-only sibling: lays down the nearest-glass depth before the colour pass
    m.renderOrder = 2;
    const dp = new THREE.Mesh(g, matGlassDepth); dp.renderOrder = 1; dp.castShadow = false; dp.receiveShadow = false;
    scene.add(dp); S.meshes.push(dp);
  }
  if (pick) { m.userData.childId = childId; m.userData.emph = !transparent; S.pickMeshes.push(m); (S.childMeshes[childId] || (S.childMeshes[childId] = [])).push(m); }
  return m;
}

// gather every world voxel (skipping the object being edited).
//   tr    = effectively transparent (this node or an ancestor is transparent)
//   owner = id of the current context's direct child this voxel belongs to
export function walk(node, off, rot, owner, vis, out) {
  const ev = Math.max(vis, VIS[node.vis || 'visible']);
  if (node === S.editObject || ev >= 2) return;                  // invisible -> skip
  const tr = ev === 1;
  if (node.type === 'object') {
    for (const [k, c] of node.voxels) { const w = addv(rotY(parseKey(k), rot), off); out.push({ x: w.x, y: w.y, z: w.z, c, owner, tr }); }
  } else for (const ch of node.children) {
    walk(ch, addv(off, rotY(ch.pos, rot)), (rot + ch.rot) & 3, (node === S.context) ? ch.id : owner, ev, out);
  }
}

export function editVoxels() { // edited object's voxels in world space + parallel local list
  const evox = [], local = [];
  for (const [k, c] of S.editObject.voxels) { const lv = parseKey(k); const w = addv(rotY(lv, S.editXform.rot), S.editXform.off); evox.push({ x: w.x, y: w.y, z: w.z, c }); local.push(lv); }
  return { evox, local };
}
// (re)build the edited object's opaque instanced mesh and make it the pick target
export function buildEditMesh() {
  const { evox, local } = editVoxels();
  S.editMesh = addMesh(evox, c => col(c), {}); if (S.editMesh) S.editMesh.userData.local = local;
  S.pickMeshes = S.editMesh ? [S.editMesh] : [];
}

export function rebuild() {
  disposeMeshes(); S.pickMeshes = []; S.childMeshes = {}; S.childBox = {}; S.editMesh = null; invalidateField();
  const all = []; walk(S.root, { x: 0, y: 0, z: 0 }, 0, null, 0, all);

  if (S.editObject) {
    S.editXform = xcompose(contextXform(), { off: S.editObject.pos, rot: S.editObject.rot });
    addSurface(all, c => col(c), { transparent: true });                  // everything else: transparent
    buildEditMesh();                                                      // edited object: opaque, in 3D
  } else {
    // owner -> current context's children; otherwise dimmed (descended past).
    const gE = {}, gT = {}, ctxE = [], ctxT = [];
    for (const v of all) {
      if (v.owner) {
        (v.tr ? (gT[v.owner] || (gT[v.owner] = [])) : (gE[v.owner] || (gE[v.owner] = []))).push(v);
        growBox(S.childBox[v.owner] || (S.childBox[v.owner] = emptyBox()), v.x, v.y, v.z);
      } else (v.tr ? ctxT : ctxE).push(v);
    }
    addSurface(ctxE, c => dimCol(c), { ao: true }); addSurface(ctxT, c => dimCol(c), { transparent: true });
    for (const id of new Set([...Object.keys(gE), ...Object.keys(gT)])) {
      if (gE[id]) addSurface(gE[id], c => col(c), { ao: true, pick: true, childId: id });
      if (gT[id]) addSurface(gT[id], c => col(c), { transparent: true });   // transparent: not pickable
    }
  }
  refreshOverlay();
}
export function rebuildEdit() { // fast path while painting (the transparent rest is unchanged)
  if (S.editMesh) { scene.remove(S.editMesh); S.editMesh.dispose?.(); const i = S.meshes.indexOf(S.editMesh); if (i >= 0) S.meshes.splice(i, 1); }
  buildEditMesh();
}

// ---- overlay outlines ----
function boxLines(min, max, color) {
  const g = new THREE.BoxGeometry(max.x - min.x, max.y - min.y, max.z - min.z);
  const e = new THREE.LineSegments(new THREE.EdgesGeometry(g), new THREE.LineBasicMaterial({ color, depthTest: false }));
  e.position.set((min.x + max.x) / 2, (min.y + max.y) / 2, (min.z + max.z) / 2); e.renderOrder = 999; g.dispose(); return e;
}
export function refreshOverlay() {
  for (const c of overlay.children) c.geometry.dispose?.();
  overlay.clear(); overlay.position.set(0, 0, 0);
  if (S.editObject) return;
  for (const id of S.selection) { const b = S.childBox[id]; if (b) overlay.add(boxLines(b.min, b.max, 0xf0e6d2)); }
}
