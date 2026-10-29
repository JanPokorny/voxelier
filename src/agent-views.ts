// Read-only views for agents driving the page through window.voxelier: a compact
// tree outline, precomputed pair relations, canonical PNG renders, and a diff.
// The render briefly tweaks scene state (background, visibility, clipping) and
// restores it before returning, so the user's viewport never changes.
import * as THREE from "three";
import { S } from "./state.ts";
import {
  boxEmpty,
  emptyBox,
  findById,
  findPath,
  nodeBox,
  nodeBoxes,
  worldXform,
} from "./model.ts";
import { boxesOverlap, growBounds, worldBox } from "./boxes.ts";
import { xcompose } from "./math.ts";
import { eachObject } from "./render.ts";
import { ser, type SerNode } from "./persistence.ts";
import {
  cam,
  editGroup,
  ground,
  hoverVox,
  measLines,
  overlay,
  renderer,
  scene,
  sky,
} from "./scene-env.ts";
import type { Box, Box3, Node, Rot, Vec } from "./types.ts";

const O: Vec = { x: 0, y: 0, z: 0 };
const AXES = ["x", "y", "z"];
const fmtBox = (b: Box): string =>
  `x${b.min.x}..${b.max.x} y${b.min.y}..${b.max.y} z${b.min.z}..${b.max.z}`;
const fmtSize = (b: Box): string =>
  `(${b.max.x - b.min.x}x${b.max.y - b.min.y}x${b.max.z - b.min.z})`;
const marker = (vis: string): string => vis === "visible" ? "" : ` [${vis}]`;
const merge = (into: Box, b: Box): void => {
  into.min.x = Math.min(into.min.x, b.min.x);
  into.min.y = Math.min(into.min.y, b.min.y);
  into.min.z = Math.min(into.min.z, b.min.z);
  into.max.x = Math.max(into.max.x, b.max.x);
  into.max.y = Math.max(into.max.y, b.max.y);
  into.max.z = Math.max(into.max.z, b.max.z);
};

export function worldBounds(id?: string): Box | null {
  const node = id ? findById(id) : S.root;
  if (!node) throw new Error(`unknown node id: ${id}`);
  const w = worldXform(node);
  const b = nodeBox(node, w.off, w.rot, emptyBox());
  return boxEmpty(b) ? null : b;
}
const worldBoxes = (n: Node): Box3[] => {
  const w = worldXform(n);
  return nodeBoxes(n, w.off, w.rot, []);
};

// ---- outline ----
function nodeLine(n: Node, b: Box | null, collapsed = false): string {
  const head = `${n.id} ${n.type === "scene" ? "S" : "O"} "${n.name}"${
    marker(n.vis)
  }`;
  if (collapsed) {
    return `${head}${
      n.type === "scene" && n.children.length
        ? ` (${n.children.length} children)`
        : ""
    }`;
  }
  if (!b || boxEmpty(b)) return `${head} [empty]`;
  return `${head} ${fmtBox(b)} ${fmtSize(b)}${
    n.rot ? ` rot${n.rot * 90}` : ""
  }`;
}
export function outline(
  id?: string,
  { depth = 2, hidden = false }: { depth?: number; hidden?: boolean } = {},
): string {
  const root = id ? findById(id) : S.root;
  if (!root) throw new Error(`unknown node id: ${id}`);
  const lines: string[] = [];
  const walk = (n: Node, d: number): void => {
    const w = worldXform(n);
    const b = nodeBox(n, w.off, w.rot, emptyBox());
    const collapsed = n.vis === "hidden" && !hidden;
    lines.push("  ".repeat(d) + nodeLine(n, b, collapsed));
    if (collapsed || n.type === "object" || d >= depth) return;
    for (const c of n.children) walk(c, d + 1);
  };
  walk(root, 0);
  return lines.join("\n");
}

// ---- relations ----
const visibleNode = (n: Node): boolean =>
  (findPath(n) ?? []).every((p) => p.vis !== "hidden");
