// DOM chrome: the tool buttons + draw-colour control (recent colours + picker),
// the object/scene tree (thumbnails, row clicks, context menu, drag & drop) and
// the global keyboard shortcuts. Attaches its window/tree listeners on import.
import { S } from "./state.ts";
import { hex } from "./math.ts";
import { colorCounts, growBounds } from "./boxes.ts";
import { hoverVox } from "./scene-env.ts";
import { clearMeasure } from "./measure.ts";
import { fitNode, frameView } from "./camera.ts";
import { enterNode, escapeUp, selectNode } from "./navigation.ts";
import {
  DEFAULT_COLORS,
  emptyBox,
  findById,
  findPath,
  isDescendant,
  nodeBoxes,
  parentOf,
} from "./model.ts";
import {
  addGroupIn,
  addObjectIn,
  copySelection,
  createObject,
  cutSelection,
  cycleVis,
  deleteNode,
  deleteSelection,
  duplicateNode,
  duplicateSelection,
  groupSelection,
  nudgeY,
  pasteClipboard,
  reparentNode,
  rotateSelection,
  ungroupNode,
  wrapInGroup,
  wrapNodeInGroup,
} from "./commands.ts";
import { rebuild, selectionRender } from "./render.ts";
import { save } from "./persistence.ts";
import { redo, undo } from "./history.ts";
import { exportScene, importScene } from "./io.ts";
import {
  clearSelection,
  copySelection3d,
  cutSelection3d,
  deleteSelection3d,
  pasteVox,
} from "./select.ts";
import { clipKind, getNodeClip, getVoxClip } from "./clipboard.ts";
import type { Box3, DropInfo, Node, Pending, Tool } from "./types.ts";

// Tree drag&drop, context-menu, and row-click transient state — all owned and
// used only here, so they live as module locals rather than in the shared S.
let dragId: string | null = null; // id of the row being dragged
let dropInfo: DropInfo | null = null; // resolved drop target while dragging
let dropRow: HTMLElement | null = null; // row element currently showing a drop cue
let ctxMenuEl: HTMLElement | null = null; // open context menu, or null
let pending: Pending | null = null; // scheduled single-vs-double row click

// Terse element factory: create <tag>, assign the given properties (className,
// innerHTML, textContent, onclick, title, draggable…), append any children.
function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: Partial<HTMLElementTagNameMap[K]> = {},
  ...kids: (globalThis.Node | string)[]
): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  Object.assign(e, props);
  if (kids.length) e.append(...kids);
  return e;
}

// glyph per voxel tool (also drives the tool-cursor follower in interaction.ts)
export const TOOL_ICON: Record<Tool, string> = {
  view: "👁",
  add: "＋",
  erase: "－",
  paint: "🪣",
  eyedropper: "💧",
  select: "⬚",
  measure: "📏",
};
const VOX_TOOLS: { id: Tool; label: string }[] = [
  { id: "view", label: "View" },
  { id: "add", label: "Add" },
  { id: "erase", label: "Erase" },
  { id: "paint", label: "Fill" },
  { id: "select", label: "Select" },
]; // eyedropper lives in the colour flyout; measure is appended in any mode
// tree visibility-toggle glyphs, by current vis state
const VIS_GLYPH: Record<string, string> = {
  visible: "◉",
  transparent: "◐",
  invisible: "⦰",
};

// a tool-rail button (rounded square with an icon glyph over a small label)
const toolButton = (
  ic: string,
  label: string,
  active: boolean,
  onclick: () => void,
): HTMLElement =>
  el("button", {
    className: "tool" + (active ? " active" : ""),
    innerHTML: `<span class="ic">${ic}</span>${label}`,
    onclick,
  });

// Switch the active tool. Tools are mutually exclusive, so this drops any voxel
// marquee, cancels a pending eyedropper return, hides the hover cube and clears
// the live measurement — then redraws the chrome to reflect the new selection.
export function setTool(id: Tool): void {
  if (S.tool === id) return;
  clearSelection();
  S.tool = id;
  S.eyedropReturn = null;
  hoverVox.visible = false;
  clearMeasure();
  updateChrome();
}

