// Persistence. ser/de stay the pure (de)serialisers for a node tree — they are the
// .voxelier.json format (io.ts), the undo snapshot form (history.ts) and the legacy
// migration path. Documents themselves are one localStorage key each, so every
// save and document switch is synchronous (no async handoff window).
import { S } from "./state.ts";
import { peekUid, seedUid } from "./math.ts";
import { amend, record } from "./history.ts";
import { holdsLock } from "./lock.ts";
import type { Node, ObjectNode, SceneNode, Vis } from "./types.ts";

const LS_DOC = "voxelier-doc:"; // + document id -> { uid, root }
const LS_V11 = "voxelier-v11"; // pre-document-library save: the whole tree
const LS_UI = "voxelier-ui-v1"; // tree fold state — per-tab view state, not document

export type DocMeta = { id: string; name: string; updated: number };

// The on-disk / JSON shape (compact field names), distinct from `Node`.
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

// ~5 MB per origin is the localStorage ceiling. If that is ever not enough, the
// upgrade is IndexedDB, which brings back an async handoff before releasing a lock.
function writeError(e: unknown): void {
  console.error("save failed", e);
  const quota = e instanceof DOMException &&
    (e.name === "QuotaExceededError" || e.code === 22);
  alert(
    quota
      ? "Could not save: the browser's storage quota is full (~5 MB per origin)."
      : "Save failed: " + (e as Error).message,
  );
}

export type StoredDocument =
  | { kind: "missing" }
  | { kind: "unreadable" }
  | { kind: "ok"; root: SceneNode };

// Distinguishes "no such key" from a present-but-unparseable record, so a bad
// record is never seeded over.
export function inspectDocument(id: string): StoredDocument {
  let raw: string | null;
  try {
    raw = localStorage.getItem(LS_DOC + id);
  } catch {
    return { kind: "missing" };
  }
  if (raw === null) return { kind: "missing" };
  try {
    const root = sceneFromEnvelope(JSON.parse(raw));
    return root ? { kind: "ok", root } : { kind: "unreadable" };
  } catch {
    return { kind: "unreadable" };
  }
}

// O(localStorage keys) scan: a few dozen documents, so no shared index that two
// tabs could lose entries from. If it ever matters, store metadata separately.
export const listDocuments = (): DocMeta[] => {
  const out: DocMeta[] = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key?.startsWith(LS_DOC)) continue;
      try {
        const d = JSON.parse(localStorage.getItem(key) || "");
        if (!d?.root) continue; // unreadable records stay untouched/invisible
        out.push({
          id: key.slice(LS_DOC.length),
          name: typeof d.name === "string" && d.name
            ? d.name
            : d.root.nm || "Project",
          updated: Number(d.updated) || 0,
        });
      } catch { /* unreadable */ }
    }
  } catch { /* storage unavailable */ }
  return out.sort((a, b) => b.updated - a.updated);
};

let saved: string | null = null; // root JSON of the last successful write
let failed = false; // a write failed and the tree is still unsaved

// Writes are refused unless this tab owns the document lock.
export function writeDocument(id: string, root: SceneNode): boolean {
  if (!holdsLock()) {
    failed = true;
    return false;
  }
  const rootJSON = JSON.stringify(ser(root));
  const name = JSON.stringify(root.name || "Project");
  try {
    localStorage.setItem(
      LS_DOC + id,
      `{"uid":${peekUid()},"root":${rootJSON},"name":${name},"updated":${Date.now()}}`,
    );
    if (currentDocId() === id) saved = rootJSON;
    failed = false;
    return true;
  } catch (e) {
    failed = true;
    writeError(e);
    return false;
  }
}

// Called only under the document's lock (current or withDocumentLock).
export function deleteDocumentData(id: string): boolean {
  if (!holdsLock()) {
    failed = true;
    return false;
  }
  try {
    localStorage.removeItem(LS_DOC + id);
    if (currentDocId() === id) saved = null;
    return true;
  } catch (e) {
    failed = true;
    writeError(e);
    return false;
  }
}

let docId: string | null = null;
export const currentDocId = (): string | null => docId;
export const setCurrentDocument = (id: string): void => {
  docId = id;
  saved = null; // a new document starts with no successful write yet
  failed = false;
};

// Snapshotting (whole-document JSON for undo) and persistence both serialise the
// model, so they're debounced together: a burst of edits collapses into a single
// serialisation 250ms after the last change.
let saveT: number | undefined; // pending debounce timer
export function hasUnsaved(): boolean {
  if (saveT !== undefined || failed) return true;
  return S.root !== null && saved !== JSON.stringify(ser(S.root));
}

function persistUI(): void {
  try {
    localStorage.setItem(LS_UI, JSON.stringify([...S.collapsed]));
  } catch (_) { /* quota / private mode */ }
}

export function flush(): boolean {
  clearTimeout(saveT);
  saveT = undefined;
  const id = currentDocId();
  if (id === null || !holdsLock()) return false;
  record(JSON.stringify(ser(S.root))); // undo snapshot (no-op during restore)
  persistUI();
  return writeDocument(id, S.root);
}
// Persist a document whose GEOMETRY is unchanged — only the box decomposition
// differs (the background repack). Folds into the CURRENT top undo snapshot.
export function flushAmend(): boolean {
  if (saveT !== undefined) return true;
  amend(JSON.stringify(ser(S.root)));
  const id = currentDocId();
  if (id === null || !holdsLock()) return false;
  return writeDocument(id, S.root);
}
export function save(): void {
  clearTimeout(saveT);
  saveT = setTimeout(flush, 250);
}

// Deserialise a { uid, root } envelope into a tree: a .voxelier.json file, a
// stored document, or a legacy save. `seed:false` leaves the global uid counter
// alone (imports seed it only once the new document is adopted).
// Seed the counter past both the envelope's uid and every numeric id already in
// the tree: imported files can carry a uid smaller than their own node ids.
export function seedDocument(root: SceneNode, uid = 1): void {
  let max = 0;
  const walk = (n: Node): void => {
    const m = /^n(\d+)/.exec(n.id);
    if (m) max = Math.max(max, Number(m[1]));
    if (n.type === "scene") n.children.forEach(walk);
  };
  walk(root);
  seedUid(Math.max(uid, max + 1));
}

export function sceneFromEnvelope(
  d: { uid?: number; root?: SerNode; collapsed?: string[] } | null,
  seed = true,
): SceneNode | null {
  if (!d || !d.root) return null;
  const root = de(d.root) as SceneNode;
  if (seed) seedDocument(root, d.uid || 1);
  return root;
}
export const loadUI = (): string[] => {
  try {
    const v = JSON.parse(localStorage.getItem(LS_UI) as string);
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
};
// A save from before documents had identity, if one is still there. Read once at
// boot to seed the library; the blob is left in place rather than deleted, so an
// older build of the app still finds its own document.
export function readLegacy(): SceneNode | null {
  try {
    return sceneFromEnvelope(
      JSON.parse(localStorage.getItem(LS_V11) as string),
    );
  } catch {
    return null;
  }
}
