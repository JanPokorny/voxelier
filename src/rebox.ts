// Geometry optimiser, run synchronously the moment the object editor closes.
// Editing degrades an object's box list — subtract() fragments boxes and only
// exact-face re-adds merge back (see absorb in boxes.ts) — and the object
// editor is the only place box lists are edited (scene mode moves/rotates
// whole nodes in 90° steps, never their boxes). The coordinate-compressed
// repack (repack.ts) costs single-digit milliseconds for realistic content
// and stays bounded on pathological input, so it simply runs inline at close —
// no worker, no timers, no staleness bookkeeping.
//
// A repack changes only the decomposition — occupancy and colours are checked
// unchanged — so nothing needs remeshing; the result is persisted folded into
// the top undo snapshot (flushAmend), so undo needs no extra press to cross an
// invisible representation change.
import { flushAmend } from "./persistence.ts";
import { repackBoxes } from "./repack.ts";
import type { Box3, ObjectNode } from "./types.ts";

const MIN_BOXES = 24; // below this a repack can't win enough to matter

const volume = (bs: Box3[]): number =>
  bs.reduce((n, b) => n + (b.x1 - b.x0) * (b.y1 - b.y0) * (b.z1 - b.z0), 0);

// box arrays already packed (an applied result, or an attempt that found no
// improvement) — skip until an edit replaces the array, at which point
// membership expires with it, so open/close without edits costs nothing
const settled = new WeakSet<Box3[]>();

// Re-pack an object's boxes in place. Called by navigation when the object
// editor closes — any lifted selection has already been stamped back
// (clearSelection runs first), so the box list is a settled document state.
export function reboxObject(node: ObjectNode): void {
  if (node.boxes.length < MIN_BOXES || settled.has(node.boxes)) return;
  const packed = repackBoxes(node.boxes);
  // volume equality re-checked before writing the document: a repack must
  // never change what cells exist, only how they are grouped
  if (packed.length < node.boxes.length && volume(packed) === volume(node.boxes)) {
    node.boxes = packed;
    settled.add(packed);
    flushAmend();
  } else settled.add(node.boxes); // already as good as the repack gets
}
