// A thin API for agents driving the page through a browser tool's evaluate().
// Every mutation goes through edit(fn) — the same rebuild/chrome/flush path every
// editor command uses, so each call is one undo step and persists.
import { S } from "./state.ts";
import { de, flush, ser } from "./persistence.ts";
import { findById, newObject, newScene } from "./model.ts";
import { uid } from "./math.ts";
import { boxesOverlap, clipBoxes } from "./boxes.ts";
import { rebuild } from "./render.ts";
import { updateChrome } from "./ui.ts";
import { redo, undo } from "./history.ts";
import { fitNode, frameBox, frameView } from "./camera.ts";
import { cam, goal, wake } from "./scene-env.ts";
import { openScene, sceneEnvelope } from "./io.ts";
import {
  diff,
  outline,
  relations,
  renderView,
  worldBounds,
} from "./agent-views.ts";
import { clearMeasure } from "./measure.ts";
import type { Node, SceneNode } from "./types.ts";

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
  api:
    "S, ser(node), de(serNode), findById(id), worldBounds(id?) -> Box|null in world cells (id omitted = root), load(json) -> Promise, exportJSON(), edit(fn) -> compact diff, undo(), redo(), frameView(), fitNode(node), frameBox(box), view('iso'|'top'|'front'|'side'), outline(id?, {depth=2, hidden=false}), relations(ids?, {within=60}), render('top'|'front'|'side'|'iso', {focus, isolate, labels, grid, size=900, cutY}) -> Promise<PNG dataURL>, diff(before), uid(), newObject(), newScene(name?), help.",
  edit:
    "edit(root => { ... }) mutates the live tree. It flushes any pending UI save, snapshots the document, runs fn with S.root, then validates. On success it rebuilds, records one undo step, persists, and returns a compact diff of added/removed/moved/resized/rotated/visibility changes; on an invalid result (missing or duplicate node ids, non-integer positions, empty/inverted or non-integer or overlapping boxes) or a thrown error it restores the snapshot and rethrows. Node references go stale after undo, load or a rejected edit — look them up again inside fn.",
  example:
    "await voxelier.load(json); voxelier.edit(() => { const o = voxelier.findById('n56'); o.boxes.push({x0:0,y0:0,z0:0,x1:2,y1:2,z1:2,c:0xff0000}); }); voxelier.worldBounds('n56');",
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
  load: openScene,
  exportJSON: sceneEnvelope,
  edit,
  diff,
  outline,
  relations,
  render: renderView,
  undo,
  redo,
  frameView,
  fitNode,
  frameBox,
  view,
  help,
};

export function installAgentApi(): void {
  Object.assign(window, { voxelier: api });
}
