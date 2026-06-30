// Desktop pointer/keyboard interaction on the canvas.
//   Left drag: move the selected object (started on it) else pan the view.
//   Right drag: rotate the selected object (90° snap, started on it) else orbit.
//   Shift while moving: vertical axis only.  Middle drag: pan.  Wheel: zoom.
// Attaches its canvas listeners on import (side effect).
import type * as THREE from "three";
import { S } from "./state.ts";
import { key, rotY } from "./math.ts";
import {
  camera,
  canvas,
  goal,
  hoverVox,
  overlay,
  viewport,
  ZOOM_MAX,
} from "./scene-env.ts";
import {
  groundCell,
  localGroundCell,
  localPlaneCell,
  locToW,
  type Pick,
  pickChild,
  pickVoxel,
  setNdc,
  voxelTarget,
} from "./picking.ts";
import {
  eachObject,
  editAdd,
  editErase,
  editFill,
  eyedropColor,
  rebuild,
  selectionRender,
} from "./render.ts";
import { boxesOverlap, worldBox } from "./boxes.ts";
import { childById, clone, contextXform } from "./model.ts";
import { orbitView, panCamera } from "./camera.ts";
import { pointerMeasure, renderMeasure } from "./measure.ts";
import {
  beginRotate,
  captureSelection,
  clearSelection,
  dropSelection,
  liftSelection,
  rotateSelectionTo,
  selectionHit,
  translateSelection,
} from "./select.ts";
import { enterNode } from "./navigation.ts";
import {
  beginFineRotate,
  endFineRotate,
  fineRotateSelectionTo,
  rotateSelectionBy,
} from "./commands.ts";
import {
  recordRecent,
  selectColor,
  setSelAnchor,
  TOOL_ICON,
  updateChrome,
} from "./ui.ts";
import { save } from "./persistence.ts";
import type { Box3, Drag, Node, Seg, Vec } from "./types.ts";

const moved = (e: PointerEvent) =>
  (Math.abs(e.clientX - S.drag!.sx) + Math.abs(e.clientY - S.drag!.sy)) > 3;

// A small glyph that follows the pointer to show the active voxel tool while
// editing an object (the native cursor stays for precision). Hidden in scene
// mode and whenever the pointer leaves the canvas.
const toolCursor = document.createElement("div");
toolCursor.id = "toolcursor";
toolCursor.style.display = "none";
document.body.appendChild(toolCursor);
function updateToolCursor(e: PointerEvent): void {
  if (!S.editObject) {
    toolCursor.style.display = "none";
    return;
  }
  toolCursor.textContent = TOOL_ICON[S.tool];
  toolCursor.style.left = e.clientX + "px";
  toolCursor.style.top = e.clientY + "px";
  toolCursor.style.display = "block";
}

// Refresh the floating dimension overlay. While the measure tool is active it
// reads the runs through the cell under the pointer (the tool only pans/orbits,
// so this runs alongside that). The box brush draws its own dimensions, so skip.
function updateMeas(): void {
  if (S.tool !== "measure" || S.painting) return;
  if (S.drag && S.drag.mode === "box") return;
  pointerMeasure();
}

// World-Y units per pixel of vertical pointer travel, for Shift height edits.
// One screen pixel is `perPx` world units along the screen's vertical axis; world
// +Y projects onto that axis by the camera up-vector's world-y (= cos elevation),
// so dividing by it makes the dragged height track the pointer exactly instead of
// lagging it in the foreshortened isometric view.
function worldYPerPixel(): number {
  const perPx = (camera.top - camera.bottom) / viewport.h;
  const upY = Math.abs(camera.matrixWorldInverse.elements[5]);
  return perPx / Math.max(upY, 0.15); // clamp: near top-down, Y barely projects
}

// Pan/orbit the camera for a drag delta; returns true if it handled the mode.
function dragPanOrbit(e: PointerEvent): boolean {
  const d = S.drag;
  if (!d || (d.mode !== "pan" && d.mode !== "orbit")) return false;
  const dx = e.clientX - d.x, dy = e.clientY - d.y;
  d.x = e.clientX;
  d.y = e.clientY;
  (d.mode === "pan" ? panCamera : orbitView)(dx, dy);
  return true;
}

