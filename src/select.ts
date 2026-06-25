// The object-editor "select" tool: an MSPaint-style marquee over object-local
// voxels. A selection is captured from a dragged-out box region; its content can
// then be moved, rotated, deleted, cut, copied and pasted. Only one selection
// exists at a time (S.sel3d). The content is "lifted" (carved out of the object
// and floating) during a move/rotate or a fresh paste, and stamped back when the
// gesture ends or the selection is cleared.
import * as THREE from "three";
import { S } from "./state.ts";
import { rotY } from "./math.ts";
import { camera, ndc, raycaster } from "./scene-env.ts";
import { locToW } from "./picking.ts";
import { editErase, editStamp, scheduleEditRemesh } from "./render.ts";
import { clipBoxes, growBounds } from "./boxes.ts";
import { emptyBox } from "./model.ts";
import { setVoxClip } from "./clipboard.ts";
import { flush, save } from "./persistence.ts";
import type { Box3, Region, Vec } from "./types.ts";

const PASTE_GAP = 2; // cells left between a paste and the object's existing voxels

// round half away from zero (symmetric), so rotation re-centring can't creep
const rndSym = (v: number): number => (v < 0 ? -Math.round(-v) : Math.round(v));

// half-open bounds of a box list (min inclusive, max exclusive)
function bounds(boxes: Box3[]): { mn: Vec; mx: Vec } {
  const b = emptyBox();
  growBounds(boxes, b);
  return { mn: b.min, mx: b.max };
}
const regionOf = (boxes: Box3[]): Region => {
  const { mn, mx } = bounds(boxes);
  return { x0: mn.x, y0: mn.y, z0: mn.z, x1: mx.x, y1: mx.y, z1: mx.z };
};
const shift = (b: Box3, dx: number, dy: number, dz: number): Box3 => ({
  x0: b.x0 + dx,
  y0: b.y0 + dy,
  z0: b.z0 + dz,
  x1: b.x1 + dx,
  y1: b.y1 + dy,
  z1: b.z1 + dz,
  c: b.c,
});
// translate a box list so its min corner sits at the origin
function normalize(boxes: Box3[]): Box3[] {
  if (!boxes.length) return [];
  const { mn } = bounds(boxes);
  return boxes.map((b) => shift(b, -mn.x, -mn.y, -mn.z));
}

// ---- capture / lift / drop / clear ----
export function captureSelection(region: Region): void {
  S.sel3d = {
    region: { ...region },
    boxes: clipBoxes(S.editObject!.boxes, region),
    lifted: false,
  };
  scheduleEditRemesh(); // draw the marquee wireframe
}
// carve the content out of the object so it floats (move/rotate act on it).
// Flush first: this commits any pending debounced save as a clean snapshot while
// the content is still in the object, so a save firing mid-drag (or the tab
// closing) can never persist or record the carved-out, content-missing state.
export function liftSelection(): void {
  const s = S.sel3d;
  if (!s || s.lifted) return;
  flush();
  s.lifted = true;
  editErase(s.region); // remeshes; floating content is re-added by buildEditMesh
}
// stamp floating content back into the object and re-capture in place (a merge)
export function dropSelection(): void {
  const s = S.sel3d;
  if (!s || !s.lifted) return;
  s.lifted = false;
  editStamp(s.boxes); // remeshes
  s.boxes = clipBoxes(S.editObject!.boxes, s.region);
  save();
}
// deselect: a floating selection is stamped down first
export function clearSelection(): void {
  const s = S.sel3d;
  if (!s) return;
  S.sel3d = null;
  if (s.lifted) {
    editStamp(s.boxes);
    save();
  } else scheduleEditRemesh(); // just drop the wireframe
}

// ---- delete / copy / cut / paste ----
export function deleteSelection3d(): void {
  const s = S.sel3d;
  if (!s) return;
  const r = s.region, wasLifted = s.lifted;
  S.sel3d = null;
  if (!wasLifted) editErase(r); // a lifted selection's content is already gone
  else scheduleEditRemesh();
  save();
}
export function copySelection3d(): void {
  if (S.sel3d) setVoxClip(normalize(S.sel3d.boxes));
}
export function cutSelection3d(): void {
  copySelection3d();
  deleteSelection3d();
}
// Paste a normalised box list as a fresh floating-then-stamped selection, placed
// beside the object's existing voxels with a gap so the two never touch.
export function pasteVox(boxes: Box3[]): void {
  if (!boxes.length) return;
  clearSelection(); // committing any current selection first
  const norm = normalize(boxes);
  let ox = 0, oy = 0, oz = 0;
  const ex = S.editObject!.boxes;
  if (ex.length) {
    const { mn, mx } = bounds(ex);
    ox = mx.x + PASTE_GAP; // lay it to the +X side, clear of the existing geometry
    oy = mn.y;
    oz = mn.z;
  }
  const placed = norm.map((b) => shift(b, ox, oy, oz));
  S.sel3d = { region: regionOf(placed), boxes: placed, lifted: false };
  editStamp(placed); // remeshes (object + new wireframe)
  save();
}

