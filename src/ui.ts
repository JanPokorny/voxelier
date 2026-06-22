// DOM chrome: the tool buttons + status hint, the colour palette/swatches, the
// object/scene tree (thumbnails, row clicks, context menu, drag & drop) and the
// global keyboard shortcuts. Attaches its window/tree listeners on import.
import { S } from "./state.ts";
import { addv, hex, keyToWorld, rotY } from "./math.ts";
import { hoverVox } from "./scene-env.ts";
import { clearMeasure, measureActive } from "./measure.ts";
import { fitNode, frameView } from "./camera.ts";
import { enterNode, escapeUp, isEntered, selectNode } from "./navigation.ts";
import { findById, isDescendant, parentOf } from "./model.ts";
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
  wrapNode,
} from "./commands.ts";
import { save } from "./persistence.ts";
import { redo, undo } from "./history.ts";
import { exportScene, importScene } from "./io.ts";
import type { Node, Rot, SceneNode, Tool, Vec } from "./types.ts";

const VOX_TOOLS: { id: Tool; ic: string; label: string }[] = [
  { id: "add", ic: "＋", label: "Add" },
  { id: "erase", ic: "－", label: "Erase" },
  { id: "paint", ic: "❖", label: "Paint" },
  { id: "measure", ic: "📏", label: "Measure" },
];

export function updateChrome(): void {
  const tw = document.getElementById("tools")!;
  tw.innerHTML = "";
  if (S.editObject) {
    for (const t of VOX_TOOLS) {
      const el = document.createElement("button");
      el.className = "tool" + (S.tool === t.id ? " active" : "");
      el.innerHTML = `<span class="ic">${t.ic}</span>${t.label}`;
      el.onclick = () => {
        S.tool = t.id;
        clearMeasure();
        hoverVox.visible = false;
        updateChrome();
      };
      tw.appendChild(el);
    }
  } else {
    // scene actions live in the tree's right-click menu; only Measure is a sidebar tool
    const mb = document.createElement("button");
    mb.className = "tool" + (S.measMode ? " active" : "");
    mb.innerHTML = '<span class="ic">📏</span>Measure';
    mb.onclick = () => {
      S.measMode = !S.measMode;
      if (!S.measMode) clearMeasure();
      updateChrome();
    };
    tw.appendChild(mb);
  }
  // import / export pinned to the bottom of the tool rail
  const spacer = document.createElement("div");
  spacer.style.flex = "1";
  tw.appendChild(spacer);
  for (
    const [ic, label, fn] of [["📂", "Import", importScene], [
      "💾",
      "Export",
      exportScene,
    ]] as [string, string, () => void][]
  ) {
    const el = document.createElement("button");
    el.className = "tool";
    el.innerHTML = `<span class="ic">${ic}</span>${label}`;
    el.onclick = fn;
    tw.appendChild(el);
  }
  buildTree();
  buildSwatches();
  document.getElementById("statHint")!.textContent = measureActive()
    ? "Measure — hover to read voxel/gap runs on all 3 axes · left-click freezes · right-click clears"
    : S.editObject
    ? (S.tool === "paint"
      ? "Paint — click/drag to recolour voxels · right-drag orbits · middle-drag pans · Esc to finish"
      : `${
        S.tool === "add" ? "Add" : "Erase"
      } — drag a box in the floor plane (Shift = height) · right-drag orbits · middle-drag pans · Esc to finish`)
    : (S.selection.size
      ? `${S.selection.size} selected — drag to move (Shift: up/down · Alt: allow overlap) · right-drag rotate · R rotate · Del`
      : "Tree: click a row to enter it · double-click to fit · right-click for actions · N new object");
}