// Collision avoidance for moves. Snapshot (once per drag) every solid object's
// world boxes — split into the moving selection's own boxes and everyone else's
// (the obstacles). Invisible objects are absent from eachObject(), so they never
// block. A candidate offset is blocked if a shifted selection box overlaps an
// obstacle box, or if it would push the selection's lowest voxel below the
// ground (world y=0). minY is that lowest world y0 at drag start.
function moveCollision(): {
  occ: Box3[];
  sel: Box3[];
  minY: number;
  hgt: number;
} {
  const occ: Box3[] = [], sel: Box3[] = [];
  eachObject(S.root, { x: 0, y: 0, z: 0 }, 0, null, 0, (n, off, rot, owner) => {
    const tgt = owner && S.selection.has(owner) ? sel : occ;
    for (const b of n.boxes) tgt.push(worldBox(b, rot, off));
  });
  let minY = Infinity, maxY = -Infinity;
  for (const b of sel) {
    if (b.y0 < minY) minY = b.y0;
    if (b.y1 > maxY) maxY = b.y1;
  }
  return { occ, sel, minY, hgt: sel.length ? maxY - minY : 0 };
}
const moveBlocked = (
  d: Drag,
  dx: number,
  dy: number,
  dz: number,
): boolean => {
  if (boxesOverlap(d.sel ?? [], d.occ ?? [], dx, dy, dz)) return true;
  const minY = d.minY ?? Infinity;
  // resist pushing the lowest voxel below the ground; floor at min(0, start) so
  // an object already below ground isn't yanked up, only stopped from sinking
  return minY + dy < Math.min(0, minY);
};

