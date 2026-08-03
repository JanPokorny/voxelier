// Live share: a peer-to-peer editing session over WebRTC, with no server of ours.
//
// Trystero does the matchmaking — peers find each other through a public relay
// network (Nostr by default) and then talk directly over WebRTC data channels.
// Once connected this is just another transport for the same Yjs updates the
// cross-tab channel already carries, so the merge semantics in doc.ts hold
// unchanged and nothing in the editor needs to know a peer is remote.
//
// The link carries a secret in its URL fragment, which browsers never send to a
// server. The room id peers advertise on the relay is a hash of that secret, and
// the secret itself is the password Trystero uses to encrypt the WebRTC session
// descriptions — so the relay learns a room id it cannot reverse, and never sees
// anything that would let it join or read the session.
//
// Host vs joiner matters at exactly one moment. A joiner's local document shares
// no history with the host's, so merging them would splice two unrelated trees
// together; the joiner therefore ADOPTS the host's snapshot on arrival. From then
// on both sides have common history and every later edit merges normally.
import { joinRoom } from "trystero";
import {
  adoptSnapshot,
  announceTree,
  applyUpdate,
  currentSnapshot,
  onLocalOps,
  openScope,
} from "./store.ts";
import { openDocument, openDocumentId } from "./docs.ts";

const APP_ID = "voxelier-scene";
const HASH_KEY = "s"; // #s=<secret>

export type Role = "host" | "guest";
export type ShareState = {
  active: boolean;
  role: Role | null;
  link: string | null;
  peers: number;
};

// deno-lint-ignore no-explicit-any
type Room = any;
type SendOpts = { target?: string };
let room: Room | null = null;
let sendOps: ((b: Uint8Array, opts?: SendOpts) => void) | null = null;
let sendSnap: ((b: Uint8Array, opts?: SendOpts) => void) | null = null;
let unsubOps: (() => void) | null = null;
let role: Role | null = null;
let secret: string | null = null;
let onChange: (() => void) | null = null;
// the library document to come back to when the session ends
let prevDocId: string | null = null;
// true once this peer's document has history in common with the session's, after
// which an incoming snapshot must be merged rather than adopted
let adopted = false;
const peers = new Set<string>();

export const shareState = (): ShareState => ({
  active: !!room,
  role,
  link: secret ? linkFor(secret) : null,
  peers: peers.size,
});
export const setShareListener = (cb: () => void): void => {
  onChange = cb;
};

const rand = (): string => {
  const u = new Uint8Array(16);
  crypto.getRandomValues(u);
  return [...u].map((b) => b.toString(16).padStart(2, "0")).join("");
};
// Room id = SHA-256 of the secret, so the relay sees an identifier it cannot turn
// back into the password that decrypts the session descriptions.
async function roomIdFor(sec: string): Promise<string> {
  const h = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(`voxelier:${sec}`),
  );
  return [...new Uint8Array(h)].slice(0, 16).map((b) =>
    b.toString(16).padStart(2, "0")
  ).join("");
}
const linkFor = (sec: string): string =>
  `${location.origin}${location.pathname}#${HASH_KEY}=${sec}`;

// The secret in the current URL, if this page was opened from a share link.
export function secretInUrl(): string | null {
  const m = new URLSearchParams(location.hash.replace(/^#/, "")).get(HASH_KEY);
  return m && /^[0-9a-f]{16,64}$/.test(m) ? m : null;
}

async function connect(sec: string, as: Role): Promise<void> {
  await leave();
  secret = sec;
  role = as;
  const id = await roomIdFor(sec);
  // Scope the store to the session before the first edit lands, so a guest's own
  // documents survive the visit untouched — a session gets its own storage slot and
  // its own cross-tab channel, and no entry in the library.
  prevDocId ??= openDocumentId();
  await openScope({ kind: "session", id });

  // Anything that throws in here would otherwise leave `room` set and the UI
  // showing a live session that can never carry a message, so tear down and let
  // the caller report it.
  try {
    room = joinRoom({ appId: APP_ID, password: sec }, id);

    // makeAction returns an OBJECT — {send, onMessage, onReceiveProgress} — with
    // onMessage a property you ASSIGN. Older Trystero handed back a
    // [send, onMessage] tuple; destructuring this one as an array throws
    // "object is not iterable" before a session can form.
    const ops = room.makeAction("ops");
    const snap = room.makeAction("snap");
    // send() is async and rejects when a peer vanishes mid-flight. A peer leaving
    // is not an error worth surfacing, and an unhandled rejection would be noise.
    sendOps = (b, opts) => void ops.send(b, opts).catch(() => {});
    sendSnap = (b, opts) => void snap.send(b, opts).catch(() => {});

    ops.onMessage = (b: unknown) => {
      if (b instanceof Uint8Array) applyUpdate(b);
    };
    snap.onMessage = (b: unknown) => {
      // Only a guest adopts, and only until it has a document in common with the
      // host — after that a snapshot would throw away locally merged work.
      if (!(b instanceof Uint8Array)) return;
      if (role === "guest" && !adopted) {
        adopted = true;
        adoptSnapshot(b);
      } else {
        applyUpdate(b); // same history: safe to merge
      }
    };

    room.onPeerJoin = (peerId: string) => {
      peers.add(peerId);
      // The host seeds every arrival with the current document. Guests send theirs
      // too once adopted, which is what lets a second guest catch up from whoever
      // answers first.
      if (role === "host" || adopted) {
        sendSnap?.(currentSnapshot(), { target: peerId });
      }
      onChange?.();
    };
    room.onPeerLeave = (peerId: string) => {
      peers.delete(peerId);
      onChange?.();
    };

    unsubOps = onLocalOps((b) => sendOps?.(b));
  } catch (e) {
    await leave();
    throw e;
  }
  onChange?.();
}

// Start hosting: mint a secret, put it in the URL so a reload rejoins, and return
// the shareable link.
export async function startShare(): Promise<string> {
  const sec = rand();
  adopted = true; // the host's document IS the session's
  // keep any doc= already in our own URL; the link we hand out carries only the
  // secret, so a guest never learns which of our documents this came from
  const p = new URLSearchParams(location.hash.replace(/^#/, ""));
  p.set(HASH_KEY, sec);
  history.replaceState(null, "", `#${p.toString()}`);
  await connect(sec, "host");
  return linkFor(sec);
}

// Join a session from a link's secret. The host's scene replaces what's on screen
// for the duration; the solo document is left alone under its own storage key.
export async function joinShare(sec: string): Promise<void> {
  adopted = false;
  await connect(sec, "guest");
}

export async function leave(): Promise<void> {
  unsubOps?.();
  unsubOps = null;
  try {
    await room?.leave();
  } catch (_) { /* already gone */ }
  room = null;
  sendOps = null;
  sendSnap = null;
  role = null;
  secret = null;
  adopted = false;
  peers.clear();
  // Return to the document that was open before the session, and tell the editor
  // to re-read it — otherwise the view would keep showing the host's scene.
  const back = prevDocId;
  prevDocId = null;
  if (back) {
    const root = await openDocument(back);
    if (root) announceTree(root);
  }
  onChange?.();
}

// Called at boot: if the page was opened from a share link, join it.
export function resumeFromUrl(): Promise<void> | null {
  const sec = secretInUrl();
  return sec ? joinShare(sec) : null;
}
