// Camera control: pan/orbit toward a smoothed goal, framing helpers, and the
// per-frame camera interpolation. The key light is scene-anchored (set in
// render's rebuild), so it stays put as the camera moves.
import * as THREE from "three";
import { S } from "./state.ts";
import {
  _up,
  _upN,
  cam,
  camera,
  goal,
  ground,
  TAN_HALF_FOV,
  updateSky,
  viewport,
  ZOOM_MAX,
} from "./scene-env.ts";
import { boxEmpty, emptyBox, nodeBox, worldXform } from "./model.ts";
import { growBounds, worldBox } from "./boxes.ts";
import type { Box, Node, Vec } from "./types.ts";

// reused scratch so pan/orbit frames allocate no Vector3s
const _dv = new THREE.Vector3(),
  _right = new THREE.Vector3(),
  _camUp = new THREE.Vector3(),
  _pw = new THREE.Vector3();

// World units per screen pixel at a world point's depth. Perspective scale is
// depth-dependent, so every pixel<->world conversion asks for its own point.
export function perPxAt(p: Vec): number {
  _pw.set(p.x, p.y, p.z).applyMatrix4(camera.matrixWorldInverse);
  return (2 * Math.max(1e-3, -_pw.z) * TAN_HALF_FOV) / viewport.h;
}

