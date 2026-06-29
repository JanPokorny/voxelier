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
  viewport,
  wake,
} from "./scene-env.ts";
import { rebuild } from "./render.ts";
import { updateChrome } from "./ui.ts";
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

// Read the canvas rect into the shared viewport cache. Only the "resize" event
// (and boot) call this: the canvas fills a viewport-fixed grid track, so its CSS
// size/origin change only when the window does. Per-frame readers (camera,
// measure, pointer->NDC) and the per-frame reconcile() then run off the cache
// with no synchronous layout reflow.
function measure(): void {
  const r = canvas.getBoundingClientRect();
  viewport.w = r.width;
  viewport.h = r.height;
  viewport.x = r.left;
  viewport.y = r.top;
}
// Match the backing store to the cached CSS size and current DPR. Runs every
// frame, but reads no layout: devicePixelRatio is a plain property and the cached
// size only changes on resize. DPR can change after load (browser zoom — which
// also fires "resize" — or moving to a hi-DPI monitor, where the CSS size is
// unchanged so the cache stays valid), so re-apply setPixelRatio here. The gate
// must match three's Math.floor backing-store sizing exactly: a Math.round
// mismatch on a fractional DPR (e.g. 1.5) is never reconciled, so it would re-run
// setSize + wake() every frame and pin the on-demand loop on.
function reconcile(): void {
  const w = Math.max(1, Math.round(viewport.w)),
    h = Math.max(1, Math.round(viewport.h)),
    pr = Math.min(devicePixelRatio, 2);
  if (renderer.getPixelRatio() !== pr) renderer.setPixelRatio(pr);
  if (
    canvas.width !== Math.floor(w * pr) || canvas.height !== Math.floor(h * pr)
  ) {
    renderer.setSize(w, h, false);
    wake();
  }
}
window.addEventListener("resize", () => {
  measure();
  reconcile();
});

function tick(): void {
  requestAnimationFrame(tick);
  reconcile();
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
  S.editObject = null;
  S.sel3d = null;
  S.selection.clear();
  rebuild();
  updateChrome();
  frameView();
  flush(); // synchronous baseline undo snapshot
  measure(); // seed the viewport cache before the first reconcile/render
  tick(); // start the on-demand render loop
}
start();
