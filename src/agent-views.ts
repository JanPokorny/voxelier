// Read-only views for agents driving the page through window.voxelier: a compact
// tree outline, precomputed pair relations, canonical PNG renders, and a diff.
import * as THREE from "three";
import { S } from "./state.ts";
import * as M from "./model.ts";
import { pathXform } from "./math.ts";
import { eachObject } from "./render.ts";
import { de } from "./persistence.ts";
import * as E from "./scene-env.ts";
import type { Box, Box3, Node, Vec } from "./types.ts";

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
  const w = pathXform(M.findPath(n)!);
  return M.nodeBoxes(n, w.off, w.rot, []);
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
        (collapsed ? head(n) + suffix : nodeLine(n, boundsIn(root, n))),
    );
    if (collapsed || n.type === "object" || d >= depth) return;
    for (const c of n.children) walk(c, d + 1);
  };
  walk(root, 0);
  return lines.join("\n");
}

type Sep = { kind: "overlap" | "touch" | "gap"; axis: number; gap: number };
// The one real-box separation test: per-axis gaps, their max decides the
// relation, and a max of 0 is a touch (or a full overlap).
function separation(a: Box3[], b: Box3[]): Sep | null {
  let best: Sep | null = null;
  for (const p of a) {
    for (const q of b) {
      const o = [
        p.x0 < q.x1 && q.x0 < p.x1,
        p.y0 < q.y1 && q.y0 < p.y1,
        p.z0 < q.z1 && q.z0 < p.z1,
      ];
      if (o[0] && o[1] && o[2]) return { kind: "overlap", axis: -1, gap: 0 };
      const g = [
        Math.max(p.x0 - q.x1, q.x0 - p.x1, 0),
        Math.max(p.y0 - q.y1, q.y0 - p.y1, 0),
        Math.max(p.z0 - q.z1, q.z0 - p.z1, 0),
      ];
      const m = Math.max(...g);
      if (!best || m < best.gap) {
        best = m === 0
          ? { kind: "touch", axis: o.indexOf(false), gap: 0 }
          : { kind: "gap", axis: g.indexOf(m), gap: m };
      }
    }
  }
  return best;
}
export function relations(
  ids?: string | string[],
  { within = 60 }: { within?: number } = {},
): string {
  let list: Node[];
  if (ids !== undefined) {
    list = (typeof ids === "string" ? [ids] : ids).map((id) => {
      const n = M.findById(id);
      if (!n) throw new Error(`unknown node id: ${id}`);
      return n;
    });
  } else {
    list = S.root.children.flatMap((c) =>
      c.vis === "hidden"
        ? []
        : c.type === "scene" && c.name === "Immutable"
        ? c.children.filter((g) => g.vis !== "hidden")
        : [c]
    );
  }
  const items = list
    .filter((n) => (M.findPath(n) ?? []).every((p) => p.vis !== "hidden"))
    .map((n) => ({ n, boxes: worldBoxes(n) }))
    .filter((it) => it.boxes.length);
  const out: string[] = [];
  for (const [i, a] of items.entries()) {
    for (const b of items.slice(i + 1)) {
      const s = separation(a.boxes, b.boxes);
      if (!s || (s.kind === "gap" && s.gap > within)) continue;
      const rel = s.kind === "overlap"
        ? "overlap"
        : `${AXES[s.axis]} ${s.kind}${s.gap ? ` ${s.gap}` : ""}`;
      out.push(
        `${a.n.id} "${a.n.name}" ${
          s.kind === "overlap" ? "~" : "|"
        } ${b.n.id} "${b.n.name}": ${rel}`,
      );
    }
  }
  return out.join("\n");
}

