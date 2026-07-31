// Minimal IndexedDB wrapper — no dependency, just enough for a document library.
//
// localStorage was fine for exactly one document and stops being fine for a
// library of them: it stores text, so a binary Yjs update has to go through base64
// (a third larger), and its ~5MB origin budget is shared across every scene you
// have ever made. IndexedDB stores the bytes directly and is bounded by disk.
//
// Two stores, so listing the library never reads a snapshot: `meta` holds the
// small records the document list renders from, `data` holds the update bytes
// keyed by scope (see store.ts — a live share session gets a data entry but no
// meta entry, which is what keeps it out of your library).
const DB = "voxelier";
const VERSION = 1;
const META = "meta";
const DATA = "data";

export type DocMeta = { id: string; name: string; updated: number };

let dbp: Promise<IDBDatabase> | null = null;

function open(): Promise<IDBDatabase> {
  if (dbp) return dbp;
  dbp = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(META)) db.createObjectStore(META);
      if (!db.objectStoreNames.contains(DATA)) db.createObjectStore(DATA);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  // A failed open must not be cached, or every later call rejects against a
  // connection that was only transiently unavailable.
  dbp.catch(() => {
    dbp = null;
  });
  return dbp;
}

// Run one request inside a transaction and resolve with its result. Every caller
// funnels through here so the promise/event plumbing exists once.
function run<T>(
  store: string,
  mode: IDBTransactionMode,
  fn: (s: IDBObjectStore) => IDBRequest,
): Promise<T> {
  return open().then((db) =>
    new Promise<T>((resolve, reject) => {
      const tx = db.transaction(store, mode);
      const req = fn(tx.objectStore(store));
      req.onsuccess = () => resolve(req.result as T);
      req.onerror = () => reject(req.error);
      tx.onabort = () => reject(tx.error);
    })
  );
}

export const putData = (key: string, bytes: Uint8Array): Promise<void> =>
  run(DATA, "readwrite", (s) => s.put(bytes, key)).then(() => undefined);
export const getData = (key: string): Promise<Uint8Array | null> =>
  run<Uint8Array | undefined>(DATA, "readonly", (s) => s.get(key))
    .then((v) => v instanceof Uint8Array ? v : null);
export const delData = (key: string): Promise<void> =>
  run(DATA, "readwrite", (s) => s.delete(key)).then(() => undefined);

export const putMeta = (m: DocMeta): Promise<void> =>
  run(META, "readwrite", (s) => s.put(m, m.id)).then(() => undefined);
export const delMeta = (id: string): Promise<void> =>
  run(META, "readwrite", (s) => s.delete(id)).then(() => undefined);
// Newest first — the order the document list wants.
export const listMeta = (): Promise<DocMeta[]> =>
  run<DocMeta[]>(META, "readonly", (s) => s.getAll())
    .then((all) => all.filter((m) => m && typeof m.id === "string"))
    .then((all) => all.sort((a, b) => (b.updated ?? 0) - (a.updated ?? 0)));
