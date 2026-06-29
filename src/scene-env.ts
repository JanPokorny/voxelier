// The three.js environment: renderer, scene, camera, lights, materials, shared
// geometry and the persistent overlay/hover/measurement objects. Everything here
// is created once and exported; nothing here holds editor state.
import * as THREE from "three";

export const canvas = document.getElementById("c") as HTMLCanvasElement;
// Cached canvas CSS rect (px), refreshed by main's resize() every frame. Read by
// the per-frame / per-drag / per-pointermove code (camera aspect, pan,
// measure-label projection, Shift-height scaling, pointer->NDC) so none of them
// force a synchronous layout reflow via getBoundingClientRect(). The canvas is
// anchored in a viewport-fixed grid, so w/h and the x/y origin only change on an
// actual window resize — exactly when resize() refreshes this cache.
export const viewport = { w: 1, h: 1, x: 0, y: 0 };
export const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

export const scene = new THREE.Scene();
scene.background = new THREE.Color("#7aa0c4"); // fallback; the sky quad covers it

const ISO_ELEV = Math.atan(1 / Math.SQRT2);
export const cam = {
  azim: Math.PI / 4,
  elev: ISO_ELEV,
  zoom: 80,
  target: new THREE.Vector3(30, 15, 23),
};
export const goal = {
  azim: cam.azim,
  elev: cam.elev,
  zoom: cam.zoom,
  target: cam.target.clone(),
};
export const CAM_DIST = 900;
export const ZOOM_MAX = 2000; // max orthographic view height (zoom-out limit)
// frustum and near/far here are placeholders — updateCamera() recomputes all of
// them from the viewport and scene depth every frame, before the first render.
export const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 4000);

// Sky: a full-screen vertical gradient. Looking down from above the ground we
// see the world, so the backdrop is green; looking up from below it's blue. A
// short blend across the side-on angle avoids a hard pop. (No true horizon —
// that doesn't survive an orthographic projection.)
const skyU = { uGround: { value: 1 } }; // 1 = green (above), 0 = blue (below)
const sky = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2),
  new THREE.ShaderMaterial({
    uniforms: skyU,
    depthWrite: false,
    depthTest: false,
    vertexShader:
      `varying vec2 vN; void main(){ vN = position.xy; gl_Position = vec4(position.xy, 1.0, 1.0); }`,
    fragmentShader: `precision highp float;
      varying vec2 vN; uniform float uGround;
      // Drawn straight to the canvas (no post-process OutputPass) and a raw
      // ShaderMaterial gets no colour-space conversion from the renderer, so the
      // colours below are authored directly in display (sRGB) space.
      void main(){
        float t = (vN.y + 1.0) * 0.5; // 0 bottom .. 1 top
        vec3 grn = mix(vec3(0.24, 0.33, 0.19), vec3(0.42, 0.55, 0.34), t);
        vec3 blu = mix(vec3(0.62, 0.74, 0.86), vec3(0.20, 0.40, 0.62), t);
        gl_FragColor = vec4(mix(blu, grn, uGround), 1.0);
      }`,
  }),
);
sky.frustumCulled = false;
sky.renderOrder = -1e9; // draw before everything
scene.add(sky);
export function updateSky(): void {
  // ramp green<->blue across a few degrees either side of side-on (elev 0)
  skyU.uGround.value = Math.max(0, Math.min(1, (cam.elev + 0.05) / 0.1));
}

scene.add(new THREE.AmbientLight(0xffffff, 0.62));
export const dir = new THREE.DirectionalLight(0xffffff, 0.78);
dir.castShadow = true;
dir.shadow.mapSize.set(4096, 4096);
dir.shadow.normalBias = 0.15; // refined per-rebuild in fitShadow() to ~2 shadow texels
dir.shadow.bias = -0.0002;
// the shadow frustum + light position are fitted to the scene bounds on each
// rebuild (see render.ts), so shadows are stable as the camera pans/orbits
scene.add(dir);
scene.add(dir.target);
const dir2 = new THREE.DirectionalLight(0xffffff, 0.16);
dir2.position.set(-6, 5, -7);
scene.add(dir2);

