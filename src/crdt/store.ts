// The live store: owns the Yjs document, persists it, and mirrors it to other
// tabs. doc.ts defines the shape; this is the plumbing around it.
//
// Echo control is Yjs's update origin rather than a flag: a remote update is
// applied with the REMOTE origin, so the update handler can tell a peer's change
// from ours and decline to send it back. Reconcile being idempotent (see doc.ts)
// is the backstop — an applied remote update leaves the in-memory tree equal to
// the document, so the next commit finds nothing to write anyway.
import * as Y from "yjs";
import { build, docFromTree, newDoc, reconcile, snapshot } from "./doc.ts";
import type { SceneNode } from "../types.ts";

const LS = "voxelier-v13"; // v13: the document is a Yjs update, not a Loro snapshot
const CHAN = "voxelier-doc";
const REMOTE = Symbol("remote"); // update origin: came from a peer, do not re-send
const LOCAL = Symbol("local"); // update origin: ours, fan out to peers

let doc: Y.Doc = newDoc();
let chan: BroadcastChannel | null = null;
let onRemote: ((root: SceneNode) => void) | null = null;
// Storage key suffix. A live share session persists under its own key so joining
// someone else's scene never overwrites your solo document (see share.ts).
let lsKey = LS;

export const theDoc = (): Y.Doc => doc;
export const currentSnapshot = (): Uint8Array => snapshot(doc);

// Locally produced updates, for transports beyond the cross-tab channel (share.ts
// pipes these to WebRTC peers). BroadcastChannel stays built in because it needs
// no setup; anything else registers here.
type OpsListener = (bytes: Uint8Array) => void;
const opsListeners = new Set<OpsListener>();
export function onLocalOps(cb: OpsListener): () => void {
  opsListeners.add(cb);
  return () => opsListeners.delete(cb);
}

// ---- localStorage carries text, so base64. Chunked to keep the spread off the
// argument-count limit on a large document. ----
const CHUNK = 0x8000;
function toB64(u: Uint8Array): string {
  let s = "";
  for (let i = 0; i < u.length; i += CHUNK) {
    s += String.fromCharCode(...u.subarray(i, i + CHUNK));
  }
  return btoa(s);
}
function fromB64(s: string): Uint8Array {
  const bin = atob(s);
  const u = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
  return u;
}

function persist(): void {
  try {
    localStorage.setItem(lsKey, toB64(snapshot(doc)));
  } catch (_) {
    // quota, or private mode. Yjs garbage-collects deleted content by default, so
    // the encoded state tracks live document size rather than edit history —
    // there is no history to shed here as a fallback.
  }
}

// Swap in a different document (load, import, migration). The update subscription
// is bound to one Y.Doc, so it has to be re-established.
function setDoc(next: Y.Doc): void {
  doc.off("update", onUpdate);
  doc = next;
  doc.on("update", onUpdate);
}
function onUpdate(update: Uint8Array, origin: unknown): void {
  if (origin === REMOTE) return; // a peer's change — sending it back would echo
  post({ k: "u", b: update });
  for (const cb of opsListeners) cb(update);
}
doc.on("update", onUpdate);

function post(m: Msg): void {
  try {
    chan?.postMessage(m);
  } catch (_) { /* channel closed, or a payload that can't cross the wire */ }
}

// Cross-tab wire format. "u" is an incremental update, which merges into the
// receiver's document. "r" is a wholesale replacement (a .voxelier.json import, or
// the first-run seed): Yjs would happily UNION that document with the receiver's,
// leaving a tree with two roots, so it has to be adopted outright instead —
// otherwise the two tabs drift and take turns overwriting each other's storage.
type Msg = { k: "u" | "r"; b: Uint8Array };

// Start mirroring to other tabs. `cb` receives a freshly built tree whenever a
// peer's edit arrives; the caller installs it and re-renders.
export function attachSync(cb: (root: SceneNode) => void): void {
  onRemote = cb;
  if (typeof BroadcastChannel === "undefined") return; // no cross-tab sync available
  chan = new BroadcastChannel(CHAN);
  chan.onmessage = (e) => {
    const m = e.data as Msg | null;
    if (!m || (m.k !== "u" && m.k !== "r") || !(m.b instanceof Uint8Array)) {
      return;
    }
    if (m.k === "r") adoptSnapshot(m.b);
    else applyUpdate(m.b);
  };
}

// ---- transport entry points, shared by the cross-tab channel and share.ts ----

// Merge a peer's update into the document and refresh the editor's view. Returns
// the rebuilt tree, or null when nothing usable arrived.
export function applyUpdate(bytes: Uint8Array): SceneNode | null {
  try {
    Y.applyUpdate(doc, bytes, REMOTE);
    const root = build(doc);
    if (root) {
      onRemote?.(root);
      persist();
    }
    return root;
  } catch (_) {
    return null; // malformed, or from a peer running incompatible code
  }
}

// Adopt a document wholesale from a peer's snapshot. Needed when JOINING a live
// share: the host's document shares no history with ours, so merging would union
// two unrelated trees rather than replacing ours. After this the two share history
// and every later update merges normally.
export function adoptSnapshot(bytes: Uint8Array): SceneNode | null {
  try {
    const d = newDoc();
    Y.applyUpdate(d, bytes, REMOTE);
    const root = build(d);
    if (!root) return null; // unreadable payload — keep what we have
    setDoc(d);
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
  if (!reconcile(doc, root, LOCAL)) return false;
  persist();
  return true;
}

// Restore the persisted document, or null when there's nothing to restore.
export function loadDocument(): SceneNode | null {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(lsKey);
  } catch (_) {
    return null; // storage unavailable (private mode)
  }
  if (!raw) return null;
  try {
    const d = newDoc();
    Y.applyUpdate(d, fromB64(raw), REMOTE);
    const root = build(d);
    if (!root) return null;
    setDoc(d);
    return root;
  } catch (_) {
    return null; // corrupt or foreign document — fall back to a fresh one
  }
}

// Replace the document wholesale from a plain tree: the first-run seed, the v11
// migration, and .voxelier.json import all arrive this way. Peers are told to
// adopt it rather than merge it — see the Msg comment.
export function installTree(root: SceneNode): void {
  setDoc(docFromTree(root));
  persist();
  post({ k: "r", b: snapshot(doc) });
}

// Point persistence at a session-scoped key, so editing in a live share never
// overwrites the solo document. Pass null to go back to the solo key.
export function useSessionStorage(id: string | null): void {
  lsKey = id ? `${LS}:${id}` : LS;
}