export function updateChrome(): void {
  const tw = document.getElementById("tools")!;
  tw.innerHTML = "";
  // single top-left tool rail. While editing an object it holds the voxel tools
  // (scene actions live in the tree's right-click menu); Measure sits alongside
  // them as a tool of its own, and the colour picker trails the row. The rail is
  // always present so Measure stays reachable outside edit mode too.
  const top = el("div", { className: "toolgroup" });
  if (S.editObject) {
    for (const t of VOX_TOOLS) {
      top.appendChild(
        toolButton(TOOL_ICON[t.id], t.label, S.tool === t.id, () => setTool(t.id)),
      );
    }
  }
  // Measure is a tool like the rest; outside edit mode it's the only one, so its
  // button toggles back to View to switch measuring off.
  top.appendChild(
    toolButton(TOOL_ICON.measure, "Measure", S.tool === "measure", () =>
      setTool(S.tool === "measure" ? "view" : "measure")),
  );
  if (S.editObject) top.appendChild(colorControl()); // draw-colour picker (edit mode only)
  tw.append(top);
  // the tool-cursor glyph is edit-mode only; hide it on the transition to scene
  // mode (a pointer move may not follow, e.g. exiting via the keyboard)
  if (!S.editObject) {
    const tc = document.getElementById("toolcursor");
    if (tc) tc.style.display = "none";
  }
  buildTree();
}

// Save (export) / Load (import) live at the top of the scene tree panel. Wired
// once on import — the buttons are static in index.html, not rebuilt per chrome
// refresh, so the listeners never need re-attaching.
document.getElementById("btn-save")!.onclick = exportScene;
document.getElementById("btn-load")!.onclick = importScene;