// distinct colours used in the scene, most-used first. Cached by S.voxVer so it
// isn't recomputed over every voxel on each chrome refresh (e.g. after a box fill).
let _scCache: { ver: number; cols: number[] } = { ver: -1, cols: [] };
function sceneColors(): number[] {
  if (_scCache.ver === S.voxVer) return _scCache.cols;
  const m = new Map<number, number>();
  (function rec(n: Node) {
    if (n.type === "object") {
      for (const [, c] of n.voxels) m.set(c, (m.get(c) || 0) + 1);
    } else n.children.forEach(rec);
  })(S.root);
  _scCache = {
    ver: S.voxVer,
    cols: [...m.entries()].sort((a, b) => b[1] - a[1]).map((e) => e[0]),
  };
  return _scCache.cols;
}
export function buildSwatches(): void {
  const w = document.getElementById("swatches")!;
  w.innerHTML = "";
  const cols = sceneColors().slice(); // copy: we may unshift the selected colour
  if (!cols.includes(S.selColor)) cols.unshift(S.selColor); // selected colour is always shown, at #1 if unused
  const swatch = (c: number) => {
    const s = document.createElement("div");
    s.className = "sw" + (c === S.selColor ? " active" : "");
    s.style.background = hex(c);
    s.title = hex(c);
    s.onclick = () => {
      S.selColor = c;
      buildSwatches();
    };
    return s;
  };
  if (cols.length > 15) { // 14 colours + "…" all-colours menu
    for (let i = 0; i < 14; i++) w.appendChild(swatch(cols[i]));
    const more = document.createElement("div");
    more.className = "sw more";
    more.textContent = "…";
    more.title = "All used colours";
    more.onclick = openPalette;
    w.appendChild(more);
  } else { // up to 15 colours, padded with empties
    for (let i = 0; i < 15; i++) {
      if (i < cols.length) w.appendChild(swatch(cols[i]));
      else {
        const e = document.createElement("div");
        e.className = "sw empty";
        w.appendChild(e);
      }
    }
  }
  // position 16: always the colour picker
  const pick = document.createElement("div");
  pick.className = "sw more";
  pick.textContent = "🎨";
  pick.title = "Use colour picker";
  pick.onclick = openColorPicker;
  w.appendChild(pick);
}
// the colour picker: pick any RGB; the chosen colour becomes selected
function openColorPicker(): void {
  const inp = document.createElement("input");
  inp.type = "color";
  inp.value = hex(S.selColor);
  inp.style.cssText = "position:fixed;left:-9999px;top:0";
  const apply = () => {
    S.selColor = parseInt(inp.value.slice(1), 16);
    buildSwatches();
  };
  inp.addEventListener("input", apply);
  inp.addEventListener("change", () => {
    apply();
    inp.remove();
  });
  document.body.appendChild(inp);
  inp.click();
}
// the "…" menu: every colour currently used in the scene
function openPalette(): void {
  closePalette();
  const back = document.createElement("div");
  back.id = "palback";
  back.onclick = (e) => {
    if (e.target === back) closePalette();
  };
  const pop = document.createElement("div");
  pop.id = "palpop";
  const h = document.createElement("div");
  h.className = "pophead";
  h.textContent = "Used colours";
  pop.appendChild(h);
  const grid = document.createElement("div");
  grid.className = "popgrid";
  const cols = sceneColors();
  if (!cols.length) {
    const e = document.createElement("div");
    e.style.cssText = "color:var(--ink-dim);font-size:12px";
    e.textContent = "No colours yet.";
    grid.appendChild(e);
  }
  for (const c of cols) {
    const s = document.createElement("div");
    s.className = "sw" + (c === S.selColor ? " active" : "");
    s.style.background = hex(c);
    s.title = hex(c);
    s.onclick = () => {
      S.selColor = c;
      buildSwatches();
      closePalette();
    };
    grid.appendChild(s);
  }
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
// collect a node's own voxels in local space (for the thumbnail)
type ThumbVox = { x: number; y: number; z: number; c: number };
function localVoxels(
  node: Node,
  off: Vec,
  rot: Rot,
  out: ThumbVox[],
): ThumbVox[] {
  if (node.type === "object") {
    for (const [k, c] of node.voxels) {
      const w = keyToWorld(k, rot, off);
      out.push({ x: w.x, y: w.y, z: w.z, c });
    }
  } else {for (const ch of node.children) {
      localVoxels(ch, addv(off, rotY(ch.pos, rot)), (rot + ch.rot) & 3, out);
    }}
  return out;
}
const thumbCache = new Map<string, { sig: string; cv: HTMLCanvasElement }>();
function thumbSig(node: Node): string {
  return node.type === "object"
    ? "o" + node.voxels.size
    : "s" + node.children.map((c) => c.id + thumbSig(c)).join();
}
function thumbFor(node: Node): HTMLCanvasElement {
  const hit = thumbCache.get(node.id);
  if (node === S.editObject && hit) return hit.cv; // don't re-rasterise the object being actively edited
  const sig = thumbSig(node);
  if (hit && hit.sig === sig) return hit.cv;
  const cv = document.createElement("canvas");
  cv.width = cv.height = 52;
  cv.style.width = cv.style.height = "26px";
  const g = cv.getContext("2d")!;
  g.fillStyle = "#0f1115";
  g.fillRect(0, 0, 52, 52);
  let vox = localVoxels(node, { x: 0, y: 0, z: 0 }, 0, []);
  if (vox.length) {
    let mnx = 1e9, mny = 1e9, mnz = 1e9, mxx = -1e9, mxy = -1e9, mxz = -1e9;
    for (const v of vox) {
      mnx = Math.min(mnx, v.x);
      mny = Math.min(mny, v.y);
      mnz = Math.min(mnz, v.z);
      mxx = Math.max(mxx, v.x);
      mxy = Math.max(mxy, v.y);
      mxz = Math.max(mxz, v.z);
    }
    const span = Math.max(mxx - mnx, mxy - mny, mxz - mnz, 1) + 1,
      s = Math.min(7, 44 / span);
    const stride = Math.ceil(vox.length / 1400);
    if (stride > 1) vox = vox.filter((_, i) => i % stride === 0);
    vox.sort((a, b) => (a.x + a.z - a.y) - (b.x + b.z - b.y));
    const cxp = 26 - ((mnx + mxx) / 2 - (mnz + mxz) / 2) * s * 0.5,
      cyp = 30 + ((mny + mxy) / 2) * s * 0.6 -
        ((mnx + mxx) / 2 + (mnz + mxz) / 2) * s * 0.28;
    for (const v of vox) {
      const px = cxp + (v.x - v.z) * s * 0.5,
        py = cyp - v.y * s * 0.6 + (v.x + v.z) * s * 0.28;
      g.fillStyle = hex(v.c);
      g.fillRect(px - s * 0.5, py - s * 0.5, s + 0.5, s + 0.5);
    }
  }
  thumbCache.set(node.id, { sig, cv });
  return cv;
}
// tree-row clicks: first click enters; a quick second click on the same row fits
// it; clicking a row that's already entered renames it after the dbl-click window.
function rowClick(node: Node): void {
  if (S.pending && S.pending.node === node) { // quick second click on the same row -> zoom to fit
    clearTimeout(S.pending.timer);
    S.pending = null;
    fitNode(node);
    return;
  }
  if (S.pending) clearTimeout(S.pending.timer);
  const arm = (after?: () => void) => {
    S.pending = {
      node,
      timer: setTimeout(() => {
        S.pending = null;
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
    const r = document.createElement("div");
    const isSel = !isRoot && S.context.children.includes(node) &&
      S.selection.has(node.id);
    const v = node.vis || "visible";
    r.className = "trow" + (isRoot ? " root" : "") + (isSel ? " sel" : "") +
      (node === S.context && !S.editObject ? " ctx" : "") +
      (node === S.editObject ? " edit" : "") +
      (!isRoot && v !== "visible" ? " dim" : "");
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
    const nm = document.createElement("span");
    nm.className = "nm";
    if (isRoot) nm.textContent = node.name || "Project";
    else if (node.name) nm.textContent = node.name;
    else {nm.innerHTML = '<span class="ph">' +
        (node.type === "scene" ? "group" : "object") + "</span>";}
    r.append(th, nm);
    if (!isRoot) {
      const VI: Record<string, string> = {
        visible: "◉",
        transparent: "◐",
        invisible: "⦰",
      };
      const vb = document.createElement("button");
      vb.className = "tb" + (v === "visible" ? " on" : "");
      vb.textContent = VI[v];
      vb.title = "visible → transparent → invisible";
      vb.onclick = (e) => {
        e.stopPropagation();
        cycleVis(node);
      };
      r.append(vb);
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
        S.dragId = node.id;
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
}

// ---- tree right-click context menu ----
function closeItemMenu(): void {
  if (S.ctxMenuEl) {
    S.ctxMenuEl.remove();
    S.ctxMenuEl = null;
    window.removeEventListener("pointerdown", ctxMenuOutside, true);
  }
}
function ctxMenuOutside(e: PointerEvent): void {
  if (
    S.ctxMenuEl && !S.ctxMenuEl.contains(e.target as globalThis.Node | null)
  ) {
    closeItemMenu();
  }
}
function showItemMenu(node: Node, x: number, y: number): void {
  closeItemMenu();
  const m = document.createElement("div");
  m.className = "ctxmenu";
  const add = (label: string, fn: () => void, cls?: string) => {
    const it = document.createElement("div");
    it.className = "ctxitem" + (cls ? " " + cls : "");
    it.textContent = label;
    it.onclick = () => {
      closeItemMenu();
      fn();
    };
    m.appendChild(it);
  };
  const div = () => {
    const d = document.createElement("div");
    d.className = "ctxdiv";
    m.appendChild(d);
  };
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
  } else {add("New group", () => {
      const g = wrapNode(node);
      if (g) {
        S.collapsed.delete(g.id);
        selectNode(g);
        save();
      }
    });}
  document.body.appendChild(m);
  S.ctxMenuEl = m;
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
  if (S.dropRow) {
    S.dropRow.classList.remove("drop-into", "drop-before", "drop-after");
  }
  S.dropRow = null;
  S.dropInfo = null;
}
function dropOver(ev: DragEvent, node: Node, row: HTMLElement): void {
  const dn = S.dragId && findById(S.dragId);
  if (!dn || dn === node || isDescendant(dn, node)) {
    clearDropInd();
    return;
  }
  clearDropInd();
  S.dropRow = row;
  if (node === S.root) {
    S.dropInfo = { parent: S.root, index: S.root.children.length };
    row.classList.add("drop-into");
    return;
  } // drop onto project root
  const rect = row.getBoundingClientRect(),
    y = ev.clientY - rect.top,
    h = rect.height;
  const par = parentOf(node) as SceneNode | null,
    idx = par ? par.children.indexOf(node) : 0;
  if (y > h * 0.28 && y < h * 0.72) {
    if (node.type === "scene") {
      S.dropInfo = { parent: node, index: node.children.length }; // nest inside the group
    } else S.dropInfo = { wrap: node }; // object onto object -> new group
    row.classList.add("drop-into");
  } else if (y < h * 0.5) {
    S.dropInfo = { parent: par, index: idx };
    row.classList.add("drop-before");
  } else {
    S.dropInfo = { parent: par, index: idx + 1 };
    row.classList.add("drop-after");
  }
}
function doDrop(): void {
  const dn = S.dragId && findById(S.dragId);
  if (dn && S.dropInfo) {
    if (S.dropInfo.wrap) wrapInGroup(S.dropInfo.wrap, dn);
    else if (
      S.dropInfo.parent &&
      reparentNode(dn, S.dropInfo.parent, S.dropInfo.index!)
    ) {
      S.collapsed.delete(S.dropInfo.parent.id); // reveal the target
      selectNode(dn);
      save();
    }
  }
  clearDropInd();
  S.dragId = null;
}

{
  const treeEl = document.getElementById("tree")!; // drop on empty area -> move to scene root
  treeEl.addEventListener("dragover", (ev) => {
    if (ev.target === treeEl && S.dragId) {
      ev.preventDefault();
      clearDropInd();
      S.dropInfo = { parent: S.root, index: S.root.children.length };
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
    if (k === "c") {
      if (!S.editObject) {
        copySelection();
        e.preventDefault();
      }
      return;
    }
    if (k === "x") {
      if (!S.editObject) {
        cutSelection();
        e.preventDefault();
      }
      return;
    }
    if (k === "v") {
      if (!S.editObject) {
        pasteClipboard();
        e.preventDefault();
      }
      return;
    }
    if (k === "d") {
      if (!S.editObject) {
        duplicateSelection();
        e.preventDefault();
      }
      return;
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
