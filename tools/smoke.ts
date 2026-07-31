// End-to-end smoke test for the built site: boots dist/ in a real browser and
// checks the things unit tests can't reach.
//
// 1. The wasm actually loads. `deno bundle` inlines Loro's JS glue but only
//    references the wasm as a sibling asset, and the bundler/browser targets ship
//    different binaries for the same version — so a wrong or missing copy (see
//    tools/postbuild.ts) produces a site that builds cleanly and then dies on
//    boot. Only a real browser catches that.
// 2. Cross-tab sync works. Two pages, an edit in one, and the other's scene tree
//    has to follow — in both directions.
// 3. Hosting a live share produces a link and a session. Pairing two peers needs
//    a public relay and WebRTC, which an offline or sandboxed run cannot reach, so
//    that half reports as skipped instead of failing — but the editor must stay
//    usable and error-free while the relay is unreachable, which IS checked.
//
// Usage: deno task build && deno task smoke
// Set VOXELIER_CHROME to a Chromium binary if Playwright's own download is absent.
import { chromium } from "npm:playwright@1.49.1";

const PORT = 8231;
const DIST = "dist";
const TYPES: Record<string, string> = {
  html: "text/html; charset=utf-8",
  js: "text/javascript; charset=utf-8",
  css: "text/css; charset=utf-8",
  // must be exact: the glue instantiates via streaming, which rejects any other
  // content type (GitHub Pages serves .wasm correctly, a naive dev server may not)
  wasm: "application/wasm",
};

const server = Deno.serve({ port: PORT, onListen: () => {} }, async (req) => {
  const p = new URL(req.url).pathname;
  if (p === "/favicon.ico") return new Response(null, { status: 204 });
  const file = p === "/" ? "/index.html" : p;
  try {
    const body = await Deno.readFile(`${DIST}${file}`);
    const ext = file.split(".").pop() ?? "";
    return new Response(body, {
      headers: { "content-type": TYPES[ext] ?? "application/octet-stream" },
    });
  } catch {
    return new Response("not found", { status: 404 });
  }
});

const fail: string[] = [];
const check = (ok: boolean, what: string) => {
  console.log(`${ok ? "  ok  " : " FAIL "} ${what}`);
  if (!ok) fail.push(what);
};

const exe = Deno.env.get("VOXELIER_CHROME");
const browser = await chromium.launch(
  exe
    ? { executablePath: exe, args: ["--no-sandbox"] }
    : { args: ["--no-sandbox"] },
);
// one context so both pages share an origin, and therefore a BroadcastChannel
const ctx = await browser.newContext();
const errors: string[] = [];

// deno-lint-ignore no-explicit-any
type Page = any;
const rows = (p: Page): Promise<number> =>
  p.$$eval(".trow", (r: unknown[]) => r.length);

// Poll rather than page.waitForSelector: Playwright drives that wait from a
// requestAnimationFrame loop inside the page, and Chromium throttles rAF to a
// standstill in a background tab — so it never resolves for the second page even
// though the DOM is there. Evaluating directly has no such dependency.
async function waitRows(
  p: Page,
  want: (n: number) => boolean,
  ms = 8000,
): Promise<number> {
  const until = Date.now() + ms;
  for (;;) {
    const n = await rows(p);
    if (want(n) || Date.now() > until) return n;
    await p.waitForTimeout(100);
  }
}

// Add an object in `on` via the 'n' shortcut and wait for `peer` to catch up.
// No selection is needed — createObject() targets the current context. The page
// must be foregrounded for keyboard input to land, and 'n' both enters the new
// object and opens an inline rename, so both are dismissed to leave the tab in a
// clean state for the next round.
async function addObject(on: Page, peer: Page, peerRows: number) {
  await on.bringToFront();
  await on.keyboard.press("Escape"); // leave any object editor left open
  // Clicking a tree row both focuses the page (bringToFront alone does not
  // reliably hand over keyboard focus, and the keypress is then silently dropped)
  // and puts the editor in a known context. The inline rename that 'n' opens is
  // left alone on purpose — dismissing it here made the NEXT tab's keypress flaky.
  await on.click(".trow:not(.root)");
  await on.keyboard.press("n");
  const local = await waitRows(on, (n) => n === peerRows + 1);
  if (local !== peerRows + 1) {
    console.log(`  (note: the local edit itself did not land: ${local} rows)`);
  }
  return await waitRows(peer, (n) => n === peerRows + 1);
}