// distinct colours used in the scene, most-used (by cell volume) first. Cached by
// S.voxVer so it isn't recomputed on every chrome refresh.
let _scCache: { ver: number; cols: number[] } = { ver: -1, cols: [] };
function sceneColors(): number[] {
  if (_scCache.ver === S.voxVer) return _scCache.cols;
  const m = new Map<number, number>();
  (function rec(n: Node) {
    if (n.type === "object") colorCounts(n.boxes, m);
    else n.children.forEach(rec);
  })(S.root);
  _scCache = {
    ver: S.voxVer,
    cols: [...m.entries()].sort((a, b) => b[1] - a[1]).map((e) => e[0]),
  };
  return _scCache.cols;
}
// colours actually used to add/fill voxels, most-recent first (capped at 6).
// Drives the colour flyout; padded from scene/default colours when fewer exist.
// Recorded only on actual use (see recordRecent calls in interaction.ts), not on
// merely selecting/dialing a colour.
let recentColors: number[] = [];
export function recordRecent(c: number): void {
  recentColors = [c, ...recentColors.filter((x) => x !== c)].slice(0, 6);
}
export function selectColor(c: number): void {
  S.selColor = c;
  updateChrome();
}
// the 6 colours shown in the flyout: recently-used first, then padded with the
// scene's used colours and the default palette (deduped)
function recentSix(): number[] {
  const out: number[] = [];
  for (const c of [...recentColors, ...sceneColors(), ...DEFAULT_COLORS]) {
    if (!out.includes(c)) out.push(c);
    if (out.length >= 6) break;
  }
  return out;
}
// a .sw colour swatch: clicking makes it the draw colour
const colorSwatch = (c: number): HTMLElement => {
  const s = el("div", {
    className: "sw" + (c === S.selColor ? " active" : ""),
    title: hex(c),
    onclick: () => selectColor(c),
  });
  s.style.background = hex(c);
  return s;
};
// switch to the eyedropper as a one-shot: the next voxel pick restores this tool
function activateEyedropper(): void {
  if (S.tool !== "eyedropper") {
    S.eyedropReturn = S.tool;
    clearSelection(); // a marquee can't survive the tool change
    S.tool = "eyedropper";
    updateChrome();
  }
}
// ---- HSV <-> 0xRRGGBB (for the colour sliders) ----
function rgbToHsv(c: number): [number, number, number] {
  const r = ((c >> 16) & 255) / 255, g = ((c >> 8) & 255) / 255, b = (c & 255) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  let h = 0;
  if (d) {
    if (mx === r) h = ((g - b) / d) % 6;
    else if (mx === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h = (h * 60 + 360) % 360;
  }
  return [Math.round(h), Math.round((mx ? d / mx : 0) * 100), Math.round(mx * 100)];
}
function hsvToRgb(h: number, s: number, v: number): number {
  s /= 100;
  v /= 100;
  const c = v * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = v - c;
  const [r, g, b] = h < 60
    ? [c, x, 0]
    : h < 120
    ? [x, c, 0]
    : h < 180
    ? [0, c, x]
    : h < 240
    ? [0, x, c]
    : h < 300
    ? [x, 0, c]
    : [c, 0, x];
  const to = (n: number) => Math.round((n + m) * 255);
  return (to(r) << 16) | (to(g) << 8) | to(b);
}
const SLIDERS: { key: "h" | "s" | "v"; max: number; label: string; title: string }[] = [
  { key: "h", max: 360, label: "H", title: "Hue" },
  { key: "s", max: 100, label: "S", title: "Saturation" },
  { key: "v", max: 100, label: "V", title: "Value" },
];
// toolbar draw-colour control: an icon showing the active colour; hovering it
// reveals a flyout — one row of recent colours, then H/S/V sliders that edit the
// draw colour, with the eyedropper alongside the sliders
function colorControl(): HTMLElement {
  const ctl = el("div", { className: "colorctl" });
  const icon = el("div", {
    className: "colorbtn",
    title: "Draw colour — hover for recent colours / sliders",
  });
  icon.style.background = hex(S.selColor);
  const fly = el("div", { className: "colorflyout" });

  // --- sliders (top) ---
  const sliders = el("div", { className: "sliders" });
  const inp: Record<string, HTMLInputElement> = {};
  // sliders are integer-stepped, so the starting positions are S.selColor's HSV
  // rounded; moving a slider re-derives the colour from those integers, which can
  // shift an untouched channel by up to ~3/255 — a small, one-time quantisation.
  const [h0, s0, v0] = rgbToHsv(S.selColor);
  const val = { h: h0, s: s0, v: v0 };
  const repaint = () => { // S/V track gradients depend on the other channels
    inp.s.style.background =
      `linear-gradient(to right,${hex(hsvToRgb(val.h, 0, val.v))},${hex(hsvToRgb(val.h, 100, val.v))})`;
    inp.v.style.background =
      `linear-gradient(to right,${hex(hsvToRgb(val.h, val.s, 0))},${hex(hsvToRgb(val.h, val.s, 100))})`;
  };
  // Preview the draw colour live without any DOM rebuild — a full updateChrome()
  // would destroy the slider being dragged or keyboard-stepped (range inputs fire
  // events on every keystroke). Sliders never touch the recents; a colour is only
  // recorded when it's actually used to add/fill a voxel (see interaction.ts).
  const onSlide = () => {
    val.h = +inp.h.value;
    val.s = +inp.s.value;
    val.v = +inp.v.value;
    S.selColor = hsvToRgb(val.h, val.s, val.v);
    icon.style.background = hex(S.selColor);
    repaint();
  };
  for (const def of SLIDERS) {
    const line = el("div", { className: "sliderline" });
    const r = el("input", { type: "range", className: "csl", title: def.title });
    r.min = "0";
    r.max = String(def.max);
    r.value = String(val[def.key]);
    inp[def.key] = r;
    r.addEventListener("input", onSlide);
    line.append(el("span", { className: "lbl", textContent: def.label, title: def.title }), r);
    sliders.appendChild(line);
  }
  inp.h.style.background = // fixed rainbow
    "linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)";
  repaint();
  const body = el("div", { className: "sliderrow" });
  body.append(
    sliders,
    el("div", {
      className: "sw more",
      textContent: "💧",
      title: "Pick a colour from a voxel (eyedropper)",
      onclick: activateEyedropper,
    }),
  );

  // --- recent colours (bottom): six small squares ---
  const row = el("div", { className: "swrow" });
  for (const c of recentSix()) row.appendChild(colorSwatch(c));

  fly.append(body, row);
  ctl.append(icon, fly);
  return ctl;
}

// ---- object/scene tree ----
const shade = (c: number, f: number): string => {
  const r = Math.min(255, ((c >> 16) & 255) * f) | 0,
    g = Math.min(255, ((c >> 8) & 255) * f) | 0,
    b = Math.min(255, (c & 255) * f) | 0;
  return `rgb(${r},${g},${b})`;
};
const thumbCache = new Map<string, { sig: string; cv: HTMLCanvasElement }>();
function thumbSig(node: Node): string {
  return node.type === "object"
    ? "o" +
      node.boxes.map((b) =>
        `${b.x0},${b.y0},${b.z0},${b.x1},${b.y1},${b.z1},${b.c}`
      ).join(";")
    // include each child's pose: the thumbnail lays children out by pos/rot,
    // so moving/rotating one must invalidate the parent group's cached image
    : "s" +
      node.children.map((c) =>
        `${c.id}@${c.pos.x},${c.pos.y},${c.pos.z}/${c.rot};${thumbSig(c)}`
      ).join();
}
// draw the boxes as little isometric cuboids (three shaded faces), painter-sorted
function thumbFor(node: Node): HTMLCanvasElement {
  const hit = thumbCache.get(node.id);
  if (node === S.editObject && hit) return hit.cv; // don't re-rasterise the active object
  const sig = thumbSig(node);
  if (hit && hit.sig === sig) return hit.cv;
  const cv = document.createElement("canvas");
  cv.width = cv.height = 52;
  cv.style.width = cv.style.height = "26px";
  const g = cv.getContext("2d")!;
  g.fillStyle = "#0f1115";
  g.fillRect(0, 0, 52, 52);
  const boxes = nodeBoxes(node, { x: 0, y: 0, z: 0 }, 0, []);
  if (boxes.length) {
    const bb = emptyBox();
    growBounds(boxes, bb);
    const { x: mnx, y: mny, z: mnz } = bb.min,
      { x: mxx, y: mxy, z: mxz } = bb.max;
    const s = 40 / Math.max(mxx - mnx, mxy - mny, mxz - mnz, 1);
    const cx = 26 - ((mnx + mxx) / 2 - (mnz + mxz) / 2) * s * 0.5,
      cy = 28 + ((mny + mxy) / 2) * s * 0.6 -
        ((mnx + mxx) / 2 + (mnz + mxz) / 2) * s * 0.28;
    const P = (x: number, y: number, z: number): [number, number] => [
      cx + (x - z) * s * 0.5,
      cy - y * s * 0.6 + (x + z) * s * 0.28,
    ];
    const quad = (col: string, p: [number, number][]) => {
      g.fillStyle = col;
      g.beginPath();
      g.moveTo(p[0][0], p[0][1]);
      for (let i = 1; i < p.length; i++) g.lineTo(p[i][0], p[i][1]);
      g.closePath();
      g.fill();
    };
    boxes.sort((a, b) =>
      (a.x0 + a.x1 + a.y0 + a.y1 + a.z0 + a.z1) -
      (b.x0 + b.x1 + b.y0 + b.y1 + b.z0 + b.z1)
    ); // back-to-front
    for (const b of boxes) {
      quad(shade(b.c, 0.78), [ // +x (right) face
        P(b.x1, b.y0, b.z0),
        P(b.x1, b.y1, b.z0),
        P(b.x1, b.y1, b.z1),
        P(b.x1, b.y0, b.z1),
      ]);
      quad(shade(b.c, 0.6), [ // +z (front) face
        P(b.x0, b.y0, b.z1),
        P(b.x1, b.y0, b.z1),
        P(b.x1, b.y1, b.z1),
        P(b.x0, b.y1, b.z1),
      ]);
      quad(shade(b.c, 1), [ // +y (top) face
        P(b.x0, b.y1, b.z0),
        P(b.x1, b.y1, b.z0),
        P(b.x1, b.y1, b.z1),
        P(b.x0, b.y1, b.z1),
      ]);
    }
  }
  thumbCache.set(node.id, { sig, cv });
  return cv;
}
// tree-row clicks mirror clicking the object in the scene: a single click
// selects immediately; a second click soon after zooms to the node and starts
// editing it (descend into a group, or open an object for voxel edits). We use
// two independent click events (not a native dblclick) so the immediate select
// can rebuild the row DOM without breaking double-click detection — the same
// node's row reoccupies the same spot. Rename lives only in the right-click menu.
// Shift-click extends the selection (multi-select) within the current context.
// Selection is per-context, so a Shift-click on a node in a different context (or
// while editing an object) can't extend — it falls back to a plain single select.
// pivot row for Shift range-select; set by every plain/Ctrl single pick (tree or
// 3D scene, via setSelAnchor). Selection is per-context, so a range only spans
// siblings of the current context.
let selAnchor: string | null = null;
export function setSelAnchor(id: string | null): void {
  selAnchor = id;
}
// Ctrl/Cmd-click: add/remove a single row to/from the selection.
function toggleSelect(node: Node): void {
  if (node === S.root || parentOf(node) !== S.context || S.editObject) {
    selectNode(node); // can't multi-select across contexts / out of edit mode
  } else {
    const prevSel = new Set(S.selection);
    if (S.selection.has(node.id)) S.selection.delete(node.id);
    else S.selection.add(node.id);
    selectionRender(prevSel);
    updateChrome();
  }
  selAnchor = node.id;
}
// Shift-click: select the contiguous run of siblings between the pivot and here.
function rangeSelect(node: Node): void {
  const kids = S.context.children;
  const ai = selAnchor ? kids.findIndex((c) => c.id === selAnchor) : -1;
  const bi = kids.findIndex((c) => c.id === node.id);
  if (node === S.root || S.editObject || ai < 0 || bi < 0) {
    selectNode(node); // no usable pivot in this context — single select
    selAnchor = node.id;
    return;
  }
  const prevSel = new Set(S.selection);
  const lo = Math.min(ai, bi), hi = Math.max(ai, bi);
  S.selection = new Set(kids.slice(lo, hi + 1).map((c) => c.id));
  selectionRender(prevSel); // keep the pivot so further Shift-clicks extend from it
  updateChrome();
}
function rowClick(node: Node, e: MouseEvent): void {
  if (e.shiftKey || e.ctrlKey || e.metaKey) { // modifier-click never enters/edits
    if (pending) {
      clearTimeout(pending.timer);
      pending = null;
    }
    if (e.shiftKey) rangeSelect(node);
    else toggleSelect(node);
    return;
  }
  if (pending && pending.node === node) { // second click within the window
    clearTimeout(pending.timer);
    pending = null;
    enterNode(node, true); // zoom to view + start editing
    return;
  }
  if (pending) clearTimeout(pending.timer);
  // root can't be "selected" (selection lives within a context) -> just return
  // to the top-level context; any other node selects right away
  if (node === S.root) enterNode(node);
  else selectNode(node);
  selAnchor = node === S.root ? null : node.id; // pivot for a later Shift range
  pending = { node, timer: setTimeout(() => (pending = null), 300) };
}
// Inline rename: swap a row's name span for a text input, committing on Enter or
// blur and cancelling on Escape. updateChrome() rebuilds the tree afterwards,
// restoring the plain name span. Used by the name-click gesture and the menu.
function startRename(node: Node): void {
  closeItemMenu(); // when invoked from the context menu
  const r = document.querySelector<HTMLElement>(`#tree .trow[data-id="${node.id}"]`);
  const nm = r?.querySelector(".nm");
  if (!nm) return;
  const input = el("input", { className: "nminput", value: node.name });
  input.placeholder = node === S.root
    ? "Project"
    : (node.type === "scene" ? "group" : "object");
  let done = false;
  const finish = (commit: boolean) => {
    if (done) return; // blur fires again as updateChrome() tears the input down
    done = true;
    if (commit) {
      node.name = input.value.trim();
      save();
    }
    updateChrome();
  };
  input.addEventListener("keydown", (ev) => {
    ev.stopPropagation();
    if (ev.key === "Enter") finish(true);
    else if (ev.key === "Escape") finish(false);
  });
  input.addEventListener("blur", () => finish(true));
  nm.replaceWith(input);
  input.focus();
  input.select();
}

// the row's cached thumbnail; for a non-empty non-root group it doubles as the
// collapse toggle (a stacked look = collapsed)
function rowThumb(node: Node): HTMLCanvasElement {
  const th = thumbFor(node);
  th.className = "thumb";
  th.onclick = null;
  th.title = ""; // (canvas is cached/reused)
  if (node !== S.root && node.type === "scene" && node.children.length) {
    const col = S.collapsed.has(node.id);
    th.classList.add("group");
    if (col) th.classList.add("collapsed");
    th.title = col ? "Expand group" : "Collapse group";
    th.onclick = (e) => {
      e.stopPropagation();
      col ? S.collapsed.delete(node.id) : S.collapsed.add(node.id);
      buildTree();
    };
  }
  return th;
}
// wire tree drag&drop reparenting (VSCode-style) onto a row: the root can't be
// dragged but accepts drops
function wireRowDnd(r: HTMLElement, node: Node): void {
  r.draggable = node !== S.root;
  if (node !== S.root) {
    r.addEventListener("dragstart", (ev) => {
      ev.stopPropagation();
      dragId = node.id;
      if (ev.dataTransfer) {
        ev.dataTransfer.effectAllowed = "move";
        try {
          ev.dataTransfer.setData("text/plain", node.id);
        } catch (_) { /* some browsers */ }
      }
    });
  }
  r.addEventListener("dragend", clearDropInd);
  r.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    dropOver(ev, node, r);
  });
  r.addEventListener("drop", (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    doDrop();
  });
}
function buildTree(): void {
  const w = document.getElementById("tree")!;
  w.innerHTML = "";
  const row = (node: Node, depth: number) => {
    const isRoot = node === S.root;
    const isSel = !isRoot && S.context.children.includes(node) &&
      S.selection.has(node.id);
    const v = node.vis;
    const r = el("div", {
      className: "trow" + (isRoot ? " root" : "") + (isSel ? " sel" : "") +
        (node === S.context && !S.editObject ? " ctx" : "") +
        (node === S.editObject ? " edit" : "") +
        (!isRoot && v !== "visible" ? " dim" : ""),
    });
    r.style.paddingLeft = (4 + depth * 13) + "px";
    r.dataset.id = node.id; // lets startRename() find this row to edit in place
    const th = rowThumb(node);
    const nm = el("span", { className: "nm" });
    if (isRoot) nm.textContent = node.name || "Project";
    else if (node.name) nm.textContent = node.name;
    else {
      nm.innerHTML = '<span class="ph">' +
        (node.type === "scene" ? "group" : "object") + "</span>";
    }
    // clicking the name of the already-selected (sole) item, once the
    // double-click window has passed, opens inline rename
    nm.onclick = (e) => {
      if (
        !pending && !S.editObject && !isRoot && S.selection.size === 1 &&
        S.selection.has(node.id)
      ) {
        e.stopPropagation();
        startRename(node);
      }
    };
    r.append(th, nm);
    if (!isRoot) {
      r.append(el("button", {
        className: "tb" + (v === "visible" ? " on" : ""),
        textContent: VIS_GLYPH[v],
        title: "visible → transparent → invisible",
        onclick: (e) => {
          e.stopPropagation();
          cycleVis(node);
        },
      }));
    }
    r.onclick = (e) => rowClick(node, e);
    r.oncontextmenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      // keep an existing multi-selection if the right-clicked row is part of it,
      // so the menu can act on the whole group; otherwise select just this row
      const inSel = !isRoot && !S.editObject && parentOf(node) === S.context &&
        S.selection.has(node.id);
      if (!isRoot && !inSel) selectNode(node);
      showItemMenu(node, e.clientX, e.clientY);
    };
    wireRowDnd(r, node);
    w.appendChild(r);
    if (node.type === "scene" && (isRoot || !S.collapsed.has(node.id))) {
      for (const ch of node.children) {
        row(ch, depth + 1);
      }
    }
  };
  row(S.root, 0);
  // evict thumbnails for nodes no longer in the document (deletes, imports,
  // undo/redo) so the cache can't grow without bound over a long session
  const live = new Set<string>();
  (function collect(n: Node) {
    live.add(n.id);
    if (n.type === "scene") n.children.forEach(collect);
  })(S.root);
  for (const id of thumbCache.keys()) if (!live.has(id)) thumbCache.delete(id);
}

