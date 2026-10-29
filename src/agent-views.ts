// Read-only views for agents driving the page through window.voxelier: a compact
// tree outline, precomputed pair relations, canonical PNG renders, and a diff.
import * as THREE from "three";
import { S } from "./state.ts";
import * as M from "./model.ts";
import { addv, dirName, dirVec, pathXform, rotY } from "./math.ts";
import { growBounds, worldBox } from "./boxes.ts";
import { eachObject } from "./render.ts";
import { boxFaceGeo } from "./mesh.ts";
import { de } from "./persistence.ts";
import { download } from "./io.ts";
import * as E from "./scene-env.ts";
import type { Box, Box3, Node, North, Rot, SceneNode, Vec } from "./types.ts";

const AXES = ["x", "y", "z"], O: Vec = { x: 0, y: 0, z: 0 };
const fmtBox = (b: Box): string =>
  `x${b.min.x}..${b.max.x} y${b.min.y}..${b.max.y} z${b.min.z}..${b.max.z}`;
const fmtSize = (b: Box): string =>
  `(${b.max.x - b.min.x}x${b.max.y - b.min.y}x${b.max.z - b.min.z})`;
const marker = (v: string): string => v === "visible" ? "" : ` [${v}]`;
const head = (n: Node): string =>
  `${n.id} ${n.type === "scene" ? "S" : "O"} "${n.name}"${marker(n.vis)}`;
// non-zero translation, e.g. " pos z=-1" (the Immutable shell's offset)
const attrs = (n: Node): string => {
  const parts = AXES
    .map((a, i) => [a, [n.pos.x, n.pos.y, n.pos.z][i]] as const)
    .filter(([, v]) => v !== 0)
    .map(([a, v]) => `${a}=${v}`);
  return `${parts.length ? ` pos ${parts.join(",")}` : ""}${
    n.rot ? ` rot${n.rot * 90}` : ""
  }`;
};
const north = (): North => M.northOf(S.root);
const compassLabel = (n: North): string => {
  const e = dirVec("e", n)!;
  return `north = ${n}, east = ${dirName(e)}`;
};

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
  // the queried node's own visibility is not applied — asking about a hidden
  // variant is legitimate — but hidden descendants are pruned as usual
  const walk = (x: Node, off: Vec, rot: Rot, self = false): void => {
    if (!self && x.vis === "hidden") return;
    const o = addv(off, rotY(x.pos, rot)), r = (rot + x.rot) & 3;
    if (x.type === "object") {
      for (const b of x.boxes) out.push(worldBox(b, r, o));
    } else for (const c of x.children) walk(c, o, r);
  };
  const w = pathXform(M.findPath(n, S.root)!.slice(0, -1));
  walk(n, w.off, w.rot, true);
  return out;
};

const nodeLine = (n: Node, b: Box | null): string => {
  const tail = attrs(n);
  return !b || M.boxEmpty(b)
    ? `${head(n)} [empty]${tail}`
    : `${head(n)} ${fmtBox(b)} ${fmtSize(b)}${tail}`;
};

export function outline(
  id?: string,
  { depth = 2, hidden = false }: { depth?: number; hidden?: boolean } = {},
): string {
  const root = id ? M.findById(id) : S.root;
  if (!root) throw new Error(`unknown node id: ${id}`);
  const lines: string[] = [compassLabel(north())];
  const walk = (n: Node, d: number): void => {
    const collapsed = n.vis === "hidden" && !hidden;
    const suffix = collapsed && n.type === "scene" && n.children.length
      ? ` (${n.children.length} children)`
      : "";
    lines.push(
      "  ".repeat(d) +
        (collapsed
          ? head(n) + attrs(n) + suffix
          : nodeLine(n, boundsIn(S.root, n))),
    );
    if (collapsed || n.type === "object" || d >= depth) return;
    for (const c of n.children) walk(c, d + 1);
  };
  walk(root, 0);
  return lines.join("\n");
}

