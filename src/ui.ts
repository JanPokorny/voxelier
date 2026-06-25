// DOM chrome: the tool buttons + draw-colour control (recent colours + picker),
// the object/scene tree (thumbnails, row clicks, context menu, drag & drop) and
// the global keyboard shortcuts. Attaches its window/tree listeners on import.
import { S } from "./state.ts";
import { addv, hex, rotY } from "./math.ts";
import { colorCounts, growBounds, worldBox } from "./boxes.ts";
import { hoverVox } from "./scene-env.ts";
import { clearMeasure } from "./measure.ts";
import { fitNode, frameView } from "./camera.ts";
import { enterNode, escapeUp, selectNode } from "./navigation.ts";
import {
  DEFAULT_COLORS,
  emptyBox,
  findById,
  isDescendant,
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
  nudgeY,
  pasteClipboard,
  renameNode,
  reparentNode,
  rotateSelection,
  ungroupNode,
  wrapInGroup,
  wrapNodeInGroup,
} from "./commands.ts";
import { save } from "./persistence.ts";
import { redo, undo } from "./history.ts";
import { exportScene, importScene } from "./io.ts";
import type {
  Box3,
  DropInfo,
  Node,
  Pending,
  Rot,
  Tool,
  Vec,
} from "./types.ts";

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

const VOX_TOOLS: { id: Tool; ic: string; label: string }[] = [
  { id: "add", ic: "＋", label: "Add" },
  { id: "erase", ic: "－", label: "Erase" },
  { id: "paint", ic: "🪣", label: "Fill" },
  { id: "eyedropper", ic: "💧", label: "Pick" },
  { id: "measure", ic: "📏", label: "Measure" },
];
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

export function updateChrome(): void {
  const tw = document.getElementById("tools")!;
  tw.innerHTML = "";
  // top group: the voxel tools while editing an object, else just Measure
  // (scene actions live in the tree's right-click menu)
  const top = el("div", { className: "toolgroup" });
  if (S.editObject) {
    for (const t of VOX_TOOLS) {
      top.appendChild(toolButton(t.ic, t.label, S.tool === t.id, () => {
        S.tool = t.id;
        clearMeasure();
        hoverVox.visible = false;
        updateChrome();
      }));
    }
    top.appendChild(colorControl()); // draw-colour picker (only meaningful while editing)
  } else {
    top.appendChild(toolButton("📏", "Measure", S.measMode, () => {
      S.measMode = !S.measMode;
      if (!S.measMode) clearMeasure();
      updateChrome();
    }));
  }
  // bottom group: import / export
  const bottom = el("div", { className: "toolgroup" });
  bottom.appendChild(toolButton("📂", "Import", false, importScene));
  bottom.appendChild(toolButton("💾", "Export", false, exportScene));
  tw.append(top, bottom);
  buildTree();
}

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
// recently-picked draw colours, most-recent first (capped at 4). Drives the
// color flyout; padded from scene/default colours when fewer than 4 picks exist.
let recentColors: number[] = [];
export function selectColor(c: number): void {
  S.selColor = c;
  recentColors = [c, ...recentColors.filter((x) => x !== c)].slice(0, 4);
  updateChrome();
}
// the 4 colours shown in the flyout: recent picks first, then padded with the
// scene's used colours and the default palette (deduped)
function recentFour(): number[] {
  const out: number[] = [];
  for (const c of [...recentColors, ...sceneColors(), ...DEFAULT_COLORS]) {
    if (!out.includes(c)) out.push(c);
    if (out.length >= 4) break;
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
// toolbar draw-colour control: an icon showing the active colour; hovering it
// reveals a horizontal flyout of the 4 recent colours plus the full picker
function colorControl(): HTMLElement {
  const ctl = el("div", { className: "colorctl" });
  const icon = el("div", {
    className: "colorbtn",
    title: "Draw colour — hover for recent colours / picker",
  });
  icon.style.background = hex(S.selColor);
  const fly = el("div", { className: "colorflyout" });
  for (const c of recentFour()) fly.appendChild(colorSwatch(c));
  fly.appendChild(el("div", {
    className: "sw more",
    textContent: "🎨",
    title: "Colour picker",
    onclick: openColorPicker,
  }));
  ctl.append(icon, fly);
  return ctl;
}
// the colour picker: pick any RGB; the chosen colour becomes the draw colour
function openColorPicker(): void {
  const inp = el("input", { type: "color", value: hex(S.selColor) });
  inp.style.cssText = "position:fixed;left:-9999px;top:0";
  const apply = () => selectColor(parseInt(inp.value.slice(1), 16));
  // change fires when the dialog commits; a cancel fires no change but returns
  // focus to the page, so remove the hidden input on that too (else it leaks)
  const close = () => inp.remove();
  inp.addEventListener("input", apply);
  inp.addEventListener("change", () => {
    apply();
    close();
  });
  window.addEventListener("focus", close, { once: true });
  document.body.appendChild(inp);
  inp.click();
}

// ---- object/scene tree ----
// flatten a subtree's boxes under an accumulated transform; callers pass
// identity off/rot so the result is in the node's own frame (for the thumbnail)
function localBoxes(node: Node, off: Vec, rot: Rot, out: Box3[]): Box3[] {
  if (node.type === "object") {
    for (const b of node.boxes) out.push(worldBox(b, rot, off));
  } else {
    for (const ch of node.children) {
      localBoxes(ch, addv(off, rotY(ch.pos, rot)), (rot + ch.rot) & 3, out);
    }
  }
  return out;
}
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
  const boxes = localBoxes(node, { x: 0, y: 0, z: 0 }, 0, []);
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
function rowClick(node: Node): void {
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
  pending = { node, timer: setTimeout(() => (pending = null), 300) };
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
    const th = rowThumb(node);
    const nm = el("span", { className: "nm" });
    if (isRoot) nm.textContent = node.name || "Project";
    else if (node.name) nm.textContent = node.name;
    else {
      nm.innerHTML = '<span class="ph">' +
        (node.type === "scene" ? "group" : "object") + "</span>";
    }
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
    r.onclick = () => rowClick(node);
    r.oncontextmenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isRoot) selectNode(node);
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
  add("Rename", () => renameNode(node));
  add("Locate", () => fitNode(node));
  div();
  if (node !== S.root) {
    add("Duplicate", () => duplicateNode(node));
    add("Delete objects", () => deleteNode(node), "danger");
    div();
  }
  if (node.type === "scene") {
    if (node !== S.root) add("Ungroup", () => ungroupNode(node));
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
function dropOver(ev: DragEvent, node: Node, row: HTMLElement): void {
  const dn = dragId && findById(dragId);
  if (!dn || dn === node || isDescendant(dn, node)) {
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
  if (y > h * 0.28 && y < h * 0.72) {
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
    if (dropInfo.wrap) wrapInGroup(dropInfo.wrap, dn);
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
    }
  });
  treeEl.addEventListener("drop", (ev) => {
    if (ev.target === treeEl) {
      ev.preventDefault();
      doDrop();
    }
  });
}

window.addEventListener("keydown", (e) => {
  if ((e.target as HTMLElement).tagName === "INPUT") return;
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
    // clipboard / duplicate — only outside voxel-edit mode
    const clip = {
      c: copySelection,
      x: cutSelection,
      v: pasteClipboard,
      d: duplicateSelection,
    }[k];
    if (clip && !S.editObject) {
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
      if (!S.editObject) {
        e.preventDefault();
        deleteSelection();
      }
      break;
  }
});