function moveDragTo(e: PointerEvent): void {
  const d = S.drag!;
  const free = (x: number, y: number, z: number) =>
    e.altKey || !moveBlocked(d, x, y, z);
  if (e.shiftKey) { // Shift: set the intended height directly (overrides the hop)
    if (d.shiftAnchorY == null) {
      d.shiftAnchorY = e.clientY;
      d.dyBase = d.dyUser ?? 0;
    }
    const dy = d.dyBase! +
      Math.round((d.shiftAnchorY - e.clientY) * worldYPerPixel());
    if (free(d.dx!, dy, d.dz!)) {
      d.dyUser = dy;
      d.dy = dy;
    }
  } else { // horizontal: move on the floor plane, hopping over small obstacles
    d.shiftAnchorY = null;
    let dx = d.dx!, dz = d.dz!;
    const g = groundCell(0);
    if (g && d.start) {
      dx = g.x - d.start.x;
      dz = g.z - d.start.z;
    }
    // When the target is blocked, raise the object just enough to clear it — but
    // only up to 10% of its height. The bump is recomputed each move, so dragging
    // off the obstacle (bump 0 clears) drops it back to the user's chosen height.
    const base = d.dyUser ?? 0;
    const maxBump = Math.floor(0.1 * (d.hgt ?? 0));
    let hopped = false;
    for (let b = 0; b <= maxBump; b++) {
      if (free(dx, base + b, dz)) {
        d.dx = dx;
        d.dz = dz;
        d.dy = base + b;
        hopped = true;
        break;
      }
    }
    if (!hopped) { // obstacle too tall to hop: slide along it at the base height
      if (free(dx, base, d.dz!)) d.dx = dx;
      if (free(d.dx!, base, dz)) d.dz = dz;
      d.dy = base;
    }
  }
  for (const id of S.selection) {
    for (const m of (S.childMeshes[id] || [])) {
      m.position.set(d.dx!, d.dy!, d.dz!);
      // the shadow frustum is fitted to the static scene, so a mesh dragged out
      // of it casts a clipped shadow that snaps in only on drop. Drop the moving
      // object's shadow entirely during the drag; rebuild() restores it on commit.
      m.castShadow = false;
    }
  }
  overlay.position.set(d.dx!, d.dy!, d.dz!);
}
// Finalise a move. With `copy` (Ctrl held at release) the dragged delta is baked
// into fresh clones placed at the new spot and the originals are left untouched
// (their meshes snap back on rebuild); otherwise the selection itself moves.
function commitMove(copy: boolean): void {
  const d = S.drag!,
    x = contextXform(),
    dL = rotY(
      { x: Math.round(d.dx!), y: 0, z: Math.round(d.dz!) },
      -x.rot, // world delta -> context-local (inverse rotation)
    ),
    dy = Math.round(d.dy!);
  if (copy) {
    const dups: Node[] = [];
    for (const id of S.selection) {
      const c = childById(id);
      if (!c) continue;
      const dup = clone(c);
      dup.pos = { x: c.pos.x + dL.x, y: c.pos.y + dy, z: c.pos.z + dL.z };
      dups.push(dup);
    }
    S.context.children.push(...dups);
    S.selection = new Set(dups.map((n) => n.id));
  } else {
    for (const id of S.selection) {
      const c = childById(id);
      if (c) {
        c.pos.x += dL.x;
        c.pos.y += dy;
        c.pos.z += dL.z;
      }
    }
  }
  overlay.position.set(0, 0, 0);
  rebuild();
  updateChrome(); // refresh tree rows (copies add nodes) + group thumbnails
  save();
}
// the world horizontal axis (X or Z) closest to screen-right — the one a Shift
// rotation tips the whole selection about
function sceneHorizAxis(): number {
  const m = camera.matrixWorld.elements; // column 0 = camera right
  return Math.abs(m[0]) >= Math.abs(m[2]) ? 0 : 2;
}
function rotDragTo(e: PointerEvent): void {
  const d = S.drag!;
  // Alt and/or Shift leave plain 90°-Y snapping for a baked rotation: the model
  // only stores Y poses, so a finer angle (Alt) or a horizontal axis (Shift) is
  // re-voxelised. The whole selection turns rigidly about one shared pivot.
  if (e.altKey || e.shiftKey) {
    const axis = e.shiftKey ? sceneHorizAxis() : 1; // Shift -> tip about a horizontal axis
    if (!d.fine || d.axis !== axis) { // (re)enter baked mode, or the tip axis changed
      if (d.fine) endFineRotate(); // keep the baked result so far, then re-snapshot
      beginFineRotate();
      d.fine = true;
      d.axis = axis;
      d.sx = e.clientX;
      d.deg = 0;
    }
    const step = e.altKey ? 15 : 90; // Alt refines the increment; Shift alone snaps to 90°
    const pxPerStep = e.altKey ? 25 : 70;
    const deg = Math.round((d.sx - e.clientX) / pxPerStep) * step;
    if (deg !== d.deg) {
      fineRotateSelectionTo(deg, axis);
      d.deg = deg;
      d.dirty = true;
    }
  } else { // 90°-snap rotation about the selection centre (rigid, no baking)
    if (d.fine) { // leaving baked mode — keep the result, restart the 90° count here
      endFineRotate();
      d.fine = false;
      d.sx = e.clientX;
      d.steps = 0;
    }
    const steps = Math.round((d.sx - e.clientX) / 70); // drag right -> rotate the intuitive way
    if (steps !== d.steps) {
      rotateSelectionBy(steps - d.steps!);
      d.steps = steps;
      d.dirty = true; // rotated during the drag -> commit + refresh chrome on pointerup
    }
  }
}

function eyedrop(): void { // pick the draw colour from the voxel under the cursor (any object)
  const c = eyedropColor();
  if (c == null) return;
  // one-shot: return to the tool the eyedropper was invoked from (set in ui.ts)
  if (S.eyedropReturn != null) {
    S.tool = S.eyedropReturn;
    S.eyedropReturn = null;
  }
  selectColor(c); // sets the draw colour + chrome refresh (recents track use, not picks)
}