type Rel = { kind: "overlap" | "touch" | "gap"; max: number; text: string };
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
  if (near.m === 0) return { kind: "touch", max: 0, text: "touch" };
  const parts = near.g.map((v, i) => v ? `${AXES[i]} gap ${v}` : "").filter(Boolean);
  return { kind: "gap", max: near.m, text: parts.join(" ") };
}
// The objects an agent means by "the scene": visible root children, plus the
// visible members of the "Immutable" shell group (walls, floor, ceiling).
const visibleObjects = (): Node[] =>
  S.root.children.flatMap((c) =>
    c.vis === "hidden"
      ? []
      : c.type === "scene" && c.name === "Immutable"
      ? c.children.filter((g) => g.vis !== "hidden")
      : [c]
  );
const visibleBoxes = (n: Node): Box3[] =>
  (M.findPath(n) ?? []).every((p) => p.vis !== "hidden")
    ? worldBoxes(n)
    : [];

const REL_KINDS = ["overlap", "touch", "gap"];
export function relations(
  ids?: string | string[],
  { within = 60, only }: { within?: number; only?: string | string[] } = {},
): string {
  const kinds = only === undefined ? null : typeof only === "string" ? [only] : only;
  const bad = kinds?.find((k) => !REL_KINDS.includes(k));
  if (bad) throw new Error(`bad only "${bad}": use overlap, touch or gap`);
  const items = visibleObjects().map((n) => ({ n, boxes: visibleBoxes(n) })).filter((it) => it.boxes.length);
  // ids given: each listed object against every visible object, not just the
  // listed ones — "does this collide with anything" needs the whole scene.
  const list = ids === undefined ? items : (typeof ids === "string" ? [ids] : ids).map((id) => { const n = M.findById(id); if (!n) throw new Error(`unknown node id: ${id}`); return { n, boxes: worldBoxes(n) }; }).filter((it) => it.boxes.length);
  const out: string[] = [], seen = new Set<string>();
  const pair = (a: { n: Node; boxes: Box3[] }, b: { n: Node; boxes: Box3[] }) => {
    // a listed object is honoured even when hidden ("does this variant collide"),
    // but a node is never compared with its own container: the parent's boxes
    // include the child, so that would only ever report a self-overlap
    if (M.isDescendant(a.n, b.n) || M.isDescendant(b.n, a.n)) return;
    const k = a.n.id < b.n.id ? `${a.n.id}|${b.n.id}` : `${b.n.id}|${a.n.id}`;
    if (seen.has(k)) return;
    seen.add(k);
    const s = separation(a.boxes, b.boxes);
    if (!s || (kinds && !kinds.includes(s.kind))) return;
    if (s.kind === "gap" && s.max > within) return;
    out.push(`${a.n.id} "${a.n.name}" ${s.kind === "overlap" ? "~" : "|"} ${b.n.id} "${b.n.name}": ${s.text}`);
  };
  if (ids === undefined) {
    for (const [i, a] of items.entries()) for (const b of items.slice(i + 1)) pair(a, b);
  } else for (const a of list) for (const b of items) pair(a, b);
  return out.join("\n");
}

// True box-to-box clearance along one direction. The other box is cut into
// transverse regions at the object's own box boundaries, so each region sees a
// constant contour face: a stepped or rotated object keeps its short portions'
// walkways, a wide obstacle is judged against the contour under each of its
// parts, and repacking the same geometry cannot grow phantom faces from internal
// seams. Horizontal directions ignore height, but skip a slab wholly below or
// above the object where it overlaps the actual union footprint — the floor it
// stands on, the ceiling over it. ±y uses that footprint directly.
const dirAxis = (d: string): { axis: number; sign: number } => {
  const v = dirVec(d, north());
  if (!v) throw new Error(`bad dir "${d}": use n/e/s/w, up/down or +x, -x, +y, -y, +z, -z`);
  const axis = v.x ? 0 : v.y ? 1 : 2;
  return { axis, sign: v.x || v.y || v.z };
};
const lo = (b: Box3, a: number) => a === 0 ? b.x0 : a === 1 ? b.y0 : b.z0;
const hi = (b: Box3, a: number) => a === 0 ? b.x1 : a === 1 ? b.y1 : b.z1;
const overlaps = (p: Box3, q: Box3, axes: number[]): boolean =>
  axes.every((a) => lo(q, a) < hi(p, a) && lo(p, a) < hi(q, a));
