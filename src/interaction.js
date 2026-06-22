// Desktop pointer/keyboard interaction on the canvas.
//   Left drag: move the selected object (started on it) else pan the view.
//   Right drag: rotate the selected object (90° snap, started on it) else orbit.
//   Shift while moving: vertical axis only.  Middle drag: pan.  Wheel: zoom.
// Attaches its canvas listeners on import (side effect).
import { S } from "./state.js";
import { addv, key, rotY } from "./math.js";
import { camera, canvas, goal, hoverVox, overlay } from "./scene-env.js";
import {
  groundCell,
  localGroundCell,
  locToW,
  pickChild,
  pickVoxel,
  setNdc,
  voxelTarget,
} from "./picking.js";
import {
  editDelete,
  editSet,
  markDirtyRange,
  rebuild,
  refreshOverlay,
  walk,
} from "./render.js";
import { childById, contextXform } from "./model.js";
import { orbitView, panCamera } from "./camera.js";
import {
  clearMeasure,
  freezeMeasure,
  invalidateField,
  measureActive,
  pointerMeasure,
  renderMeasure,
} from "./measure.js";
import { enterNode } from "./navigation.js";
import { rotateSelectionBy } from "./commands.js";
import { updateChrome } from "./ui.js";
import { save } from "./persistence.js";

const moved = (e) =>
  (Math.abs(e.clientX - S.drag.sx) + Math.abs(e.clientY - S.drag.sy)) > 3;

// Collision avoidance for moves. Snapshot (once per drag) every solid cell in
// the scene — every visible/transparent voxel except the moving selection's own
// — plus the selection's voxels, all in world space. Invisible objects are
// absent from walk(), so they never block. A candidate offset is blocked if any
// moved voxel would land on an occupied cell.
function moveCollision() {
  const all = [];
  walk(S.root, { x: 0, y: 0, z: 0 }, 0, null, 0, all);
  const occ = new Set(), sel = [];
  for (const v of all) {
    if (v.owner && S.selection.has(v.owner)) sel.push(v);
    else occ.add(key(v.x, v.y, v.z));
  }
  return { occ, sel };
}
const moveBlocked = (d, dx, dy, dz) =>
  d.sel.some((v) => d.occ.has(key(v.x + dx, v.y + dy, v.z + dz)));

