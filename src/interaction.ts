// Desktop pointer/keyboard interaction on the canvas.
//   Left drag: move the selected object (started on it) else pan the view.
//   Right drag: rotate the selected object (90° snap, started on it) else orbit.
//   Shift while moving: vertical axis only.  Middle drag: pan.  Wheel: zoom.
// Attaches its canvas listeners on import (side effect).
import type * as THREE from "three";
import { S } from "./state.ts";
import { addv, key, rotY } from "./math.ts";
import {
  camera,
  canvas,
  goal,
  hoverVox,
  overlay,
  ZOOM_MAX,
} from "./scene-env.ts";
import {
  groundCell,
  localGroundCell,
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
  rebuild,
  refreshOverlay,
} from "./render.ts";
import { boxesOverlap, worldBox } from "./boxes.ts";
import { childById, contextXform } from "./model.ts";
import { orbitView, panCamera } from "./camera.ts";
import {
  clearMeasure,
  freezeMeasure,
  measureActive,
  pointerMeasure,
  renderMeasure,
} from "./measure.ts";
import { enterNode } from "./navigation.ts";
import { rotateSelectionBy } from "./commands.ts";
import { updateChrome } from "./ui.ts";
import { save } from "./persistence.ts";
import type { Box3, Drag, Seg } from "./types.ts";

const moved = (e: PointerEvent) =>
  (Math.abs(e.clientX - S.drag!.sx) + Math.abs(e.clientY - S.drag!.sy)) > 3;
// sentinel start-x for non-click drags (middle-button pan): keeps moved() true so
// the gesture is never finalised as a click in pointerup
const NOT_A_CLICK = -1e9;

