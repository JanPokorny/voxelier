// Persistence. ser/de stay the pure (de)serialisers for a node tree — they're the
// .voxelier.json format (io.ts), the undo snapshot form (history.ts) and the v11
// migration path — but the persisted document itself now lives in the Loro store
// (crdt/store.ts), which also mirrors it to other tabs. save is debounced; load
// restores the document, falling back to migrating a v11 JSON blob.
import { S } from "./state.ts";
import { seedUid } from "./math.ts";
import { amend, record } from "./history.ts";
import { commitLocal, installTree, loadDocument } from "./crdt/store.ts";
import type { Node, ObjectNode, SceneNode, Vis } from "./types.ts";

const LS_V11 = "voxelier-v11"; // pre-CRDT document: the whole tree as one JSON blob
const LS_UI = "voxelier-ui-v1"; // tree fold state — per-tab view state, not document

// The on-disk / localStorage shape (compact field names), distinct from `Node`.
// A box serialises as the 7-tuple [x0,y0,z0,x1,y1,z1,colour].
type SerBox = [number, number, number, number, number, number, number];
type SerBase = {
  id: string;
  nm: string;
  p: Node["pos"];
  r: Node["rot"];
  vs: Vis;
};
type SerObject = SerBase & { t: "o"; b: SerBox[] };
type SerScene = SerBase & { t: "s"; c: SerNode[] };
export type SerNode = SerObject | SerScene;

export function ser(n: Node): SerNode {
  const b = {
    id: n.id,
    nm: n.name,
    p: n.pos,
    r: n.rot,
    vs: n.vis,
  };
  return n.type === "object"
    ? {
      t: "o",
      ...b,
      b: n.boxes.map((x): SerBox => [x.x0, x.y0, x.z0, x.x1, x.y1, x.z1, x.c]),
    }
    : { t: "s", ...b, c: n.children.map(ser) };
}
// older saves stored the pre-rename visibility names
const VIS_MIGRATE: Record<string, Vis> = {
  transparent: "deemphasized",
  invisible: "hidden",
};
export function de(d: SerNode): Node {
  const b = {
    id: d.id,
    name: d.nm || "",
    pos: d.p,
    rot: d.r,
    vis: VIS_MIGRATE[d.vs] || d.vs || "visible",
  };
  return d.t === "o"
    ? {
      type: "object",
      ...b,
      boxes: d.b.map((a) => ({
        x0: a[0],
        y0: a[1],
        z0: a[2],
        x1: a[3],
        y1: a[4],
        z1: a[5],
        c: a[6],
      })),
    } as ObjectNode
    : { type: "scene", ...b, children: d.c.map(de) } as SceneNode;
}
// Snapshotting (whole-document JSON for undo) and persistence both serialise the
// model, so they're debounced together: a burst of edits collapses into a single
// serialisation 250ms after the last change, keeping it off the interaction path.
let saveT: number | undefined; // pending debounce timer (save -> flush)
function persistUI(): void {
  try {
    localStorage.setItem(LS_UI, JSON.stringify([...S.collapsed]));
  } catch (_) { /* quota / private mode */ }
}
export function flush(): void {
  clearTimeout(saveT);
  saveT = undefined;
  // The undo stack still holds whole-document JSON snapshots — independent of the
  // CRDT, and cheap to keep as-is. commitLocal reconciles the same tree into the
  // Loro document, which persists it and broadcasts the ops to other tabs.
  record(JSON.stringify(ser(S.root))); // undo snapshot (no-op during restore)
  commitLocal(S.root);
  persistUI();
}
// Persist a document whose GEOMETRY is unchanged — only the box decomposition
// differs (the background repack). Folds into the CURRENT top undo snapshot
// instead of recording a new step, so undo never needs an extra press to cross
// an invisible representation change. With a real save pending, do nothing:
// that flush will serialise (and record) this state along with the edit.
export function flushAmend(): void {
  if (saveT !== undefined) return;
  amend(JSON.stringify(ser(S.root)));
  commitLocal(S.root);
}
export function save(): void {
  clearTimeout(saveT);
  saveT = setTimeout(flush, 250);
}
// Install a parsed { uid, root } envelope as the live document: seed the id
// counter and deserialise the root. Returns false (and installs nothing) when the
// envelope has no root, so callers can branch on a malformed file/blob.
export function installScene(
  d: { uid?: number; root?: SerNode; collapsed?: string[] } | null,
): boolean {
  if (!d || !d.root) return false;
  seedUid(d.uid || 1);
  S.root = de(d.root) as SceneNode;
  S.collapsed = new Set(d.collapsed ?? []); // restore (or reset) the tree fold state
  installTree(S.root); // this tree becomes the live document, replacing any peer's
  return true;
}
// Adopt a tree that arrived from another tab. The document is already up to date
// (the store merged the peer's ops into it), so this only moves the editor's view
// onto the merged result — deliberately leaving `collapsed` alone, since which
// groups you have folded is your view of the scene, not part of it.
export function adoptRemote(root: SceneNode): void {
  S.root = root;
}
const loadUI = (): string[] => {
  try {
    const v = JSON.parse(localStorage.getItem(LS_UI) as string);
    return Array.isArray(v) ? v : [];
  } catch (_) {
    return [];
  }
};
export function load(): boolean {
  const root = loadDocument();
  if (root) {
    S.root = root;
    S.collapsed = new Set(loadUI());
    return true;
  }
  return migrateV11();
}
// One-way migration of a pre-CRDT save. The v11 blob is left in place on purpose:
// an older build of the app still finds its own document, and re-migrating on a
// later run is harmless because the v12 document wins from here on.
function migrateV11(): boolean {
  try {
    return installScene(JSON.parse(localStorage.getItem(LS_V11) as string));
  } catch (_) {
    return false;
  }
}
