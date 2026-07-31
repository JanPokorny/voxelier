// Persistence. ser/de stay the pure (de)serialisers for a node tree — they are the
// .voxelier.json format (io.ts), the undo snapshot form (history.ts) and the legacy
// migration path — but the persisted document itself lives in the CRDT store
// (crdt/store.ts), which scopes it per document and mirrors it to other tabs.
// Choosing WHICH document to open belongs to crdt/docs.ts; this module only writes
// whatever is currently open. save is debounced.
import { S } from "./state.ts";
import { seedUid } from "./math.ts";
import { amend, record } from "./history.ts";
import { commitLocal } from "./crdt/store.ts";
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
  // Yjs document, which persists it and broadcasts the update to other tabs.
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
// Deserialise a { uid, root } envelope into a tree: a .voxelier.json file, or a
// legacy save. Returns null for anything without a root, so callers can branch on
// a malformed file. This no longer installs anything — under the document library
// an imported file becomes a NEW document (see crdt/docs.ts), not an overwrite of
// whatever happens to be open.
export function sceneFromEnvelope(
  d: { uid?: number; root?: SerNode; collapsed?: string[] } | null,
): SceneNode | null {
  if (!d || !d.root) return null;
  seedUid(d.uid || 1);
  return de(d.root) as SceneNode;
}
// Adopt a tree that arrived from another tab. The document is already up to date
// (the store merged the peer's ops into it), so this only moves the editor's view
// onto the merged result — deliberately leaving `collapsed` alone, since which
// groups you have folded is your view of the scene, not part of it.
export function adoptRemote(root: SceneNode): void {
  S.root = root;
}
export const loadUI = (): string[] => {
  try {
    const v = JSON.parse(localStorage.getItem(LS_UI) as string);
    return Array.isArray(v) ? v : [];
  } catch (_) {
    return [];
  }
};
// A save from before documents had identity, if one is still there. Read once at
// boot to seed the library; the blob is left in place rather than deleted, so an
// older build of the app still finds its own document.
export function readLegacy(): SceneNode | null {
  try {
    return sceneFromEnvelope(
      JSON.parse(localStorage.getItem(LS_V11) as string),
    );
  } catch (_) {
    return null;
  }
}
