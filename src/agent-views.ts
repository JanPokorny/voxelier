// Read-only views for agents driving the page through window.voxelier: a compact
// tree outline, precomputed pair relations, canonical PNG renders, and a diff.
import * as THREE from "three";
import { S } from "./state.ts";
import * as M from "./model.ts";
import { addv, pathXform, rotY } from "./math.ts";
import { worldBox } from "./boxes.ts";
import { eachObject } from "./render.ts";
import { boxFaceGeo } from "./mesh.ts";
import { de } from "./persistence.ts";
import * as E from "./scene-env.ts";
import type { Box, Box3, Node, Rot, Vec } from "./types.ts";

const AXES = ["x", "y", "z"], O: Vec = { x: 0, y: 0, z: 0 };
const fmtBox = (b: Box): string =>
  `x${b.min.x}..${b.max.x} y${b.min.y}..${b.max.y} z${b.min.z}..${b.max.z}`;
const fmtSize = (b: Box): string =>
  `(${b.max.x - b.min.x}x${b.max.y - b.min.y}x${b.max.z - b.min.z})`;
const marker = (v: string): string => v === "visible" ? "" : ` [${v}]`;
const head = (n: Node): string =>
  `${n.id} ${n.type === "scene" ? "S" : "O"} "${n.name}"${marker(n.vis)}`;

const boundsIn = (root: Node, n: Node): Box | null => {
  const p = M.findPath(n, root);
  const w = p ? pathXform(p) : { off: O, rot: 0 };
  const b = M.nodeBox(n, w.off, w.rot, M.emptyBox());
  return M.boxEmpty(b) ? null : b;
};
export const worldBounds = (id?: string): Box | null => {
  const n = id ? M.findById(id) : S.root;
  if (!n) throw new Error(`unknown node id: ${id}`);
  return boundsIn(S.root, n);
};
const worldBoxes = (n: Node): Box3[] => {
  const out: Box3[] = [];
  const walk = (x: Node, off: Vec, rot: Rot): void => {
    if (x.vis === "hidden") return;
    const o = addv(off, rotY(x.pos, rot)), r = (rot + x.rot) & 3;
    if (x.type === "object") {
      for (const b of x.boxes) out.push(worldBox(b, r, o));
    } else for (const c of x.children) walk(c, o, r);
  };
  const w = pathXform(M.findPath(n, S.root)!.slice(0, -1));
  walk(n, w.off, w.rot);
  return out;
};

const nodeLine = (n: Node, b: Box | null): string =>
  !b || M.boxEmpty(b)
    ? `${head(n)} [empty]`
    : `${head(n)} ${fmtBox(b)} ${fmtSize(b)}${
      n.rot ? ` rot${n.rot * 90}` : ""
    }`;

export function outline(
  id?: string,
  { depth = 2, hidden = false }: { depth?: number; hidden?: boolean } = {},
): string {
  const root = id ? M.findById(id) : S.root;
  if (!root) throw new Error(`unknown node id: ${id}`);
  const lines: string[] = [];
  const walk = (n: Node, d: number): void => {
    const collapsed = n.vis === "hidden" && !hidden;
    const suffix = collapsed && n.type === "scene" && n.children.length
      ? ` (${n.children.length} children)`
      : "";
    lines.push(
      "  ".repeat(d) +
        (collapsed ? head(n) + suffix : nodeLine(n, boundsIn(S.root, n))),
    );
    if (collapsed || n.type === "object" || d >= depth) return;
    for (const c of n.children) walk(c, d + 1);
  };
  walk(root, 0);
  return lines.join("\n");
}

