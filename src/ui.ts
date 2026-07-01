// DOM chrome: the tool buttons + draw-colour control (recent colours + picker),
// the sidebar toggle and the global keyboard shortcuts. The scene tree lives in
// tree.ts. Attaches its window listeners on import.
import { S } from "./state.ts";
import { hex } from "./math.ts";
import { el } from "./dom.ts";
import { colorCounts } from "./boxes.ts";
import { hoverVox } from "./scene-env.ts";
import { clearMeasure } from "./measure.ts";
import { frameView } from "./camera.ts";
import { escapeUp } from "./navigation.ts";
import { DEFAULT_COLORS, nodeBoxes } from "./model.ts";
import {
  copySelection,
  createObject,
  cutSelection,
  deleteSelection,
  duplicateSelection,
  nudgeY,
  pasteClipboard,
  rotateSelection,
} from "./commands.ts";
import { buildTree } from "./tree.ts";
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
import type { Box3, Node, Tool } from "./types.ts";

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
  // outside edit mode the only tools are View and Measure; keep one always
  // selected by normalising a leftover voxel tool back to View
  if (!S.editObject && S.tool !== "measure") S.tool = "view";
  // single top-left tool rail. While editing an object it holds the voxel tools
  // (scene actions live in the tree's right-click menu); in scene mode just View.
  // Measure sits alongside them as a tool of its own (reachable in either mode),
  // and the colour picker trails the row when editing.
  const top = el("div", { className: "toolgroup" });
  const tools: { id: Tool; label: string }[] = S.editObject
    ? VOX_TOOLS
    : [{ id: "view", label: "View" }];
  for (const t of tools) {
    top.appendChild(
      toolButton(
        TOOL_ICON[t.id],
        t.label,
        S.tool === t.id,
        () => setTool(t.id),
      ),
    );
  }
  top.appendChild(
    toolButton(
      TOOL_ICON.measure,
      "Measure",
      S.tool === "measure",
      () => setTool("measure"),
    ),
  );
  if (S.editObject) top.appendChild(colorControl()); // draw-colour picker (edit mode only)
  tw.append(top);
  // the View tool shows no trailing glyph; hide it the moment View is selected
  // (a pointer move may not follow, e.g. switching tool via the keyboard)
  if (S.tool === "view") {
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
  const r = ((c >> 16) & 255) / 255,
    g = ((c >> 8) & 255) / 255,
    b = (c & 255) / 255;
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  let h = 0;
  if (d) {
    if (mx === r) h = ((g - b) / d) % 6;
    else if (mx === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h = (h * 60 + 360) % 360;
  }
  return [
    Math.round(h),
    Math.round((mx ? d / mx : 0) * 100),
    Math.round(mx * 100),
  ];
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
const SLIDERS: {
  key: "h" | "s" | "v";
  max: number;
  label: string;
  title: string;
}[] = [
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
    inp.s.style.background = `linear-gradient(to right,${
      hex(hsvToRgb(val.h, 0, val.v))
    },${hex(hsvToRgb(val.h, 100, val.v))})`;
    inp.v.style.background = `linear-gradient(to right,${
      hex(hsvToRgb(val.h, val.s, 0))
    },${hex(hsvToRgb(val.h, val.s, 100))})`;
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
    const r = el("input", {
      type: "range",
      className: "csl",
      title: def.title,
    });
    r.min = "0";
    r.max = String(def.max);
    r.value = String(val[def.key]);
    inp[def.key] = r;
    r.addEventListener("input", onSlide);
    line.append(
      el("span", {
        className: "lbl",
        textContent: def.label,
        title: def.title,
      }),
      r,
    );
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