export function diff(before: string): string {
  const j = JSON.parse(before),
    prev = de(j.root ?? j) as Node,
    out: string[] = [];
  const walk = (n: Node): void => {
    const p = M.findById(n.id, prev);
    if (!p) return void out.push(`+ ${nodeLine(n, boundsIn(S.root, n))}`);
    const parts: string[] = [];
    const dx = n.pos.x - p.pos.x,
      dy = n.pos.y - p.pos.y,
      dz = n.pos.z - p.pos.z;
    if (dx || dy || dz) {
      const cb = boundsIn(S.root, n);
      const d = [dx, dy, dz].map((v, i) =>
        v ? `Δ${AXES[i]}${v > 0 ? "+" : ""}${v}` : ""
      ).filter(Boolean).join(" ");
      parts.push(`moved ${d} (now ${cb ? fmtBox(cb) : "[empty]"})`);
    }
    if (n.rot !== p.rot) parts.push(`rotated to ${n.rot * 90}°`);
    if (n.vis !== p.vis) parts.push(`${p.vis}→${n.vis}`);
    if (n.type === "object" && p.type === "object") {
      const cb = boundsIn(S.root, n);
      if (JSON.stringify(n.boxes) !== JSON.stringify(p.boxes) && cb) {
        parts.push(`resized ${fmtSize(cb)}`);
      }
    }
    if (parts.length) out.push(`~ ${n.id} "${n.name}" ${parts.join("; ")}`);
    if (n.type === "scene") { for (const c of n.children) walk(c); }
  };
  walk(S.root);
  const removed = (n: Node): void => {
    if (!M.findById(n.id, S.root)) {
      return void out.push(`- ${nodeLine(n, boundsIn(prev, n))}`);
    }
    if (n.type === "scene") { for (const c of n.children) removed(c); }
  };
  removed(prev);
  return out.join("\n");
}

