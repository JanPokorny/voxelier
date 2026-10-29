// The document library: identity, addressing, and the boot decision. Documents
// are plain localStorage JSON, so loading is synchronous; only taking the edit
// lock is async (see lock.ts).
import {
  currentDocId,
  deleteDocumentData,
  inspectDocument,
  listDocuments,
  setCurrentDocument,
  writeDocument,
} from "./persistence.ts";
import { seedUid } from "./math.ts";
import { lockDocument, withDocumentLock } from "./lock.ts";
import { seed } from "./seed.ts";
import type { DocMeta } from "./persistence.ts";
import type { SceneNode } from "./types.ts";

const LAST = "voxelier-last"; // pointer to the most recently opened document
const HASH_DOC = "doc";

export type { DocMeta };
export { listDocuments };

const newId = (): string => {
  const u = new Uint8Array(8);
  crypto.getRandomValues(u);
  return [...u].map((b) => b.toString(36).padStart(2, "0")).join("");
};

// ---- URL fragment ----
// Read and written as parameters rather than by replacing the whole hash, so an
// unrelated fragment key stays intact.
const hashParams = (): URLSearchParams =>
  new URLSearchParams(location.hash.replace(/^#/, ""));

export function docIdInUrl(): string | null {
  const v = hashParams().get(HASH_DOC);
  return v && /^[0-9a-z]{4,32}$/.test(v) ? v : null;
}
export function setDocInUrl(id: string): void {
  const p = hashParams();
  p.set(HASH_DOC, id);
  // history.replaceState so opening a document is not a back-button step; the
  // editor is a single place, not a sequence of pages
  history.replaceState(null, "", `#${p.toString()}`);
}

const rememberLast = (id: string): void => {
  try {
    localStorage.setItem(LAST, id);
  } catch (_) { /* private mode */ }
};
const lastOpened = (): string | null => {
  try {
    return localStorage.getItem(LAST);
  } catch {
    return null;
  }
};

// ---- lifecycle ----

let pending: { root: SceneNode; uid?: number } | null = null;
// Switch this tab to a document. The synchronous load happens after the lock is
// granted; `root` is only for a brand-new/imported tree not stored yet. An
// imported uid is seeded only when that tree is adopted under the new lock.
export function open(id: string, root?: SceneNode, uid?: number): Promise<boolean> {
  pending = root ? { root, uid } : null;
  rememberLast(id);
  setDocInUrl(id);
  return lockDocument(id);
}

export function newDocument(root: SceneNode = seed(), uid?: number): {
  id: string;
  root: SceneNode;
  uid?: number;
} {
  return { id: newId(), root, uid };
}

// Read (or create) the open document. Runs under the edit lock.
export function loadCurrent(id: string): SceneNode {
  const initial = pending;
  pending = null;
  setCurrentDocument(id);
  if (initial) {
    if (initial.uid !== undefined) seedUid(initial.uid);
    if (!writeDocument(id, initial.root)) {
      throw new Error("could not save the new document");
    }
    return initial.root;
  }
  const stored = inspectDocument(id);
  if (stored.kind === "ok") return stored.root;
  if (stored.kind === "unreadable") {
    throw new Error("this document record cannot be read");
  }
  const tree = seed();
  if (!writeDocument(id, tree)) {
    throw new Error("could not save the new document");
  }
  return tree;
}

// Pick what to show on load: an explicit #doc= link, the last document, the
// newest library entry, or a fresh seed (migrating a pre-library save). A
// present-but-unreadable record is left intact and a new document opens instead.
export function bootDocument(
  legacy: () => SceneNode | null,
): { id: string; root?: SceneNode } {
  const asked = docIdInUrl();
  if (asked) {
    return inspectDocument(asked).kind === "unreadable"
      ? { id: newId(), root: seed() }
      : { id: asked };
  }

  const last = lastOpened();
  if (last && inspectDocument(last).kind !== "unreadable") return { id: last };

  const [newest] = listDocuments();
  if (newest) return { id: newest.id };

  return { id: newId(), root: legacy() ?? seed() };
}

// Delete only while no other tab holds the document. The caller does not need to
// be on that document; a free lock is acquired just for the deletion.
export async function deleteDocument(id: string): Promise<boolean> {
  const done = await withDocumentLock(id, () => {
    if (!deleteDocumentData(id)) return false;
    if (lastOpened() === id) {
      try {
        localStorage.removeItem(LAST);
      } catch { /* private mode */ }
    }
    return true;
  });
  return done === true;
}

export const openDocumentId = (): string | null => currentDocId();