const span = (b: Box3, a: number, from: number, to: number): Box3 => ({
  ...b,
  ...(a === 0 ? { x0: from, x1: to } : a === 1 ? { y0: from, y1: to } : { z0: from, z1: to }),
});
// Cut a box into the transverse cells induced by the object's box boundaries.
const transverse = (b: Box3, axes: number[], cuts: number[][]): Box3[] => {
  let parts = [b];
  for (const a of axes) {
    const next: Box3[] = [];
    for (const part of parts) {
      const start = lo(part, a), end = hi(part, a);
      const edges = cuts[a]
        .filter((v) => v > start && v < end)
        .sort((u, v) => u - v);
      let from = start;
      for (const to of [...new Set(edges), end]) {
        if (to <= from) continue;
        next.push(span(part, a, from, to));
        from = to;
      }
    }
    parts = next;
  }
  return parts;
};

export function clearance(id: string, dir: string): { id: string; name: string; distance: number } | null {
  const n = M.findById(id);
  if (!n) throw new Error(`unknown node id: ${id}`);
  const { axis, sign } = dirAxis(dir);
  const mine = worldBoxes(n);
  if (!mine.length) throw new Error(`object ${id} has no visible geometry`);
  const minY = Math.min(...mine.map((b) => b.y0));
  const maxY = Math.max(...mine.map((b) => b.y1));
  const perp = axis === 1 ? [0, 2] : [axis === 0 ? 2 : 0];
  const cuts: number[][] = [[], [], []];
  for (const p of mine) {
    for (let a = 0; a < 3; a++) cuts[a].push(lo(p, a), hi(p, a));
  }
  let best: { id: string; name: string; distance: number } | null = null;
  for (const other of visibleObjects()) {
    if (M.isDescendant(other, n) || M.isDescendant(n, other)) continue;
    const otherBoxes = visibleBoxes(other);
    // floor/ceiling exemption is decided from the other OBJECT's plan, not the
    // current box: splitting that object must not let a fragment escape it
    const planHit = axis !== 1 &&
      otherBoxes.some((q) => mine.some((p) => overlaps(p, q, [0, 2])));
    for (const b of otherBoxes) {
      if (planHit && (hi(b, 1) <= minY || lo(b, 1) >= maxY)) continue;
      for (const part of transverse(b, perp, cuts)) {
        // the object's exposed contour under this transverse region: the
        // furthest along the direction among the boxes that cover the region
        const under = mine.filter((p) => overlaps(p, part, perp));
        if (!under.length) continue;
        const face = sign > 0
          ? Math.max(...under.map((p) => hi(p, axis)))
          : Math.min(...under.map((p) => lo(p, axis)));
        if (sign > 0 ? hi(part, axis) <= face : lo(part, axis) >= face) continue;
        const d = Math.max(0, sign > 0 ? lo(part, axis) - face : face - hi(part, axis));
        if (!best || d < best.distance) best = { id: other.id, name: other.name, distance: d };
      }
    }
  }
  return best;
}