// Fill tool. Normally flood-fills the connected same-colour region under the
// cursor; with Shift it recolours just the single hovered cell, and keeps
// recolouring cell-by-cell as the pointer is dragged across the surface.
function applyVoxel(single: boolean): void {
  const t = pickVoxel();
  const c = voxelTarget(t);
  if (!c) return;
  const k = key(c.x, c.y, c.z);
  if (k !== S.lastVox) {
    // Shift -> overwrite this one cell with the draw colour; otherwise recolour
    // the whole face-connected same-colour run. Record only on a real change.
    if (single) {
      editAdd(
        { x0: c.x, y0: c.y, z0: c.z, x1: c.x + 1, y1: c.y + 1, z1: c.z + 1 },
        S.selColor,
      );
      recordRecent(S.selColor);
    } else if (editFill(c, S.selColor)) recordRecent(S.selColor);
    S.lastVox = k;
  }
  updateVoxHover(t);
}
function updateVoxHover(t: Pick = pickVoxel()): void {
  const cell = voxelTarget(t); // add -> addCell/ground, erase/paint -> hovered cell
  if (!cell) {
    hoverVox.visible = false;
    return;
  }
  // centre the cube on the cell in OBJECT-LOCAL space, then map to world — the
  // half-cell offset has to rotate with the edit pose (as the real voxel does
  // through editGroup), or the preview drifts when the object/context is turned.
  const w = locToW(cell.x + 0.5, cell.y + 0.5, cell.z + 0.5);
  hoverVox.visible = true;
  (hoverVox.material as THREE.LineBasicMaterial).color.set(
    S.tool === "erase" ? 0xb5838d : 0xa7c4bc,
  );
  hoverVox.position.copy(w);
}

// ---- box brush (add/erase): drag a footprint in the started face's plane,
// Shift extrudes along that face's normal ----
type BoxState = NonNullable<Drag["box"]>;
// the two in-plane axes for normal axis `na`
const planeAxes = (na: number): [number, number] =>
  na === 0 ? [1, 2] : na === 1 ? [0, 2] : [0, 1];
// half-open Box3 region for box `b` with the given in-plane corner + extrude depth
function boxRegionAt(b: BoxState, cu: number, cv: number, hy: number): Box3 {
  const [ua, va] = planeAxes(b.na);
  const lo = [0, 0, 0], hi = [0, 0, 0];
  const span = (ax: number, p: number, q: number) => {
    lo[ax] = Math.min(p, q);
    hi[ax] = Math.max(p, q);
  };
  span(b.na, b.s[b.na], b.s[b.na] + hy); // extrude axis: s[na] .. s[na]+hy
  span(ua, b.s[ua], cu);
  span(va, b.s[va], cv);
  return {
    x0: lo[0],
    y0: lo[1],
    z0: lo[2],
    x1: hi[0] + 1,
    y1: hi[1] + 1,
    z1: hi[2] + 1,
    c: 0,
  };
}
const boxRegion = (b: BoxState): Box3 => {
  const [ua, va] = planeAxes(b.na);
  return boxRegionAt(b, b.c[ua], b.c[va], b.hy);
};