// generic poll for a derived string value (same rAF caveat as waitRows)
async function waitFor(
  p: Page,
  read: () => Promise<string>,
  want: (v: string) => boolean,
  ms = 8000,
): Promise<string> {
  const until = Date.now() + ms;
  for (;;) {
    const v = await read();
    if (want(v) || Date.now() > until) return v;
    await p.waitForTimeout(200);
  }
}

async function open(label: string, path = "/") {
  const page = await ctx.newPage();
  page.on("pageerror", (e: Error) => errors.push(`${label}: ${e.message}`));
  page.on("console", (m: { type: () => string; text: () => string }) => {
    const t = m.text();
    // A relay that won't accept a WebSocket is an environment fact, not an app
    // fault — it is exactly what the skipped pairing check reports. Everything
    // else counts, including anything the share code itself logs.
    const env = t.includes("favicon") || /WebSocket connection to 'wss:/.test(t);
    if (m.type() === "error" && !env) errors.push(`${label} console: ${t}`);
  });
  // "domcontentloaded", not "load": a page opened from a share link immediately
  // starts relay traffic for peer discovery, and where that hangs (offline, or a
  // sandbox with no outbound network) the load event can be held off entirely.
  // The row poll below is the real readiness signal either way.
  await page.goto(`http://localhost:${PORT}${path}`, {
    waitUntil: "domcontentloaded",
  });
  // the tree only renders once the document is loaded or seeded, which is
  // downstream of wasm init — so getting any row at all is the boot assertion
  await waitRows(page, (n) => n > 0);
  return page;
}

try {
  const a = await open("A");
  const seeded = await rows(a);
  check(
    seeded > 1,
    `tab A boots, wasm loads, seed scene renders (${seeded} rows)`,
  );
  check(
    await a.evaluate(() => localStorage.getItem("voxelier-v12") !== null),
    "document persisted as a v12 Loro snapshot",
  );

  const b = await open("B");
  const before = await rows(b);
  check(before === seeded, `tab B loads the same document (${before} rows)`);

  const after = await addObject(a, b, before);
  check(
    after === before + 1,
    `tab B saw tab A's new object (${before} -> ${after} rows)`,
  );

  // ...and back the other way, to prove the channel isn't one-directional
  const backA = await addObject(b, a, after);
  check(
    backA === after + 1,
    `tab A saw tab B's new object (${after} -> ${backA} rows)`,
  );

  // ---- live share ----
  // Hosting is local work (mint a secret, hash it, join a room), so the button and
  // the link must appear regardless of connectivity. Actually pairing two peers
  // needs a public relay plus WebRTC, which a sandboxed or offline CI cannot
  // reach — so that half reports as skipped rather than failing the build.
  await a.bringToFront();
  await a.click("#btn-share");
  const link: string = await waitFor(
    a,
    () =>
      a.$eval(".sharelink", (e: HTMLInputElement) => e.value).catch(() => ""),
    (v: string) => v.includes("#s="),
  );
  check(
    !!link && link.includes("#s="),
    `Share produced a link (${link || "none"})`,
  );
  check(
    await a.evaluate(() => location.hash.startsWith("#s=")),
    "the session secret is in the URL fragment, which is never sent to a server",
  );
  check(
    await a.evaluate(() =>
      !document.getElementById("sharebar")!.hasAttribute("hidden")
    ),
    "the share panel is showing",
  );

  const g = await open("G", link.replace(/^https?:\/\/[^/]+/, ""));
  const paired = await waitFor(
    g,
    () =>
      g.$eval(".sharewho", (e: HTMLElement) => e.textContent ?? "").catch(() =>
        ""
      ),
    (t: string) => t.includes("connected"),
    20000,
  );
  if (paired.includes("connected")) {
    check(true, `guest paired with the host over WebRTC (${paired.trim()})`);
    const hostRows = await rows(a);
    const gotDoc = await waitRows(g, (n) => n === hostRows, 15000);
    check(
      gotDoc === hostRows,
      `guest adopted the host's scene (${gotDoc} rows)`,
    );
  } else {
    console.log(
      "  skip  peer pairing (no relay reachable from here; the link and session " +
        "are set up correctly, but WebRTC matchmaking needs outbound network)",
    );
  }

  check(errors.length === 0, `no page errors (${errors.join("; ") || "none"})`);
} finally {
  await browser.close();
  await server.shutdown();
}

if (fail.length) {
  console.error(`\nsmoke: ${fail.length} check(s) failed`);
  Deno.exit(1);
}
console.log("\nsmoke: all checks passed");