const visibleNodes = (): Node[] => {
  const out: Node[] = [];
  const walk = (n: Node): void => {
    if (n.vis === "hidden") return;
    out.push(n);
    if (n.type === "scene") n.children.forEach(walk);
  };
  walk(S.root);
  return out;
};
const isWall = (n: Node): boolean => /wall/i.test(n.name);

function relationNodes(ids?: string | string[]): Node[] {
  if (ids !== undefined) {
    const list = typeof ids === "string" ? [ids] : ids;
    return list.map((id) => {
      const n = findById(id);
      if (!n) throw new Error(`unknown node id: ${id}`);
      return n;
    }).filter(visibleNode);
  }
  const out: Node[] = [];
  for (const c of S.root.children) {
    if (c.vis === "hidden") continue;
    if (c.type === "scene" && c.name === "Immutable") {
      for (const g of c.children) if (g.vis !== "hidden") out.push(g);
    } else out.push(c);
  }
  return out;
}

const separation = (a0: number, a1: number, b0: number, b1: number): number =>
  a1 <= b0 ? b0 - a1 : b1 <= a0 ? a0 - b1 : 0;
type Near = { kind: "touch" | "gap"; axis: number; gap: number };
// Actual-box touch/gap: only pairs whose other two axes overlap count, so a
// bounding-box containment (a chair under a table) yields nothing.
function boxNear(a: Box3[], b: Box3[], within: number): Near | null {
  let touch = -1;
  const best = [Infinity, Infinity, Infinity];
  for (const p of a) {
    for (const q of b) {
      const ov = [
        p.x0 < q.x1 && q.x0 < p.x1,
        p.y0 < q.y1 && q.y0 < p.y1,
        p.z0 < q.z1 && q.z0 < p.z1,
      ];
      if (ov[0] && ov[1] && ov[2]) return null;
      const sep = [
        separation(p.x0, p.x1, q.x0, q.x1),
        separation(p.y0, p.y1, q.y0, q.y1),
        separation(p.z0, p.z1, q.z0, q.z1),
      ];
      for (let i = 0; i < 3; i++) {
        if (!ov[(i + 1) % 3] || !ov[(i + 2) % 3]) continue;
        if (sep[i] === 0) touch = i;
        else if (sep[i] <= within) best[i] = Math.min(best[i], sep[i]);
      }
    }
  }
  if (touch >= 0) return { kind: "touch", axis: touch, gap: 0 };
  let axis = -1;
  for (let i = 0; i < 3; i++) {
    if (best[i] < Infinity && (axis < 0 || best[i] < best[axis])) axis = i;
  }
  return axis < 0 ? null : { kind: "gap", axis, gap: best[axis] };
}
// Bounding-box relation for touch/gap reproduces the spec's output; when the
// boxes overlap on every axis (a tucked chair), only the actual boxes decide.
function bboxRelation(
  a: Box,
  b: Box,
  within: number,
  ab: Box3[],
  bb: Box3[],
): Near | null {
  const overlap = [
    a.min.x < b.max.x && b.min.x < a.max.x,
    a.min.y < b.max.y && b.min.y < a.max.y,
    a.min.z < b.max.z && b.min.z < a.max.z,
  ];
  if (overlap[0] && overlap[1] && overlap[2]) return boxNear(ab, bb, within);
  const sep = [
    separation(a.min.x, a.max.x, b.min.x, b.max.x),
    separation(a.min.y, a.max.y, b.min.y, b.max.y),
    separation(a.min.z, a.max.z, b.min.z, b.max.z),
  ];
  let best: Near | null = null;
  for (let i = 0; i < 3; i++) {
    if (!overlap[(i + 1) % 3] || !overlap[(i + 2) % 3]) continue;
    if (sep[i] === 0) return { kind: "touch", axis: i, gap: 0 };
    if (sep[i] <= within && (!best || sep[i] < best.gap)) {
      best = { kind: "gap", axis: i, gap: sep[i] };
    }
  }
  return best;
}
function overlapVolume(a: Box3[], b: Box3[]): number {
  let v = 0;
  for (const p of a) {
    for (const q of b) {
      const x0 = Math.max(p.x0, q.x0),
        y0 = Math.max(p.y0, q.y0),
        z0 = Math.max(p.z0, q.z0);
      const x1 = Math.min(p.x1, q.x1),
        y1 = Math.min(p.y1, q.y1),
        z1 = Math.min(p.z1, q.z1);
      if (x0 < x1 && y0 < y1 && z0 < z1) {
        v += (x1 - x0) * (y1 - y0) * (z1 - z0);
      }
    }
  }
  return v;
}
function boxGap(a: Box3[], b: Box3[]): number {
  let best = Infinity;
  for (const p of a) {
    for (const q of b) {
      const dx = Math.max(p.x0 - q.x1, q.x0 - p.x1, 0);
      const dy = Math.max(p.y0 - q.y1, q.y0 - p.y1, 0);
      const dz = Math.max(p.z0 - q.z1, q.z0 - p.z1, 0);
      const d = Math.hypot(dx, dy, dz);
      if (d < best) best = d;
    }
  }
  return best;
}
const label = (n: Node): string => `${n.id} "${n.name}"`;
export function relations(
  ids?: string | string[],
  { within = 60 }: { within?: number } = {},
): string {
  const nodes = relationNodes(ids);
  const items = nodes.map((n) => ({ n, boxes: worldBoxes(n) }));
  const out: string[] = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      const a = items[i], b = items[j];
      if (!a.boxes.length || !b.boxes.length) continue;
      if (boxesOverlap(a.boxes, b.boxes, 0, 0, 0)) {
        out.push(
          `${label(a.n)} ~ ${label(b.n)}: overlap ${
            overlapVolume(a.boxes, b.boxes)
          } cm³`,
        );
        continue;
      }
      const ab = worldBounds(a.n.id)!, bb = worldBounds(b.n.id)!;
      const rel = bboxRelation(ab, bb, within, a.boxes, b.boxes);
      if (rel) {
        out.push(
          `${label(a.n)} | ${label(b.n)}: ${
            AXES[rel.axis]
          } ${rel.kind} ${rel.gap}`.replace(/ (touch|gap) 0$/, " $1"),
        );
      }
    }
  }
  const walls = visibleNodes().filter(isWall).flatMap(worldBoxes);
  for (const { n, boxes } of items) {
    if (isWall(n) || !walls.length) continue;
    const d = boxGap(boxes, walls);
    if (Number.isFinite(d)) {
      out.push(`${label(n)} wall gap ${Math.round(d)}`);
    }
  }
  return out.join("\n");
}

