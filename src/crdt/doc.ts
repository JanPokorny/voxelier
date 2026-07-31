// The CRDT mirror of the document model.
//
// The editor keeps its plain in-memory `Node` tree as the live model (state.ts
// `S.root`): render, interaction and the scene tree all read that, unchanged.
// This module is the store underneath it — a Yjs document that local edits are
// reconciled INTO and that remote edits are read back OUT of, so two writers (a
// second tab, an agent, or a share peer) converge per node instead of clobbering
// each other's whole document.
//
// Yjs has no tree CRDT, so the scene graph is modelled flat: one Y.Map of node
// records keyed by node id, each holding a PARENT POINTER plus a sibling order.
// That makes a reparent a single last-writer-wins register write, which is what
// `reparentNode`, `wrapNode`, `ungroupNode` and `groupSelection` all reduce to.
// The price is that concurrent moves can produce a cycle (A under B while B under
// A), which a real movable-tree CRDT resolves for you; `build` breaks cycles
// deterministically instead — see resolveParents.
//
// Why the GEOMETRY is deliberately not merged element-wise: an object's `boxes` is
// a *decomposition* of a voxel field, not a semantic set. addBox() is
// read-modify-write over the whole list (eraseBox, then absorb), and
// repackBoxes() re-derives a different — but equally valid — decomposition of
// identical geometry. Merging two box lists element-wise would yield overlapping
// boxes and break the disjointness invariant that meshing, picking and selfcheck's
// materialize() all depend on. So `boxes` is stored as ONE opaque last-writer-wins
// value per object: concurrent edits to DIFFERENT objects merge cleanly (the
// common case — an agent builds a bookshelf while you move a plant), while
// concurrent edits to the SAME object's geometry resolve to one side rather than
// to garbage.
import * as Y from "yjs";
import type { Box3, Node, ObjectNode, Rot, SceneNode, Vis } from "../types.ts";

const NODES = "nodes"; // Y.Map<nodeId, Y.Map<field, value>>
const META = "doc"; // Y.Map holding "root" -> the root node's id
const ROOT = ""; // parent id of the document root

// The root node's id is recorded explicitly rather than inferred from "whichever
// node has no parent". Cycle repair works by reparenting a node out of the ring,
// and if that target were the no-parent sentinel the repaired node would become a
// SECOND parentless node — leaving build() to guess which of the two is the
// document root. Naming the root removes the ambiguity.

// A box serialises as the same 7-tuple the JSON format uses, so the two
// representations stay readable against each other.
type SerBox = [number, number, number, number, number, number, number];

// Per-node fields. Short names because this shape is on the wire, matching
// persistence.ts's SerNode. `pos` is split into three scalars rather than one
// object value so a peer nudging Y merges with a peer sliding X instead of the
// whole vector racing.
//   t  "o" | "s"   object | scene
//   p  string      parent node id ("" for the document root)
//   o  number      sibling order (see sortKids for how ties resolve)
//   nm string      name
//   px/py/pz number
//   r  number      rot, 0..3
//   vs Vis
//   b  SerBox[]    boxes, objects only — one opaque LWW value, see header
type Field = "t" | "p" | "o" | "nm" | "px" | "py" | "pz" | "r" | "vs" | "b";
type Rec = Y.Map<unknown>;

export const nodesMap = (doc: Y.Doc): Y.Map<Rec> => doc.getMap<Rec>(NODES);
const metaMap = (doc: Y.Doc): Y.Map<string> => doc.getMap<string>(META);

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

// ---- writing: in-memory Node tree -> Yjs ----

// Set only on a real change. Yjs records an op per set(), so writing every field
// of every node on every commit would bloat the update log and — worse — make a
// no-op save look like an edit to every other peer.
const setIf = (r: Rec, k: Field, v: unknown): boolean => {
  if (r.get(k) === v) return false;
  r.set(k, v);
  return true;
};
// `boxes` is compared by its serialised form: the array identity changes on every
// box edit, and a deep compare is what distinguishes a real geometry change from
// a re-save. persistence.ts already stringifies the whole document per commit, so
// this costs no more than the editor already pays.
const setBoxesIf = (r: Rec, boxes: Box3[]): boolean => {
  const next = serBoxes(boxes);
  const cur = r.get("b") as SerBox[] | undefined;
  if (cur && JSON.stringify(cur) === JSON.stringify(next)) return false;
  r.set("b", next);
  return true;
};