// ---- tree right-click context menu ----
function closeItemMenu(): void {
  if (ctxMenuEl) {
    ctxMenuEl.remove();
    ctxMenuEl = null;
    window.removeEventListener("pointerdown", ctxMenuOutside, true);
  }
}
function ctxMenuOutside(e: PointerEvent): void {
  if (
    ctxMenuEl && !ctxMenuEl.contains(e.target as globalThis.Node | null)
  ) {
    closeItemMenu();
  }
}
function showItemMenu(node: Node, x: number, y: number): void {
  closeItemMenu();
  const m = el("div", { className: "ctxmenu" });
  const add = (label: string, fn: () => void, cls?: string) =>
    m.appendChild(el("div", {
      className: "ctxitem" + (cls ? " " + cls : ""),
      textContent: label,
      onclick: () => {
        closeItemMenu();
        fn();
      },
    }));
  const div = () => m.appendChild(el("div", { className: "ctxdiv" }));
  // the right-click handler guarantees `node` is part of the selection, so a
  // multi-selection (>1) routes Copy/Duplicate/Delete/Group through the selection
  const multi = node !== S.root && parentOf(node) === S.context &&
    S.selection.size > 1 && S.selection.has(node.id);
  if (!multi) { // Rename/Locate act on one item — hide them for a multi-selection
    add("Rename", () => startRename(node));
    add("Locate", () => fitNode(node));
    div();
  }
  if (node !== S.root) {
    add("Copy", () => copySelection());
    add("Duplicate", () => multi ? duplicateSelection() : duplicateNode(node));
    add("Delete objects", () => multi ? deleteSelection() : deleteNode(node), "danger");
    div();
  }
  if (multi) {
    add("Group", () => groupSelection(node)); // new group takes this item's pose
  } else if (node.type === "scene") {
    if (node !== S.root) add("Ungroup", () => ungroupNode(node));
    if (clipKind()) add("Paste", () => pasteClipboard(node)); // paste into this group
    add("New object", () => addObjectIn(node));
    add("New group", () => addGroupIn(node));
  } else add("New group", () => wrapNodeInGroup(node));
  document.body.appendChild(m);
  ctxMenuEl = m;
  const r = m.getBoundingClientRect();
  m.style.left = Math.min(x, innerWidth - r.width - 4) + "px";
  m.style.top = Math.min(y, innerHeight - r.height - 4) + "px";
  setTimeout(
    () => window.addEventListener("pointerdown", ctxMenuOutside, true),
    0,
  );
}