// ---- diff ----
type Indexed = { node: SerNode; box: Box };
const box3 = (a: readonly number[]): Box3 => ({
  x0: a[0],
  y0: a[1],
  z0: a[2],
  x1: a[3],
  y1: a[4],
  z1: a[5],
  c: a[6],
});
function indexSer(root: SerNode): Map<string, Indexed> {
  const map = new Map<string, Indexed>();
  const walk = (n: SerNode, off: Vec, rot: Rot): Box => {
    const w = xcompose({ off, rot }, { off: n.p, rot: n.r });
    const box = emptyBox();
    if (n.t === "o") {
      for (const a of n.b) growBounds([worldBox(box3(a), w.rot, w.off)], box);
    } else {
      for (const c of n.c) {
        const cb = walk(c, w.off, w.rot);
        if (!boxEmpty(cb)) merge(box, cb);
      }
    }
    map.set(n.id, { node: n, box });
    return box;
  };
  walk(root, O, 0);
  return map;
}
const snapshotRoot = (s: string): SerNode => {
  const j = JSON.parse(s);
  return (j && j.root ? j.root : j) as SerNode;
};
function serLine(n: SerNode, b: Box): string {
  const head = `${n.id} ${n.t === "s" ? "S" : "O"} "${n.nm}"${marker(n.vs)}`;
  if (boxEmpty(b)) return `${head} [empty]`;
  return `${head} ${fmtBox(b)} ${fmtSize(b)}${n.r ? ` rot${n.r * 90}` : ""}`;
}
let committed = "";
export function markCommitted(snapshot: string): void {
  committed = snapshot;
}
export function diff(before?: string): string {
  const base = before ?? committed;
  if (!base) return "";
  const prev = indexSer(snapshotRoot(base));
  const cur = indexSer(ser(S.root));
  const out: string[] = [];
  const walk = (n: SerNode): void => {
    const c = cur.get(n.id)!;
    const p = prev.get(n.id);
    if (!p) {
      out.push(`+ ${serLine(n, c.box)}`);
      return;
    }
    const parts: string[] = [];
    const dp = {
      x: n.p.x - p.node.p.x,
      y: n.p.y - p.node.p.y,
      z: n.p.z - p.node.p.z,
    };
    if (dp.x || dp.y || dp.z) {
      const d = [dp.x, dp.y, dp.z].map((v, i) =>
        v ? `Δ${AXES[i]}${v > 0 ? "+" : ""}${v}` : ""
      ).filter(Boolean).join(" ");
      parts.push(`moved ${d} (now ${fmtBox(c.box)})`);
    }
    if (n.r !== p.node.r) parts.push(`rotated to ${n.r * 90}°`);
    if (n.vs !== p.node.vs) parts.push(`${p.node.vs}→${n.vs}`);
    if (n.t === "o" && p.node.t === "o") {
      if (JSON.stringify(n.b) !== JSON.stringify(p.node.b)) {
        parts.push(`resized ${fmtSize(p.box)} → ${fmtSize(c.box)}`);
      }
    }
    if (parts.length) out.push(`~ ${n.id} "${n.nm}" ${parts.join("; ")}`);
    if (n.t === "s") { for (const child of n.c) walk(child); }
  };
  walk(snapshotRoot(JSON.stringify(ser(S.root))));
  const removed = (n: SerNode): void => {
    if (!cur.has(n.id)) {
      out.push(`- ${serLine(n, prev.get(n.id)!.box)}`);
      return;
    }
    if (n.t === "s") { for (const child of n.c) removed(child); }
  };
  removed(snapshotRoot(base));
  return out.join("\n");
}