// Flatten the desired tree into (node, parent id, sibling order) triples.
type Want = { node: Node; parent: string; ord: number };
function flatten(root: SceneNode): Want[] {
  const out: Want[] = [];
  const walk = (n: Node, parent: string, ord: number): void => {
    out.push({ node: n, parent, ord });
    if (n.type === "scene") n.children.forEach((c, i) => walk(c, n.id, i));
  };
  walk(root, ROOT, 0);
  return out;
}

// Write `root` into the document, touching only what differs. Returns true if
// anything changed, so callers can skip a pointless persist/broadcast.
// Everything happens in one transaction, so a commit produces a single update
// rather than one per field.
export function reconcile(doc: Y.Doc, root: SceneNode, origin?: unknown): boolean {
  const nodes = nodesMap(doc);
  const want = flatten(root);
  const wanted = new Set(want.map((w) => w.node.id));
  let dirty = false;
  Y.transact(doc, () => {
    const meta = metaMap(doc);
    if (meta.get("root") !== root.id) {
      meta.set("root", root.id);
      dirty = true;
    }
    // Drop nodes the editor no longer has. Deleting a group deletes its subtree,
    // which falls out of this: descendants are absent from `wanted` too.
    for (const id of [...nodes.keys()]) {
      if (!wanted.has(id)) {
        nodes.delete(id);
        dirty = true;
      }
    }
    for (const w of want) {
      let r = nodes.get(w.node.id);
      if (!r) {
        r = new Y.Map<unknown>();
        nodes.set(w.node.id, r); // must integrate before writing fields
        dirty = true;
      }
      const n = w.node;
      dirty = setIf(r, "t", n.type === "object" ? "o" : "s") || dirty;
      dirty = setIf(r, "p", w.parent) || dirty;
      dirty = setIf(r, "o", w.ord) || dirty;
      dirty = setIf(r, "nm", n.name) || dirty;
      dirty = setIf(r, "px", n.pos.x) || dirty;
      dirty = setIf(r, "py", n.pos.y) || dirty;
      dirty = setIf(r, "pz", n.pos.z) || dirty;
      dirty = setIf(r, "r", n.rot) || dirty;
      dirty = setIf(r, "vs", n.vis) || dirty;
      if (n.type === "object") dirty = setBoxesIf(r, n.boxes) || dirty;
    }
  }, origin);
  return dirty;
}

// ---- reading: Yjs -> in-memory Node tree ----

const asRot = (v: unknown): Rot => {
  const n = typeof v === "number" && Number.isFinite(v) ? Math.trunc(v) : 0;
  return (((n % 4) + 4) % 4) as Rot;
};
const asCoord = (v: unknown): number =>
  typeof v === "number" && Number.isFinite(v) ? Math.round(v) : 0;
const asOrd = (v: unknown): number =>
  typeof v === "number" && Number.isFinite(v) ? v : 0;
const VIS: Vis[] = ["visible", "deemphasized", "hidden"];
const asVis = (v: unknown): Vis => VIS.includes(v as Vis) ? v as Vis : "visible";