// True minimum gap between two nodes (or unions of nodes), in world cells (cm).
// Reports the per-axis separation of the closest box pair. `y` clips the test to
// a height band, so a table top and the shelf over it can ignore the floor.
export function distance(
  a: string | string[],
  b: string | string[],
  { y }: { y?: [number, number] } = {},
): { distance: number; x: number; y: number; z: number } {
  if (y && (!Number.isFinite(y[0]) || !Number.isFinite(y[1]) || y[0] > y[1])) {
    throw new Error("distance y must be [min,max] with min <= max");
  }
  const boxesOf = (ids: string | string[]): Box3[] => {
    const out: Box3[] = [];
    for (const id of typeof ids === "string" ? [ids] : ids) {
      const n = M.findById(id);
      if (!n) throw new Error(`unknown node id: ${id}`);
      out.push(...worldBoxes(n));
    }
    if (!y) return out;
    return out
      .map((q) => ({ ...q, y0: Math.max(q.y0, y[0]), y1: Math.min(q.y1, y[1]) }))
      .filter((q) => q.y0 < q.y1);
  };
  const A = boxesOf(a), B = boxesOf(b);
  if (!A.length || !B.length) throw new Error("distance needs geometry on both sides");
  let best: { distance: number; x: number; y: number; z: number } | null = null;
  for (const p of A) for (const q of B) {
    const g = [
      Math.max(p.x0 - q.x1, q.x0 - p.x1, 0),
      Math.max(p.y0 - q.y1, q.y0 - p.y1, 0),
      Math.max(p.z0 - q.z1, q.z0 - p.z1, 0),
    ];
    const d = Math.hypot(g[0], g[1], g[2]);
    if (!best || d < best.distance) best = { distance: d, x: g[0], y: g[1], z: g[2] };
  }
  return best!;
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
  const prevNorth = (prev as SceneNode).north ?? "-z";
  if (prevNorth !== north()) out.push(`~ north: ${prevNorth} → ${north()}`);
  const removed = (n: Node): void => { if (!M.findById(n.id, S.root)) { out.push(`- ${n.id} "${n.name}": removed ${range(boundsIn(prev, n))}`); return; } if (n.type === "scene") for (const c of n.children) removed(c); };
  removed(prev);
  return out.join("\n");
}

