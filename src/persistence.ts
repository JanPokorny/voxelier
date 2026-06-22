// localStorage persistence. ser/de are pure (de)serialisers for a node tree;
// save is debounced; load restores the root and the id counter.
import { S } from "./state.ts";
import { peekUid, seedUid } from "./math.ts";
import { record } from "./history.ts";
import type { Node, ObjectNode, SceneNode, Vis } from "./types.ts";

const LS = "voxelier-v8"; // voxels now serialise as packed-int keys

// The on-disk / localStorage shape (compact field names), distinct from `Node`.
type SerBase = {
  id: string;
  nm: string;
  p: Node["pos"];
  r: Node["rot"];
  vs: Vis;
};
type SerObject = SerBase & { t: "o"; v: [number, number][] };
type SerScene = SerBase & { t: "s"; c: SerNode[] };
export type SerNode = SerObject | SerScene;

export function ser(n: Node): SerNode {
  const b = {
    id: n.id,
    nm: n.name || "",
    p: n.pos,
    r: n.rot,
    vs: n.vis || "visible",
  };
  return n.type === "object"
    ? { t: "o", ...b, v: [...n.voxels] }
    : { t: "s", ...b, c: n.children.map(ser) };
}
export function de(d: SerNode): Node {
  const b = {
    id: d.id,
    name: d.nm || "",
    pos: d.p,
    rot: d.r,
    vis: d.vs || "visible",
  };
  return d.t === "o"
    ? { type: "object", ...b, voxels: new Map(d.v) } as ObjectNode
    : { type: "scene", ...b, children: d.c.map(de) } as SceneNode;
}
// Snapshotting (whole-document JSON for undo) and persistence both serialise the
// model, so they're debounced together: a burst of edits collapses into a single
// serialisation 250ms after the last change, keeping it off the interaction path.
export function flush(): void {
  clearTimeout(S.saveT ?? undefined);
  S.saveT = null;
  const rootJSON = JSON.stringify(ser(S.root)); // serialise once, share with record()
  record(rootJSON); // undo snapshot (no-op during restore)
  try {
    localStorage.setItem(LS, `{"uid":${peekUid()},"root":${rootJSON}}`);
  } catch (_) { /* quota / private mode */ }
}
export function save(): void {
  clearTimeout(S.saveT ?? undefined);
  S.saveT = setTimeout(flush, 250);
}
export function load(): boolean {
  try {
    const d = JSON.parse(localStorage.getItem(LS) as string) as {
      uid?: number;
      root?: SerNode;
    };
    if (!d || !d.root) return false;
    seedUid(d.uid || 1);
    S.root = de(d.root) as SceneNode;
    return true;
  } catch (_) {
    return false;
  }
}