const VIEWS = new Set(["top", "front", "side", "iso"]);
// deno-fmt-ignore
function makeCamera(view: string, b: Box): { camera: THREE.Camera; half: number } {
  const c = new THREE.Vector3((b.min.x + b.max.x) / 2, (b.min.y + b.max.y) / 2, (b.min.z + b.max.z) / 2);
  const w = Math.max(1, b.max.x - b.min.x), h = Math.max(1, b.max.y - b.min.y), d = Math.max(1, b.max.z - b.min.z);
  const dims = [w, h, d], diag = Math.hypot(w, h, d);
  const axes = view === "top" ? [0, 2] : view === "front" ? [0, 1] : view === "side" ? [2, 1] : [0, 2];
  const half = (view === "iso" ? diag : Math.max(dims[axes[0]], dims[axes[1]])) / 2 * 1.12 + 2;
  const dir = view === "top" ? [0, 1, 0] : view === "front" ? [0, 0, 1] : view === "side" ? [1, 0, 0] : [1, 1, 1];
  const dist = diag * 2 + 100;
  const camera = new THREE.OrthographicCamera(-half, half, half, -half, 0.1, dist + diag * 2);
  camera.position.copy(c).add(new THREE.Vector3(dir[0], dir[1], dir[2]).normalize().multiplyScalar(dist));
  if (view === "top") camera.up.set(0, 0, -1);
  camera.lookAt(c);
  return { camera, half };
}
// deno-fmt-ignore
function drawGrid(ctx: CanvasRenderingContext2D, size: number, b: Box, half: number): void {
  const s = size / (2 * half), mid = size / 2, cx = (b.min.x + b.max.x) / 2, cz = (b.min.z + b.max.z) / 2;
  ctx.strokeStyle = "rgba(0,0,0,0.14)"; ctx.lineWidth = 1;
  for (let x = Math.ceil((cx - half) / 5) * 5; x <= cx + half; x += 5) {
    const px = mid + (x - cx) * s;
    ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, size); ctx.stroke();
  }
  for (let z = Math.ceil((cz - half) / 5) * 5; z <= cz + half; z += 5) {
    const py = mid + (z - cz) * s;
    ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(size, py); ctx.stroke();
  }
  ctx.strokeStyle = "#111"; ctx.lineWidth = 2; ctx.beginPath();
  ctx.moveTo(18, size - 20); ctx.lineTo(18 + 10 * s, size - 20); ctx.stroke();
  ctx.font = "12px ui-monospace, monospace"; ctx.fillStyle = "#111"; ctx.fillText("1 m", 18, size - 26);
}
// deno-fmt-ignore
function drawLabels(ctx: CanvasRenderingContext2D, camera: THREE.Camera, size: number, objects: { id: string; b: Box }[]): void {
  ctx.font = "bold 11px ui-monospace, monospace"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
  for (const { id, b } of objects) {
    const p = new THREE.Vector3((b.min.x + b.max.x) / 2, (b.min.y + b.max.y) / 2, (b.min.z + b.max.z) / 2).project(camera);
    const x = (p.x * 0.5 + 0.5) * size, y = (1 - (p.y * 0.5 + 0.5)) * size;
    if (x < 0 || y < 0 || x > size || y > size) continue;
    ctx.lineWidth = 3; ctx.strokeStyle = "#fff"; ctx.strokeText(id, x, y); ctx.fillStyle = "#111"; ctx.fillText(id, x, y);
  }
}
// deno-fmt-ignore
export function renderView(view: string, opts: { focus?: string | string[]; labels?: boolean; grid?: boolean; size?: number; cutY?: number } = {}): Promise<string> {
  if (!VIEWS.has(view)) throw new Error(`unknown view "${view}": use top, front, side or iso`);
  const size = Math.max(64, Math.min(2048, Math.round(opts.size ?? 900)));
  const focus = opts.focus === undefined ? [] : typeof opts.focus === "string" ? [opts.focus] : opts.focus;
  const b = M.emptyBox();
  if (focus.length) {
    for (const id of focus) {
      const w = worldBounds(id); if (!w) continue;
      b.min.x = Math.min(b.min.x, w.min.x); b.min.y = Math.min(b.min.y, w.min.y); b.min.z = Math.min(b.min.z, w.min.z);
      b.max.x = Math.max(b.max.x, w.max.x); b.max.y = Math.max(b.max.y, w.max.y); b.max.z = Math.max(b.max.z, w.max.z);
    }
    if (M.boxEmpty(b)) throw new Error(`focus has no geometry: ${focus}`);
  } else {
    Object.assign(b, S.sceneBox && !M.boxEmpty(S.sceneBox) ? S.sceneBox : { min: { x: -20, y: 0, z: -20 }, max: { x: 20, y: 40, z: 20 } });
  }
  const { camera, half } = makeCamera(view, b);
  const objects: { id: string; b: Box }[] = [];
  eachObject(S.root, O, 0, null, null, (n, off, rot, _owner, dRoot) => {
    if (dRoot) return;
    const nb = M.nodeBox(n, off, rot, M.emptyBox());
    if (!M.boxEmpty(nb)) objects.push({ id: n.id, b: nb });
  });
  const hidden: THREE.Object3D[] = [];
  const hide = (o: THREE.Object3D): void => { if (o.visible) { o.visible = false; hidden.push(o); } };
  for (const o of [E.ground, E.overlay, E.hoverVox, E.measLines]) hide(o);
  E.scene.traverse((o: THREE.Object3D) => {
    const m = o as THREE.Mesh, mat = m.material as THREE.Material | undefined;
    if ((m.isMesh && mat?.clippingPlanes?.length) || (o as THREE.LineSegments).isLineSegments || o.renderOrder < -1e8) hide(o);
  });
  const oldSize = E.renderer.getSize(new THREE.Vector2());
  const oldClip = E.renderer.clippingPlanes, oldShadow = E.renderer.shadowMap.enabled, oldBg = E.scene.background;
  try {
    E.scene.background = new THREE.Color(0xffffff); E.renderer.shadowMap.enabled = false;
    const cutY = opts.cutY ?? (view === "top" ? 150 : undefined);
    E.renderer.clippingPlanes = cutY === undefined ? [] : [new THREE.Plane(new THREE.Vector3(0, -1, 0), cutY)];
    E.renderer.setSize(size, size, false); E.renderer.render(E.scene, camera);
    const out = document.createElement("canvas"); out.width = out.height = size;
    const ctx = out.getContext("2d")!;
    ctx.drawImage(E.renderer.domElement, 0, 0, size, size);
    if (view === "top" && opts.grid !== false) drawGrid(ctx, size, b, half);
    if (opts.labels !== false) drawLabels(ctx, camera, size, objects);
    return Promise.resolve(out.toDataURL("image/png"));
  } finally {
    E.renderer.setSize(oldSize.x, oldSize.y, false); E.renderer.clippingPlanes = oldClip;
    E.renderer.shadowMap.enabled = oldShadow; E.scene.background = oldBg;
    for (const o of hidden) o.visible = true; E.wake();
  }
}
