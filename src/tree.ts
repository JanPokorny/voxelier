// The object/scene tree panel: cached isometric thumbnails, row build + clicks
// (select / enter / inline rename), the right-click context menu, and VSCode-
// style drag & drop reparenting. Attaches its panel listeners on import.
import { S } from "./state.ts";
import { el } from "./dom.ts";
import { growBounds } from "./boxes.ts";
import { fitNode } from "./camera.ts";
import { enterNode, selectNode } from "./navigation.ts";
import {
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
  cycleVis,
  deleteNode,
  deleteSelection,
  duplicateNode,
  duplicateSelection,
  groupSelection,
  pasteClipboard,
  reparentNode,
  ungroupNode,
  wrapInGroup,
  wrapNodeInGroup,
} from "./commands.ts";
import { rebuild, selectionRender } from "./render.ts";
import { save } from "./persistence.ts";
import { clipKind } from "./clipboard.ts";
import { updateChrome } from "./ui.ts";
import type { DropInfo, Node, Pending } from "./types.ts";

// Tree drag&drop, context-menu, and row-click transient state — all owned and
// used only here, so they live as module locals rather than in the shared S.
let dragId: string | null = null; // id of the row being dragged
let dropInfo: DropInfo | null = null; // resolved drop target while dragging
let dropRow: HTMLElement | null = null; // row element currently showing a drop cue
let ctxMenuEl: HTMLElement | null = null; // open context menu, or null
let pending: Pending | null = null; // scheduled single-vs-double row click

// tree visibility-toggle glyphs, by current vis state
const VIS_GLYPH: Record<string, string> = {
  visible: "◉",
  deemphasized: "◐",
  hidden: "⦰",
};

// ---- thumbnails ----
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

// ---- row clicks / selection ----
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
export function startRename(node: Node): void {
  closeItemMenu(); // when invoked from the context menu
  const r = document.querySelector<HTMLElement>(
    `#tree .trow[data-id="${node.id}"]`,
  );
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
export function buildTree(): void {
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
        title: "visible → deemphasized → hidden",
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
    add(
      "Delete objects",
      () => multi ? deleteSelection() : deleteNode(node),
      "danger",
    );
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
// Right-clicking empty side-panel space opens the same menu as the project
// root — New object / New group (and Paste) acting at the top level. Tree rows
// stop propagation and show their own menu, so this only fires off a row.
document.getElementById("side")!.addEventListener("contextmenu", (e) => {
  if ((e.target as HTMLElement).closest(".trow, button, input")) return;
  e.preventDefault();
  showItemMenu(S.root, e.clientX, e.clientY);
});
