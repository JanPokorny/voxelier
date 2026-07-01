// Background geometry optimiser. Editing degrades an object's box list —
// subtract() fragments boxes and only exact-face re-adds merge back (see
// absorb in boxes.ts) — so in quiet moments each fragmented object is re-packed
// from scratch (repack.ts) in a Web Worker, where the exhaustive multi-restart
// greedy can take its time off the interaction path.
//
// Staleness: every edit REPLACES a node's boxes array (nothing mutates one in
// place), so the array's identity is a perfect invalidation token — a worker
// result is applied only if the node still holds the exact array that was
// sent, and only if the repack actually shrank it. Occupancy and colours are
// unchanged by a repack, so nothing is remeshed; the result is just persisted,
// folded into the top undo snapshot (flushAmend) so undo needs no extra press
// to cross an invisible representation change.
import { S } from "./state.ts";
import { findById } from "./model.ts";
import { flushAmend } from "./persistence.ts";
import { repackBoxes } from "./repack.ts";
import type { Box3, Node, ObjectNode } from "./types.ts";

const DELAY = 1500; // quiet-moment debounce after the last committed save (ms)
const MIN_BOXES = 24; // below this a repack can't win enough to matter
const MAX_VOL = 1_000_000; // explode-to-cells cap: bounds worker time + memory

const volume = (bs: Box3[]): number =>
  bs.reduce((n, b) => n + (b.x1 - b.x0) * (b.y1 - b.y0) * (b.z1 - b.z0), 0);

let worker: Worker | null = null;
let disabled = false; // a worker that errored is terminated and never retried
let timer: number | undefined;
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

// (Re)start the quiet-moment countdown; called from persistence.flush() after
// every committed save, so any edit pushes the repack out of the way.
export function queueRebox(): void {
  if (disabled || typeof Worker === "undefined") return; // headless (tests)
  clearTimeout(timer);
  timer = setTimeout(scan, DELAY);
}

const eachObjectNode = (n: Node, cb: (o: ObjectNode) => void): void => {
  if (n.type === "object") cb(n);
  else for (const ch of n.children) eachObjectNode(ch, cb);
};

function scan(): void {
  timer = undefined;
  // a gesture may hold transient geometry (a lifted selection's content is
  // carved out of its object) — come back later rather than snapshot that
  if (S.drag || S.painting || S.sel3d?.lifted) {
    queueRebox();
    return;
  }
  if (inflight.size) return; // finish() rescans when the worker returns
  let target: ObjectNode | null = null;
  eachObjectNode(S.root, (o) => {
    if (target || o.boxes.length < MIN_BOXES || settled.has(o.boxes)) return;
    if (volume(o.boxes) > MAX_VOL) {
      settled.add(o.boxes); // too big to explode — skip until it changes
      return;
    }
    target = o;
  });
  if (!target) return;
  const t: ObjectNode = target;
  const id = ++seq;
  inflight.set(id, { nodeId: t.id, sent: t.boxes });
  (worker ??= makeWorker()).postMessage({ reqId: id, boxes: t.boxes });
}

function finish(reqId: number, packed: Box3[]): void {
  const req = inflight.get(reqId);
  inflight.delete(reqId);
  if (req) {
    const node = findById(req.nodeId);
    if (node && node.type === "object" && node.boxes === req.sent) {
      // volume equality re-checked before writing the document: a repack must
      // never change what cells exist, only how they are grouped
      if (
        packed.length < node.boxes.length &&
        volume(packed) === volume(node.boxes)
      ) {
        node.boxes = packed;
        settled.add(packed);
        flushAmend();
      } else settled.add(req.sent); // already as good as the repack gets
    }
  }
  scan(); // the worker is idle again — take the next candidate, if any
}