const VIEWS = new Set(["top", "front", "side", "iso", "elevation"]);
type Obj = { label: string; b: Box; boxes: Box3[] };
function makeCamera(
  view: string,
  b: Box,
  { from, azim, elev }: { from?: string; azim?: number; elev?: number },
): { camera: THREE.Camera; half: number; side: Vec | null } {
  const c = new THREE.Vector3((b.min.x + b.max.x) / 2, (b.min.y + b.max.y) / 2, (b.min.z + b.max.z) / 2);
  const w = Math.max(1, b.max.x - b.min.x), h = Math.max(1, b.max.y - b.min.y), d = Math.max(1, b.max.z - b.min.z);
  const dims = [w, h, d], diag = Math.hypot(w, h, d);
  const dist = diag * 2 + 100;
  const perspective = (dir: Vec): THREE.Camera => {
    const fov = 35, radius = diag / 2, d0 = radius / Math.sin(THREE.MathUtils.degToRad(fov / 2)) * 1.08;
    const camera = new THREE.PerspectiveCamera(fov, 1, d0 - radius * 3, d0 + radius * 3);
    camera.position.copy(c).add(new THREE.Vector3(dir.x, dir.y, dir.z).multiplyScalar(d0));
    camera.lookAt(c);
    return camera;
  };
  // arbitrary orbit angles override the named view with a perspective camera
  if (azim !== undefined || elev !== undefined) {
    if (!Number.isFinite(azim ?? 0) || !Number.isFinite(elev ?? 0)) {
      throw new Error("azim and elev must be finite");
    }
    const a = azim ?? E.cam.azim, e = elev ?? Math.atan(1 / Math.SQRT2), ce = Math.cos(e);
    const dir = { x: ce * Math.sin(a), y: Math.sin(e), z: ce * Math.cos(a) };
    return { camera: perspective(dir), half: 0, side: null };
  }
  if (view === "iso") {
    const el = Math.atan(1 / Math.SQRT2), az = E.cam.azim, ce = Math.cos(el);
    return {
      camera: perspective({ x: ce * Math.sin(az), y: Math.sin(el), z: ce * Math.cos(az) }),
      half: 0,
      side: null,
    };
  }
  let dir: Vec;
  if (view === "elevation") {
    const v = from === undefined ? null : dirVec(from, north());
    if (!v) throw new Error(`render("elevation") needs from: n/e/s/w/up/down or an axis`);
    dir = v;
  } else if (view === "top") dir = { x: 0, y: 1, z: 0 };
  else if (view === "front") dir = { x: 0, y: 0, z: 1 };
  else if (view === "side") dir = { x: 1, y: 0, z: 0 };
  else throw new Error(`unknown view "${view}"`);
  const axis = Math.abs(dir.x) > 0.9 ? 0 : Math.abs(dir.y) > 0.9 ? 1 : 2;
  const axes = axis === 0 ? [2, 1] : axis === 2 ? [0, 1] : [0, 2];
  const half = Math.max(dims[axes[0]], dims[axes[1]]) / 2 * 1.12 + 2;
  const camera = new THREE.OrthographicCamera(-half, half, half, -half, 0.1, dist + diag * 2);
  camera.position.copy(c).add(new THREE.Vector3(dir.x, dir.y, dir.z).multiplyScalar(dist));
  // top and bottom views need a horizontal up-vector or lookAt is degenerate
  if (axis === 1) camera.up.set(0, 0, dir.y > 0 ? -1 : 1);
  camera.lookAt(c);
  return { camera, half, side: dir };
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
// World north on screen: an N arrow when it has a screen direction, or ⊙/⊗ N
// when it points out of/into the screen (looking along north leaves no angle).
function drawCompass(ctx: CanvasRenderingContext2D, size: number, camera: THREE.Camera): void {
  const n = dirVec("n", north())!, m = camera.matrixWorld.elements;
  const x = n.x * m[0] + n.y * m[1] + n.z * m[2];
  const y = n.x * m[4] + n.y * m[5] + n.z * m[6];
  const out = n.x * m[8] + n.y * m[9] + n.z * m[10] > 0; // camera looks along -Z
  const parallel = x * x + y * y < 0.0016;
  const cx = size - 27, cy = 27, r = 18;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.88)"; ctx.fill();
  ctx.strokeStyle = "#111"; ctx.lineWidth = 1; ctx.stroke();
  ctx.font = "bold 10px ui-monospace, monospace"; ctx.fillStyle = "#111";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  if (parallel) {
    ctx.fillText(`${out ? "⊙" : "⊗"} N`, 0, 0);
  } else {
    ctx.rotate(Math.atan2(x, y));
    ctx.beginPath(); ctx.moveTo(0, -r + 4); ctx.lineTo(5, 3); ctx.lineTo(0, 0); ctx.lineTo(-5, 3); ctx.closePath();
    ctx.fillStyle = "#b23a48"; ctx.fill();
    ctx.fillStyle = "#111"; ctx.fillText("N", 0, 9);
  }
  ctx.restore();
}
// Flat-colour id buffer at the same camera: one union mesh, exactly the faces
// the colour pass meshes, with each box's owner index in its vertex colours, so
// abutting objects cannot label blank seam geometry.
function objectCentroids(
  objects: Obj[],
  camera: THREE.Camera,
  size: number,
  cutY?: number,
): ({ x: number; y: number } | undefined)[] {
  const rt = new THREE.WebGLRenderTarget(size, size);
  const idScene = new THREE.Scene();
  idScene.background = new THREE.Color(0);
  const idBoxes = objects.flatMap((o, i) => o.boxes.map((b) => ({ ...b, c: i + 1 })));
  const geo = boxFaceGeo(idBoxes, (id) =>
    new THREE.Color((id & 255) / 255, ((id >> 8) & 255) / 255, ((id >> 16) & 255) / 255),
  false);
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true });
  if (geo) idScene.add(new THREE.Mesh(geo, mat));
  const buf = new Uint8Array(size * size * 4);
  const oldTarget = E.renderer.getRenderTarget(), oldShadow = E.renderer.shadowMap.enabled;
  const oldClip = E.renderer.clippingPlanes;
  try {
    E.renderer.shadowMap.enabled = false;
    // the id pass must see exactly the geometry the colour pass sees, including
    // the default top-view cut and any explicit cutY
    E.renderer.clippingPlanes = cutY === undefined
      ? []
      : [new THREE.Plane(new THREE.Vector3(0, -1, 0), cutY)];
    E.renderer.setRenderTarget(rt);
    E.renderer.render(idScene, camera);
    E.renderer.readRenderTargetPixels(rt, 0, 0, size, size, buf);
  } finally {
    E.renderer.setRenderTarget(oldTarget);
    E.renderer.shadowMap.enabled = oldShadow;
    E.renderer.clippingPlanes = oldClip;
    geo?.dispose();
    mat.dispose();
    rt.dispose();
  }
  const acc: ({ x: number; y: number; n: number } | null)[] = objects.map(() => null);
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      const i = (py * size + px) * 4;
      const id = buf[i] | (buf[i + 1] << 8) | (buf[i + 2] << 16);
      if (!id || id > objects.length) continue;
      const a = acc[id - 1] || (acc[id - 1] = { x: 0, y: 0, n: 0 });
      a.x += px + 0.5;
      a.y += size - 1 - py + 0.5; // readPixels is bottom-up
      a.n++;
    }
  }
  return acc.map((a) => a ? { x: a.x / a.n, y: a.y / a.n } : undefined);
}
function drawLabels(
  ctx: CanvasRenderingContext2D,
  size: number,
  objects: (Obj & { at?: { x: number; y: number } })[],
  maxArea: number,
): void {
  ctx.font = "bold 11px ui-monospace, monospace"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  for (const { label, b, at } of objects) {
    // structural shells (walls, floor, ceiling) span the frame; their centroid
    // label would sit in the middle of the room and hide nothing useful
    if ((b.max.x - b.min.x) * (b.max.z - b.min.z) >= maxArea) continue;
    if (!at) continue; // fully occluded: no visible pixel to point at
    ctx.lineWidth = 3; ctx.strokeStyle = "#fff"; ctx.strokeText(label, at.x, at.y);
    ctx.fillStyle = "#111"; ctx.fillText(label, at.x, at.y);
  }
}
const FORMATS: Record<string, number> = { png: 1, webp: 0.8, jpeg: 0.8 };
export type RenderOpts = {
  from?: string;
  focus?: string | string[];
  isolate?: boolean;
  hide?: string | string[];
  labels?: boolean;
  grid?: boolean;
  size?: number;
  cutY?: number;
  cutaway?: boolean;
  azim?: number;
  elev?: number;
  save?: string;
  format?: string;
};
const ids = (v: string | string[] | undefined): string[] =>
  v === undefined ? [] : typeof v === "string" ? [v] : v;
