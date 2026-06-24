// Raycasting: NDC from a pointer, the picked scene child, a point on a horizontal
// plane, the hovered edited-object voxel, and local<->world cell conversions.
import * as THREE from "three";
import { S } from "./state.ts";
import { addv, rotY } from "./math.ts";
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
// nearest pickable-surface hit under the pointer (opaque meshes only), or null
const firstHit = (): THREE.Intersection | null => {
  if (!S.pickMeshes.length) return null;
  raycaster.setFromCamera(ndc, camera);
  return raycaster.intersectObjects(S.pickMeshes, false)[0] ?? null; // nearest-first
};
export function pickChild(): string | null { // only opaque surfaces are pickable (transparent ones are not interactable)
  const h = firstHit();
  return h ? (h.object.userData.childId ?? null) : null;
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
// the cell a hit point lands in: step back half a voxel along the face normal,
// then floor. point and normal must be in the same space.
export const cellOf = (p: Vec, n: Vec): Vec => ({
  x: Math.floor(p.x - n.x * 0.5),
  y: Math.floor(p.y - n.y * 0.5),
  z: Math.floor(p.z - n.z * 0.5),
});
export function pickVoxel(): Pick { // -> {cell, addCell} in object-local space, or null
  const h = firstHit();
  if (!h) return null;
  // chunk geometry is built in object-local space (editGroup carries the pose), so
  // the face normal is already local; convert the world hit point back to local.
  const off = S.editXform.off;
  const lp = rotY({
    x: h.point.x - off.x,
    y: h.point.y - off.y,
    z: h.point.z - off.z,
  }, -S.editXform.rot); // inverse rotation (rotY normalises the negative count)
  const n = h.face ? h.face.normal : { x: 0, y: 1, z: 0 };
  const s = cellOf(lp, n);
  return {
    cell: s,
    addCell: {
      x: s.x + Math.round(n.x),
      y: s.y + Math.round(n.y),
      z: s.z + Math.round(n.z),
    },
  };
}
// pointer -> world cell (scene/measure mode): the picked opaque surface cell,
// else the ground-plane cell at y=0. World-space counterpart of pickVoxel().cell
// / localGroundCell used in edit mode.
export function worldCell(): Vec | null {
  const h = firstHit();
  if (!h) return groundCell(0);
  return cellOf(h.point, h.face ? h.face.normal : { x: 0, y: 1, z: 0 });
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
// pointer -> object-local cell on the plane perpendicular to local axis `a`
// (0=x,1=y,2=z) at local coord `k`. A 90° Y-rotation maps a local axis to a world
// axis, so the plane stays axis-aligned in world space. Generalises
// localGroundCell (which is the a=1 case) for the face-oriented box brush.
const axisVec = (a: number, k: number): Vec => ({
  x: a === 0 ? k : 0,
  y: a === 1 ? k : 0,
  z: a === 2 ? k : 0,
});
const _planeAt = new THREE.Plane();
export function localPlaneCell(a: number, k: number): Vec | null {
  const off = S.editXform.off, rot = S.editXform.rot;
  const wn = rotY(axisVec(a, 1), rot); // world unit normal of the plane
  const wpt = addv(rotY(axisVec(a, k), rot), off); // a world point on the plane
  raycaster.setFromCamera(ndc, camera);
  _planeAt.setComponents(wn.x, wn.y, wn.z, -(wn.x * wpt.x + wn.y * wpt.y + wn.z * wpt.z));
  if (!raycaster.ray.intersectPlane(_planeAt, _hit)) return null;
  const l = rotY({ x: _hit.x - off.x, y: _hit.y - off.y, z: _hit.z - off.z }, -rot);
  const cell = { x: Math.round(l.x), y: Math.round(l.y), z: Math.round(l.z) };
  // force the plane axis to exactly k (the in-plane axes carry the rounded hit)
  if (a === 0) cell.x = k;
  else if (a === 1) cell.y = k;
  else cell.z = k;
  return cell;
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