type Rel = { kind: "overlap" | "gap"; max: number; text: string };
// One real-box test: overlap reports its extent, gaps report every separated axis.
function separation(a: Box3[], b: Box3[]): Rel | null {
  let ov: { v: number; d: number[] } | null = null, near: { m: number; g: number[] } | null = null;
  for (const p of a) for (const q of b) {
    const o = [p.x0 < q.x1 && q.x0 < p.x1, p.y0 < q.y1 && q.y0 < p.y1, p.z0 < q.z1 && q.z0 < p.z1];
    const g = [Math.max(p.x0 - q.x1, q.x0 - p.x1, 0), Math.max(p.y0 - q.y1, q.y0 - p.y1, 0), Math.max(p.z0 - q.z1, q.z0 - p.z1, 0)];
    if (o[0] && o[1] && o[2]) {
      const d = [Math.min(p.x1, q.x1) - Math.max(p.x0, q.x0), Math.min(p.y1, q.y1) - Math.max(p.y0, q.y0), Math.min(p.z1, q.z1) - Math.max(p.z0, q.z0)];
      const v = d[0] * d[1] * d[2];
      if (!ov || v > ov.v) ov = { v, d };
    } else {
      const m = Math.max(...g);
      if (!near || m < near.m) near = { m, g };
    }
  }
  if (ov) return { kind: "overlap", max: 0, text: `overlap ${ov.d.join("x")}` };
  if (!near) return null;
  const parts = near.g.map((v, i) => v ? `${AXES[i]} gap ${v}` : "").filter(Boolean);
  return { kind: "gap", max: near.m, text: parts.length ? parts.join(" ") : "touch" };
}
export function relations(ids?: string | string[], { within = 60 }: { within?: number } = {}): string {
  let list: Node[];
  if (ids !== undefined) list = (typeof ids === "string" ? [ids] : ids).map((id) => { const n = M.findById(id); if (!n) throw new Error(`unknown node id: ${id}`); return n; });
  else list = S.root.children.flatMap((c) => c.vis === "hidden" ? [] : c.type === "scene" && c.name === "Immutable" ? c.children.filter((g) => g.vis !== "hidden") : [c]);
  const items = list.filter((n) => (M.findPath(n) ?? []).every((p) => p.vis !== "hidden")).map((n) => ({ n, boxes: worldBoxes(n) })).filter((it) => it.boxes.length);
  const out: string[] = [];
  for (const [i, a] of items.entries()) for (const b of items.slice(i + 1)) {
    const s = separation(a.boxes, b.boxes);
    if (!s || (s.kind === "gap" && s.max > within)) continue;
    out.push(`${a.n.id} "${a.n.name}" ${s.kind === "overlap" ? "~" : "|"} ${b.n.id} "${b.n.name}": ${s.text}`);
  }
  return out.join("\n");
}

export function diff(before: string): string {
  const j = JSON.parse(before), prev = de(j.root ?? j) as Node, out: string[] = [];
  const range = (b: Box | null) => b ? fmtBox(b) : "empty";
  const par = (root: Node, n: Node) => { const p = M.findPath(n, root); return p?.[p.length - 2]?.id; };
  const walk = (n: Node): void => {
    const p = M.findById(n.id, prev);
    if (!p) { out.push(`+ ${n.id} "${n.name}": added ${range(boundsIn(S.root, n))}`); return; }
    const pb = boundsIn(prev, p), cb = boundsIn(S.root, n), pp = par(prev, p), cp = par(S.root, n);
    const boxes = n.type === "object" && p.type === "object" && JSON.stringify(n.boxes) !== JSON.stringify(p.boxes);
    if (range(pb) === range(cb) && pp === cp && !boxes && n.vis === p.vis && n.rot === p.rot) {
      if (n.type === "scene") for (const c of n.children) walk(c);
      return;
    }
    const parts = [`${range(pb)} → ${range(cb)}`];
    if (pp !== cp) parts.push(`reparented ${pp ?? "-"}→${cp ?? "-"}`);
    if (boxes && n.type === "object" && p.type === "object") parts.push(`geometry changed (${p.boxes.length}→${n.boxes.length} boxes)`);
    if (n.vis !== p.vis) parts.push(`vis ${p.vis}→${n.vis}`);
    if (n.rot !== p.rot) parts.push(`rot ${p.rot * 90}→${n.rot * 90}`);
    out.push(`~ ${n.id} "${n.name}": ${parts.join("; ")}`);
    if (n.type === "scene") for (const c of n.children) walk(c);
  };
  walk(S.root);
  const removed = (n: Node): void => { if (!M.findById(n.id, S.root)) { out.push(`- ${n.id} "${n.name}": removed ${range(boundsIn(prev, n))}`); return; } if (n.type === "scene") for (const c of n.children) removed(c); };
  removed(prev);
  return out.join("\n");
}

