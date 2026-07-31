// The document library: identity, addressing, and the boot decision.
//
// Voxelier used to have no notion of a document — one storage slot, and the only
// way to keep a second scene was to export it to a file. So "what should two tabs
// do?" had no well-formed answer: both were editing *the* document. Documents now
// have ids, a tab says which one it is showing in its URL fragment, and the store
// scopes both its storage key and its cross-tab channel to that id. Two tabs on
// one document sync; two tabs on different documents never see each other.
import { listMeta } from "./idb.ts";
import { currentScope, dropScope, installTree, openScope } from "./store.ts";
import { seed } from "../seed.ts";
import type { DocMeta } from "./idb.ts";
import type { SceneNode } from "../types.ts";

const LAST = "voxelier-last"; // pointer to the most recently opened document
const HASH_DOC = "doc";

export type { DocMeta };
export const listDocuments = listMeta;

const newId = (): string => {
  const u = new Uint8Array(8);
  crypto.getRandomValues(u);
  return [...u].map((b) => b.toString(36).padStart(2, "0")).join("");
};

// ---- URL fragment ----
// The fragment is shared with share.ts's `s=<secret>`, so both are read and
// written as parameters rather than by replacing the whole hash.
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
  } catch (_) {
    return null;
  }
};

// ---- lifecycle ----

// Open a document by id, or null when nothing is stored under it.
export async function tryOpenDocument(id: string): Promise<SceneNode | null> {
  const root = await openScope({ kind: "doc", id });
  if (!root) return null;
  rememberLast(id);
  setDocInUrl(id);
  return root;
}
// Open a document by id, seeding it if it is empty — which is what makes a
// hand-typed or hand-shared #doc= link land on a usable scene.
export async function openDocument(id: string): Promise<SceneNode> {
  const existing = await tryOpenDocument(id);
  if (existing) return existing;
  const fresh = seed();
  installTree(fresh);
  rememberLast(id);
  setDocInUrl(id);
  return fresh;
}

// Create a document, either empty (seeded) or from a tree that arrived from
// somewhere else — a .voxelier.json import, or a migrated legacy save. Import
// deliberately mints a NEW document rather than overwriting whatever is open: the
// file is a thing you are adding to your library, not an edit to the current scene.
export async function createDocument(root?: SceneNode): Promise<SceneNode> {
  const id = newId();
  await openScope({ kind: "doc", id }); // nothing stored yet; this just sets scope
  const tree = root ?? seed();
  installTree(tree);
  rememberLast(id);
  setDocInUrl(id);
  return tree;
}

export async function deleteDocument(id: string): Promise<void> {
  await dropScope(id);
  if (lastOpened() === id) {
    try {
      localStorage.removeItem(LAST);
    } catch (_) { /* private mode */ }
  }
}

export const openDocumentId = (): string | null => {
  const s = currentScope();
  return s && s.kind === "doc" ? s.id : null;
};

// Decide what to show on load, in priority order: an explicit #doc= link, the
// document you had open last, an existing library entry, a migrated legacy save,
// or a fresh seeded scene.
export async function bootDocument(
  legacy: () => SceneNode | null,
): Promise<SceneNode> {
  const asked = docIdInUrl();
  if (asked) return await openDocument(asked);

  const last = lastOpened();
  if (last) {
    const root = await tryOpenDocument(last);
    if (root) return root;
  }
  // No pointer, but the library may still have entries (a cleared localStorage, or
  // a different profile) — open the most recently touched one.
  try {
    const [newest] = await listMeta();
    if (newest) {
      const root = await tryOpenDocument(newest.id);
      if (root) return root;
    }
  } catch (_) { /* storage unavailable */ }

  // First run on this browser, or the first run since documents gained identity:
  // adopt a pre-library save if one is there, else seed.
  return await createDocument(legacy() ?? undefined);
}