// ---- render ----
const VIEWS = new Set(["top", "front", "back", "left", "right", "iso"]);
const GRID_AXES: Record<string, [number, number]> = {
  top: [0, 2],
  front: [0, 1],
  back: [0, 1],
  left: [2, 1],
  right: [2, 1],
};
function makeCamera(
  view: string,
  b: Box,
): { camera: THREE.Camera; half: number } {
  const c = new THREE.Vector3(
    (b.min.x + b.max.x) / 2,
    (b.min.y + b.max.y) / 2,
    (b.min.z + b.max.z) / 2,
  );
  const w = Math.max(1, b.max.x - b.min.x),
    h = Math.max(1, b.max.y - b.min.y),
    d = Math.max(1, b.max.z - b.min.z);
  const diag = Math.hypot(w, h, d);
  if (view === "iso") {
    const fov = 35;
    const radius = 0.5 * diag;
    const dist = radius / Math.sin(THREE.MathUtils.degToRad(fov / 2)) * 1.08;
    const el = Math.atan(1 / Math.SQRT2), az = cam.azim;
    const dir = new THREE.Vector3(
      Math.cos(el) * Math.sin(az),
      Math.sin(el),
      Math.cos(el) * Math.cos(az),
    );
    const camera = new THREE.PerspectiveCamera(
      fov,
      1,
      Math.max(0.1, dist - radius * 2.5),
      dist + radius * 2.5,
    );
    camera.position.copy(c).addScaledVector(dir, dist);
    camera.lookAt(c);
    camera.updateMatrixWorld();
    camera.updateProjectionMatrix();
    return { camera, half: 0 };
  }
  const extents: Record<string, [number, number]> = {
    top: [w, d],
    front: [w, h],
    back: [w, h],
    left: [d, h],
    right: [d, h],
  };
  const half = Math.max(...extents[view]) / 2 * 1.12 + 2;
  const dist = diag * 2 + 100;
  const camera = new THREE.OrthographicCamera(
    -half,
    half,
    half,
    -half,
    0.1,
    dist + diag * 2,
  );
  const dirs: Record<string, [number, number, number, number[]]> = {
    top: [0, 1, 0, [0, 0, -1]],
    front: [0, 0, 1, [0, 1, 0]],
    back: [0, 0, -1, [0, 1, 0]],
    left: [-1, 0, 0, [0, 1, 0]],
    right: [1, 0, 0, [0, 1, 0]],
  };
  const [dx, dy, dz, up] = dirs[view];
  camera.position.copy(c).add(
    new THREE.Vector3(dx, dy, dz).multiplyScalar(dist),
  );
  camera.up.set(up[0], up[1], up[2]);
  camera.lookAt(c);
  camera.updateMatrixWorld();
  camera.updateProjectionMatrix();
  return { camera, half };
}

