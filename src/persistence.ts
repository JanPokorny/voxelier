// localStorage persistence. ser/de are pure (de)serialisers for a node tree;
// save is debounced; load restores the root and the id counter.
import { S } from "./state.ts";
import { peekUid, seedUid } from "./math.ts";
import { record } from "./history.ts";
import type { Node, ObjectNode, SceneNode, Vis } from "./types.ts";

const LS = "voxelier-v11"; // v11: box model — objects serialise as colour boxes

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
export function flush(): void {
  clearTimeout(saveT);
  saveT = undefined;
  const rootJSON = JSON.stringify(ser(S.root)); // serialise once, share with record()
  record(rootJSON); // undo snapshot (no-op during restore)
  try {
    localStorage.setItem(LS, `{"uid":${peekUid()},"root":${rootJSON}}`);
  } catch (_) { /* quota / private mode */ }
}
export function save(): void {
  clearTimeout(saveT);
  saveT = setTimeout(flush, 250);
}
// Install a parsed { uid, root } envelope as the live document: seed the id
// counter and deserialise the root. Returns false (and installs nothing) when the
// envelope has no root, so callers can branch on a malformed file/blob.
export function installScene(
  d: { uid?: number; root?: SerNode } | null,
): boolean {
  if (!d || !d.root) return false;
  seedUid(d.uid || 1);
  S.root = de(d.root) as SceneNode;
  return true;
}
export function load(): boolean {
  try {
    return installScene(JSON.parse(localStorage.getItem(LS) as string));
  } catch (_) {
    return false;
  }
}
