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
  ground,
  renderer,
  scene,
  sky,
  wake,
} from "./scene-env.ts";
import { rebuild } from "./render.ts";
import { buildSwatches, updateChrome } from "./ui.ts";
import { frameView, updateCamera } from "./camera.ts";
import { updateMeasureLabels } from "./measure.ts";
import { flush, load } from "./persistence.ts";
import { seed } from "./seed.ts";
import "./interaction.ts"; // attaches canvas pointer/wheel/dblclick listeners
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { GTAOPass } from "three/addons/postprocessing/GTAOPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

// Post-process pipeline: render the scene, then ground-truth ambient occlusion
// (GTAO) for soft contact/corner shadows in crevices, then tone-map/sRGB out.
// Radius/thickness are in world units (1 unit = 1 voxel); the GTAO defaults are
// tuned for unit-scale scenes, so they're scaled up for our cell-sized geometry.
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const gtao = new GTAOPass(scene, camera, 1, 1);
gtao.updateGtaoMaterial({
  radius: 12,
  thickness: 6,
  scale: 1.4,
  distanceExponent: 1,
});
composer.addPass(gtao);
composer.addPass(new OutputPass());
// Keep the infinite backdrop out of the AO G-buffer: the ground shadow-catcher
// and the sky quad must stay in the beauty pass, but if GTAO sees them it darkens
// the green backdrop (and bands at the ground plane's far edge). overrideVisibility
// is GTAO's per-AO-pass hook (it already drops lines); also drop ground + sky.
// deno-lint-ignore no-explicit-any
const gtaoAny = gtao as any;
const baseOverrideVisibility = gtaoAny.overrideVisibility.bind(gtao);
gtaoAny.overrideVisibility = () => {
  baseOverrideVisibility();
  ground.visible = false;
  sky.visible = false;
};
// GTAOPass caches the camera projection at setSize, but our orthographic
// projection changes every frame (zoom + per-frame depth range), so refresh the
// matrices it reconstructs view-space positions from before each composite.
const gtaoU = gtaoAny.gtaoMaterial.uniforms;
const pdU = gtaoAny.pdMaterial.uniforms;
function syncGtaoProjection(): void {
  gtaoU.cameraProjectionMatrix.value.copy(camera.projectionMatrix);
  gtaoU.cameraProjectionMatrixInverse.value.copy(
    camera.projectionMatrixInverse,
  );
  pdU.cameraProjectionMatrixInverse.value.copy(camera.projectionMatrixInverse);
}

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
  // DPR can change after load (browser zoom, moving to a hi-DPI monitor) but
  // setPixelRatio was only called once — re-apply it so the backing store stays
  // sharp. The gate must match three's Math.floor backing-store sizing exactly:
  // a Math.round mismatch on a fractional DPR (e.g. 1.5) is never reconciled, so
  // every frame re-ran setSize + wake() and pinned the on-demand loop on.
  if (renderer.getPixelRatio() !== pr) {
    renderer.setPixelRatio(pr);
    composer.setPixelRatio(pr);
  }
  if (
    canvas.width !== Math.floor(w * pr) || canvas.height !== Math.floor(h * pr)
  ) {
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    wake();
  }
}
window.addEventListener("resize", resize);

function tick(): void {
  requestAnimationFrame(tick);
  resize();
  updateCamera();
  if (frame.tail > 0 || !cameraSettled()) {
    syncGtaoProjection();
    composer.render();
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
  flush(); // synchronous baseline undo snapshot
  tick(); // start the on-demand render loop
}
start();