const LINEAR_TO_SRGB = new Uint8Array(256);
for (let i = 0; i < 256; i++) {
  const v = i / 255;
  const s = v <= 0.0031308 ? v * 12.92 : 1.055 * v ** (1 / 2.4) - 0.055;
  LINEAR_TO_SRGB[i] = Math.round(Math.min(1, Math.max(0, s)) * 255);
}

function project(
  camera: THREE.Camera,
  size: number,
  x: number,
  y: number,
  z: number,
): { x: number; y: number } {
  const p = new THREE.Vector3(x, y, z).project(camera);
  return { x: (p.x * 0.5 + 0.5) * size, y: (1 - (p.y * 0.5 + 0.5)) * size };
}
function drawGrid(
  ctx: CanvasRenderingContext2D,
  camera: THREE.Camera,
  view: string,
  size: number,
  b: Box,
  half: number,
): void {
  const [ha, va] = GRID_AXES[view];
  const c = new THREE.Vector3(
    (b.min.x + b.max.x) / 2,
    (b.min.y + b.max.y) / 2,
    (b.min.z + b.max.z) / 2,
  );
  const loH = c.getComponent(ha) - half, hiH = c.getComponent(ha) + half;
  const loV = c.getComponent(va) - half, hiV = c.getComponent(va) + half;
  const pt = (h: number, v: number): { x: number; y: number } => {
    const p = [0, 0, 0];
    p[ha] = h;
    p[va] = v;
    return project(camera, size, p[0], p[1], p[2]);
  };
  for (let v = Math.ceil(loV / 5) * 5; v <= hiV; v += 5) {
    const a = pt(loH, v), e = pt(hiH, v);
    ctx.strokeStyle = v % 10 === 0 ? "rgba(0,0,0,0.26)" : "rgba(0,0,0,0.10)";
    ctx.lineWidth = v % 10 === 0 ? 1.2 : 0.6;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(e.x, e.y);
    ctx.stroke();
  }
  for (let h = Math.ceil(loH / 5) * 5; h <= hiH; h += 5) {
    const a = pt(h, loV), e = pt(h, hiV);
    ctx.strokeStyle = h % 10 === 0 ? "rgba(0,0,0,0.26)" : "rgba(0,0,0,0.10)";
    ctx.lineWidth = h % 10 === 0 ? 1.2 : 0.6;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(e.x, e.y);
    ctx.stroke();
  }
  // scale bar
  const o = [c.x, c.y, c.z];
  const unit = [...o];
  unit[ha] += 10;
  const p0 = project(camera, size, o[0], o[1], o[2]);
  const p1 = project(camera, size, unit[0], unit[1], unit[2]);
  const len10 = Math.hypot(p1.x - p0.x, p1.y - p0.y) || 1;
  let bar = 10;
  for (const m of [5, 10, 20, 50, 100, 200, 500, 1000, 2000]) {
    bar = m;
    if (len10 * m / 10 >= 80) break;
  }
  const px = len10 * bar / 10;
  const bx = 18, by = size - 22;
  ctx.strokeStyle = "rgba(0,0,0,0.8)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(bx, by - 4);
  ctx.lineTo(bx, by);
  ctx.lineTo(bx + px, by);
  ctx.lineTo(bx + px, by - 4);
  ctx.stroke();
  ctx.font = "bold 12px ui-monospace, monospace";
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 3;
  const scale = bar === 100 ? "1 m" : `${bar} cm`;
  ctx.strokeText(scale, bx, by - 7);
  ctx.fillStyle = "#111";
  ctx.fillText(scale, bx, by - 7);
  // axis letters
  const dH = project(camera, size, unit[0], unit[1], unit[2]);
  const axisH = `${AXES[ha]}${dH.x >= p0.x ? " →" : " ←"}`;
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 3;
  ctx.textBaseline = "top";
  ctx.strokeText(axisH, 12, 10);
  ctx.fillStyle = "#111";
  ctx.fillText(axisH, 12, 10);
  const unitV = [...o];
  unitV[va] += 10;
  const dV = project(camera, size, unitV[0], unitV[1], unitV[2]);
  const axisV = `${AXES[va]}${dV.y <= p0.y ? " ↑" : " ↓"}`;
  ctx.strokeText(axisV, 12, 26);
  ctx.fillText(axisV, 12, 26);
}

