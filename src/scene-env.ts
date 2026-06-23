// The three.js environment: renderer, scene, camera, lights, materials, shared
// geometry and the persistent overlay/hover/measurement objects. Everything here
// is created once and exported; nothing here holds editor state.
import * as THREE from "three";

export const canvas = document.getElementById("c") as HTMLCanvasElement;
export const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

export const scene = new THREE.Scene();
// Backdrop: a screen-space vertical gradient — blue sky on top, green below the
// horizon. Orthographic can't make a real horizon, so it lives here; setHorizon()
// slides the blue->green transition to the screen fraction (0 top .. 1 bottom)
// where the camera projects ground level, so it tracks orbit/pan.
const skyCv = document.createElement("canvas");
skyCv.width = 2;
skyCv.height = 256;
const skyCtx = skyCv.getContext("2d")!;
const skyTex = new THREE.CanvasTexture(skyCv);
skyTex.colorSpace = THREE.SRGBColorSpace;
let _horizon = -1;
export function setHorizon(frac: number): void {
  const f = Math.max(0.08, Math.min(0.96, frac));
  if (Math.abs(f - _horizon) < 0.004) return; // unchanged enough to skip the redraw
  _horizon = f;
  const grd = skyCtx.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, "#3a6ea5"); // sky overhead
  grd.addColorStop(f - 0.06, "#9bb6d4"); // pale band just above the horizon
  grd.addColorStop(f, "#5d7a4a"); // ground starts
  grd.addColorStop(1, "#46613a"); // distant ground
  skyCtx.fillStyle = grd;
  skyCtx.fillRect(0, 0, 2, 256);
  skyTex.needsUpdate = true;
}
setHorizon(0.55);
scene.background = skyTex;

export const ISO_ELEV = Math.atan(1 / Math.SQRT2);
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
export const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 4000);

scene.add(new THREE.AmbientLight(0xffffff, 0.62));
export const dir = new THREE.DirectionalLight(0xffffff, 0.78);
dir.castShadow = true;
dir.shadow.mapSize.set(2048, 2048);
dir.shadow.normalBias = 0.6;
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
export const frame = { tail: 60 };
export const wake = (): void => {
  frame.tail = 30;
};

export const boxGeo = new THREE.BoxGeometry(1, 1, 1);
export const _up = new THREE.Vector3(), _upN = new THREE.Vector3();
const bg = new THREE.Color("#0f1115");
// Voxels store a 0xRRGGBB int; resolve to a (cached) THREE.Color, full or dimmed.
const _palCache = new Map<number, THREE.Color>(),
  _dimCache = new Map<number, THREE.Color>();
export function col(v: number): THREE.Color {
  let c = _palCache.get(v);
  if (!c) {
    c = new THREE.Color().setHex(v);
    _palCache.set(v, c);
  }
  return c;
}
export function dimCol(v: number): THREE.Color {
  let c = _dimCache.get(v);
  if (!c) {
    c = new THREE.Color().setHex(v).lerp(bg, 0.62);
    _dimCache.set(v, c);
  }
  return c;
}

export const matSurf = new THREE.MeshLambertMaterial({
  vertexColors: true,
  side: THREE.FrontSide,
}); // opaque surfaces (baked edge AO)
// Transparent voxels render as a surface of only the exterior faces, back-face
// culled — depth-correct yet reading as one glass pane.
export const TRANSP_OPACITY = 0.42;
export const matGlass = new THREE.MeshLambertMaterial({
  vertexColors: true,
  transparent: true,
  opacity: TRANSP_OPACITY,
  side: THREE.FrontSide,
  depthWrite: false,
});
matGlass.shadowSide = THREE.DoubleSide; // still cast a solid shadow
// Depth pre-pass for glass: write only depth so that, per pixel, only the nearest
// glass layer composites (order-independent, no flicker as the camera rotates).
export const matGlassDepth = new THREE.MeshBasicMaterial({
  colorWrite: false,
  side: THREE.FrontSide,
});

// exterior cube faces, wound CCW for an outward normal
// d=outward normal, a/b=the two in-plane axes (for AO), v=CCW corners
export const FACE = [
  { d: [1, 0, 0], a: 1, b: 2, v: [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]] },
  {
    d: [-1, 0, 0],
    a: 1,
    b: 2,
    v: [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 0, 0]],
  },
  { d: [0, 1, 0], a: 0, b: 2, v: [[0, 1, 0], [0, 1, 1], [1, 1, 1], [1, 1, 0]] },
  {
    d: [0, -1, 0],
    a: 0,
    b: 2,
    v: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]],
  },
  { d: [0, 0, 1], a: 0, b: 1, v: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]] },
  {
    d: [0, 0, -1],
    a: 0,
    b: 1,
    v: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]],
  },
];
export const AO = [0.5, 0.74, 0.88, 1]; // brightness by exposure (0 = corner most occluded)

// ground: an invisible shadow catcher at y=0 (no visible plane/edges — the
// "ground" is the green lower half of the backdrop). Follows the camera target
// (see updateCamera) so shadows stay under the view at any pan.
export const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(8000, 8000),
  new THREE.ShadowMaterial({ opacity: 0.32 }),
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = 0;
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
  new THREE.EdgesGeometry(boxGeo),
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