// ---- move / rotate ----
export function translateSelection(dx: number, dy: number, dz: number): void {
  const s = S.sel3d;
  if (!s || (!dx && !dy && !dz)) return;
  const r = s.region;
  r.x0 += dx;
  r.x1 += dx;
  r.y0 += dy;
  r.y1 += dy;
  r.z0 += dz;
  r.z1 += dz;
  s.boxes = s.boxes.map((b) => shift(b, dx, dy, dz));
  scheduleEditRemesh();
}
// rotate a cell vector by r·90° about axis 0=X, 1=Y, 2=Z
function rotAxis(v: Vec, axis: number, r: number): Vec {
  let { x, y, z } = v;
  for (let i = ((r % 4) + 4) % 4; i > 0; i--) {
    if (axis === 0) {
      const ny = -z, nz = y;
      y = ny;
      z = nz;
    } else if (axis === 1) {
      const nx = -z, nz = x;
      x = nx;
      z = nz;
    } else {
      const nx = -y, ny = x;
      x = nx;
      y = ny;
    }
  }
  return { x, y, z };
}
// rotate one box about the origin (its two corner cells, then re-derive min/max)
function rotBox(b: Box3, axis: number, r: number): Box3 {
  const a = rotAxis({ x: b.x0, y: b.y0, z: b.z0 }, axis, r);
  const d = rotAxis({ x: b.x1 - 1, y: b.y1 - 1, z: b.z1 - 1 }, axis, r);
  return {
    x0: Math.min(a.x, d.x),
    y0: Math.min(a.y, d.y),
    z0: Math.min(a.z, d.z),
    x1: Math.max(a.x, d.x) + 1,
    y1: Math.max(a.y, d.y) + 1,
    z1: Math.max(a.z, d.z) + 1,
    c: b.c,
  };
}
// the object-local horizontal axis (X or Z) closest to screen-right — the one a
// Shift rotation tips the selection about
function horizAxis(): number {
  const m = camera.matrixWorld.elements; // column 0 = camera right
  const lr = rotY({ x: m[0], y: 0, z: m[2] }, -S.editXform.rot); // world -> object-local
  return Math.abs(lr.x) >= Math.abs(lr.z) ? 0 : 2;
}
export function rotateSelection3d(steps: number, horizontal: boolean): void {
  const s = S.sel3d;
  if (!s || !s.boxes.length) return;
  const r = ((steps % 4) + 4) % 4;
  if (!r) return;
  const axis = horizontal ? horizAxis() : 1; // Shift -> a horizontal axis, else Y
  const a = bounds(s.boxes);
  const cx = (a.mn.x + a.mx.x) / 2, cy = (a.mn.y + a.mx.y) / 2, cz = (a.mn.z + a.mx.z) / 2;
  let rot = s.boxes.map((b) => rotBox(b, axis, r));
  const n = bounds(rot);
  const ncx = (n.mn.x + n.mx.x) / 2, ncy = (n.mn.y + n.mx.y) / 2, ncz = (n.mn.z + n.mx.z) / 2;
  // re-centre on the old centre so the selection spins in place
  const tx = rndSym(cx - ncx), ty = rndSym(cy - ncy), tz = rndSym(cz - ncz);
  rot = rot.map((b) => shift(b, tx, ty, tz));
  s.boxes = rot;
  s.region = regionOf(rot);
  scheduleEditRemesh();
}

// ---- picking ----
// world AABB of the selection box (object-local 90° poses keep it axis-aligned)
function selectionWorldBox(): THREE.Box3 | null {
  const s = S.sel3d;
  if (!s) return null;
  const r = s.region, b = new THREE.Box3();
  for (const x of [r.x0, r.x1]) {
    for (const y of [r.y0, r.y1]) {
      for (const z of [r.z0, r.z1]) b.expandByPoint(locToW(x, y, z));
    }
  }
  return b;
}
// is the pointer over the current selection? (grab vs. start-a-new-marquee)
export function selectionHit(): boolean {
  const b = selectionWorldBox();
  if (!b) return false;
  raycaster.setFromCamera(ndc, camera);
  return raycaster.ray.intersectsBox(b);
}
