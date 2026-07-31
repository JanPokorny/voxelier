// The Loro mirror of the document model.
//
// The editor keeps its plain in-memory `Node` tree as the live model (state.ts
// `S.root`): render, interaction and the scene tree all read that, unchanged.
// This module is the store underneath it — a LoroTree that local edits are
// reconciled INTO and that remote edits are read back OUT of, so two peers (a
// second tab, or an agent driving the JS API) converge per node instead of
// clobbering each other's whole document.
//
// The scene graph is a genuine fit for a movable-tree CRDT: reparentNode,
// wrapNode, ungroupNode and groupSelection are all tree moves, and LoroTree
// resolves concurrent moves without cycles.
//
// Why the GEOMETRY is deliberately not a CRDT: an object's `boxes` is a
// *decomposition* of a voxel field, not a semantic set. addBox() is
// read-modify-write over the whole list (eraseBox, then absorb), and
// repackBoxes() re-derives a different — but equally valid — decomposition of
// identical geometry. Merging two box arrays element-wise would yield
// overlapping boxes and break the disjointness invariant that meshing, picking
// and selfcheck's materialize() all depend on. So `boxes` is stored as ONE
// opaque last-writer-wins value per object: concurrent edits to DIFFERENT
// objects merge cleanly (the common case — an agent builds a bookshelf while you
// move a plant), while concurrent edits to the SAME object's geometry resolve to
// one side rather than to garbage.
import { LoroDoc } from "loro-crdt";
import type { LoroTree, LoroTreeNode } from "loro-crdt";
import type { Box3, Node, ObjectNode, Rot, SceneNode, Vis } from "../types.ts";

// The single LoroTree container holding the scene graph.
const TREE = "scene";

// A box serialises into the map as the same 7-tuple the JSON format uses, so the
// two representations stay readable against each other.
type SerBox = [number, number, number, number, number, number, number];

// Per-node metadata, one LoroMap per tree node. Field names are kept short for
// the same reason persistence.ts's SerNode does it — this shape is on the wire.
// `pos` is split into three scalar fields rather than one object value so a peer
// nudging Y merges with a peer sliding X instead of the whole vector racing.
// The metadata keys, as a closed union. Loro's own generic isn't used: every
// read has to cope with a key that a merge left absent anyway (see toNode), so
// the coercion below is the real type boundary and a generic would only add
// friction at the raw-wasm calls that return ungenericized nodes.
//   t   "o" | "s"   object | scene
//   aid string      app-level Node.id, the identity the editor's state holds
//   nm  string      name
//   px/py/pz number position, split into scalars so concurrent nudges on
//                   different axes merge instead of racing the whole vector
//   r   number      rot, 0..3
//   vs  Vis         visibility
//   b   SerBox[]    boxes (objects only) — one opaque LWW value, see header
type MetaKey = "t" | "aid" | "nm" | "px" | "py" | "pz" | "r" | "vs" | "b";

type TreeNode = LoroTreeNode;
type Tree = LoroTree;

export const sceneTree = (doc: LoroDoc): Tree => doc.getTree(TREE);

const serBoxes = (boxes: Box3[]): SerBox[] =>
  boxes.map((b): SerBox => [b.x0, b.y0, b.z0, b.x1, b.y1, b.z1, b.c]);
const deBoxes = (b: SerBox[]): Box3[] =>
  b.map((a) => ({
    x0: a[0],
    y0: a[1],
    z0: a[2],
    x1: a[3],
    y1: a[4],
    z1: a[5],
    c: a[6],
  }));

// ---- writing: in-memory Node tree -> LoroTree ----

// Set only on a real change. Loro records an op per set(), so writing every
// field of every node on every commit would bloat history and — worse — make a
// no-op save look like an edit to every other peer.
const setIf = (n: TreeNode, k: MetaKey, v: unknown): boolean => {
  if (n.data.get(k) === v) return false;
  // deno-lint-ignore no-explicit-any
  n.data.set(k, v as any);
  return true;
};
// `boxes` is compared by its serialised form: the array identity changes on
// every box edit, and a deep compare is what tells a real geometry change from a
// re-save. persistence.ts already stringifies the whole document per commit, so
// this is no worse than the cost the editor already pays.
const setBoxesIf = (n: TreeNode, boxes: Box3[]): boolean => {
  const next = serBoxes(boxes);
  const cur = n.data.get("b") as SerBox[] | undefined;
  if (cur && JSON.stringify(cur) === JSON.stringify(next)) return false;
  // deno-lint-ignore no-explicit-any
  n.data.set("b", next as any);
  return true;
};

const writeMeta = (tn: TreeNode, node: Node): boolean => {
  let dirty = false;
  dirty = setIf(tn, "t", node.type === "object" ? "o" : "s") || dirty;
  dirty = setIf(tn, "aid", node.id) || dirty;
  dirty = setIf(tn, "nm", node.name) || dirty;
  dirty = setIf(tn, "px", node.pos.x) || dirty;
  dirty = setIf(tn, "py", node.pos.y) || dirty;
  dirty = setIf(tn, "pz", node.pos.z) || dirty;
  dirty = setIf(tn, "r", node.rot) || dirty;
  dirty = setIf(tn, "vs", node.vis) || dirty;
  if (node.type === "object") dirty = setBoxesIf(tn, node.boxes) || dirty;
  return dirty;
};