function drawLabels(
  ctx: CanvasRenderingContext2D,
  camera: THREE.Camera,
  size: number,
  objects: { id: string; box: Box }[],
): void {
  ctx.font = "bold 11px ui-monospace, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineWidth = 3;
  ctx.strokeStyle = "rgba(255,255,255,0.92)";
  ctx.fillStyle = "#111";
  for (const { id, box } of objects) {
    const p = project(
      camera,
      size,
      (box.min.x + box.max.x) / 2,
      (box.min.y + box.max.y) / 2,
      (box.min.z + box.max.z) / 2,
    );
    if (p.x < 0 || p.y < 0 || p.x > size || p.y > size) continue;
    ctx.strokeText(id, p.x, p.y);
    ctx.fillText(id, p.x, p.y);
  }
}

export function renderView(
  view: string,
  opts: {
    focus?: string | string[];
    isolate?: boolean;
    labels?: boolean;
    grid?: boolean;
    size?: number;
    cutY?: number;
  } = {},
): Promise<string> {
  if (!VIEWS.has(view)) {
    throw new Error(
      `unknown view "${view}": use top, front, back, left, right or iso`,
    );
  }
  const size = Math.max(64, Math.min(2048, Math.round(opts.size ?? 900)));
  const focus = opts.focus === undefined
    ? []
    : typeof opts.focus === "string"
    ? [opts.focus]
    : opts.focus;
  let b = emptyBox();
  if (focus.length) {
    for (const id of focus) {
      const w = worldBounds(id);
      if (w) merge(b, w);
    }
    if (boxEmpty(b)) {
      throw new Error(`focus has no geometry: ${focus.join(",")}`);
    }
  } else {
    const sb = S.sceneBox;
    if (sb && !boxEmpty(sb)) b = sb;
    else {
      b = emptyBox();
      merge(b, { min: { x: -20, y: 0, z: -20 }, max: { x: 20, y: 40, z: 20 } });
    }
  }
  const { camera, half } = makeCamera(view, b);
  let isolateOwners: Set<string> | null = null;
  if (opts.isolate && focus.length) {
    isolateOwners = new Set();
    for (const id of focus) {
      const n = findById(id)!;
      const path = findPath(n);
      if (!path || n === S.root || n === S.context) {
        isolateOwners = null;
        break;
      }
      const ci = path.indexOf(S.context);
      const owner = ci >= 0 ? path[ci + 1] : undefined;
      if (!owner) {
        isolateOwners = null;
        break;
      }
      isolateOwners.add(owner.id);
    }
  }
  const objects: { id: string; box: Box }[] = [];
  eachObject(S.root, O, 0, null, null, (n, off, rot, owner, dRoot) => {
    if (dRoot) return;
    if (isolateOwners && (!owner || !isolateOwners.has(owner))) return;
    const nb = nodeBox(n, off, rot, emptyBox());
    if (!boxEmpty(nb)) objects.push({ id: n.id, box: nb });
  });
  if (S.editObject) {
    const nb = nodeBox(
      S.editObject,
      S.editXform.off,
      S.editXform.rot,
      emptyBox(),
    );
    if (!boxEmpty(nb) && (!isolateOwners || focus.includes(S.editObject.id))) {
      objects.push({ id: S.editObject.id, box: nb });
    }
  }

  const oldTarget = renderer.getRenderTarget();
  const oldClip = renderer.clippingPlanes;
  const oldShadow = renderer.shadowMap.enabled;
  const oldBg = scene.background;
  const hidden: [THREE.Object3D, boolean][] = [];
  const hide = (o: THREE.Object3D): void => {
    if (!o.visible) return;
    hidden.push([o, o.visible]);
    o.visible = false;
  };
  hide(sky);
  hide(ground);
  hide(overlay);
  hide(hoverVox);
  hide(measLines);
  scene.traverse((o: THREE.Object3D) => {
    if (o.userData.cut || (o as THREE.LineSegments).isLineSegments) hide(o);
    if (
      isolateOwners && (o as THREE.Mesh).isMesh && o.parent !== editGroup
    ) {
      const owner = o.userData.childId as string | undefined;
      if (!owner || !isolateOwners.has(owner)) hide(o);
    }
  });

  const rt = new THREE.WebGLRenderTarget(size, size);
  const buf = new Uint8Array(size * size * 4);
  try {
    scene.background = new THREE.Color(0xffffff);
    renderer.shadowMap.enabled = false;
    const cutY = opts.cutY ?? (view === "top" ? 150 : undefined);
    renderer.clippingPlanes = cutY === undefined ? [] : [
      new THREE.Plane(new THREE.Vector3(0, -1, 0), cutY),
    ];
    renderer.setRenderTarget(rt);
    renderer.render(scene, camera);
    renderer.readRenderTargetPixels(rt, 0, 0, size, size, buf);
  } finally {
    renderer.setRenderTarget(oldTarget);
    renderer.clippingPlanes = oldClip;
    renderer.shadowMap.enabled = oldShadow;
    scene.background = oldBg;
    for (const [o, visible] of hidden) o.visible = visible;
    rt.dispose();
  }

  const canvas2d = document.createElement("canvas");
  canvas2d.width = canvas2d.height = size;
  const ctx = canvas2d.getContext("2d")!;
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    const src = (size - 1 - y) * size * 4;
    for (let x = 0; x < size; x++) {
      const si = src + x * 4, di = (y * size + x) * 4;
      img.data[di] = LINEAR_TO_SRGB[buf[si]];
      img.data[di + 1] = LINEAR_TO_SRGB[buf[si + 1]];
      img.data[di + 2] = LINEAR_TO_SRGB[buf[si + 2]];
      img.data[di + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  if (view !== "iso" && opts.grid !== false) {
    drawGrid(ctx, camera, view, size, b, half);
  }
  if (opts.labels !== false) drawLabels(ctx, camera, size, objects);
  return Promise.resolve(canvas2d.toDataURL("image/png"));
}
