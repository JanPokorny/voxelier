// A thin API for agents driving the page through a browser tool's evaluate().
// Every mutation goes through edit(fn) — the same rebuild/chrome/flush path every
// editor command uses, so each call is one undo step and persists.
import { S } from "./state.ts";
import { de, flush, ser } from "./persistence.ts";
import {
  clone as copyNode,
  findById,
  newObject,
  newScene,
  parentOf,
} from "./model.ts";
import { NORTHS } from "./types.ts";
import { carve, voxelize } from "./rebox.ts";
import { uid } from "./math.ts";
import { boxesOverlap, clipBoxes } from "./boxes.ts";
import { rebuild } from "./render.ts";
import { updateChrome } from "./ui.ts";
import { redo, undo } from "./history.ts";
import { fitNode, frameBox, frameView } from "./camera.ts";
import { cam, goal, wake } from "./scene-env.ts";
import { openScene, download, sceneEnvelope } from "./io.ts";
import { isReady } from "./lock.ts";
import {
  clearance,
  diff,
  distance,
  outline,
  relations,
  renderView,
  worldBounds,
} from "./agent-views.ts";
import { clearMeasure } from "./measure.ts";
import type { Node, SceneNode } from "./types.ts";

// Mutations are refused while another tab owns the document (or this tab is
// still loading it). Read-only helpers (outline, relations, render) stay usable.
const editable = (): void => {
  if (!isReady()) {
    throw new Error("document is open for editing in another tab");
  }
};

// One walk: node identity and transform, box validity, and the per-object
// disjointness check. The overlap scan is O(n²) per object — fine for
// hand-built objects, but a sweep or an index if agents ever build thousands of
// boxes in one object.
function validate(root: SceneNode): string | null {
  const ids = new Set<string>();
  const walk = (n: Node): string | null => {
    if (!n.id) return "node without an id";
    if (ids.has(n.id)) return `duplicate node id ${n.id}`;
    ids.add(n.id);
    if (
      !n.pos ||
      ![n.pos.x, n.pos.y, n.pos.z].every(Number.isInteger)
    ) {
      return `node ${n.id} has a non-integer or non-finite position`;
    }
    if (n.type === "scene") {
      if (n.north !== undefined && !NORTHS.includes(n.north)) {
        return `scene ${n.id} has an invalid north "${n.north}"`;
      }
      for (const c of n.children) {
        const e = walk(c);
        if (e) return e;
      }
      return null;
    }
    const label = `object ${n.id}${n.name ? ` "${n.name}"` : ""}`;
    for (let i = 0; i < n.boxes.length; i++) {
      const b = n.boxes[i];
      if (![b.x0, b.y0, b.z0, b.x1, b.y1, b.z1].every(Number.isInteger)) {
        return `box ${i} of ${label} has a non-integer or non-finite coordinate`;
      }
      if (b.x1 <= b.x0 || b.y1 <= b.y0 || b.z1 <= b.z0) {
        return `box ${i} of ${label} is empty or inverted`;
      }
      for (let j = i + 1; j < n.boxes.length; j++) {
        if (boxesOverlap([b], [n.boxes[j]], 0, 0, 0)) {
          return `boxes ${i} and ${j} of ${label} overlap`;
        }
      }
    }
    return null;
  };
  return walk(root);
}

function restore(json: string): void {
  S.root = de(JSON.parse(json)) as SceneNode;
  S.path = [S.root];
  S.editObject = null;
  S.sel3d = null;
  S.selection.clear();
  S.drag = null;
  S.painting = false;
  S.lastVox = null;
  clearMeasure();
  rebuild();
  updateChrome();
}

