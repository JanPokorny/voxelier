// Entry point: wire the canvas size, the render loop, and boot (load or seed,
// then render). Importing interaction/ui for their listener side effects.
import { S } from "./state.js";
import { camera, canvas, renderer, scene } from "./scene-env.js";
import { rebuild } from "./render.js";
import { buildSwatches, updateChrome } from "./ui.js";
import { frameView, updateCamera } from "./camera.js";
import { updateMeasureLabels } from "./measure.js";
import { flush, load } from "./persistence.js";
import { seed } from "./seed.js";
import "./interaction.js"; // attaches canvas pointer/wheel/dblclick listeners

function resize() {
  const r = canvas.getBoundingClientRect();
  const w = Math.max(1, Math.round(r.width)),
    h = Math.max(1, Math.round(r.height)),
    pr = Math.min(devicePixelRatio, 2);
  if (
    canvas.width !== Math.round(w * pr) || canvas.height !== Math.round(h * pr)
  ) renderer.setSize(w, h, false);
}
window.addEventListener("resize", resize);

function tick() {
  requestAnimationFrame(tick);
  resize();
  updateCamera();
  renderer.render(scene, camera);
  updateMeasureLabels();
}

function start() {
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
