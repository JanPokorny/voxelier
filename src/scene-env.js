// The three.js environment: renderer, scene, camera, lights, materials, shared
// geometry and the persistent overlay/hover/measurement objects. Everything here
// is created once and exported; nothing here holds editor state.
import * as THREE from 'three';

export const canvas = document.getElementById('c');
export const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;

export const scene = new THREE.Scene(); scene.background = new THREE.Color('#0f1115');

export const ISO_ELEV = Math.atan(1 / Math.SQRT2);
export const cam = { azim: Math.PI / 4, elev: ISO_ELEV, zoom: 80, target: new THREE.Vector3(30, 15, 23) };
export const goal = { azim: cam.azim, elev: cam.elev, zoom: cam.zoom, target: cam.target.clone() };
export const CAM_DIST = 900;
export const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 4000);

scene.add(new THREE.AmbientLight(0xffffff, 0.62));
export const dir = new THREE.DirectionalLight(0xffffff, 0.78);
dir.castShadow = true; dir.shadow.mapSize.set(2048, 2048); dir.shadow.normalBias = 0.6; dir.shadow.bias = -0.0002;
{ const s = dir.shadow.camera; s.left = -70; s.right = 70; s.top = 70; s.bottom = -70; s.near = 1; s.far = 400; }
scene.add(dir); scene.add(dir.target);
const dir2 = new THREE.DirectionalLight(0xffffff, 0.16); dir2.position.set(-6, 5, -7); scene.add(dir2);

export const boxGeo = new THREE.BoxGeometry(1, 1, 1);
export const _m = new THREE.Matrix4(), _up = new THREE.Vector3(), _upN = new THREE.Vector3();
const bg = new THREE.Color('#0f1115');
// Voxels store a 0xRRGGBB int; resolve to a (cached) THREE.Color, full or dimmed.
const _palCache = new Map(), _dimCache = new Map();
export function col(v) { let c = _palCache.get(v); if (!c) { c = new THREE.Color().setHex(v); _palCache.set(v, c); } return c; }
export function dimCol(v) { let c = _dimCache.get(v); if (!c) { c = new THREE.Color().setHex(v).lerp(bg, 0.62); _dimCache.set(v, c); } return c; }

export const matSolid = new THREE.MeshLambertMaterial();                       // edited object (instanced)
export const matSurf = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.FrontSide }); // opaque surfaces (baked edge AO)
// Transparent voxels render as a surface of only the exterior faces, back-face
// culled — depth-correct yet reading as one glass pane.
export const TRANSP_OPACITY = 0.42;
export const matGlass = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: TRANSP_OPACITY, side: THREE.FrontSide, depthWrite: false });
matGlass.shadowSide = THREE.DoubleSide;   // still cast a solid shadow
// Depth pre-pass for glass: write only depth so that, per pixel, only the nearest
// glass layer composites (order-independent, no flicker as the camera rotates).
export const matGlassDepth = new THREE.MeshBasicMaterial({ colorWrite: false, side: THREE.FrontSide });

// exterior cube faces, wound CCW for an outward normal
// d=outward normal, a/b=the two in-plane axes (for AO), v=CCW corners
export const FACE = [
  { d: [1, 0, 0], a: 1, b: 2, v: [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]] },
  { d: [-1, 0, 0], a: 1, b: 2, v: [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 0, 0]] },
  { d: [0, 1, 0], a: 0, b: 2, v: [[0, 1, 0], [0, 1, 1], [1, 1, 1], [1, 1, 0]] },
  { d: [0, -1, 0], a: 0, b: 2, v: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]] },
  { d: [0, 0, 1], a: 0, b: 1, v: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]] },
  { d: [0, 0, -1], a: 0, b: 1, v: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]] },
];
export const AO = [0.5, 0.74, 0.88, 1];   // brightness by exposure (0 = corner most occluded)

// floor: a semi-transparent black plane (always shown), also catches shadows
const ground = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000),
  new THREE.MeshLambertMaterial({ color: 0x000000, transparent: true, opacity: 0.32 }));
ground.rotation.x = -Math.PI / 2; ground.position.y = 0; ground.receiveShadow = true; ground.renderOrder = -1; scene.add(ground);

// overlay group for selection / hover outlines (always on top)
export const overlay = new THREE.Group(); scene.add(overlay);
export const hoverVox = new THREE.LineSegments(new THREE.EdgesGeometry(boxGeo), new THREE.LineBasicMaterial({ color: 0xa7c4bc, depthTest: false }));
hoverVox.visible = false; hoverVox.renderOrder = 999; scene.add(hoverVox);
// measurement dimension lines (on top, depth-independent)
export const measLines = new THREE.LineSegments(new THREE.BufferGeometry(),
  new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, depthTest: false }));
measLines.renderOrder = 998; measLines.visible = false; scene.add(measLines);

// shared picking scratch
export const raycaster = new THREE.Raycaster();
export const ndc = new THREE.Vector2();
export const _hit = new THREE.Vector3();
export const _mv = new THREE.Vector3();
