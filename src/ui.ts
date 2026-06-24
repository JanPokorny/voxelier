// DOM chrome: the tool buttons + status hint, the colour palette/swatches, the
// object/scene tree (thumbnails, row clicks, context menu, drag & drop) and the
// global keyboard shortcuts. Attaches its window/tree listeners on import.
import { S } from "./state.ts";
import { addv, hex, rotY } from "./math.ts";
import { colorCounts, growBounds, worldBox } from "./boxes.ts";
import { hoverVox } from "./scene-env.ts";
import { clearMeasure } from "./measure.ts";
import { fitNode, frameView } from "./camera.ts";
import { enterNode, escapeUp, isEntered, selectNode } from "./navigation.ts";
import { emptyBox, findById, isDescendant, parentOf } from "./model.ts";
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
  { id: "measure", ic: "📏", label: "Measure" },
];
// tree visibility-toggle glyphs, by current vis state
const VIS_GLYPH: Record<string, string> = {
  visible: "◉",
  transparent: "◐",
  invisible: "⦰",
};

export function updateChrome(): void {
  const tw = document.getElementById("tools")!;
  tw.innerHTML = "";
  if (S.editObject) {
    for (const t of VOX_TOOLS) {
      tw.appendChild(el("button", {
        className: "tool" + (S.tool === t.id ? " active" : ""),
        innerHTML: `<span class="ic">${t.ic}</span>${t.label}`,
        onclick: () => {
          S.tool = t.id;
          clearMeasure();
          hoverVox.visible = false;
          updateChrome();
        },
      }));
    }
  } else {
    // scene actions live in the tree's right-click menu; only Measure is a sidebar tool
    tw.appendChild(el("button", {
      className: "tool" + (S.measMode ? " active" : ""),
      innerHTML: '<span class="ic">📏</span>Measure',
      onclick: () => {
        S.measMode = !S.measMode;
        if (!S.measMode) clearMeasure();
        updateChrome();
      },
    }));
  }
  // import / export pinned to the bottom of the tool rail
  const spacer = el("div");
  spacer.style.flex = "1";
  tw.appendChild(spacer);
  for (
    const [ic, label, fn] of [["📂", "Import", importScene], [
      "💾",
      "Export",
      exportScene,
    ]] as [string, string, () => void][]
  ) {
    tw.appendChild(el("button", {
      className: "tool",
      innerHTML: `<span class="ic">${ic}</span>${label}`,
      onclick: fn,
    }));
  }
  buildTree();
  buildSwatches();
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
// a .sw colour swatch: clicking selects the colour and rebuilds the rail, then
// runs `after` (e.g. close the palette popup)
const colorSwatch = (c: number, after?: () => void): HTMLElement => {
  const s = el("div", {
    className: "sw" + (c === S.selColor ? " active" : ""),
    title: hex(c),
    onclick: () => {
      S.selColor = c;
      buildSwatches();
      after?.();
    },
  });
  s.style.background = hex(c);
  return s;
};
function buildSwatches(): void {
  const w = document.getElementById("swatches")!;
  w.innerHTML = "";
  const cols = sceneColors().slice(); // copy: we may unshift the selected colour
  if (!cols.includes(S.selColor)) cols.unshift(S.selColor); // selected colour is always shown, at #1 if unused
  if (cols.length > 15) { // 14 colours + "…" all-colours menu
    for (let i = 0; i < 14; i++) w.appendChild(colorSwatch(cols[i]));
    w.appendChild(el("div", {
      className: "sw more",
      textContent: "…",
      title: "All used colours",
      onclick: openPalette,
    }));
  } else { // up to 15 colours, padded with empties
    for (let i = 0; i < 15; i++) {
      w.appendChild(
        i < cols.length
          ? colorSwatch(cols[i])
          : el("div", { className: "sw empty" }),
      );
    }
  }
  // position 16: always the colour picker
  w.appendChild(el("div", {
    className: "sw more",
    textContent: "🎨",
    title: "Use colour picker",
    onclick: openColorPicker,
  }));
}
// the colour picker: pick any RGB; the chosen colour becomes selected
function openColorPicker(): void {
  const inp = el("input", { type: "color", value: hex(S.selColor) });
  inp.style.cssText = "position:fixed;left:-9999px;top:0";
  const apply = () => {
    S.selColor = parseInt(inp.value.slice(1), 16);
    buildSwatches();
  };
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
// the "…" menu: every colour currently used in the scene
function openPalette(): void {
  closePalette();
  const back = el("div", { id: "palback" });
  back.onclick = (e) => {
    if (e.target === back) closePalette();
  };
  const pop = el("div", { id: "palpop" });
  pop.appendChild(
    el("div", { className: "pophead", textContent: "Used colours" }),
  );
  const grid = el("div", { className: "popgrid" });
  const cols = sceneColors();
  if (!cols.length) {
    const e = el("div", { textContent: "No colours yet." });
    e.style.cssText = "color:var(--ink-dim);font-size:12px";
    grid.appendChild(e);
  }
  for (const c of cols) grid.appendChild(colorSwatch(c, closePalette));
  pop.appendChild(grid);
  back.appendChild(pop);
  document.body.appendChild(back);
}
function closePalette(): boolean {
  const b = document.getElementById("palback");
  if (b) {
    b.remove();
    return true;
  }
  return false;
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
// tree-row clicks: first click enters; a quick second click on the same row fits
// it; clicking a row that's already entered renames it after the dbl-click window.
function rowClick(node: Node): void {
  if (pending && pending.node === node) { // quick second click on the same row -> zoom to fit
    clearTimeout(pending.timer);
    pending = null;
    fitNode(node);
    return;
  }
  if (pending) clearTimeout(pending.timer);
  const arm = (after?: () => void) => {
    pending = {
      node,
      timer: setTimeout(() => {
        pending = null;
        after && after();
      }, 300),
    };
  };
  if (isEntered(node)) arm(() => renameNode(node)); // already entered: lone click renames after the window
  else {
    enterNode(node);
    arm();
  } // not entered: enter now; a quick second click still fits
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
    const th = thumbFor(node);
    th.className = "thumb";
    th.onclick = null;
    th.title = ""; // (canvas is cached/reused)
    // a non-root group's icon doubles as its collapse toggle (stacked look = collapsed)
    if (!isRoot && node.type === "scene" && node.children.length) {
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
    // drag & drop reparenting (VSCode-style); the root can't be dragged but accepts drops
    r.draggable = !isRoot;
    if (!isRoot) {
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
  add("Fit", () => fitNode(node));
  div();
  if (node !== S.root) {
    add("Duplicate", () => duplicateNode(node));
    add("Delete", () => deleteNode(node), "danger");
    div();
  }
  if (node.type === "scene") {
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
  if (k === "escape" && closePalette()) return;
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