function startBox(
  base: { x: number; y: number; sx: number; sy: number },
): void {
  const t = pickVoxel();
  let s: Vec, na: number;
  if (t) {
    // normal axis = the one where the add-cell steps off the hit cell
    na = t.addCell.x !== t.cell.x ? 0 : t.addCell.y !== t.cell.y ? 1 : 2;
    s = S.tool === "add" ? t.addCell : t.cell;
  } else {
    // empty space: lay the footprint on the ground plane (XZ), extrude in Y. add
    // needs a ground start to build off nothing; erase may also start mid-air.
    const g = localGroundCell(0);
    if (!g) return;
    s = g;
    na = 1;
  }
  S.drag = {
    ...base,
    mode: "box",
    shiftAnchorY: null,
    box: { s: [s.x, s.y, s.z], c: [s.x, s.y, s.z], na, hy: 0 },
    // add collides with the object's own solids; snapshot them (immutable during
    // the drag) so the box can't be dragged to overlap a filled cell (Alt: ignore)
    occ: S.tool === "add" ? S.editObject!.boxes.slice() : undefined,
  };
  hoverVox.visible = false;
  renderBox();
}
function boxDragTo(e: PointerEvent): void {
  const d = S.drag!, b = d.box!;
  const [ua, va] = planeAxes(b.na);
  // would the box with this corner/extrude clear every solid? (Alt ignores them)
  const collide = S.tool === "add" && !e.altKey;
  const clear = (cu: number, cv: number, hy: number): boolean =>
    !collide ||
    !boxesOverlap([boxRegionAt(b, cu, cv, hy)], d.occ ?? [], 0, 0, 0);
  if (e.shiftKey) { // extrude along the face normal (Shift)
    if (d.shiftAnchorY === null) {
      d.shiftAnchorX = e.clientX;
      d.shiftAnchorY = e.clientY;
      d.hyBase = b.hy;
    }
    // Map pointer travel onto the extrude axis as it appears ON SCREEN, so the
    // box grows in the direction you drag (not always "up"). Take the world
    // direction of a one-cell +na step, resolve it against the camera's right/up
    // axes to get its on-screen direction, then scale by the ortho pixels-per-
    // world-unit so one screen-cell of pointer travel == one cell of depth (the
    // extruded face tracks the cursor).
    const w0 = locToW(b.s[0], b.s[1], b.s[2]);
    const sN = b.s.slice() as [number, number, number];
    sN[b.na] += 1;
    const w1 = locToW(sN[0], sN[1], sN[2]);
    const wx = w1.x - w0.x, wy = w1.y - w0.y, wz = w1.z - w0.z; // unit (one cell)
    const m = camera.matrixWorld.elements; // columns 0..2 = right, 4..6 = up
    const aR = wx * m[0] + wy * m[1] + wz * m[2]; // axis along screen-right
    const aU = wx * m[4] + wy * m[5] + wz * m[6]; // axis along screen-up
    // sin²(angle between the axis and the view direction): how much of the axis
    // lies in the screen plane, independent of zoom. Near 0 only when the axis
    // points almost straight at/away from the camera (no usable screen direction)
    // — NOT merely when the model is small on screen, which a pixel threshold
    // would wrongly trip, dropping side faces back to the vertical mapping.
    const sin2 = aR * aR + aU * aU;
    const px = viewport.h / (camera.top - camera.bottom); // pixels per world unit
    const stepX = aR * px, stepY = -aU * px; // px per +1 cell (y down +)
    const dxp = e.clientX - d.shiftAnchorX!, dyp = e.clientY - d.shiftAnchorY!;
    const hy = d.hyBase! + (sin2 > 0.02 // axis usably on screen -> project onto it
      ? Math.round((dxp * stepX + dyp * stepY) / (stepX * stepX + stepY * stepY))
      // axis ~along the view: no on-screen direction, fall back to vertical travel
      : Math.round((d.shiftAnchorY! - e.clientY) * worldYPerPixel()));
    if (clear(b.c[ua], b.c[va], hy)) b.hy = hy; // else stop at the last clear depth
  } else { // drag the footprint in the face's plane
    d.shiftAnchorY = null;
    const p = localPlaneCell(b.na, b.s[b.na]);
    if (p) { // advance each in-plane axis only where it stays clear (slides along solids)
      const pc = [p.x, p.y, p.z];
      if (clear(pc[ua], b.c[va], b.hy)) b.c[ua] = pc[ua];
      if (clear(b.c[ua], pc[va], b.hy)) b.c[va] = pc[va];
    }
  }
  renderBox();
}
function commitBox(): void {
  const r = boxRegion(S.drag!.box!);
  if (S.tool === "add") {
    editAdd(r, S.selColor);
    recordRecent(S.selColor); // the colour was used to add — remember it
  } else editErase(r);
  S.liveMeas = null;
  renderMeasure();
  updateChrome();
  save();
}
// build the box wireframe as measure-style segments (3 labelled dimension edges + the rest unlabelled)
function renderBox(): void {
  const r = boxRegion(S.drag!.box!);
  const X0 = r.x0, X1 = r.x1, Y0 = r.y0, Y1 = r.y1, Z0 = r.z0, Z1 = r.z1;
  const nx = X1 - X0, ny = Y1 - Y0, nz = Z1 - Z0;
  const seg = (
    ax: number,
    ay: number,
    az: number,
    bx: number,
    by: number,
    bz: number,
    len: number,
    label: boolean,
  ): Seg => ({
    a: locToW(ax, ay, az),
    b: locToW(bx, by, bz),
    mid: locToW((ax + bx) / 2, (ay + by) / 2, (az + bz) / 2),
    len,
    filled: true,
    nolabel: !label,
  });
  const o: Seg[] = [];
  // label a dimension only when it's >= 2: a "1" is crammed and self-evident
  o.push(seg(X0, Y0, Z0, X1, Y0, Z0, nx, nx >= 2)); // X dimension
  o.push(seg(X0, Y0, Z0, X0, Y0, Z1, nz, nz >= 2)); // Z dimension
  o.push(seg(X0, Y0, Z0, X0, Y1, Z0, ny, ny >= 2)); // Y dimension
  o.push(
    seg(X1, Y0, Z0, X1, Y0, Z1, 0, false),
    seg(X0, Y0, Z1, X1, Y0, Z1, 0, false),
  ); // rest of bottom
  o.push(
    seg(X0, Y1, Z0, X1, Y1, Z0, 0, false),
    seg(X0, Y1, Z0, X0, Y1, Z1, 0, false), // top
    seg(X1, Y1, Z0, X1, Y1, Z1, 0, false),
    seg(X0, Y1, Z1, X1, Y1, Z1, 0, false),
  );
  o.push(
    seg(X1, Y0, Z0, X1, Y1, Z0, 0, false),
    seg(X0, Y0, Z1, X0, Y1, Z1, 0, false), // verticals
    seg(X1, Y0, Z1, X1, Y1, Z1, 0, false),
  );
  S.liveMeas = o;
  renderMeasure();
}