// Flatten the desired tree, parents before children, so a child's parent always
// exists in the index by the time we place the child.
type Want = { node: Node; parent: string | null; index: number };
function flatten(root: SceneNode): Want[] {
  const out: Want[] = [];
  const walk = (n: Node, parent: string | null, index: number): void => {
    out.push({ node: n, parent, index });
    if (n.type === "scene") {
      n.children.forEach((c, i) => walk(c, n.id, i));
    }
  };
  walk(root, null, 0);
  return out;
}

// Index live tree nodes by their app id. Deleted nodes are excluded so a stale
// handle never gets reused.
function indexByAid(tree: Tree): Map<string, TreeNode> {
  const m = new Map<string, TreeNode>();
  for (const n of tree.getNodes()) {
    if (n.isDeleted()) continue;
    const aid = n.data.get("aid");
    if (typeof aid === "string") m.set(aid, n);
  }
  return m;
}

// Write `root` into the doc's tree, touching only what differs. Returns true if
// anything changed, so callers can skip a pointless commit/broadcast.
export function reconcile(doc: LoroDoc, root: SceneNode): boolean {
  const tree = sceneTree(doc);
  const byAid = indexByAid(tree);
  const want = flatten(root);
  const wanted = new Set(want.map((w) => w.node.id));
  let dirty = false;

  // Remove nodes the editor dropped. Deleting a parent takes its subtree with
  // it, so re-check has() before each delete.
  for (const [aid, tn] of byAid) {
    if (!wanted.has(aid) && tree.has(tn.id)) {
      tree.delete(tn.id);
      byAid.delete(aid);
      dirty = true;
    }
  }

  for (const w of want) {
    const parent = w.parent === null ? undefined : byAid.get(w.parent);
    let tn = byAid.get(w.node.id);
    if (!tn || tn.isDeleted()) {
      tn = tree.createNode(parent?.id, w.index);
      byAid.set(w.node.id, tn);
      dirty = true;
    } else if (
      tn.parent()?.id !== parent?.id || tn.index() !== w.index
    ) {
      // a reparent or a reorder — the move the tree CRDT exists to resolve
      tree.move(tn.id, parent?.id, w.index);
      dirty = true;
    }
    dirty = writeMeta(tn, w.node) || dirty;
  }

  if (dirty) doc.commit();
  return dirty;
}

// ---- reading: LoroTree -> in-memory Node tree ----

const asRot = (v: unknown): Rot => {
  const n = typeof v === "number" && Number.isFinite(v) ? Math.trunc(v) : 0;
  return ((n % 4) + 4) % 4 as Rot;
};
const asCoord = (v: unknown): number =>
  typeof v === "number" && Number.isFinite(v) ? Math.round(v) : 0;
const VIS: Vis[] = ["visible", "deemphasized", "hidden"];
const asVis = (v: unknown): Vis =>
  VIS.includes(v as Vis) ? v as Vis : "visible";

// Remote metadata is only as well-formed as the peer that wrote it, and a merge
// can leave a node whose type field never arrived. Coerce rather than throw:
// losing one malformed node beats failing to open the document.
function toNode(tn: TreeNode): Node | null {
  const d = tn.data;
  const aid = d.get("aid");
  if (typeof aid !== "string") return null;
  const base = {
    id: aid,
    name: typeof d.get("nm") === "string" ? d.get("nm") as string : "",
    pos: {
      x: asCoord(d.get("px")),
      y: asCoord(d.get("py")),
      z: asCoord(d.get("pz")),
    },
    rot: asRot(d.get("r")),
    vis: asVis(d.get("vs")),
  };
  if (d.get("t") === "o") {
    const b = d.get("b");
    return {
      type: "object",
      ...base,
      boxes: Array.isArray(b) ? deBoxes(b as SerBox[]) : [],
    } as ObjectNode;
  }
  const kids = tn.children() ?? [];
  return {
    type: "scene",
    ...base,
    children: kids.map(toNode).filter((n): n is Node => n !== null),
  } as SceneNode;
}

// Build the editor's tree from the doc, or null when the doc holds no scene yet
// (a fresh document, or one that never received a snapshot).
export function build(doc: LoroDoc): SceneNode | null {
  const roots = sceneTree(doc).roots();
  if (!roots.length) return null;
  const n = toNode(roots[0]);
  // the document root is always a scene; an object at the root means a corrupt
  // or foreign document, which the caller should treat as "nothing to load"
  return n && n.type === "scene" ? n : null;
}

// ---- document lifecycle ----

export function newDoc(): LoroDoc {
  return new LoroDoc();
}
// Seed a doc from an in-memory tree. Used for the v11 JSON migration and for
// .voxelier.json import, both of which arrive as a plain Node tree.
export function docFromTree(root: SceneNode): LoroDoc {
  const doc = newDoc();
  reconcile(doc, root);
  return doc;
}
export const snapshot = (doc: LoroDoc): Uint8Array =>
  doc.export({ mode: "snapshot" });