// ---- tree drag & drop state/handlers ----
function clearDropInd(): void {
  if (dropRow) {
    dropRow.classList.remove("drop-into", "drop-before", "drop-after");
  }
  dropRow = null;
  dropInfo = null;
}
// the set being dragged when the grabbed row is part of a multi-selection (the
// whole selection moves together), in tree order; null for a plain single drag
function dragMovers(): Node[] | null {
  const dn = dragId && findById(dragId);
  if (
    !dn || S.editObject || parentOf(dn) !== S.context ||
    !S.selection.has(dn.id) || S.selection.size <= 1
  ) return null;
  return S.context.children.filter((c) => S.selection.has(c.id));
}
function dropOver(ev: DragEvent, node: Node, row: HTMLElement): void {
  const dn = dragId && findById(dragId);
  if (!dn || dn === node) {
    clearDropInd();
    return;
  }
  // reject dropping onto/inside any node being moved (the whole selection when
  // multi-dragging) — that would be a cycle or a silent partial move
  const movers = dragMovers();
  const blocked = movers
    ? movers.some((m) => m === node || isDescendant(m, node))
    : isDescendant(dn, node);
  if (blocked) {
    clearDropInd();
    return;
  }
  clearDropInd();
  dropRow = row;
  if (node === S.root) {
    dropInfo = { parent: S.root, index: S.root.children.length };
    row.classList.add("drop-into");
    return;
  } // drop onto project root
  const rect = row.getBoundingClientRect(),
    y = ev.clientY - rect.top,
    h = rect.height;
  const par = parentOf(node),
    idx = par ? par.children.indexOf(node) : 0;
  // object-onto-object wrap is a single-drag affordance; a multi-drag over an
  // object's middle falls through to before/after instead
  if (y > h * 0.28 && y < h * 0.72 && (node.type === "scene" || !movers)) {
    if (node.type === "scene") {
      dropInfo = { parent: node, index: node.children.length }; // nest inside the group
    } else dropInfo = { wrap: node }; // object onto object -> new group
    row.classList.add("drop-into");
  } else if (y < h * 0.5) {
    dropInfo = { parent: par, index: idx };
    row.classList.add("drop-before");
  } else {
    dropInfo = { parent: par, index: idx + 1 };
    row.classList.add("drop-after");
  }
}
function doDrop(): void {
  const dn = dragId && findById(dragId);
  if (dn && dropInfo) {
    // when the dragged row is part of a multi-selection, move the whole
    // selection into the target (preserving order + each node's world pose).
    // dropOver only ever yields a parent-based drop (never wrap) for a
    // multi-drag, and rejects targets inside the moving set, so the loop below
    // always moves every node cleanly.
    const multi = dropInfo.parent ? dragMovers() : null;
    if (multi) {
      const target = dropInfo.parent!;
      let at = dropInfo.index!, moved = false;
      for (const m of multi) {
        if (reparentNode(m, target, at)) {
          at = target.children.indexOf(m) + 1; // keep the moved set contiguous + ordered
          moved = true;
        }
      }
      if (moved) {
        S.collapsed.delete(target.id);
        const p = findPath(target); // make the target the context so the rows stay selected
        if (p) S.path = p;
        S.editObject = null;
        S.selection = new Set(multi.map((m) => m.id));
        rebuild();
        updateChrome();
        save();
      }
    } else if (dropInfo.wrap) wrapInGroup(dropInfo.wrap, dn);
    else if (
      dropInfo.parent &&
      reparentNode(dn, dropInfo.parent, dropInfo.index!)
    ) {
      S.collapsed.delete(dropInfo.parent.id); // reveal the target
      selectNode(dn);
      save();
    }
  }
  clearDropInd();
  dragId = null;
}

