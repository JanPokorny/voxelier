// SketchUp-style floating dimensions: a global toggle (S.measMode) that, while
// on, reads the filled/empty runs along all three axes through the voxel under the
// pointer — in any mode and alongside any tool. Hover-only: there is no freeze.
import * as THREE from "three";
import { S } from "./state.ts";
import { _mv, camera, measLines, viewport } from "./scene-env.ts";
import { eachObject } from "./render.ts";
import { boxesHas, buildIndex, growBounds, worldBox } from "./boxes.ts";
import { localGroundCell, locToW, pickVoxel, worldCell } from "./picking.ts";
import { emptyBox } from "./model.ts";
import type { Box3, MeasField, MeasLabel, Seg, Vec } from "./types.ts";

const M_FILL = new THREE.Color(0xa7c4bc), M_EMPTY = new THREE.Color(0x5c677d);
// Measurement state owned solely by this module: the memoised occupancy field
// (invalidated via invalidateField()) and the live DOM label elements with their
// world anchors.
let fieldCache: MeasField | null = null;
let measLabels: MeasLabel[] = [];
export const invalidateField = (): void => {
  fieldCache = null;
};
export function clearMeasure(): void {
  S.liveMeas = null;
  renderMeasure();
}

// the field being measured: edited object (local) or current scene context (world)
function measureField(): MeasField {
  if (fieldCache) return fieldCache;
  const boxes: Box3[] = [];
  let toW: (x: number, y: number, z: number) => THREE.Vector3;
  if (S.editObject) {
    boxes.push(...S.editObject.boxes);
    toW = locToW; // edit-mode local -> world (same as the box brush)
  } else {
    eachObject(
      S.root,
      { x: 0, y: 0, z: 0 },
      0,
      null,
      0,
      (n, off, rot, owner) => {
        if (owner) {
          for (const b of n.boxes) {
            boxes.push(worldBox(b, rot, off));
          }
        }
      },
    );
    toW = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
  }
  const bb = emptyBox();
  growBounds(boxes, bb);
  const empty = boxes.length === 0;
  // bounds are inclusive cell indices; box maxima are exclusive
  const mn = { x: bb.min.x, y: bb.min.y, z: bb.min.z };
  const mx = { x: bb.max.x - 1, y: bb.max.y - 1, z: bb.max.z - 1 };
  // a hover sweep probes every cell along 3 axes, so for many boxes the grid
  // index beats a linear scan; below ~64 the index isn't worth building
  const has = boxes.length > 64
    ? buildIndex(boxes)
    : (x: number, y: number, z: number) => boxesHas(boxes, x, y, z);
  fieldCache = { has, mn, mx, toW, empty };
  return fieldCache;
}
function measureRef(): Vec | null { // voxel cell under the pointer, clamped into the field
  const f = measureField();
  if (f.empty) return null;
  let cell: Vec | null = null;
  if (S.editObject) {
    const t = pickVoxel();
    cell = t ? { ...t.cell } : localGroundCell(0);
  } else cell = worldCell();
  if (!cell) return null;
  return {
    x: Math.max(f.mn.x, Math.min(f.mx.x, cell.x)),
    y: Math.max(f.mn.y, Math.min(f.mx.y, cell.y)),
    z: Math.max(f.mn.z, Math.min(f.mx.z, cell.z)),
  };
}
function measureAt(cell: Vec): Seg[] { // segments along all 3 axes through `cell`, split on filled/empty
  const f = measureField(),
    ax: (keyof Vec)[] = ["x", "y", "z"],
    out: Seg[] = [];
  for (let d = 0; d < 3; d++) {
    const A = ax[d],
      o1 = ax[(d + 1) % 3],
      o2 = ax[(d + 2) % 3],
      lo = f.mn[A],
      hi = f.mx[A];
    const c = [cell.x, cell.y, cell.z],
      at = (v: number) => {
        c[d] = v;
        return f.has(c[0], c[1], c[2]);
      };
    let i = lo;
    while (i <= hi) {
      const filled = at(i);
      let j = i;
      while (j + 1 <= hi && at(j + 1) === filled) j++;
      const P = (av: number) => {
        const p = {} as Vec;
        p[A] = av;
        p[o1] = cell[o1] + 0.5;
        p[o2] = cell[o2] + 0.5;
        return f.toW(p.x, p.y, p.z);
      };
      out.push({
        a: P(i),
        b: P(j + 1),
        mid: P((i + j + 1) / 2),
        len: j - i + 1,
        filled,
      });
      i = j + 1;
    }
  }
  return out;
}
export function pointerMeasure(): void {
  const c = measureRef();
  S.liveMeas = c ? measureAt(c) : null;
  renderMeasure();
}

export function renderMeasure(): void {
  const cont = document.getElementById("measure")!;
  cont.innerHTML = "";
  measLabels = [];
  const pos: number[] = [], colr: number[] = [];
  if (S.liveMeas) {
    for (const seg of S.liveMeas) {
      const c = seg.filled ? M_FILL : M_EMPTY;
      pos.push(seg.a.x, seg.a.y, seg.a.z, seg.b.x, seg.b.y, seg.b.z);
      colr.push(c.r, c.g, c.b, c.r, c.g, c.b);
      if (seg.nolabel) continue;
      const el = document.createElement("div");
      el.className = "mlab" + (seg.filled ? "" : " empty");
      el.textContent = String(seg.len);
      cont.appendChild(el);
      measLabels.push({ el, w: seg.mid });
    }
  }
  measLines.geometry.dispose();
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute("color", new THREE.Float32BufferAttribute(colr, 3));
  measLines.geometry = g;
  measLines.visible = pos.length > 0;
}
export function updateMeasureLabels(): void {
  if (!measLabels.length) return;
  for (const L of measLabels) {
    _mv.copy(L.w).project(camera);
    if (_mv.z > 1) {
      L.el.style.display = "none";
      continue;
    }
    L.el.style.display = "";
    L.el.style.left = ((_mv.x * 0.5 + 0.5) * viewport.w) + "px";
    L.el.style.top = ((-_mv.y * 0.5 + 0.5) * viewport.h) + "px";
  }
}
