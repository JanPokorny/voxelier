// A thin API for agents driving the page through a browser tool's evaluate().
// Mutate the live tree, then commit() — the same rebuild/chrome/flush path every
// editor command uses, so each call is one undo step and reaches other tabs.
import { S } from "./state.ts";
import { de, flush, ser } from "./persistence.ts";
import { boxEmpty, emptyBox, findById, nodeBox, worldXform } from "./model.ts";
import { boxesOverlap } from "./boxes.ts";
import { rebuild } from "./render.ts";
import { updateChrome } from "./ui.ts";
import { redo, undo } from "./history.ts";
import { fitNode, frameBox, frameView } from "./camera.ts";
import { cam, goal, wake } from "./scene-env.ts";
import { openScene, sceneEnvelope } from "./io.ts";
import type { Node, SceneNode } from "./types.ts";

let committed = "";

function worldBounds(id?: string) {
  const node = id ? findById(id) : S.root;
  if (!node) throw new Error(`unknown node id: ${id}`);
  const w = worldXform(node);
  const b = nodeBox(node, w.off, w.rot, emptyBox());
  return boxEmpty(b) ? null : b;
}

function overlap(n: Node): string | null {
  if (n.type === "object") {
    for (let i = 0; i < n.boxes.length; i++) {
      for (let j = i + 1; j < n.boxes.length; j++) {
        if (boxesOverlap([n.boxes[i]], [n.boxes[j]], 0, 0, 0)) {
          return `boxes ${i} and ${j} of object ${n.id}${
            n.name ? ` "${n.name}"` : ""
          } overlap`;
        }
      }
    }
  } else {
    for (const c of n.children) {
      const e = overlap(c);
      if (e) return e;
    }
  }
  return null;
}

function restore(json: string): void {
  S.root = de(JSON.parse(json)) as SceneNode;
  S.path = [S.root];
  S.editObject = null;
  S.sel3d = null;
  S.selection.clear();
  rebuild();
  updateChrome();
}

function commit(): void {
  const bad = overlap(S.root);
  if (bad) {
    restore(committed);
    throw new Error(
      `commit rejected: ${bad}; restored the last committed state`,
    );
  }
  rebuild();
  updateChrome();
  flush();
  committed = JSON.stringify(ser(S.root));
}

const VIEWS: Record<string, [number, number]> = {
  iso: [Math.PI / 4, Math.atan(1 / Math.SQRT2)],
  top: [Math.PI / 4, Math.PI / 2],
  front: [0, 0],
  side: [Math.PI / 2, 0],
};
function view(name: string): void {
  const v = VIEWS[name];
  if (!v) {
    throw new Error(`unknown view "${name}": use iso, top, front or side`);
  }
  goal.azim = cam.azim = v[0];
  goal.elev = cam.elev = v[1];
  wake();
}

const help = {
  coordinates:
    "Integer cells, 1 cell = 10 mm (1 cm), Y up. Box3 is half-open: [x0,x1) x [y0,y1) x [z0,z1), max exclusive. Box uses the same convention: {min:{x,y,z}, max:{x,y,z}}.",
  nodes:
    "S.root is a scene: {type:'scene', id, name, pos, rot, vis, children}. Objects add boxes: Box3[] = {x0,y0,z0,x1,y1,z1,c}, c is 0xRRGGBB. pos is an integer cell offset in the parent frame; rot is 90-degree Y turns 0..3; vis is 'visible'|'deemphasized'|'hidden'. Boxes inside one object must be disjoint.",
  api:
    "S, ser(node), de(serNode), findById(id), worldBounds(id?) -> Box|null in world cells (id omitted = root), load(json) -> Promise, exportJSON(), commit(), undo(), redo(), frameView(), fitNode(node), frameBox(box), view('iso'|'top'|'front'|'side'), help.",
  commit:
    "Mutate S.root or a node from findById in place, then call commit(). Nothing is saved before that. commit() validates box disjointness, rebuilds, records one undo step, persists and syncs to other tabs; on overlapping boxes it throws and restores the last committed state.",
  example:
    "await voxelier.load(json); const o = voxelier.findById('n56'); o.boxes.push({x0:0,y0:0,z0:0,x1:2,y1:2,z1:2,c:0xff0000}); voxelier.commit(); voxelier.worldBounds('n56');",
};

const api = {
  S,
  ser,
  de,
  findById,
  worldBounds,
  load: async (json: string): Promise<void> => {
    await openScene(json);
    committed = JSON.stringify(ser(S.root));
  },
  exportJSON: (): string => sceneEnvelope(),
  commit,
  undo: (): void => {
    undo();
    committed = JSON.stringify(ser(S.root));
  },
  redo: (): void => {
    redo();
    committed = JSON.stringify(ser(S.root));
  },
  frameView,
  fitNode,
  frameBox,
  view,
  help,
};

export function installAgentApi(): void {
  committed = JSON.stringify(ser(S.root));
  Object.assign(window, { voxelier: api });
}
