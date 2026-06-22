// Raycasting: NDC from a pointer, the picked scene child, a point on a horizontal
// plane, the hovered edited-object voxel, and local<->world cell conversions.
import * as THREE from 'three';
import { S } from './state.js';
import { rotY } from './math.js';
import { canvas, camera, raycaster, ndc, _hit } from './scene-env.js';

export function setNdc(cx, cy) {
  const r = canvas.getBoundingClientRect();
  ndc.x = ((cx - r.left) / r.width) * 2 - 1; ndc.y = -((cy - r.top) / r.height) * 2 + 1;
}
export function pickChild() { // only opaque surfaces are pickable (transparent ones are not interactable)
  raycaster.setFromCamera(ndc, camera);
  let best = null, bd = Infinity;
  for (const m of S.pickMeshes) { const h = raycaster.intersectObject(m, false); if (h.length && h[0].distance < bd) { bd = h[0].distance; best = m.userData.childId; } }
  return best;
}
export function groundCell(yWorld) {
  raycaster.setFromCamera(ndc, camera);
  if (raycaster.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), -yWorld), _hit))
    return { x: Math.floor(_hit.x), y: yWorld, z: Math.floor(_hit.z) };
  return null;
}
export function pickVoxel() { // -> {cell, addCell} in object-local space, or null
  if (!S.editMesh) return null;
  raycaster.setFromCamera(ndc, camera);
  const h = raycaster.intersectObject(S.editMesh, false); if (!h.length) return null;
  const lv = S.editMesh.userData.local[h[0].instanceId];
  const n = h[0].face ? h[0].face.normal : new THREE.Vector3(0, 1, 0);
  const ln = rotY({ x: Math.round(n.x), y: Math.round(n.y), z: Math.round(n.z) }, (4 - S.editXform.rot) & 3);
  return { cell: lv, addCell: { x: lv.x + ln.x, y: lv.y + ln.y, z: lv.z + ln.z } };
}
// pointer -> object-local cell on the horizontal plane at the given local Y
export function localGroundCell(localY) {
  const g = groundCell(localY + S.editXform.off.y); if (!g) return null;
  const l = rotY({ x: g.x - S.editXform.off.x, y: 0, z: g.z - S.editXform.off.z }, (4 - S.editXform.rot) & 3);
  return { x: Math.round(l.x), y: localY, z: Math.round(l.z) };
}
// object-local -> world point (edit mode); shared by the box brush and measure
export const locToW = (x, y, z) => {
  const r = rotY({ x, y, z }, S.editXform.rot);
  return new THREE.Vector3(r.x + S.editXform.off.x, r.y + S.editXform.off.y, r.z + S.editXform.off.z);
};
export function voxelTarget() { // local cell for the active voxel tool
  const t = pickVoxel();
  if (S.tool === 'add') return t ? t.addCell : localGroundCell(0);
  return t ? t.cell : null;
}