{
  const treeEl = document.getElementById("tree")!; // drop on empty area -> move to scene root
  treeEl.addEventListener("dragover", (ev) => {
    if (ev.target === treeEl && dragId) {
      ev.preventDefault();
      clearDropInd();
      dropInfo = { parent: S.root, index: S.root.children.length };
      // show the same after-row insertion line under the last row, rather than a
      // separate cue at the very bottom of the (panel-filling) tree. Exclude the
      // dragged row so the cue never lands on the item being moved.
      const rows = [...treeEl.querySelectorAll<HTMLElement>(".trow")]
        .filter((r) => r.dataset.id !== dragId);
      const last = rows[rows.length - 1];
      if (last) {
        last.classList.add("drop-after");
        dropRow = last;
      }
    }
  });
  treeEl.addEventListener("drop", (ev) => {
    if (ev.target === treeEl) {
      ev.preventDefault();
      doDrop();
    }
  });
}

// Collapse / reveal the scene sidebar. Hiding gives the canvas the full width;
// a "resize" event re-fits the renderer to the new stage size (the grid track
// changes without the window itself resizing). The reveal button floats at the
// top-right and is shown by CSS only while the panel is collapsed.
{
  const app = document.getElementById("app")!;
  const setSidebar = (hidden: boolean) => {
    app.classList.toggle("side-hidden", hidden);
    window.dispatchEvent(new Event("resize"));
  };
  document.getElementById("btn-hide-side")!.onclick = () => setSidebar(true);
  document.getElementById("btn-show-side")!.onclick = () => setSidebar(false);
}