// ---- select tool: grab/move/rotate the marquee selection ----
// The content is lifted (carved out of the object) lazily, on the first actual
// move/rotate, so a plain click on the selection neither edits nor records undo.
function startSelMove(base: { x: number; y: number; sx: number; sy: number }): void {
  const y0 = S.sel3d!.region.y0; // drag on the selection's floor plane
  S.drag = {
    ...base,
    mode: "selmove",
    start: localGroundCell(y0) ?? { x: 0, y: y0, z: 0 },
    dx: 0,
    dy: 0,
    dz: 0,
    shiftAnchorY: null,
  };
}
function startSelRot(base: { x: number; y: number; sx: number; sy: number }): void {
  S.drag = { ...base, mode: "selrot", steps: 0 };
}
function selMoveTo(e: PointerEvent): void {
  const d = S.drag!;
  let tx = d.dx!, ty = d.dy!, tz = d.dz!; // total delta from the drag start
  if (e.shiftKey) { // vertical only (local Y == world Y under a Y-rotation)
    if (d.shiftAnchorY == null) {
      d.shiftAnchorY = e.clientY;
      d.dyBase = ty;
    }
    ty = d.dyBase! + Math.round((d.shiftAnchorY - e.clientY) * worldYPerPixel());
  } else { // slide on the start floor plane
    d.shiftAnchorY = null;
    const g = localGroundCell(d.start!.y);
    if (g) {
      tx = g.x - d.start!.x;
      tz = g.z - d.start!.z;
    }
  }
  if (tx !== d.dx! || ty !== d.dy! || tz !== d.dz!) {
    if (!S.sel3d!.lifted) liftSelection(); // carve out on first movement
    translateSelection(tx - d.dx!, ty - d.dy!, tz - d.dz!);
    d.dx = tx;
    d.dy = ty;
    d.dz = tz;
  }
}
function selRotTo(e: PointerEvent): void {
  const d = S.drag!;
  const steps = Math.round((d.sx - e.clientX) / 70);
  if (steps === d.steps) return;
  if (!S.sel3d!.lifted) { // carve out + snapshot the base orientation on first turn
    liftSelection();
    beginRotate();
  }
  d.steps = steps;
  rotateSelectionTo(steps, e.shiftKey); // absolute turn from the base; Shift -> horizontal
}
// finalise a marquee drag: a real drag captures the box, a click just deselects
function commitMarquee(didMove: boolean): void {
  S.liveMeas = null; // drop the marquee wireframe/dimensions
  renderMeasure();
  if (didMove) captureSelection(boxRegion(S.drag!.box!));
  updateChrome();
}