export async function renderView(view: string, opts: RenderOpts = {}): Promise<string> {
  const fmt = opts.format ?? "webp";
  if (!Object.hasOwn(FORMATS, fmt)) {
    throw new Error(`unknown format "${fmt}": use png, webp or jpeg`);
  }
  const mime = `image/${fmt}`, quality = FORMATS[fmt];
  if (!VIEWS.has(view)) throw new Error(`unknown view "${view}": use top, front, side, iso or elevation`);
  const raw = opts.size ?? 900;
  if (!Number.isFinite(raw) || raw <= 0) throw new Error("size must be a positive finite number");
  if (opts.cutY !== undefined && !Number.isFinite(opts.cutY)) throw new Error("cutY must be finite");
  const size = Math.max(64, Math.min(2048, Math.round(raw)));
  const focus = ids(opts.focus);
  let isolate = opts.isolate === true;
  const frame = S.sceneBox && !M.boxEmpty(S.sceneBox) ? S.sceneBox : { min: { x: -20, y: 0, z: -20 }, max: { x: 20, y: 40, z: 20 } };
  const b = M.emptyBox();
  if (focus.length) {
    for (const id of focus) {
      const w = worldBounds(id); if (!w) continue;
      b.min.x = Math.min(b.min.x, w.min.x); b.min.y = Math.min(b.min.y, w.min.y); b.min.z = Math.min(b.min.z, w.min.z);
      b.max.x = Math.max(b.max.x, w.max.x); b.max.y = Math.max(b.max.y, w.max.y); b.max.z = Math.max(b.max.z, w.max.z);
    }
    if (M.boxEmpty(b)) throw new Error(`focus has no geometry: ${focus}`);
  } else Object.assign(b, frame);
  const { camera, half, side } = makeCamera(view, b, opts);
  const focusIds = new Set<string>();
  const mark = (n: Node): void => { focusIds.add(n.id); if (n.type === "scene") for (const c of n.children) mark(c); };
  for (const id of focus) mark(M.findById(id)!);
  isolate = isolate && focus.length > 0;
  const hidden = new Set<string>();
  for (const id of ids(opts.hide)) {
    const n = M.findById(id);
    if (!n) throw new Error(`unknown node id: ${id}`);
    const markHidden = (x: Node): void => {
      hidden.add(x.id);
      if (x.type === "scene") for (const c of x.children) markHidden(c);
    };
    markHidden(n);
  }
  // Optional elevation cutaway: drop whatever sits wholly on the camera side of
  // the framed centre plane (near walls and their furniture), keeping the far
  // half. A box that straddles the plane still renders.
  let cut: { axis: number; sign: number; mid: number } | null = null;
  if (opts.cutaway && view === "elevation" && side) {
    const axis = Math.abs(side.x) > 0.99 ? 0 : Math.abs(side.y) > 0.99 ? 1 : Math.abs(side.z) > 0.99 ? 2 : -1;
    if (axis >= 0) {
      cut = {
        axis,
        sign: side.x || side.y || side.z,
        mid: [b.min.x + b.max.x, b.min.y + b.max.y, b.min.z + b.max.z][axis] / 2,
      };
    }
  }
  const objects: Obj[] = [], boxes: Box3[] = [];
  const take = (n: Node, wb: Box3[]): void => {
    const nb = M.emptyBox();
    growBounds(wb, nb);
    if (M.boxEmpty(nb) || hidden.has(n.id)) return;
    if (cut && (cut.sign > 0 ? [nb.min.x, nb.min.y, nb.min.z][cut.axis] >= cut.mid : [nb.max.x, nb.max.y, nb.max.z][cut.axis] <= cut.mid)) return;
    objects.push({ label: n.name || n.id, b: nb, boxes: wb });
    boxes.push(...wb);
  };
  eachObject(S.root, O, 0, null, null, (n, off, rot, _owner, dRoot) => {
    if (!dRoot && (!isolate || focusIds.has(n.id))) {
      take(n, n.boxes.map((b) => worldBox(b, rot, off)));
    }
  });
  if (S.editObject && S.editObject.vis === "visible" && (!isolate || focusIds.has(S.editObject.id))) {
    take(S.editObject, S.editObject.boxes.map((b) => worldBox(b, S.editXform.rot, S.editXform.off)));
  }
  const angular = opts.azim !== undefined || opts.elev !== undefined;
  const cutY = opts.cutY ?? (view === "top" && !angular ? 150 : undefined);
  const at = opts.labels === false
    ? []
    : objectCentroids(objects, camera, size, cutY);
  const labelled = objects.map((o, i) => ({ ...o, at: at[i] }));
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
    E.renderer.clippingPlanes = cutY === undefined ? [] : [new THREE.Plane(new THREE.Vector3(0, -1, 0), cutY)];
    E.renderer.setSize(size, size, false); E.renderer.render(tmp, camera);
    const out = document.createElement("canvas"); out.width = out.height = size;
    const ctx = out.getContext("2d")!;
    ctx.drawImage(E.renderer.domElement, 0, 0, size, size);
    if (view === "top" && opts.grid !== false && half > 0) {
      drawGrid(ctx, size, b, half);
    }
    if (opts.labels !== false) {
      const area = (frame.max.x - frame.min.x) * (frame.max.z - frame.min.z);
      drawLabels(ctx, size, labelled, area * 0.25);
    }
    drawCompass(ctx, size, camera);
    if (opts.save) {
      // a 900px PNG is ~100 kB of base64 in a tool result; a browser download
      // keeps it out of the agent's context entirely
      const blob = await new Promise<Blob | null>((r) =>
        out.toBlob(r, mime, quality)
      );
      if (!blob) throw new Error("could not encode the render");
      download(blob, opts.save);
      return `saved ${size}px ${blob.type.replace("image/", "")} ${Math.round(blob.size / 1024)} kB to "${opts.save}"`;
    }
    return out.toDataURL(mime, quality);
  } finally {
    geo?.dispose();
    E.renderer.setSize(oldSize.x, oldSize.y, false); E.renderer.clippingPlanes = oldClip;
    E.renderer.shadowMap.enabled = oldShadow;
    E.renderer.render(E.scene, E.camera); E.wake();
  }
}