// Re-point the editor at the edited tree: a group the edit removed (or moved out
// of the entered chain) drops the path back, a deleted or reparented edit target
// closes the object editor, and selection keeps only ids still in the context.
function resync(): void {
  const ids = S.path.map((n) => n.id);
  S.path = [S.root];
  for (const id of ids.slice(1)) {
    const next = S.context.children.find((c) => c.id === id);
    if (!next || next.type !== "scene") break;
    S.path.push(next);
  }
  const edit = S.editObject &&
    S.context.children.find((c) => c.id === S.editObject!.id);
  S.editObject = edit && edit.type === "object" ? edit : null;
  if (S.sel3d) {
    if (S.editObject) {
      S.sel3d.boxes = clipBoxes(S.editObject.boxes, S.sel3d.region);
    } else S.sel3d = null;
  }
  S.selection = new Set(
    [...S.selection].filter((id) =>
      S.context.children.some((c) => c.id === id)
    ),
  );
}

let editing = false;
function edit(fn: (root: SceneNode) => void): string {
  editable();
  // a gesture owns transient state (a lifted selection is carved out of the
  // object) that must not be snapshotted; a nested edit would too
  if (editing || S.drag || S.painting) {
    throw new Error("edit is unavailable mid-gesture or inside another edit");
  }
  flush(); // settle any pending UI save so the snapshot is the real baseline
  const base = JSON.stringify(ser(S.root));
  editing = true;
  try {
    fn(S.root);
    const bad = validate(S.root);
    if (bad) throw new Error(`edit rejected: ${bad}; restored the document`);
    resync();
    rebuild();
    updateChrome();
    flush();
  } catch (e) {
    restore(base);
    throw e;
  } finally {
    editing = false;
  }
  return diff(base);
}

// Deep-copy a subtree as its next sibling, with fresh ids throughout (model's
// clone). Each of these runs its own edit step — one undo unit — so call them
// outside edit(fn); a nested edit is refused by edit().
function clone(id: string): string {
  const n = findById(id);
  if (!n) throw new Error(`unknown node id: ${id}`);
  const parent = parentOf(n);
  if (!parent) throw new Error("the root has no siblings to be cloned into");
  const copy = copyNode(n);
  edit(() => {
    parent.children.splice(parent.children.indexOf(n) + 1, 0, copy);
  });
  return copy.id;
}

// Make one node visible and hide its siblings: the whole of a variant switch
// (variants are sibling scenes or sibling objects) as a single undo step. The
// "Immutable" group is the room shell and always stays, like in relations().
function show(id: string): string {
  const n = findById(id);
  if (!n) throw new Error(`unknown node id: ${id}`);
  const parent = parentOf(n);
  if (!parent) throw new Error("the root has no siblings to hide");
  return edit(() => {
    for (const c of parent.children) {
      if (c.name !== "Immutable") c.vis = c.id === id ? "visible" : "hidden";
    }
  });
}

const step = (f: () => void): string => {
  editable();
  const base = JSON.stringify(ser(S.root));
  f();
  return diff(base);
};

const VIEWS: Record<string, [number, number]> = {
  iso: [Math.PI / 4, Math.atan(1 / Math.SQRT2)],
  top: [Math.PI / 4, Math.PI / 2],
  front: [0, 0],
  side: [Math.PI / 2, 0],
};
function view(name: string): void {
  if (!Object.hasOwn(VIEWS, name)) {
    throw new Error(`unknown view "${name}": use iso, top, front or side`);
  }
  const v = VIEWS[name];
  goal.azim = cam.azim = v[0];
  goal.elev = cam.elev = v[1];
  wake();
}