// On-demand rendering (driven in main.ts): wake() requests a short burst of
// frames. Called on input and whenever the GL scene mutates (rebuild / remesh).
export const frame = { tail: 0 }; // idle until wake(); boot rebuild() wakes it
export const wake = (): void => {
  frame.tail = 30;
};

export const _up = new THREE.Vector3(), _upN = new THREE.Vector3();
// Voxels store a 0xRRGGBB int; resolve to a (cached) THREE.Color.
const _palCache = new Map<number, THREE.Color>();
export function col(v: number): THREE.Color {
  let c = _palCache.get(v);
  if (!c) {
    c = new THREE.Color().setHex(v);
    _palCache.set(v, c);
  }
  return c;
}

export const matSurf = new THREE.MeshLambertMaterial({
  vertexColors: true,
  side: THREE.FrontSide,
}); // opaque surfaces (smooth per-vertex corner AO baked into vertex colours)
// De-emphasised voxels render as a surface of only the exterior faces, back-face
// culled — depth-correct yet reading as one translucent pane. Two strengths:
//  - DEEMPH (more transparent): an object explicitly set to "deemphasized".
//  - TEMP   (more opaque): "temporarily deemphasized" — anything outside the
//    current focus (the edited object / entered group). Not an explicit state.
const deemphMat = (opacity: number): THREE.MeshLambertMaterial => {
  const m = new THREE.MeshLambertMaterial({
    vertexColors: true,
    transparent: true,
    opacity,
    side: THREE.FrontSide,
    depthWrite: false,
  });
  m.shadowSide = THREE.DoubleSide; // still cast a solid shadow
  return m;
};
export const matDeemph = deemphMat(0.24); // explicit de-emphasis — more transparent
export const matTemp = deemphMat(0.55); // temporary de-emphasis — more opaque
// Depth pre-pass for translucent tiers: write only depth so that, per pixel, only
// the nearest layer composites (order-independent, no flicker as the camera turns).
export const matGlassDepth = new THREE.MeshBasicMaterial({
  colorWrite: false,
  side: THREE.FrontSide,
});

// ground: an invisible shadow catcher at y=0 (no visible plane/edges — the
// "ground" is the green lower half of the backdrop). Follows the camera target
// (see updateCamera) so shadows stay under the view at any pan.
export const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(8000, 8000),
  new THREE.ShadowMaterial({ opacity: 0.32 }),
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.1; // just below y=0 so faces flush with the ground don't
// z-fight the catcher (updateCamera keeps this y while tracking the view in x/z)
ground.receiveShadow = true;
ground.renderOrder = -1;
scene.add(ground);

// the edited object's voxel meshes live under this group; its transform carries
// the object's accumulated world pose so the chunk meshes can be built in cheap,
// pose-independent object-local space.
export const editGroup = new THREE.Group();
scene.add(editGroup);

// overlay group for selection / hover outlines (always on top)
export const overlay = new THREE.Group();
scene.add(overlay);
export const hoverVox = new THREE.LineSegments(
  new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)),
  new THREE.LineBasicMaterial({ color: 0xa7c4bc, depthTest: false }),
);
hoverVox.visible = false;
hoverVox.renderOrder = 999;
scene.add(hoverVox);
// measurement dimension lines (on top, depth-independent)
export const measLines = new THREE.LineSegments(
  new THREE.BufferGeometry(),
  new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    depthTest: false,
  }),
);
measLines.renderOrder = 998;
measLines.visible = false;
scene.add(measLines);

// shared picking scratch
export const raycaster = new THREE.Raycaster();
export const ndc = new THREE.Vector2();
export const _hit = new THREE.Vector3();
export const _mv = new THREE.Vector3();