canvas.addEventListener("pointerdown", (e) => {
  // a gesture is single-button: ignore extra buttons pressed while one is held
  // (mouse buttons share a pointerId). Replacing S.drag/ignoring S.painting here
  // would orphan an in-progress move/box/paint that only its pointerup finalises.
  if (S.drag || S.painting) return;
  canvas.setPointerCapture(e.pointerId);
  setNdc(e.clientX, e.clientY);
  const base = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY };

  // middle button: pan the view
  if (e.button === 1) {
    S.drag = { ...base, mode: "pan" };
    return;
  }
  if (S.editObject) {
    if (e.button === 0) {
      // view/measure pan the camera (non-destructive); select grabs/extends the
      // marquee; add/erase drag out a box footprint; eyedropper picks a colour
      // (one-shot); paint floods the hovered cell
      if (S.tool === "view" || S.tool === "measure") S.drag = { ...base, mode: "pan" };
      else if (S.tool === "select") {
        if (S.sel3d && selectionHit()) startSelMove(base);
        else {
          clearSelection(); // clicking outside the selection deselects it
          startBox(base); // drag out a fresh marquee
        }
      } else if (S.tool === "add" || S.tool === "erase") startBox(base);
      else if (S.tool === "eyedropper") eyedrop();
      else {
        S.painting = true;
        S.lastVox = null;
        applyVoxel(e.shiftKey);
      }
    } else if (e.button === 2) {
      if (S.tool === "select" && S.sel3d && selectionHit()) startSelRot(base);
      else S.drag = { ...base, mode: "orbit" };
    }
    return;
  }

  const hitId = pickChild();
  const onSel = hitId && S.selection.has(hitId);
  if (e.button === 0) {
    if (onSel) {
      S.drag = {
        ...base,
        mode: "move",
        start: groundCell(0),
        dx: 0,
        dy: 0,
        dz: 0,
        shiftAnchorY: null,
        ...moveCollision(),
      };
    } else S.drag = { ...base, mode: "pan", clickId: hitId };
  } else if (e.button === 2) {
    if (onSel) S.drag = { ...base, mode: "rotobj", steps: 0 };
    else S.drag = { ...base, mode: "orbit" };
  }
});

canvas.addEventListener("pointermove", (e) => {
  setNdc(e.clientX, e.clientY);
  if (S.editObject && S.painting) {
    applyVoxel(e.shiftKey);
  } else if (!S.drag) {
    // the hover cube is only meaningful for the placing tools (add/erase/paint/
    // eyedropper), not view/select/measure
    if (
      S.editObject && S.tool !== "select" && S.tool !== "view" &&
      S.tool !== "measure"
    ) updateVoxHover();
    else hoverVox.visible = false;
  } else if (!dragPanOrbit(e)) {
    if (S.drag.mode === "move") moveDragTo(e);
    else if (S.drag.mode === "rotobj") rotDragTo(e);
    else if (S.drag.mode === "box") boxDragTo(e);
    else if (S.drag.mode === "selmove") selMoveTo(e);
    else if (S.drag.mode === "selrot") selRotTo(e);
  }
  updateMeas(); // floating dimensions, alongside whatever the active tool did
  updateToolCursor(e); // the tool glyph that trails the pointer in edit mode
});

