// Raycasting: NDC from a pointer, the picked scene child, a point on a horizontal
// plane, the hovered edited-object voxel, and local<->world cell conversions.
import * as THREE from "three";
import { S } from "./state.ts";
import { rotY } from "./math.ts";
import { _hit, camera, canvas, ndc, raycaster } from "./scene-env.ts";
import type { Vec } from "./types.ts";

// a hovered voxel resolved to its own cell plus the empty cell adjacent to the
// hit face (where an "add" would place), or null when nothing is under the cursor
export type Pick = { cell: Vec; addCell: Vec } | null;

export function setNdc(cx: number, cy: number): void {
  const r = canvas.getBoundingClientRect();
  ndc.x = ((cx - r.left) / r.width) * 2 - 1;
  ndc.y = -((cy - r.top) / r.height) * 2 + 1;
}
export function pickChild(): string | null { // only opaque surfaces are pickable (transparent ones are not interactable)
  raycaster.setFromCamera(ndc, camera);
  const h = raycaster.intersectObjects(S.pickMeshes, false); // sorted nearest-first
  return h.length ? (h[0].object.userData.childId ?? null) : null;
}
const _plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); // y-up, constant set per call
export function groundCell(yWorld: number): Vec | null {
  raycaster.setFromCamera(ndc, camera);
  _plane.constant = -yWorld;
  if (raycaster.ray.intersectPlane(_plane, _hit)) {
    return { x: Math.floor(_hit.x), y: yWorld, z: Math.floor(_hit.z) };
  }
  return null;
}
export function pickVoxel(): Pick { // -> {cell, addCell} in object-local space, or null
  if (!S.pickMeshes.length) return null;
  raycaster.setFromCamera(ndc, camera);
  const hits = raycaster.intersectObjects(S.pickMeshes, false);
  if (!hits.length) return null;
  const h = hits[0];
  // chunk geometry is built in object-local space (editGroup carries the pose), so
  // the face normal is already local; convert the world hit point back to local.
  const off = S.editXform.off;
  const lp = rotY({
    x: h.point.x - off.x,
    y: h.point.y - off.y,
    z: h.point.z - off.z,
  }, -S.editXform.rot); // inverse rotation (rotY normalises the negative count)
  const n = h.face ? h.face.normal : { x: 0, y: 1, z: 0 };
  const sx = Math.floor(lp.x - n.x * 0.5),
    sy = Math.floor(lp.y - n.y * 0.5),
    sz = Math.floor(lp.z - n.z * 0.5);
  return {
    cell: { x: sx, y: sy, z: sz },
    addCell: {
      x: sx + Math.round(n.x),
      y: sy + Math.round(n.y),
      z: sz + Math.round(n.z),
    },
  };
}
// pointer -> object-local cell on the horizontal plane at the given local Y
export function localGroundCell(localY: number): Vec | null {
  const g = groundCell(localY + S.editXform.off.y);
  if (!g) return null;
  const l = rotY({
    x: g.x - S.editXform.off.x,
    y: 0,
    z: g.z - S.editXform.off.z,
  }, -S.editXform.rot);
  return { x: Math.round(l.x), y: localY, z: Math.round(l.z) };
}
// object-local -> world point (edit mode); shared by the box brush and measure
export const locToW = (x: number, y: number, z: number): THREE.Vector3 => {
  const r = rotY({ x, y, z }, S.editXform.rot);
  return new THREE.Vector3(
    r.x + S.editXform.off.x,
    r.y + S.editXform.off.y,
    r.z + S.editXform.off.z,
  );
};
export function voxelTarget(t: Pick = pickVoxel()): Vec | null { // local cell for the active voxel tool
  if (S.tool === "add") return t ? t.addCell : localGroundCell(0);
  return t ? t.cell : null;
}
