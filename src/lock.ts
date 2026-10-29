// One editing tab per document. Web Locks holds the grant for as long as this
// tab is the editor; a per-document BroadcastChannel only carries handoff
// requests ("release").
const PREFIX = "voxelier-doc:";
const IDLE = "Editing in another tab — click to move here";
const WAIT = "Waiting for the other tab…";
const STUCK = "The other tab isn't responding — close it to edit here";

const app = document.getElementById("app") as HTMLElement;
const lockedEl = document.getElementById("locked") as HTMLButtonElement;
const supported = typeof navigator.locks !== "undefined" &&
  typeof BroadcastChannel !== "undefined";

let id: string | null = null; // document this tab is showing
let held = false; // lock callback is ours
let ready = false; // lock held AND the document loaded + undo baseline recorded
let attempt = 0; // the only async step: a newer acquisition supersedes an older one
let releaseCb: (() => void) | null = null;
let chan: BroadcastChannel | null = null;
let timer: number | undefined;
let openDone: ((ok: boolean) => void) | null = null; // open()'s readiness promise
let load: (id: string) => boolean = () => false;
let save: () => boolean = () => false;

export const isReady = (): boolean => ready;
export const holdsLock = (): boolean => held;

export const setLockHandlers = (
  loadDocument: (id: string) => boolean,
  saveDocument: () => boolean,
): void => {
  load = loadDocument;
  save = saveDocument;
};

const fatal = (message: string): void => {
  ready = false;
  app.inert = false; // explicit error, not a fake locked editor
  lockedEl.hidden = false;
  lockedEl.disabled = true;
  lockedEl.textContent = message;
  closePanels();
};

const closePanels = (): void => {
  document.getElementById("docslist")?.setAttribute("hidden", "");
  for (const menu of document.querySelectorAll(".ctxmenu")) menu.remove();
};

const block = (message = IDLE): void => {
  ready = false;
  app.inert = true;
  lockedEl.hidden = false;
  lockedEl.disabled = false;
  lockedEl.textContent = message;
  closePanels();
  (document.activeElement as HTMLElement | null)?.blur();
  lockedEl.focus({ preventScroll: true });
};
const allow = (): void => {
  ready = true;
  app.inert = false;
  lockedEl.hidden = true;
};

function releaseLock(): void {
  ready = false;
  held = false;
  clearTimeout(timer);
  const done = releaseCb;
  releaseCb = null;
  done?.();
}

function acquire(
  want: string,
  at: number,
  queued: boolean,
  done: (ok: boolean) => void,
): void {
  let releaseHold!: () => void;
  const hold = new Promise<void>((r) => releaseHold = r);
  navigator.locks.request(
    `${PREFIX}${want}`,
    queued ? {} : { ifAvailable: true },
    async (lock) => {
      if (!lock) return; // ifAvailable and another tab is editing
      if (at !== attempt || id !== want || held) return; // superseded
      held = true;
      let ok = false;
      try {
        ok = load(want);
      } catch {
        ok = false;
      }
      if (at !== attempt || id !== want || !held) return;
      if (!ok) {
        releaseLock();
        block("Could not open this document");
        done(false);
        return;
      }
      releaseCb = releaseHold;
      clearTimeout(timer);
      done(true);
      allow();
      await hold;
    },
  ).catch(() => {
    if (at === attempt && id === want) done(false);
  });
}

// Hand over on request: settle gestures + flush synchronously, then go inert and
// release. A failed save keeps the lock (flush has already surfaced the error).
function handoff(): void {
  if (!held) return;
  let ok = false;
  try {
    ok = save();
  } catch {
    ok = false;
  }
  if (!ok) {
    allow();
    return;
  }
  block();
  releaseLock();
}

// Put the tab on a document and try its lock without queueing: a blocked tab
// holds no pending request, so only an explicit click can take over.
export function lockDocument(docId: string): Promise<boolean> {
  if (!supported) {
    fatal(
      "This browser cannot lock documents safely: Web Locks or BroadcastChannel is unavailable.",
    );
    return Promise.resolve(false);
  }
  attempt++;
  openDone?.(false); // a superseded open() stops waiting
  openDone = null;
  releaseLock();
  chan?.close();
  id = docId;
  block();
  chan = new BroadcastChannel(`${PREFIX}${docId}`);
  chan.onmessage = (e) => {
    if (e.data?.k === "release") handoff();
  };
  return new Promise<boolean>((resolve) => {
    openDone = resolve;
    acquire(docId, attempt, false, resolve);
  });
}

// Used by delete: run only if the document's lock is free (or already ours).
export async function withDocumentLock<T>(
  docId: string,
  fn: () => T,
): Promise<T | null> {
  if (!supported) {
    fatal(
      "This browser cannot lock documents safely: Web Locks or BroadcastChannel is unavailable.",
    );
    return null;
  }
  if (id === docId && held) return fn();
  let result: T | null = null;
  await navigator.locks.request(
    `${PREFIX}${docId}`,
    { ifAvailable: true },
    (lock) => {
      if (!lock) return;
      const was = held; // persistence writes check this flag
      held = true;
      try {
        result = fn();
      } finally {
        held = was;
      }
    },
  );
  return result;
}

lockedEl.onclick = () => {
  if (!supported || id === null || held) return;
  clearTimeout(timer);
  chan?.postMessage({ k: "release" });
  block(WAIT);
  attempt++;
  const at = attempt;
  const done = (ok: boolean) => {
    const finish = openDone;
    openDone = null;
    finish?.(ok);
  };
  acquire(id, at, true, done);
  timer = setTimeout(() => {
    if (!held && id !== null) block(STUCK);
  }, 5000);
};