// World-Y units per pixel of vertical pointer travel, for Shift height edits.
// One screen pixel is `perPx` world units along the screen's vertical axis; world
// +Y projects onto that axis by the camera up-vector's world-y (= cos elevation),
// so dividing by it makes the dragged height track the pointer exactly instead of
// lagging it in the foreshortened isometric view.
function worldYPerPixel(): number {
  const perPx = (camera.top - camera.bottom) /
    canvas.getBoundingClientRect().height;
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
function moveCollision(): { occ: Box3[]; sel: Box3[]; minY: number } {
  const occ: Box3[] = [], sel: Box3[] = [];
  eachObject(S.root, { x: 0, y: 0, z: 0 }, 0, null, 0, (n, off, rot, owner) => {
    const tgt = owner && S.selection.has(owner) ? sel : occ;
    for (const b of n.boxes) tgt.push(worldBox(b, rot, off));
  });
  let minY = Infinity;
  for (const b of sel) if (b.y0 < minY) minY = b.y0;
  return { occ, sel, minY };
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
  let dx = d.dx!, dy = d.dy!, dz = d.dz!;
  if (e.shiftKey) { // Shift: adjust height from where it was dragged to
    if (d.shiftAnchorY == null) {
      d.shiftAnchorY = e.clientY;
      d.dyBase = d.dy;
    }
    dy = d.dyBase! +
      Math.round((d.shiftAnchorY - e.clientY) * worldYPerPixel());
  } else { // horizontal: move on the floor plane
    d.shiftAnchorY = null;
    const g = groundCell(0);
    if (g && d.start) {
      dx = g.x - d.start.x;
      dz = g.z - d.start.z;
    }
  }
  // advance each axis toward the cursor only where it wouldn't intersect another
  // object (so the piece slides along obstacles); Alt ignores collisions.
  const free = (x: number, y: number, z: number) =>
    e.altKey || !moveBlocked(d, x, y, z);
  if (free(dx, d.dy!, d.dz!)) d.dx = dx;
  if (free(d.dx!, dy, d.dz!)) d.dy = dy;
  if (free(d.dx!, d.dy!, dz)) d.dz = dz;
  for (const id of S.selection) {
    for (const m of (S.childMeshes[id] || [])) {
      m.position.set(d.dx!, d.dy!, d.dz!);
    }
  }
  overlay.position.set(d.dx!, d.dy!, d.dz!);
}
function commitMove(): void {
  const d = S.drag!,
    x = contextXform(),
    dL = rotY(
      { x: Math.round(d.dx!), y: 0, z: Math.round(d.dz!) },
      -x.rot, // world delta -> context-local (inverse rotation)
    ),
    dy = Math.round(d.dy!);
  for (const id of S.selection) {
    const c = childById(id);
    if (c) {
      c.pos.x += dL.x;
      c.pos.y += dy;
      c.pos.z += dL.z;
    }
  }
  overlay.position.set(0, 0, 0);
  rebuild();
  save();
}
function rotDragTo(e: PointerEvent): void {
  const d = S.drag!;
  const steps = Math.round((d.sx - e.clientX) / 70); // drag right -> rotate the intuitive way
  if (steps !== d.steps) {
    rotateSelectionBy(steps - d.steps!);
    d.steps = steps;
    d.dirty = true; // rotated during the drag -> commit + refresh chrome on pointerup
  }
}

function applyVoxel(): void { // bucket: flood-fill the connected same-colour region under the cursor
  const t = pickVoxel();
  const c = voxelTarget(t);
  if (!c) return;
  const k = key(c.x, c.y, c.z);
  if (k !== S.lastVox) {
    editFill(c, S.selColor); // recolours the whole face-connected same-colour run
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
  const w = addv(rotY(cell, S.editXform.rot), S.editXform.off);
  hoverVox.visible = true;
  (hoverVox.material as THREE.LineBasicMaterial).color.set(
    S.tool === "erase" ? 0xb5838d : 0xa7c4bc,
  );
  hoverVox.position.set(w.x + 0.5, w.y + 0.5, w.z + 0.5);
}

// ---- box brush (add/erase): drag an NxM footprint, Shift extrudes vertically ----
function startBox(
  _e: PointerEvent,
  base: { x: number; y: number; sx: number; sy: number },
): void {
  const s = voxelTarget();
  if (!s) return; // nothing under the pointer to start from
  S.drag = {
    ...base,
    mode: "box",
    shiftAnchorY: null,
    box: { x0: s.x, y0: s.y, z0: s.z, x1: s.x, z1: s.z, hy: 0 },
    // add collides with the object's own solids; snapshot them (immutable during
    // the drag) so the box can't be dragged to overlap a filled cell (Alt: ignore)
    occ: S.tool === "add" ? S.editObject!.boxes.slice() : undefined,
  };
  hoverVox.visible = false;
  renderBox();
}
function boxDragTo(e: PointerEvent): void {
  const d = S.drag!, b = d.box!;
  // would the box with this corner/height clear every solid? (Alt ignores them)
  const collide = S.tool === "add" && !e.altKey;
  const clear = (x1: number, z1: number, hy: number): boolean => {
    if (!collide) return true;
    const r: Box3 = {
      x0: Math.min(b.x0, x1),
      y0: Math.min(b.y0, b.y0 + hy),
      z0: Math.min(b.z0, z1),
      x1: Math.max(b.x0, x1) + 1,
      y1: Math.max(b.y0, b.y0 + hy) + 1,
      z1: Math.max(b.z0, z1) + 1,
      c: 0,
    };
    return !boxesOverlap([r], d.occ ?? [], 0, 0, 0);
  };
  if (e.shiftKey) { // vertical extrude (like moving objects with Shift)
    if (d.shiftAnchorY === null) {
      d.shiftAnchorY = e.clientY;
      d.hyBase = b.hy;
    }
    const hy = d.hyBase! +
      Math.round((d.shiftAnchorY! - e.clientY) * worldYPerPixel());
    if (clear(b.x1, b.z1, hy)) b.hy = hy; // else stop at the last clear height
  } else { // horizontal footprint
    d.shiftAnchorY = null;
    const c = localGroundCell(b.y0);
    if (c) { // advance each axis only where it stays clear (slides along solids)
      if (clear(c.x, b.z1, b.hy)) b.x1 = c.x;
      if (clear(b.x1, c.z, b.hy)) b.z1 = c.z;
    }
  }
  renderBox();
}
function boxExtent() {
  const b = S.drag!.box!;
  return {
    x0: Math.min(b.x0, b.x1),
    x1: Math.max(b.x0, b.x1),
    z0: Math.min(b.z0, b.z1),
    z1: Math.max(b.z0, b.z1),
    y0: Math.min(b.y0, b.y0 + b.hy),
    y1: Math.max(b.y0, b.y0 + b.hy),
  };
}
function commitBox(): void {
  const x = boxExtent();
  // boxExtent is inclusive; box regions are half-open
  const r = {
    x0: x.x0,
    y0: x.y0,
    z0: x.z0,
    x1: x.x1 + 1,
    y1: x.y1 + 1,
    z1: x.z1 + 1,
  };
  if (S.tool === "add") editAdd(r, S.selColor);
  else editErase(r);
  S.liveMeas = null;
  renderMeasure();
  updateChrome();
  save();
}
// build the box wireframe as measure-style segments (3 labelled dimension edges + the rest unlabelled)
function renderBox(): void {
  const x = boxExtent(),
    X0 = x.x0,
    X1 = x.x1 + 1,
    Y0 = x.y0,
    Y1 = x.y1 + 1,
    Z0 = x.z0,
    Z1 = x.z1 + 1;
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

canvas.addEventListener("pointerdown", (e) => {
  // a gesture is single-button: ignore extra buttons pressed while one is held
  // (mouse buttons share a pointerId). Replacing S.drag/ignoring S.painting here
  // would orphan an in-progress move/box/paint that only its pointerup finalises.
  if (S.drag || S.painting) return;
  canvas.setPointerCapture(e.pointerId);
  setNdc(e.clientX, e.clientY);
  const base = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY };

  if (measureActive()) { // left-click freezes, right-click clears; drags still navigate
    if (e.button === 0) S.drag = { ...base, mode: "pan", meas: "freeze" };
    else if (e.button === 2) S.drag = { ...base, mode: "orbit", meas: "clear" };
    else if (e.button === 1) S.drag = { ...base, mode: "pan", sx: NOT_A_CLICK };
    return;
  }
  if (S.editObject) {
    if (e.button === 0) {
      // add/erase drag out a box footprint; paint floods the cell under the cursor
      if (S.tool === "add" || S.tool === "erase") startBox(e, base);
      else {
        S.painting = true;
        S.lastVox = null;
        applyVoxel();
      }
    } else if (e.button === 2) S.drag = { ...base, mode: "orbit" };
    else if (e.button === 1) S.drag = { ...base, mode: "pan" };
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
  } else if (e.button === 1) {
    S.drag = { ...base, mode: "pan", sx: NOT_A_CLICK };
  }
});

canvas.addEventListener("pointermove", (e) => {
  setNdc(e.clientX, e.clientY);
  if (measureActive()) {
    dragPanOrbit(e);
    pointerMeasure();
    return;
  }
  if (S.editObject && S.painting) {
    applyVoxel();
    return;
  }
  if (!S.drag) {
    if (S.editObject) updateVoxHover();
    else hoverVox.visible = false;
    return;
  }
  if (dragPanOrbit(e)) return;
  if (S.drag.mode === "move") moveDragTo(e);
  else if (S.drag.mode === "rotobj") rotDragTo(e);
  else if (S.drag.mode === "box") boxDragTo(e);
});

canvas.addEventListener("pointerup", (e) => {
  try {
    canvas.releasePointerCapture(e.pointerId);
  } catch (_) { /* not captured */ }
  if (measureActive()) {
    if (S.drag && !moved(e)) {
      if (S.drag.meas === "freeze") freezeMeasure();
      else if (S.drag.meas === "clear") clearMeasure();
    }
    S.drag = null;
    return;
  }
  if (S.editObject) {
    if (S.painting) {
      S.painting = false;
      updateChrome();
      save();
    } else if (S.drag && S.drag.mode === "box") commitBox();
    S.drag = null;
    return;
  }
  if (S.drag) {
    if (S.drag.mode === "pan" && !moved(e)) { // a click -> select / deselect
      const id = S.drag.clickId;
      if (id) {
        if (e.shiftKey) {
          S.selection.has(id) ? S.selection.delete(id) : S.selection.add(id);
        } else S.selection = new Set([id]);
      } else if (!e.shiftKey) S.selection.clear();
      refreshOverlay();
      updateChrome();
    } else if (S.drag.mode === "move") commitMove();
    else if (S.drag.mode === "rotobj" && S.drag.dirty) {
      updateChrome(); // tree thumbnails track the new pose
      save();
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
