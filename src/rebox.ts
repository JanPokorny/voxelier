// Background geometry optimiser. Editing degrades an object's box list —
// subtract() fragments boxes and only exact-face re-adds merge back (see
// absorb in boxes.ts) — and the object editor is the only place box lists are
// edited (scene mode moves/rotates whole nodes in 90° steps, never their
// boxes). So the moment the editor closes, the just-edited object is re-packed
// from scratch (repack.ts) in a Web Worker, where the multi-restart greedy can
// take its time off the interaction path — no idle heuristics needed.
//
// Staleness: every edit REPLACES a node's boxes array (nothing mutates one in
// place), so the array's identity is a perfect invalidation token — a worker
// result is applied only if the node still holds the exact array that was
// sent, and only if the repack actually shrank it. Occupancy and colours are
// unchanged by a repack, so nothing is remeshed; the result is just persisted,
// folded into the top undo snapshot (flushAmend) so undo needs no extra press
// to cross an invisible representation change.
import { findById } from "./model.ts";
import { flushAmend } from "./persistence.ts";
import { repackBoxes } from "./repack.ts";
import type { Box3, ObjectNode } from "./types.ts";

const MIN_BOXES = 24; // below this a repack can't win enough to matter

// for the apply-time sanity check only — repack cost itself is volume-
// independent (coordinate-compressed, see repack.ts), so there is no size gate
const volume = (bs: Box3[]): number =>
  bs.reduce((n, b) => n + (b.x1 - b.x0) * (b.y1 - b.y0) * (b.z1 - b.z0), 0);

let worker: Worker | null = null;
let disabled = false; // a worker that errored is terminated and never retried
let seq = 0;
const inflight = new Map<number, { nodeId: string; sent: Box3[] }>();
// box arrays that are already packed (a result we applied, or a send that came
// back with no improvement) — skip until an edit replaces the array, at which
// point membership expires with it
const settled = new WeakSet<Box3[]>();

// The worker is built from an inline blob so `deno bundle` needs no separate
// worker chunk: repackBoxes is self-contained (see repack.ts), so its runtime
// source can be embedded verbatim.
function makeWorker(): Worker {
  const src = `"use strict";
const repack = (${repackBoxes.toString()});
onmessage = (e) => {
  const { reqId, boxes } = e.data;
  postMessage({ reqId, boxes: repack(boxes) });
};`;
  const url = URL.createObjectURL(new Blob([src], { type: "text/javascript" }));
  const w = new Worker(url);
  URL.revokeObjectURL(url); // the worker keeps its own reference once created
  w.onmessage = (e) => {
    const d = e.data as { reqId: number; boxes: Box3[] };
    finish(d.reqId, d.boxes);
  };
  w.onerror = () => { // a broken worker must neither stall nor loop the queue
    disabled = true;
    w.terminate();
    inflight.clear();
  };
  return w;
}

// Send an object to the worker for re-packing. Called by navigation the moment
// the object editor closes — any lifted selection has already been stamped back
// (clearSelection runs first), so the boxes snapshot is a settled document
// state. Multiple sends just queue in the worker's message queue.
export function reboxObject(node: ObjectNode): void {
  if (disabled || typeof Worker === "undefined") return; // headless (tests)
  if (node.boxes.length < MIN_BOXES || settled.has(node.boxes)) return;
  const id = ++seq;
  inflight.set(id, { nodeId: node.id, sent: node.boxes });
  (worker ??= makeWorker()).postMessage({ reqId: id, boxes: node.boxes });
}

function finish(reqId: number, packed: Box3[]): void {
  const req = inflight.get(reqId);
  inflight.delete(reqId);
  if (!req) return;
  const node = findById(req.nodeId);
  if (!node || node.type !== "object" || node.boxes !== req.sent) return; // stale
  // volume equality re-checked before writing the document: a repack must
  // never change what cells exist, only how they are grouped
  if (
    packed.length < node.boxes.length && volume(packed) === volume(node.boxes)
  ) {
    node.boxes = packed;
    settled.add(packed);
    flushAmend();
  } else settled.add(req.sent); // already as good as the repack gets
}