const help = {
  coordinates:
    "Integer cells, 1 cell = 10 mm (1 cm), Y up. Box3 is half-open: [x0,x1) x [y0,y1) x [z0,z1), max exclusive. Box uses the same convention: {min:{x,y,z}, max:{x,y,z}}.",
  nodes:
    "S.root is a scene: {type:'scene', id, name, pos, rot, vis, children}. Objects add boxes: Box3[] = {x0,y0,z0,x1,y1,z1,c}, c is 0xRRGGBB. pos is an integer cell offset in the parent frame; rot is 90-degree Y turns 0..3; vis is 'visible'|'deemphasized'|'hidden'. Boxes need no ids; nodes do, and ids must be unique — mint them with uid(), or create nodes with newObject()/newScene(name). Boxes inside one object must be disjoint.",
  compass:
    "The document's north is S.root.north, one of '+x','-x','+z','-z'; absent means '-z'. Set it in an edit: edit(r => r.north = '+x'). Compass names n/e/s/w rotate with it (at the default north = -z, east = +x; +x north makes east +z), and up/down are world +y/-y. Every direction argument (clearance, render's from) accepts these alongside '+x','-x','+y','-y','+z','-z'. outline() starts with the current mapping, the viewport compass shows it, and renders draw an N arrow.",
  shape:
    "voxelize(fn, bounds) -> disjoint Box3[], fn(x,y,z) -> colour or null over the half-open safe-integer cells of {x0,y0,z0,x1,y1,z1}; colours are merged greedily along x, z then y. carve(boxes, fn) removes every cell where fn is true and repacks the result. Round pot: voxelize((x,y,z) => (x-8)**2 + (z-8)**2 <= 25 && y < 10 ? 0xcb997e : null, {x0:0,y0:0,z0:0,x1:17,y1:10,z1:17}). For an arbitrary shape, test the cell in the object's own frame.",
  distance:
    "distance(a, b, {y:[min,max]}) -> {distance, x, y, z}: true minimum box-to-box gap in world cm between two nodes (or arrays of ids), with the per-axis gaps of the closest pair. y clips both sides to a height band, so the minimum can only grow. relations(ids?, {within=60, only:'overlap'|'touch'|'gap'}) filters pairs by kind.",
  relations:
    "relations(ids?, {within=60, only}) -> one line per pair within 60 cm: 'a | b: z gap 4' for a gap or touch, 'a ~ b: overlap 2x3x1' for an overlap. ids given: each listed object (even a hidden one) against every visible object, never against its own container. only filters overlap, touch or gap.",
  outline:
    "outline(id?, {depth=2, hidden=false}) -> indented node lines with world bounds and size. The first line is the compass mapping ('north = -z, east = +x'); expanded lines append non-zero pos and rot, e.g. 'pos z=-1 rot90'. Collapsed hidden groups show their offsets and child count.",
  api:
    "S, ser(node), de(serNode), findById(id), worldBounds(id?) -> Box|null in world cells (id omitted = root), load(json) -> Promise, exportJSON({save}) -> envelope JSON string, edit(fn) -> compact diff, undo(), redo() -> compact diff (may be empty), frameView(), fitNode(node), frameBox(box), view('iso'|'top'|'front'|'side'), outline(id?, {depth=2, hidden=false}) (own entry), render(view, opts) (own entry), relations(ids?, {within=60, only}) (own entry), clearance(id, dir) (own entry), distance(a, b, {y}) (own entry), voxelize(fn, bounds) and carve(boxes, fn) (own entry), clone(id) -> new id, show(id) -> diff, diff(before), uid(), newObject(), newScene(name?), help.",
  variants:
    "There is no variant node type: a variant is one sibling subtree per alternative (a scene, or a plain object). Put them under one parent scene whose children are exactly the alternatives, keep one visible and the rest hidden, and switch with show(id) — that node visible, its siblings hidden (an 'Immutable' group stays), one undo step. clone(id) deep-copies a subtree (fresh ids, same pos) as the next sibling, so a new alternative is clone + move + tweak. Both run their own edit step: call them outside edit(fn). relations()/clearance()/renders ignore hidden alternatives, so they follow whichever is shown.",
  files:
    "render(view, {save:'plan.webp'}) and exportJSON({save:'plan.voxelier.json'}) hand the file to the browser as a download and return a one-line confirmation instead of the payload. Where it lands is the browser's download directory (a desk browser: ~/Downloads; a Playwright-driven browser: its downloads path). An embedded/automation webview may never write the file to disk — check before relying on it, and otherwise use the returned dataURL.",
  clearance:
    "clearance(id, dir) -> {id, name, distance} | null: free cm from the object's exposed contour to the nearest visible object ahead, or null if nothing is there. dir accepts compass names (n/e/s/w/up/down) and world axes ('+x','-x','+y','-y','+z','-z'). The other box is cut into transverse regions at the object's own box boundaries; each region uses the furthest contour face under it. That keeps a stepped or rotated object's short walkways, judges a wide obstacle region by region, and stops repacking the same geometry from growing phantom faces. Horizontally the corridor ignores height — the chair-to-mattress walkway is a real answer even when nothing shares a height band — while slabs below or above the object over its real footprint are skipped; ±y uses that footprint. distance 0 means a box crosses the face. Never returns the object itself or a scene that contains it.",
  render:
    "render(view, {from, azim, elev, focus, isolate, hide, cutaway, labels, grid, size=900, cutY, save, format='webp'}) -> Promise<dataURL or 'saved …'>. top: orthographic from +y looking down, +x right, +z down. front: orthographic from +z looking toward -z, +y up. side: orthographic from +x looking toward -x, +y up. iso: perspective overview. elevation: orthographic camera outside the side given by from:'n'|'e'|'s'|'w'|'up'|'down' (or an axis), looking in. azim/elev (radians; azimuth from +z toward +x, elevation above the XZ plane) replace the named view with a perspective camera and do not inherit the top cutY. focus takes an id or array; isolate: true restricts the render to focus. hide takes ids (whole subtrees). cutaway on an elevation drops objects wholly on the camera side of the frame centre, revealing the interior. Labels are drawn only for objects with visible pixels, at those pixels' centroid, so occluded objects stop producing a wall of text; a compass N arrow is drawn in the corner. cutY defaults to 150 for the orthographic top view. Default webp is ~5x smaller than png. Structural shells — a footprint covering a quarter of the scene — stay unlabelled. Grid pitch 50 cm, the bar is 1 m.",
  edit:
    "edit(root => { ... }) mutates the live tree. It flushes any pending UI save, snapshots the document, runs fn with S.root, then validates. On success it rebuilds, records one undo step, persists, and returns a compact diff of added/removed/moved/resized/rotated/visibility changes; on an invalid result (missing or duplicate node ids, non-integer positions, empty/inverted or non-integer or overlapping boxes) or a thrown error it restores the snapshot and rethrows. Node references go stale after undo, load or a rejected edit — look them up again inside fn.",
  example:
    "await voxelier.load(json); voxelier.edit(() => { const o = voxelier.findById('n56'); o.boxes.push({x0:0,y0:0,z0:0,x1:2,y1:2,z1:2,c:0xff0000}); }); voxelier.worldBounds('n56'); const alt = voxelier.clone('n44'); voxelier.show(alt); voxelier.clearance(alt, '+z'); await voxelier.render('top', {save:'plan.webp'});",
};

const api = {
  S,
  ser,
  de,
  uid,
  newObject,
  newScene,
  findById,
  worldBounds,
  load: async (json: string): Promise<void> => {
    editable();
    await openScene(json);
  },
  exportJSON: (opts?: { save?: string }): string => {
    const data = sceneEnvelope();
    if (!opts?.save) return data;
    download(new Blob([data], { type: "application/json" }), opts.save);
    return `saved ${Math.round(data.length / 1024)} kB of scene JSON to "${
      opts.save
    }"`;
  },
  edit,
  diff,
  outline,
  relations,
  clearance,
  distance,
  voxelize,
  carve,
  render: renderView,
  clone,
  show,
  undo: (): string => step(undo),
  redo: (): string => step(redo),
  frameView,
  fitNode,
  frameBox,
  view,
  help,
};

export function installAgentApi(): void {
  Object.assign(window, { voxelier: api });
}