export function panCamera(dx: number, dy: number): void {
  const perPx = cam.zoom / viewport.h; // view height at the target, the pan pivot
  // the camera's own basis, not forward x world-up: the latter is degenerate
  // looking straight down/up, where the swung up-vector is the only usable one
  _right.setFromMatrixColumn(camera.matrixWorld, 0);
  _camUp.setFromMatrixColumn(camera.matrixWorld, 1);
  goal.target.addScaledVector(_right, -dx * perPx);
  goal.target.addScaledVector(_camUp, dy * perPx);
}
export function orbitView(dx: number, dy: number): void { // free orbit (the only camera mode)
  goal.azim -= dx * 0.012; // inverted: drag follows the scene
  goal.elev = Math.max(
    -Math.PI / 2,
    Math.min(Math.PI / 2, goal.elev + dy * 0.012),
  );
}
export function frameBox(b: Box): void {
  if (boxEmpty(b)) return; // empty -> leave camera as is
  goal.target.set(
    (b.min.x + b.max.x) / 2,
    (b.min.y + b.max.y) / 2,
    (b.min.z + b.max.z) / 2,
  );
  // Fit the bounding sphere: sin(half-angle) = R / distance, and zoom is the
  // view height at that distance (distance = zoom / 2·TAN_HALF_FOV). Cover the
  // horizontal half-angle too, for a viewport narrower than it is tall.
  const R = 0.5 *
    Math.hypot(b.max.x - b.min.x, b.max.y - b.min.y, b.max.z - b.min.z);
  const fit = (t: number) =>
    (2.3 * R * TAN_HALF_FOV * Math.sqrt(1 + t * t)) / t;
  goal.zoom = Math.max(
    8,
    Math.min(
      ZOOM_MAX,
      Math.max(
        fit(TAN_HALF_FOV),
        fit(TAN_HALF_FOV * (viewport.w / viewport.h)),
      ),
    ),
  );
}
export function frameView(): void {
  const b = emptyBox();
  if (S.editObject) {
    nodeBox(S.editObject, S.editXform.off, S.editXform.rot, b);
    if (boxEmpty(b)) {
      const o = S.editXform.off;
      goal.target.set(o.x, o.y + 6, o.z);
      goal.zoom = 41;
      return;
    } // empty object
  } else {
    for (const id in S.childBox) {
      const c = S.childBox[id];
      b.min.x = Math.min(b.min.x, c.min.x);
      b.min.y = Math.min(b.min.y, c.min.y);
      b.min.z = Math.min(b.min.z, c.min.z);
      b.max.x = Math.max(b.max.x, c.max.x);
      b.max.y = Math.max(b.max.y, c.max.y);
      b.max.z = Math.max(b.max.z, c.max.z);
    }
  }
  if (boxEmpty(b)) {
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
  // Zoom is the view height at the orbit target: dolly by moving the camera in
  // and out along the view ray, keeping the target (and so the pivot) fixed.
  const dist = cam.zoom / (2 * TAN_HALF_FOV);
  camera.position.copy(cam.target).addScaledVector(_dv, dist);
  const t = THREE.MathUtils.clamp(
    (Math.abs(cam.elev) - 1.45) / (Math.PI / 2 - 1.45),
    0,
    1,
  ); // swing the up-vector toward horizontal near either pole (top-down/bottom-up)
  // horizontal swing direction at the pole; at the bottom it's the opposite
  // horizontal (the elevation tangent flips sign) so the roll stays continuous
  // through straight-up instead of snapping 180°.
  _upN.set(-Math.sin(cam.azim), 0, -Math.cos(cam.azim));
  if (cam.elev < 0) _upN.negate();
  // _up = lerp((0,1,0), _upN, t); the two are unit-length and orthogonal, so
  // |_up|² = (1-t)² + t² ≥ 0.5 — never degenerate, safe to normalise.
  _up.set(0, 1, 0).lerp(_upN, t);
  camera.up.copy(_up.normalize());
  camera.lookAt(cam.target);
  camera.aspect = viewport.w / viewport.h;
  // Depth range = the scene's (and the patch of ground its shadows land on)
  // extent along the view axis, so an arbitrarily large model never clips
  // against a fixed far plane. _dv points target->camera, so (p-pt)·_dv is the
  // depth in front of the camera.
  const p = camera.position;
  let near = Infinity, far = -Infinity;
  const consider = (x: number, y: number, z: number) => {
    const d = (p.x - x) * _dv.x + (p.y - y) * _dv.y + (p.z - z) * _dv.z;
    if (d < near) near = d;
    if (d > far) far = d;
  };
  const considerBox = (bx: Box, ox = 0, oy = 0, oz = 0) => {
    for (const cx of [bx.min.x, bx.max.x]) {
      for (const cy of [bx.min.y, bx.max.y]) {
        for (const cz of [bx.min.z, bx.max.z]) {
          consider(cx + ox, cy + oy, cz + oz);
        }
      }
    }
  };
  const b = S.sceneBox;
  if (b && !boxEmpty(b)) {
    considerBox(b);
    // Geometry that has moved since the last rebuild — the edited object's live
    // boxes, a lifted selection, a dragged scene selection — is not in sceneBox
    // yet, and a fixed ortho range used to absorb that. A perspective one cannot.
    if (S.editObject) {
      const live = nodeBox(
        S.editObject,
        S.editXform.off,
        S.editXform.rot,
        emptyBox(),
      );
      if (S.sel3d) { // a lifted selection rides outside the object's own boxes
        const r = S.sel3d.region;
        const w = worldBox({ ...r, c: 0 }, S.editXform.rot, S.editXform.off);
        growBounds([w], live);
      }
      considerBox(live);
    }
    const d = S.drag;
    if (d && d.dx != null) considerBox(b, d.dx, d.dy ?? 0, d.dz ?? 0);
    // The ground its shadows land on: the shadow catcher quad is unbounded, but
    // nothing outside this patch can be shadowed by the scene. Use the full
    // diagonal — a tall model throws its shadow sideways (the light is off-axis).
    const gp = Math.max(
      10,
      0.5 *
        Math.hypot(b.max.x - b.min.x, b.max.y - b.min.y, b.max.z - b.min.z),
    );
    for (const gx of [b.min.x - gp, b.max.x + gp]) {
      for (const gz of [b.min.z - gp, b.max.z + gp]) consider(gx, 0, gz);
    }
  }
  if (near > far) { // empty scene
    near = 0.1;
    far = 4000;
  }
  // near must stay positive (a perspective camera cannot sit inside the model the
  // way an orthographic one could) and it scales with the view: pinned to a fixed
  // floor it would starve the depth buffer on large scenes, where the depth range
  // is thousands of cells wide.
  camera.near = Math.max(cam.zoom * 0.02, near - 5);
  camera.far = Math.max(camera.near + 1, far + 5);
  camera.updateProjectionMatrix();
  // invisible shadow catcher tracks the view. Sits a hair below y=0 (not exactly
  // on it) so a voxel face flush with the ground isn't coplanar with the catcher:
  // coplanar surfaces z-fight, flickering between the catcher's shadow shade and
  // the face's, in GPU-tiled blocks. 0.1 cell is well below visible.
  ground.position.set(cam.target.x, -0.1, cam.target.z);
  updateSky(); // green backdrop looking down, blue looking up
}