// Resolve every node's effective parent, breaking any cycle two concurrent moves
// may have created. Without a tree CRDT nothing stops peer A putting X under Y
// while peer B puts Y under X: both register writes are valid, and the result is
// a ring that is unreachable from the root, so those nodes would silently vanish.
//
// The repair has to be a pure function of document state, or two peers holding
// identical documents would disagree about the tree. So: walk up from each node,
// and on revisiting one, cut the ring at its LEXICOGRAPHICALLY LARGEST member by
// reparenting that node under `rootId`. Same state in, same cut out, everywhere —
// and the next local reconcile writes the repair back, so it self-heals.
function resolveParents(
  raw: Map<string, string>,
  rootId: string,
): Map<string, string> {
  const parent = new Map(raw);
  for (const start of parent.keys()) {
    const seen = new Set<string>([start]);
    let cur = start;
    for (;;) {
      const next = parent.get(cur);
      if (next === undefined || next === ROOT || !parent.has(next)) break;
      if (seen.has(next)) {
        // ring found — collect it, then cut at the largest id
        const ring: string[] = [next];
        for (let n = parent.get(next)!; n !== next; n = parent.get(n)!) {
          ring.push(n);
        }
        ring.sort();
        const cut = ring[ring.length - 1];
        // reattach under the document root, never as a second parentless node
        parent.set(cut, cut === rootId ? ROOT : rootId);
        break;
      }
      seen.add(next);
      cur = next;
    }
  }
  return parent;
}

// Sibling order. Concurrent reorders resolve last-writer-wins per node, which can
// briefly leave two siblings claiming the same slot; the id is the tiebreak so
// every peer still derives the same sequence from the same state.
const sortKids = (a: [string, number], b: [string, number]): number =>
  a[1] - b[1] || (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);

// Build the editor's tree, or null when the document holds no scene yet.
//
// Remote records are only as well-formed as the peer that wrote them, and a merge
// can leave a node whose fields never all arrived — so values are coerced rather
// than trusted. Nodes unreachable from the root (an orphan whose parent was
// deleted) are dropped, which is what makes deleting a group delete its subtree.
export function build(doc: Y.Doc): SceneNode | null {
  const nodes = nodesMap(doc);
  const raw = new Map<string, string>();
  nodes.forEach((r, id) => {
    const p = r.get("p");
    raw.set(id, typeof p === "string" ? p : ROOT);
  });
  if (!raw.size) return null;
  // the recorded root, falling back to the sole parentless node for a document
  // written before the root was named (or by a peer that dropped the field)
  let rootId = metaMap(doc).get("root") ?? "";
  if (!nodes.has(rootId)) {
    rootId = [...raw].find(([, p]) => p === ROOT)?.[0] ?? "";
  }
  if (!rootId) return null;
  const parent = resolveParents(raw, rootId);

  // group children by parent, ordered
  const kids = new Map<string, [string, number][]>();
  for (const [id, p] of parent) {
    if (id === rootId) continue; // the root is not its own sibling
    const ord = asOrd(nodes.get(id)?.get("o"));
    const list = kids.get(p);
    if (list) list.push([id, ord]);
    else kids.set(p, [[id, ord]]);
  }
  for (const list of kids.values()) list.sort(sortKids);

  const toNode = (id: string): Node | null => {
    const r = nodes.get(id);
    if (!r) return null;
    const base = {
      id,
      name: typeof r.get("nm") === "string" ? r.get("nm") as string : "",
      pos: {
        x: asCoord(r.get("px")),
        y: asCoord(r.get("py")),
        z: asCoord(r.get("pz")),
      },
      rot: asRot(r.get("r")),
      vis: asVis(r.get("vs")),
    };
    if (r.get("t") === "o") {
      const b = r.get("b");
      return {
        type: "object",
        ...base,
        boxes: Array.isArray(b) ? deBoxes(b as SerBox[]) : [],
      } as ObjectNode;
    }
    return {
      type: "scene",
      ...base,
      children: (kids.get(id) ?? [])
        .map(([cid]) => toNode(cid))
        .filter((n): n is Node => n !== null),
    } as SceneNode;
  };

  // The document root is always a scene. An object there means a corrupt or
  // foreign document, which the caller should treat as "nothing to load".
  const n = toNode(rootId);
  return n && n.type === "scene" ? n : null;
}

// ---- document lifecycle ----

export const newDoc = (): Y.Doc => new Y.Doc();
// Seed a document from an in-memory tree. Used for the first-run seed, the v11
// JSON migration and .voxelier.json import, which all arrive as a plain tree.
export function docFromTree(root: SceneNode): Y.Doc {
  const doc = newDoc();
  reconcile(doc, root);
  return doc;
}
export const snapshot = (doc: Y.Doc): Uint8Array => Y.encodeStateAsUpdate(doc);
