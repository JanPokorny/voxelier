// Entry point: wire the canvas size, the render loop, and boot (load or seed,
// then render). Importing interaction/ui for their listener side effects.
import { S } from "./state.ts";
import { camera, canvas, renderer, scene } from "./scene-env.ts";
import { rebuild } from "./render.ts";
import { buildSwatches, updateChrome } from "./ui.ts";
import { frameView, updateCamera } from "./camera.ts";
import { updateMeasureLabels } from "./measure.ts";
import { flush, load } from "./persistence.ts";
import { seed } from "./seed.ts";
import "./interaction.ts"; // attaches canvas pointer/wheel/dblclick listeners

function resize(): void {
  const r = canvas.getBoundingClientRect();
  const w = Math.max(1, Math.round(r.width)),
    h = Math.max(1, Math.round(r.height)),
    pr = Math.min(devicePixelRatio, 2);
  if (
    canvas.width !== Math.round(w * pr) || canvas.height !== Math.round(h * pr)
  ) renderer.setSize(w, h, false);
}
window.addEventListener("resize", resize);

function tick(): void {
  requestAnimationFrame(tick);
  resize();
  updateCamera();
  renderer.render(scene, camera);
  updateMeasureLabels();
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
