// Entry point: wire the canvas size, the render loop, and boot (load or seed,
// then render). Importing interaction/ui for their listener side effects.
import "./style.css"; // bundled + injected into the HTML by `deno bundle`
import { S } from "./state.ts";
import {
  cam,
  camera,
  canvas,
  frame,
  goal,
  renderer,
  scene,
  wake,
} from "./scene-env.ts";
import { rebuild } from "./render.ts";
import { buildSwatches, updateChrome } from "./ui.ts";
import { frameView, updateCamera } from "./camera.ts";
import { updateMeasureLabels } from "./measure.ts";
import { flush, load } from "./persistence.ts";
import { seed } from "./seed.ts";
import "./interaction.ts"; // attaches canvas pointer/wheel/dblclick listeners

// On-demand rendering: draw only while the camera is still easing toward its
// goal, or for a short tail after any input. Every scene mutation here is
// triggered by an input event (or an async import that itself reframes the
// camera, so the camera leaves "settled"), so this never drops a needed frame
// — but lets an idle editor stop hitting the GPU.
for (
  const ev of [
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "wheel",
    "keydown",
    "dblclick",
  ]
) {
  window.addEventListener(ev, wake, { passive: true, capture: true });
}
const cameraSettled = (): boolean =>
  Math.abs(goal.azim - cam.azim) < 1e-3 &&
  Math.abs(goal.elev - cam.elev) < 1e-3 &&
  Math.abs(goal.zoom - cam.zoom) < 1e-3 &&
  cam.target.distanceToSquared(goal.target) < 1e-6;

function resize(): void {
  const r = canvas.getBoundingClientRect();
  const w = Math.max(1, Math.round(r.width)),
    h = Math.max(1, Math.round(r.height)),
    pr = Math.min(devicePixelRatio, 2);
  if (
    canvas.width !== Math.round(w * pr) || canvas.height !== Math.round(h * pr)
  ) {
    renderer.setSize(w, h, false);
    wake();
  }
}
window.addEventListener("resize", resize);

function tick(): void {
  requestAnimationFrame(tick);
  resize();
  updateCamera();
  if (frame.tail > 0 || !cameraSettled()) {
    renderer.render(scene, camera);
    updateMeasureLabels();
    if (frame.tail > 0) frame.tail--;
  }
}

function start(): void {
  if (!load()) S.root = seed();
  S.path = [S.root];
  S.context = S.root;
  S.editObject = null;
  S.selection.clear();
  buildSwatches();
  rebuild();
  updateChrome();
  frameView();
  flush();
  tick(); // flush: synchronous baseline undo snapshot
}
start();