// Clicking empty space in the side panel — anywhere that isn't a tree row,
// button or input — clears the scene selection, an easy way to deselect all.
document.getElementById("side")!.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest(".trow, button, input")) return;
  if (!S.selection.size) return;
  const prevSel = new Set(S.selection);
  S.selection.clear();
  selAnchor = null;
  selectionRender(prevSel);
  updateChrome();
});

window.addEventListener("keydown", (e) => {
  if ((e.target as HTMLElement).tagName === "INPUT") return;
  // ignore shortcuts mid-gesture: undo/redo (and delete/clipboard) serialize the
  // live model, which during a lifted-selection drag is in a transient
  // content-carved-out state that must not be recorded or acted on
  if (S.drag || S.painting) return;
  const k = e.key.toLowerCase(), mod = e.ctrlKey || e.metaKey;
  if (mod) {
    if (k === "z") {
      e.preventDefault();
      if (e.shiftKey) redo();
      else undo();
      return;
    }
    if (k === "y") {
      e.preventDefault();
      redo();
      return;
    }
    if (S.editObject) { // voxel-selection clipboard (the "select" tool)
      if (k === "c") {
        copySelection3d();
        e.preventDefault();
      } else if (k === "x") {
        cutSelection3d();
        e.preventDefault();
      } else if (k === "v") {
        pasteInEditor();
        e.preventDefault();
      }
      return;
    }
    // clipboard / duplicate — scene-tree nodes
    const clip = {
      c: copySelection,
      x: cutSelection,
      v: pasteClipboard,
      d: duplicateSelection,
    }[k];
    if (clip) {
      clip();
      e.preventDefault();
    }
    return;
  }
  switch (k) {
    case "f":
      frameView();
      break;
    case "escape":
      escapeUp();
      break;
    case "n":
      if (!S.editObject) createObject();
      break;
    case "r":
      if (!S.editObject) rotateSelection();
      break;
    case "[":
      if (!S.editObject) nudgeY(-1);
      break;
    case "]":
      if (!S.editObject) nudgeY(+1);
      break;
    case "delete":
    case "backspace":
      e.preventDefault();
      if (S.editObject) deleteSelection3d();
      else deleteSelection();
      break;
  }
});

// Paste into the open object as a voxel selection. Copied scene nodes are
// flattened to voxels first, so an object/group from the tree pastes as voxels.
// Pasting switches to the select tool so the result can be moved straight away.
function pasteInEditor(): void {
  const boxes: Box3[] = [];
  if (clipKind() === "node") {
    for (const n of getNodeClip()) nodeBoxes(n, n.pos, n.rot, boxes);
  } else boxes.push(...getVoxClip());
  if (!boxes.length) return;
  S.tool = "select";
  pasteVox(boxes);
  updateChrome();
}
