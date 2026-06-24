// Camera control: pan/orbit toward a smoothed goal, framing helpers, and the
// per-frame camera interpolation. The key light is scene-anchored (set in
// render's rebuild), so it stays put as the camera moves.
import * as THREE from "three";
import { S } from "./state.ts";
import {
  _up,
  _upN,
  cam,
  CAM_DIST,
  camera,
  canvas,
  goal,
  ground,
  updateSky,
  ZOOM_MAX,
} from "./scene-env.ts";
import { emptyBox, nodeBox, worldXform } from "./model.ts";
import type { Box, Node } from "./types.ts";

// reused scratch so pan/orbit frames allocate no Vector3s
const _dv = new THREE.Vector3(),
  _fwd = new THREE.Vector3(),
  _right = new THREE.Vector3(),
  _camUp = new THREE.Vector3(),
  _yUp = new THREE.Vector3(0, 1, 0);

export function panCamera(dx: number, dy: number): void {
  const r = canvas.getBoundingClientRect();
  const perPx = (camera.top - camera.bottom) / r.height;
  camera.getWorldDirection(_fwd);
  _right.crossVectors(_fwd, _yUp).normalize();
  _camUp.crossVectors(_right, _fwd).normalize();
  goal.target.addScaledVector(_right, -dx * perPx);
  goal.target.addScaledVector(_camUp, dy * perPx);
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
      ZOOM_MAX,
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
  _dv.set(ce * Math.sin(cam.azim), se, ce * Math.cos(cam.azim));
  camera.position.copy(cam.target).addScaledVector(_dv, CAM_DIST);
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
  const r = canvas.getBoundingClientRect(),
    a = r.width / r.height,
    h = cam.zoom,
    w = h * a;
  camera.left = -w / 2;
  camera.right = w / 2;
  camera.top = h / 2;
  camera.bottom = -h / 2;
  // Depth range = the scene's (and ground's) extent along the view axis, so an
  // arbitrarily large model never clips against a fixed far plane. Orthographic
  // tolerates a negative near, so the camera may even sit inside the model.
  const p = camera.position; // _dv points target->camera, so (p-pt)·_dv is depth in front
  let near = Infinity, far = -Infinity;
  const consider = (x: number, y: number, z: number) => {
    const d = (p.x - x) * _dv.x + (p.y - y) * _dv.y + (p.z - z) * _dv.z;
    if (d < near) near = d;
    if (d > far) far = d;
  };
  const b = S.sceneBox;
  if (b && b.max.x >= b.min.x) {
    for (const cx of [b.min.x, b.max.x]) {
      for (const cy of [b.min.y, b.max.y]) {
        for (const cz of [b.min.z, b.max.z]) consider(cx, cy, cz);
      }
    }
  }
  const gx = cam.target.x, gz = cam.target.z, gr = 4000; // ground plane (at y=0)
  for (const sx of [-gr, gr]) {
    for (const sz of [-gr, gr]) consider(gx + sx, 0, gz + sz);
  }
  if (near > far) { // empty scene
    near = 0.1;
    far = 4000;
  }
  camera.near = near - 10;
  camera.far = far + 10;
  camera.zoom = 1;
  camera.updateProjectionMatrix();
  // invisible shadow catcher tracks the view. Sits a hair below y=0 (not exactly
  // on it) so a voxel face flush with the ground isn't coplanar with the catcher:
  // coplanar surfaces z-fight, flickering between the catcher's shadow shade and
  // the face's, in GPU-tiled blocks. 0.1 cell is well below visible.
  ground.position.set(cam.target.x, -0.1, cam.target.z);
  updateSky(); // green backdrop looking down, blue looking up
}