const VIEWS = new Set(["top", "front", "side", "iso"]);
function makeCamera(view: string, b: Box): { camera: THREE.Camera; half: number } {
  const c = new THREE.Vector3((b.min.x + b.max.x) / 2, (b.min.y + b.max.y) / 2, (b.min.z + b.max.z) / 2);
  const w = Math.max(1, b.max.x - b.min.x), h = Math.max(1, b.max.y - b.min.y), d = Math.max(1, b.max.z - b.min.z);
  const dims = [w, h, d], diag = Math.hypot(w, h, d);
  const dist = diag * 2 + 100;
  if (view === "iso") {
    const fov = 35, radius = diag / 2, d0 = radius / Math.sin(THREE.MathUtils.degToRad(fov / 2)) * 1.08;
    const el = Math.atan(1 / Math.SQRT2), az = E.cam.azim;
    const camera = new THREE.PerspectiveCamera(fov, 1, d0 - radius * 3, d0 + radius * 3);
    camera.position.copy(c).add(new THREE.Vector3(Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az)).multiplyScalar(d0));
    camera.lookAt(c);
    return { camera, half: 0 };
  }
  const axes = view === "top" ? [0, 2] : view === "front" ? [0, 1] : [2, 1];
  const half = Math.max(dims[axes[0]], dims[axes[1]]) / 2 * 1.12 + 2;
  const dir = view === "top" ? [0, 1, 0] : view === "front" ? [0, 0, 1] : [1, 0, 0];
  const camera = new THREE.OrthographicCamera(-half, half, half, -half, 0.1, dist + diag * 2);
  camera.position.copy(c).add(new THREE.Vector3(dir[0], dir[1], dir[2]).normalize().multiplyScalar(dist));
  if (view === "top") camera.up.set(0, 0, -1);
  camera.lookAt(c);
  return { camera, half };
}
function drawGrid(ctx: CanvasRenderingContext2D, size: number, b: Box, half: number): void {
  const s = size / (2 * half), mid = size / 2, cx = (b.min.x + b.max.x) / 2, cz = (b.min.z + b.max.z) / 2;
  ctx.strokeStyle = "rgba(0,0,0,0.14)"; ctx.lineWidth = 1;
  for (let x = Math.ceil((cx - half) / 50) * 50; x <= cx + half; x += 50) {
    const px = mid + (x - cx) * s;
    ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, size); ctx.stroke();
  }
  for (let z = Math.ceil((cz - half) / 50) * 50; z <= cz + half; z += 50) {
    const py = mid + (z - cz) * s;
    ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(size, py); ctx.stroke();
  }
  ctx.strokeStyle = "#111"; ctx.lineWidth = 2; ctx.beginPath();
  ctx.moveTo(18, size - 20); ctx.lineTo(18 + 100 * s, size - 20); ctx.stroke();
  ctx.font = "12px ui-monospace, monospace"; ctx.fillStyle = "#111"; ctx.fillText("1 m", 18, size - 26);
}
function drawLabels(ctx: CanvasRenderingContext2D, camera: THREE.Camera, size: number, objects: { id: string; b: Box }[]): void {
  ctx.font = "bold 11px ui-monospace, monospace"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  for (const { id, b } of objects) {
    const p = new THREE.Vector3((b.min.x + b.max.x) / 2, (b.min.y + b.max.y) / 2, (b.min.z + b.max.z) / 2).project(camera);
    const x = (p.x * 0.5 + 0.5) * size, y = (1 - (p.y * 0.5 + 0.5)) * size;
    if (x < 0 || y < 0 || x > size || y > size) continue;
    ctx.lineWidth = 3; ctx.strokeStyle = "#fff"; ctx.strokeText(id, x, y); ctx.fillStyle = "#111"; ctx.fillText(id, x, y);
  }
}
export function renderView(view: string, opts: { focus?: string | string[]; isolate?: boolean; labels?: boolean; grid?: boolean; size?: number; cutY?: number } = {}): Promise<string> {
  if (!VIEWS.has(view)) throw new Error(`unknown view "${view}": use top, front, side or iso`);
  const raw = opts.size ?? 900;
  if (!Number.isFinite(raw) || raw <= 0) throw new Error("size must be a positive finite number");
  if (opts.cutY !== undefined && !Number.isFinite(opts.cutY)) throw new Error("cutY must be finite");
  const size = Math.max(64, Math.min(2048, Math.round(raw)));
  const focus = opts.focus === undefined ? [] : typeof opts.focus === "string" ? [opts.focus] : opts.focus;
  const b = M.emptyBox();
  if (focus.length) {
    for (const id of focus) {
      const w = worldBounds(id); if (!w) continue;
      b.min.x = Math.min(b.min.x, w.min.x); b.min.y = Math.min(b.min.y, w.min.y); b.min.z = Math.min(b.min.z, w.min.z);
      b.max.x = Math.max(b.max.x, w.max.x); b.max.y = Math.max(b.max.y, w.max.y); b.max.z = Math.max(b.max.z, w.max.z);
    }
    if (M.boxEmpty(b)) throw new Error(`focus has no geometry: ${focus}`);
  } else Object.assign(b, S.sceneBox && !M.boxEmpty(S.sceneBox) ? S.sceneBox : { min: { x: -20, y: 0, z: -20 }, max: { x: 20, y: 40, z: 20 } });
  const { camera, half } = makeCamera(view, b);
  const focusIds = new Set<string>();
  const mark = (n: Node): void => { focusIds.add(n.id); if (n.type === "scene") for (const c of n.children) mark(c); };
  for (const id of focus) mark(M.findById(id)!);
  const isolate = opts.isolate && focus.length > 0;
  const objects: { id: string; b: Box }[] = [], boxes: Box3[] = [];
  const take = (n: Node, nb: Box) => { if (!M.boxEmpty(nb)) { objects.push({ id: n.id, b: nb }); boxes.push(...worldBoxes(n)); } };
  eachObject(S.root, O, 0, null, null, (n, off, rot, _owner, dRoot) => {
    if (!dRoot && (!isolate || focusIds.has(n.id))) take(n, M.nodeBox(n, off, rot, M.emptyBox()));
  });
  if (S.editObject && S.editObject.vis === "visible" && (!isolate || focusIds.has(S.editObject.id))) take(S.editObject, M.nodeBox(S.editObject, S.editXform.off, S.editXform.rot, M.emptyBox()));
  const tmp = new THREE.Scene();
  tmp.background = new THREE.Color(0xffffff);
  tmp.add(new THREE.AmbientLight(0xffffff, 0.62));
  const l1 = new THREE.DirectionalLight(0xffffff, 0.78); l1.position.set(40, 150, 30); tmp.add(l1);
  const l2 = new THREE.DirectionalLight(0xffffff, 0.16); l2.position.set(-6, 5, -7); tmp.add(l2);
  const geo = boxFaceGeo(boxes, E.col, true);
  if (geo) tmp.add(new THREE.Mesh(geo, E.matSurf));
  const oldSize = E.renderer.getSize(new THREE.Vector2());
  const oldClip = E.renderer.clippingPlanes, oldShadow = E.renderer.shadowMap.enabled;
  try {
    E.renderer.shadowMap.enabled = false;
    const cutY = opts.cutY ?? (view === "top" ? 150 : undefined);
    E.renderer.clippingPlanes = cutY === undefined ? [] : [new THREE.Plane(new THREE.Vector3(0, -1, 0), cutY)];
    E.renderer.setSize(size, size, false); E.renderer.render(tmp, camera);
    const out = document.createElement("canvas"); out.width = out.height = size;
    const ctx = out.getContext("2d")!;
    ctx.drawImage(E.renderer.domElement, 0, 0, size, size);
    if (view === "top" && opts.grid !== false) drawGrid(ctx, size, b, half);
    if (opts.labels !== false) drawLabels(ctx, camera, size, objects);
    return Promise.resolve(out.toDataURL("image/png"));
  } finally {
    geo?.dispose();
    E.renderer.setSize(oldSize.x, oldSize.y, false); E.renderer.clippingPlanes = oldClip;
    E.renderer.shadowMap.enabled = oldShadow;
    E.renderer.render(E.scene, E.camera); E.wake();
  }
}
