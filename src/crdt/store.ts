// The live Loro store: owns the document, persists it, and mirrors it to other
// tabs. doc.ts defines the shape; this is the plumbing around it.
//
// Loop guard: applying a remote update leaves the in-memory tree exactly equal to
// the document, so the next reconcile() finds nothing to write and emits no ops —
// which is what stops an update from echoing back and forth. The `applying` flag
// only covers the synchronous window inside the receive handler; the real
// invariant is that reconcile is idempotent (see doc.ts).
import { LoroDoc } from "loro-crdt";
import { build, docFromTree, newDoc, reconcile, snapshot } from "./doc.ts";
import type { SceneNode } from "../types.ts";

const LS = "voxelier-v12"; // v12: the document is a Loro snapshot, not JSON
const CHAN = "voxelier-doc";

let doc: LoroDoc = newDoc();
let chan: BroadcastChannel | null = null;
let applying = false;
let onRemote: ((root: SceneNode) => void) | null = null;
let unsubLocal: (() => void) | null = null;

export const theDoc = (): LoroDoc => doc;

// ---- localStorage carries binary, so base64. Chunked to keep the spread off the
// argument-count limit on a large snapshot. ----
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
    localStorage.setItem(LS, toB64(snapshot(doc)));
  } catch (_) {
    // Quota, or private mode. A Loro snapshot carries the document's history, so
    // a long session can outgrow the ~5MB localStorage budget where the old plain
    // JSON never would. Retry once with history dropped: the document survives,
    // the ability to time-travel past this point does not.
    try {
      localStorage.setItem(
        LS,
        toB64(
          doc.export({
            mode: "shallow-snapshot",
            frontiers: doc.oplogFrontiers(),
          }),
        ),
      );
    } catch (_) { /* nothing left to try */ }
  }
}

// Swap in a different document (load, import, migration). The local-update
// subscription is bound to one LoroDoc instance, so it has to be re-established.
function setDoc(next: LoroDoc): void {
  unsubLocal?.();
  unsubLocal = null;
  doc = next;
  if (chan) subscribeLocal();
}
function subscribeLocal(): void {
  unsubLocal = doc.subscribeLocalUpdates((bytes) => {
    if (applying) return;
    post({ k: "u", b: bytes });
  });
}
function post(m: Msg): void {
  try {
    chan?.postMessage(m);
  } catch (_) { /* channel closed, or a payload that can't cross the wire */ }
}

// Cross-tab wire format. "u" is an incremental op batch, which merges into the
// receiver's document. "r" is a wholesale replacement (a .voxelier.json import, or
// the first-run seed): that document shares no history with the peer's, so it
// cannot be merged and has to be adopted outright — otherwise the two tabs drift
// into unrelated documents and take turns overwriting each other's storage.
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
    applying = true;
    try {
      if (m.k === "r") {
        const d = newDoc();
        d.import(m.b);
        if (!build(d)) return; // unreadable payload — keep what we have
        setDoc(d);
      } else {
        doc.import(m.b);
      }
      const root = build(doc);
      if (root) onRemote?.(root);
      persist();
    } catch (_) {
      // a malformed or version-incompatible update from a peer running older code
    } finally {
      applying = false;
    }
  };
  subscribeLocal();
}

// Write the editor's tree into the document. Returns true when something actually
// changed — the ops are broadcast by the local-update subscription, and only a
// real change reaches localStorage.
export function commitLocal(root: SceneNode): boolean {
  if (applying) return false;
  if (!reconcile(doc, root)) return false;
  persist();
  return true;
}

// Restore the persisted document, or null when there's nothing to restore.
export function loadDocument(): SceneNode | null {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(LS);
  } catch (_) {
    return null; // storage unavailable (private mode)
  }
  if (!raw) return null;
  try {
    const d = newDoc();
    d.import(fromB64(raw));
    const root = build(d);
    if (!root) return null;
    setDoc(d);
    return root;
  } catch (_) {
    return null; // corrupt or foreign snapshot — fall back to a fresh document
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