function moveDragTo(e) {
  let dx = S.drag.dx, dy = S.drag.dy, dz = S.drag.dz;
  if (e.shiftKey) { // Shift: adjust height from where it was dragged to
    if (S.drag.shiftAnchorY == null) {
      S.drag.shiftAnchorY = e.clientY;
      S.drag.dyBase = S.drag.dy;
    }
    const perPx = (camera.top - camera.bottom) /
      canvas.getBoundingClientRect().height;
    dy = S.drag.dyBase + Math.round((S.drag.shiftAnchorY - e.clientY) * perPx);
  } else { // horizontal: move on the floor plane
    S.drag.shiftAnchorY = null;
    const g = groundCell(0);
    if (g && S.drag.start) {
      dx = g.x - S.drag.start.x;
      dz = g.z - S.drag.start.z;
    }
  }
  // advance each axis toward the cursor only where it wouldn't intersect another
  // object (so the piece slides along obstacles); Alt ignores collisions.
  const free = (x, y, z) => e.altKey || !moveBlocked(S.drag, x, y, z);
  if (free(dx, S.drag.dy, S.drag.dz)) S.drag.dx = dx;
  if (free(S.drag.dx, dy, S.drag.dz)) S.drag.dy = dy;
  if (free(S.drag.dx, S.drag.dy, dz)) S.drag.dz = dz;
  for (const id of S.selection) {
    for (const m of (S.childMeshes[id] || [])) {
      m.position.set(S.drag.dx, S.drag.dy, S.drag.dz);
    }
  }
  overlay.position.set(S.drag.dx, S.drag.dy, S.drag.dz);
}
function commitMove() {
  const x = contextXform(),
    dL = rotY(
      { x: Math.round(S.drag.dx), y: 0, z: Math.round(S.drag.dz) },
      (4 - x.rot) & 3,
    ),
    dy = Math.round(S.drag.dy);
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
function rotDragTo(e) {
  const steps = Math.round((S.drag.sx - e.clientX) / 70); // drag right -> rotate the intuitive way
  if (steps !== S.drag.steps) {
    rotateSelectionBy(steps - S.drag.steps);
    S.drag.steps = steps;
  }
}

function applyVoxel() {
  const c = voxelTarget();
  if (!c) return;
  const k = key(c.x, c.y, c.z);
  if (S.tool === "add") {
    if (k === S.lastVox) return;
    editSet(c.x, c.y, c.z, S.selColor);
  } else if (S.tool === "erase") editDelete(c.x, c.y, c.z);
  else if (S.tool === "paint") {
    if (S.editObject.voxels.has(k)) editSet(c.x, c.y, c.z, S.selColor);
  }
  S.lastVox = k;
  updateVoxHover();
}
function updateVoxHover() {
  const t = pickVoxel();
  let cell = null;
  if (S.tool === "add") cell = t ? t.addCell : voxelTarget();
  else cell = t ? t.cell : null;
  if (!cell) {
    hoverVox.visible = false;
    return;
  }
  const w = addv(rotY(cell, S.editXform.rot), S.editXform.off);
  hoverVox.visible = true;
  hoverVox.material.color.set(S.tool === "erase" ? 0xb5838d : 0xa7c4bc);
  hoverVox.position.set(w.x + 0.5, w.y + 0.5, w.z + 0.5);
}

// ---- box brush (add/erase): drag an NxM footprint, Shift extrudes vertically ----
function startBox(_e, base) {
  const s = voxelTarget();
  if (!s) return; // nothing under the pointer to start from
  S.drag = {
    ...base,
    mode: "box",
    shiftAnchorY: null,
    hyBase: 0,
    box: { x0: s.x, y0: s.y, z0: s.z, x1: s.x, z1: s.z, hy: 0 },
  };
  hoverVox.visible = false;
  renderBox();
}
function boxDragTo(e) {
  const b = S.drag.box;
  if (e.shiftKey) { // vertical extrude (like moving objects with Shift)
    const perPx = (camera.top - camera.bottom) /
      canvas.getBoundingClientRect().height;
    if (S.drag.shiftAnchorY === null) {
      S.drag.shiftAnchorY = e.clientY;
      S.drag.hyBase = b.hy;
    }
    b.hy = S.drag.hyBase +
      Math.round((S.drag.shiftAnchorY - e.clientY) * perPx);
  } else { // horizontal footprint
    S.drag.shiftAnchorY = null;
    const c = localGroundCell(b.y0);
    if (c) {
      b.x1 = c.x;
      b.z1 = c.z;
    }
  }
  renderBox();
}
function boxExtent() {
  const b = S.drag.box;
  return {
    x0: Math.min(b.x0, b.x1),
    x1: Math.max(b.x0, b.x1),
    z0: Math.min(b.z0, b.z1),
    z1: Math.max(b.z0, b.z1),
    y0: Math.min(b.y0, b.y0 + b.hy),
    y1: Math.max(b.y0, b.y0 + b.hy),
  };
}
function commitBox() {
  const x = boxExtent();
  for (let i = x.x0; i <= x.x1; i++) {
    for (let j = x.y0; j <= x.y1; j++) {
      for (let k = x.z0; k <= x.z1; k++) {
        if (S.tool === "add") editSet(i, j, k, S.selColor, true);
        else editDelete(i, j, k, true);
      }
    }
  }
  markDirtyRange(x.x0, x.y0, x.z0, x.x1, x.y1, x.z1);
  S.liveMeas = null;
  renderMeasure();
  invalidateField();
  updateChrome();
  save();
}
// build the box wireframe as measure-style segments (3 labelled dimension edges + the rest unlabelled)
function renderBox() {
  const x = boxExtent(),
    X0 = x.x0,
    X1 = x.x1 + 1,
    Y0 = x.y0,
    Y1 = x.y1 + 1,
    Z0 = x.z0,
    Z1 = x.z1 + 1;
  const nx = X1 - X0, ny = Y1 - Y0, nz = Z1 - Z0;
  const seg = (ax, ay, az, bx, by, bz, len, label) => ({
    a: locToW(ax, ay, az),
    b: locToW(bx, by, bz),
    mid: locToW((ax + bx) / 2, (ay + by) / 2, (az + bz) / 2),
    len,
    filled: true,
    nolabel: !label,
  });
  const o = [];
  o.push(seg(X0, Y0, Z0, X1, Y0, Z0, nx, true)); // X dimension
  o.push(seg(X0, Y0, Z0, X0, Y0, Z1, nz, true)); // Z dimension
  o.push(seg(X0, Y0, Z0, X0, Y1, Z0, ny, true)); // Y dimension
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
  canvas.setPointerCapture(e.pointerId);
  setNdc(e.clientX, e.clientY);
  const base = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY };

  if (measureActive()) { // left-click freezes, right-click clears; drags still navigate
    if (e.button === 0) S.drag = { ...base, mode: "pan", meas: "freeze" };
    else if (e.button === 2) S.drag = { ...base, mode: "orbit", meas: "clear" };
    else if (e.button === 1) S.drag = { ...base, mode: "pan", sx: -1e9 };
    return;
  }
  if (S.editObject) {
    if (e.button === 0) {
      if (S.tool === "add" || S.tool === "erase") startBox(e, base);
      // box select in the horizontal plane
      else {
        S.painting = true;
        S.lastVox = null;
        applyVoxel();
      } // paint
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
    S.drag = { ...base, mode: "pan", clickId: null, sx: -1e9 };
  } // middle = pan only
});