canvas.addEventListener("pointerup", (e) => {
  try {
    canvas.releasePointerCapture(e.pointerId);
  } catch (_) { /* not captured */ }
  if (S.editObject) {
    if (S.painting) {
      S.painting = false;
      updateChrome();
      save();
    } else if (S.drag && S.drag.mode === "box") {
      if (S.tool === "select") commitMarquee(moved(e));
      else commitBox();
    } else if (
      S.drag && (S.drag.mode === "selmove" || S.drag.mode === "selrot")
    ) {
      dropSelection(); // stamp the moved/rotated content back into the object
    }
    S.drag = null;
    return;
  }
  if (S.drag) {
    // a left click (no drag) -> select / deselect; a middle-button pan never does
    if (S.drag.mode === "pan" && !moved(e) && e.button === 0) {
      const id = S.drag.clickId;
      // no range in 3D, so Shift behaves like Ctrl here: add/remove a single item
      const add = e.shiftKey || e.ctrlKey || e.metaKey;
      const prevSel = new Set(S.selection);
      if (id) {
        if (add) {
          S.selection.has(id) ? S.selection.delete(id) : S.selection.add(id);
        } else S.selection = new Set([id]);
        setSelAnchor(id); // pivot for a later Shift range-select in the tree
      } else if (!add) {
        S.selection.clear();
        setSelAnchor(null);
      }
      selectionRender(prevSel); // re-mesh if a glass object's selection flipped
      updateChrome();
    } else if (S.drag.mode === "move") {
      // only copy on a real drag — a Ctrl+click without movement must not
      // silently duplicate the object in place
      commitMove(moved(e) && (e.ctrlKey || e.metaKey));
    } else if (S.drag.mode === "rotobj") {
      if (S.drag.fine) endFineRotate(); // drop the fine-rotation snapshot
      if (S.drag.dirty) {
        updateChrome(); // tree thumbnails track the new pose
        save();
      }
    }
  }
  S.drag = null;
});
// the browser can cancel a captured pointer (OS gesture, lost capture) without
// a pointerup. Tear down so the gesture state can't wedge (which the mid-gesture
// guard in pointerdown would otherwise make unrecoverable) and resync visuals.
canvas.addEventListener("pointercancel", () => {
  if (!S.drag && !S.painting) return;
  const painted = S.painting;
  // a cancelled selection move/rotate has already carved its content out of the
  // object (liftSelection); stamp it back so the model can't desync from the view
  if (S.drag && (S.drag.mode === "selmove" || S.drag.mode === "selrot")) {
    dropSelection();
  }
  if (S.drag && S.drag.mode === "rotobj" && S.drag.fine) endFineRotate();
  S.drag = null;
  S.painting = false;
  S.liveMeas = null; // drop any in-progress box-brush / measure wireframe
  renderMeasure();
  rebuild(); // revert an uncommitted move/box to the model (resets mesh + overlay)
  if (painted) { // paint mutates per-move, so persist what was already drawn
    updateChrome();
    save();
  }
});
canvas.addEventListener("pointerleave", () => {
  hoverVox.visible = false;
  toolCursor.style.display = "none"; // the trailing tool glyph belongs over the canvas
  if (S.tool === "measure" && !S.drag && !S.painting && S.liveMeas) {
    S.liveMeas = null; // drop the floating dimensions once the pointer leaves
    renderMeasure();
  }
});
canvas.addEventListener("contextmenu", (e) => e.preventDefault());
canvas.addEventListener("wheel", (e) => {
  e.preventDefault();
  goal.zoom *= e.deltaY > 0 ? 1 / 0.95 : 0.95;
  goal.zoom = Math.max(6, Math.min(ZOOM_MAX, goal.zoom));
}, { passive: false });

canvas.addEventListener("dblclick", (e) => {
  if (S.editObject) return;
  setNdc(e.clientX, e.clientY);
  const id = pickChild();
  if (!id) return;
  enterNode(childById(id)!, true); // descend into a group, or open an object for painting
});
