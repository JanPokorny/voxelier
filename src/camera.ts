// Camera control: pan/orbit toward a smoothed goal, framing helpers, and the
// per-frame interpolation that also tracks the key light onto the target.
import * as THREE from "three";
import { S } from "./state.ts";
import {
  _up,
  _upN,
  cam,
  CAM_DIST,
  camera,
  canvas,
  dir,
  goal,
} from "./scene-env.ts";
import { emptyBox, nodeBox, worldXform } from "./model.ts";
import type { Box, Node } from "./types.ts";

export function panCamera(dx: number, dy: number): void {
  const r = canvas.getBoundingClientRect();
  const perPx = (camera.top - camera.bottom) / r.height;
  const fwd = new THREE.Vector3();
  camera.getWorldDirection(fwd);
  const right = new THREE.Vector3().crossVectors(
    fwd,
    new THREE.Vector3(0, 1, 0),
  ).normalize();
  const up = new THREE.Vector3().crossVectors(right, fwd).normalize();
  goal.target.addScaledVector(right, -dx * perPx);
  goal.target.addScaledVector(up, dy * perPx);
}
export function orbitView(dx: number, dy: number): void { // free orbit (the only camera mode)
  goal.azim -= dx * 0.012; // inverted: drag follows the scene
  goal.elev = Math.max(-0.35, Math.min(Math.PI / 2, goal.elev + dy * 0.012));
}
export function frameBox(b: Box): void {
  if (b.max.x < b.min.x) return; // empty -> leave camera as is
  goal.target.set(
    (b.min.x + b.max.x) / 2,
    (b.min.y + b.max.y) / 2,
    (b.min.z + b.max.z) / 2,
  );
  goal.zoom = Math.max(
    8,
    Math.min(
      400,
      Math.max(b.max.x - b.min.x, b.max.y - b.min.y, b.max.z - b.min.z) * 1.5 +
        8,
    ),
  );
}
export function frameView(): void {
  const b = emptyBox();
  if (S.editObject) {
    nodeBox(S.editObject, S.editXform.off, S.editXform.rot, b);
    if (b.max.x < b.min.x) {
      const o = S.editXform.off;
      goal.target.set(o.x, o.y + 6, o.z);
      goal.zoom = 41;
      return;
    } // empty object
  } else {for (const id in S.childBox) {
      const c = S.childBox[id];
      b.min.x = Math.min(b.min.x, c.min.x);
      b.min.y = Math.min(b.min.y, c.min.y);
      b.min.z = Math.min(b.min.z, c.min.z);
      b.max.x = Math.max(b.max.x, c.max.x);
      b.max.y = Math.max(b.max.y, c.max.y);
      b.max.z = Math.max(b.max.z, c.max.z);
    }}
  if (b.max.x < b.min.x) {
    goal.target.set(0, 1, 0);
    goal.zoom = 23;
    return;
  } // empty scene
  frameBox(b);
}
export function fitNode(node: Node): void { // frame the camera on one tree node's world bounds
  if (node === S.root) {
    frameView();
    return;
  }
  const w = worldXform(node);
  frameBox(nodeBox(node, w.off, w.rot, emptyBox()));
}
export function updateCamera(): void {
  cam.azim += (goal.azim - cam.azim) * 0.22;
  cam.elev += (goal.elev - cam.elev) * 0.22;
  cam.zoom += (goal.zoom - cam.zoom) * 0.25;
  cam.target.lerp(goal.target, 0.25);
  const ce = Math.cos(cam.elev), se = Math.sin(cam.elev);
  const dv = new THREE.Vector3(
    ce * Math.sin(cam.azim),
    se,
    ce * Math.cos(cam.azim),
  );
  camera.position.copy(cam.target).addScaledVector(dv, CAM_DIST);
  const t = THREE.MathUtils.clamp(
    (cam.elev - 1.45) / (Math.PI / 2 - 1.45),
    0,
    1,
  ); // only swing "up" near top-down
  _upN.set(-Math.sin(cam.azim), 0, -Math.cos(cam.azim));
  _up.set(0, 1, 0).lerp(_upN, t);
  if (_up.lengthSq() < 1e-6) _up.copy(_upN);
  camera.up.copy(_up.normalize());
  camera.lookAt(cam.target);
  dir.position.set(cam.target.x + 50, 110, cam.target.z + 38);
  dir.target.position.set(cam.target.x, 0, cam.target.z);
  dir.target.updateMatrixWorld();
  const r = canvas.getBoundingClientRect(),
    a = r.width / r.height,
    h = cam.zoom,
    w = h * a;
  camera.left = -w / 2;
  camera.right = w / 2;
  camera.top = h / 2;
  camera.bottom = -h / 2;
  camera.near = 0.1;
  camera.far = 4000;
  camera.zoom = 1;
  camera.updateProjectionMatrix();
}
