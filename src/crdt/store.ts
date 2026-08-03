// The live store: owns the Yjs document, persists it, and mirrors it to other
// tabs. doc.ts defines the shape; this is the plumbing around it.
//
// Everything here is scoped to ONE document. Both the storage key and the
// BroadcastChannel name carry the document id, which is what lets two tabs on
// DIFFERENT documents coexist: with a single global channel they would merge each
// other's unrelated scenes and take turns overwriting one storage slot.
//
// Echo control is Yjs's update origin rather than a flag: a remote update is
// applied with the REMOTE origin, so the update handler can tell a peer's change
// from ours and decline to send it back. Reconcile being idempotent (see doc.ts)
// is the backstop — an applied remote update leaves the in-memory tree equal to
// the document, so the next commit finds nothing to write anyway.
import * as Y from "yjs";
import { build, docFromTree, newDoc, reconcile, snapshot } from "./doc.ts";
import { delData, delMeta, getData, putData, putMeta } from "./idb.ts";
import type { SceneNode } from "../types.ts";

const REMOTE = Symbol("remote"); // update origin: came from a peer, do not re-send
const LOCAL = Symbol("local"); // update origin: ours, fan out to peers


let doc: Y.Doc = newDoc();
let docId: string | null = null;
let chan: BroadcastChannel | null = null;
let onRemote: ((root: SceneNode) => void) | null = null;

export const theDoc = (): Y.Doc => doc;
export const currentDocId = (): string | null => docId;
export const setRemoteHandler = (cb: (root: SceneNode) => void): void => {
  onRemote = cb;
};

// The "doc:" prefix is kept so the keys match what earlier builds already wrote.
const dataKey = (id: string): string => `doc:${id}`;
const chanName = (id: string): string => `voxelier:doc:${id}`;

// Persist is fire-and-forget: IndexedDB is async, but every caller reaches it from
// an already-debounced save (persistence.ts), and a queued write is exactly the
// behaviour we want — the editor must never block on storage.
let lastName = "";
function persist(): void {
  if (docId === null) return;
  const id = docId;
  putData(dataKey(id), snapshot(doc)).catch(() => {
    /* storage unavailable or over quota — the document lives on in memory */
  });
  putMeta({ id, name: lastName, updated: Date.now() }).catch(() => {});
}

// Swap in a different document. The update subscription is bound to one Y.Doc, so
// it has to be re-established.
function setDoc(next: Y.Doc): void {
  doc.off("update", onUpdate);
  doc = next;
  doc.on("update", onUpdate);
}
function onUpdate(update: Uint8Array, origin: unknown): void {
  if (origin === REMOTE) return; // another tab's change — sending it back would echo
  post({ k: "u", b: update });
}
doc.on("update", onUpdate);

function post(m: Msg): void {
  try {
    chan?.postMessage(m);
  } catch (_) { /* channel closed, or a payload that can't cross the wire */ }
}

// Cross-tab wire format. "u" is an incremental update, which merges into the
// receiver's document. "r" is a wholesale replacement (the first-run seed, or a
// .voxelier.json import): Yjs would happily UNION that document with the
// receiver's, leaving a tree with two roots, so it has to be adopted outright
// instead.
type Msg = { k: "u" | "r"; b: Uint8Array };

// Point the store at a document and start mirroring it to other tabs on the SAME
// document. Returns its tree, or null when there is nothing stored yet — the
// caller then seeds it.
export async function openScope(id: string): Promise<SceneNode | null> {
  chan?.close();
  chan = null;
  docId = id;
  if (typeof BroadcastChannel !== "undefined") {
    chan = new BroadcastChannel(chanName(id));
    chan.onmessage = (e) => {
      const m = e.data as Msg | null;
      if (!m || (m.k !== "u" && m.k !== "r") || !(m.b instanceof Uint8Array)) {
        return;
      }
      if (m.k === "r") adoptSnapshot(m.b);
      else applyUpdate(m.b);
    };
  }
  let bytes: Uint8Array | null = null;
  try {
    bytes = await getData(dataKey(id));
  } catch (_) {
    return null; // storage unavailable (private mode)
  }
  if (!bytes) return null;
  try {
    const d = newDoc();
    Y.applyUpdate(d, bytes, REMOTE);
    const root = build(d);
    if (!root) return null;
    setDoc(d);
    lastName = root.name;
    return root;
  } catch (_) {
    return null; // corrupt or foreign document — fall back to a fresh one
  }
}

// Forget a document entirely: its bytes and its library entry.
export async function dropScope(id: string): Promise<void> {
  await Promise.all([
    delData(dataKey(id)).catch(() => {}),
    delMeta(id).catch(() => {}),
  ]);
}

// ---- entry points for updates arriving from another tab ----

// Merge a peer's update into the document and refresh the editor's view. Returns
// the rebuilt tree, or null when nothing usable arrived.
export function applyUpdate(bytes: Uint8Array): SceneNode | null {
  try {
    Y.applyUpdate(doc, bytes, REMOTE);
    const root = build(doc);
    if (root) {
      lastName = root.name;
      onRemote?.(root);
      persist();
    }
    return root;
  } catch (_) {
    return null; // malformed, or from a peer running incompatible code
  }
}

// Adopt a document wholesale from a peer's snapshot. Needed when another tab
// REPLACES the document (a fresh seed, or a .voxelier.json import): that document
// shares no history with ours, so merging would union two unrelated trees rather
// than replacing ours.
export function adoptSnapshot(bytes: Uint8Array): SceneNode | null {
  try {
    const d = newDoc();
    Y.applyUpdate(d, bytes, REMOTE);
    const root = build(d);
    if (!root) return null; // unreadable payload — keep what we have
    setDoc(d);
    lastName = root.name;
    onRemote?.(root);
    persist();
    return root;
  } catch (_) {
    return null;
  }
}

// Write the editor's tree into the document. Returns true when something actually
// changed — the update handler fans the change out, and only a real change reaches
// storage.
export function commitLocal(root: SceneNode): boolean {
  lastName = root.name;
  if (!reconcile(doc, root, LOCAL)) return false;
  persist();
  return true;
}

// Replace the open document from a plain tree: the first-run seed, the legacy
// migration, and .voxelier.json import all arrive this way. Tabs on the same
// document are told to adopt it rather than merge it — see the Msg comment.
export function installTree(root: SceneNode): void {
  setDoc(docFromTree(root));
  lastName = root.name;
  persist();
  post({ k: "r", b: snapshot(doc) });
}
