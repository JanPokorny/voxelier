// SketchUp-style floating dimensions: hover reads filled/empty runs along all
// three axes through a voxel; left-click freezes a reading, right-click clears.
import * as THREE from "three";
import { S } from "./state.ts";
import { key, parseKey } from "./math.ts";
import { _mv, camera, canvas, measLines, ndc, raycaster } from "./scene-env.ts";
import { walk } from "./render.ts";
import { groundCell, localGroundCell, locToW, pickVoxel } from "./picking.ts";
import type { MeasField, Seg, Vec } from "./types.ts";

const M_FILL = new THREE.Color(0xa7c4bc), M_EMPTY = new THREE.Color(0x5c677d);
export const measureActive = (): boolean =>
  S.editObject ? S.tool === "measure" : S.measMode;
export const invalidateField = (): void => {
  S.measFieldCache = null;
};
export function clearMeasure(): void {
  S.liveMeas = null;
  S.frozenMeas = [];
  renderMeasure();
}

// the voxel field being measured: edited object (local) or current scene context (world)
export function measureField(): MeasField {
  if (S.measFieldCache) return S.measFieldCache;
  const set = new Set<number>(),
    mn = { x: 1e9, y: 1e9, z: 1e9 },
    mx = { x: -1e9, y: -1e9, z: -1e9 };
  const acc = (x: number, y: number, z: number) => {
    set.add(key(x, y, z));
    mn.x = Math.min(mn.x, x);
    mn.y = Math.min(mn.y, y);
    mn.z = Math.min(mn.z, z);
    mx.x = Math.max(mx.x, x);
    mx.y = Math.max(mx.y, y);
    mx.z = Math.max(mx.z, z);
  };
  let toW: (x: number, y: number, z: number) => THREE.Vector3;
  if (S.editObject) {
    for (const [k] of S.editObject.voxels) {
      const v = parseKey(k);
      acc(v.x, v.y, v.z);
    }
    toW = locToW; // edit-mode local -> world (same as the box brush)
  } else {
    walk(S.root, { x: 0, y: 0, z: 0 }, 0, null, 0, (x, y, z, _c, owner) => {
      if (owner) acc(x, y, z);
    });
    toW = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
  }
  S.measFieldCache = { set, mn, mx, toW, empty: set.size === 0 };
  return S.measFieldCache;
}
export function measureRef(): Vec | null { // voxel cell under the pointer, clamped into the field
  const f = measureField();
  if (f.empty) return null;
  let cell: Vec | null = null;
  if (S.editObject) {
    const t = pickVoxel();
    cell = t ? { ...t.cell } : localGroundCell(0);
  } else {
    raycaster.setFromCamera(ndc, camera);
    const hits = S.pickMeshes.length
      ? raycaster.intersectObjects(S.pickMeshes, false)
      : [];
    if (hits.length) {
      const h = hits[0], n = h.face ? h.face.normal : { x: 0, y: 0, z: 0 };
      cell = {
        x: Math.floor(h.point.x - n.x * 0.5),
        y: Math.floor(h.point.y - n.y * 0.5),
        z: Math.floor(h.point.z - n.z * 0.5),
      };
    } else cell = groundCell(0);
  }
  if (!cell) return null;
  return {
    x: Math.max(f.mn.x, Math.min(f.mx.x, cell.x)),
    y: Math.max(f.mn.y, Math.min(f.mx.y, cell.y)),
    z: Math.max(f.mn.z, Math.min(f.mx.z, cell.z)),
  };
}
export function measureAt(cell: Vec): Seg[] { // segments along all 3 axes through `cell`, split on filled/empty
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
        return f.set.has(key(c[0], c[1], c[2]));
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
export function freezeMeasure(): void {
  if (S.liveMeas && S.liveMeas.length) {
    S.frozenMeas.push(S.liveMeas);
    renderMeasure();
  }
}

export function renderMeasure(): void {
  const cont = document.getElementById("measure")!;
  cont.innerHTML = "";
  S.measLabels = [];
  const sets: { s: Seg[]; fz: boolean }[] = [];
  if (S.liveMeas) sets.push({ s: S.liveMeas, fz: false });
  for (const f of S.frozenMeas) sets.push({ s: f, fz: true });
  const pos: number[] = [], colr: number[] = [];
  for (const set of sets) {
    for (const seg of set.s) {
      const c = seg.filled ? M_FILL : M_EMPTY;
      pos.push(seg.a.x, seg.a.y, seg.a.z, seg.b.x, seg.b.y, seg.b.z);
      colr.push(c.r, c.g, c.b, c.r, c.g, c.b);
      if (seg.nolabel) continue;
      const el = document.createElement("div");
      el.className = "mlab" + (seg.filled ? "" : " empty") +
        (set.fz ? " frozen" : "");
      el.textContent = String(seg.len);
      cont.appendChild(el);
      S.measLabels.push({ el, w: seg.mid });
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
  if (!S.measLabels.length) return;
  const r = canvas.getBoundingClientRect();
  for (const L of S.measLabels) {
    _mv.copy(L.w).project(camera);
    if (_mv.z > 1) {
      L.el.style.display = "none";
      continue;
    }
    L.el.style.display = "";
    L.el.style.left = ((_mv.x * 0.5 + 0.5) * r.width) + "px";
    L.el.style.top = ((-_mv.y * 0.5 + 0.5) * r.height) + "px";
  }
}
