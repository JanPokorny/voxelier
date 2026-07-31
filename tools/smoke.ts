// End-to-end smoke test for the built site: boots dist/ in a real browser and
// checks the two things unit tests can't reach.
//
// 1. The wasm actually loads. `deno bundle` inlines Loro's JS glue but only
//    references the wasm as a sibling asset, and the bundler/browser targets ship
//    different binaries for the same version — so a wrong or missing copy (see
//    tools/copy-wasm.ts) produces a site that builds cleanly and then dies on
//    boot. Only a real browser catches that.
// 2. Cross-tab sync works. Two pages, an edit in one, and the other's scene tree
//    has to follow.
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

async function open(label: string) {
  const page = await ctx.newPage();
  page.on("pageerror", (e: Error) => errors.push(`${label}: ${e.message}`));
  page.on("console", (m: { type: () => string; text: () => string }) => {
    const t = m.text();
    if (m.type() === "error" && !t.includes("favicon")) {
      errors.push(`${label} console: ${t}`);
    }
  });
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: "load" });
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