canvas.addEventListener("pointermove", (e) => {
  setNdc(e.clientX, e.clientY);
  if (measureActive()) {
    if (S.drag) {
      const dx = e.clientX - S.drag.x, dy = e.clientY - S.drag.y;
      if (S.drag.mode === "pan") {
        S.drag.x = e.clientX;
        S.drag.y = e.clientY;
        panCamera(dx, dy);
      } else if (S.drag.mode === "orbit") {
        S.drag.x = e.clientX;
        S.drag.y = e.clientY;
        orbitView(dx, dy);
      }
    }
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
  const dx = e.clientX - S.drag.x, dy = e.clientY - S.drag.y;
  if (S.drag.mode === "pan") {
    S.drag.x = e.clientX;
    S.drag.y = e.clientY;
    panCamera(dx, dy);
  } else if (S.drag.mode === "orbit") {
    S.drag.x = e.clientX;
    S.drag.y = e.clientY;
    orbitView(dx, dy);
  } else if (S.drag.mode === "move") moveDragTo(e);
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
    else if (S.drag.mode === "rotobj" && S.drag.steps) save();
  }
  S.drag = null;
});
canvas.addEventListener("pointerleave", () => {
  hoverVox.visible = false;
});
canvas.addEventListener("contextmenu", (e) => e.preventDefault());
canvas.addEventListener("wheel", (e) => {
  e.preventDefault();
  goal.zoom *= e.deltaY > 0 ? 1 / 0.95 : 0.95;
  goal.zoom = Math.max(6, Math.min(400, goal.zoom));
}, { passive: false });

canvas.addEventListener("dblclick", (e) => {
  if (S.editObject) return;
  setNdc(e.clientX, e.clientY);
  const id = pickChild();
  if (!id) return;
  enterNode(childById(id), true); // descend into a group, or open an object for painting
});
