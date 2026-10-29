// End-to-end smoke test for the built site: boots dist/ in a real browser and
// checks the things unit tests can't reach.
//
// 1. The bundle boots at all. The CRDT layer runs before the first render, so a
//    packaging fault takes the whole editor down rather than degrading — and only
//    a real browser exercises the bundled, minified module graph.
// 2. Cross-tab sync works. Two pages on the SAME document, an edit in one, and the
//    other's scene tree has to follow — in both directions.
// 3. Documents are isolated. Two pages on DIFFERENT documents must not see each
//    other at all; before documents had ids, a single global storage slot and
//    channel meant they merged and overwrote one another.
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

async function open(label: string, path = "/") {
  const page = await ctx.newPage();
  page.on("pageerror", (e: Error) => errors.push(`${label}: ${e.message}`));
  // Playwright auto-dismisses dialogs when nothing is listening, so an alert() is
  // invisible unless captured — which is exactly how a broken share session once
  // passed this test: the error was reported to the user and to nobody else.
  page.on(
    "dialog",
    async (d: { message: () => string; dismiss: () => Promise<void> }) => {
      errors.push(`${label} dialog: ${d.message()}`);
      await d.dismiss();
    },
  );
  page.on("console", (m: { type: () => string; text: () => string }) => {
    const t = m.text();
    if (m.type() === "error" && !t.includes("favicon")) {
      errors.push(`${label} console: ${t}`);
    }
  });
  await page.goto(`http://localhost:${PORT}${path}`, {
    waitUntil: "domcontentloaded",
  });
  // the tree only renders once the document is loaded or seeded, which is
  // downstream of the whole CRDT layer — so getting any row at all is the boot
  // assertion
  await waitRows(page, (n) => n > 0);
  return page;
}

try {
  const a = await open("A");
  const seeded = await rows(a);
  check(
    seeded > 1,
    `tab A boots and renders the seed scene (${seeded} rows)`,
  );
  check(
    await a.evaluate(() => /[#&]doc=[0-9a-z]+/.test(location.hash)),
    "the open document is addressed in the URL fragment",
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

  // ---- document isolation ----
  // A different document in a third tab. It gets its own storage slot and its own
  // cross-tab channel, so nothing it does may reach A or B.
  const beforeIsolation = await rows(a);
  const c = await open("C", "/#doc=zzzzzzzzzzzzzzzz");
  const cSeed = await rows(c);
  check(cSeed > 1, `tab C seeded its own document (${cSeed} rows)`);
  await c.bringToFront();
  await c.keyboard.press("Escape");
  await c.click(".trow:not(.root)");
  await c.keyboard.press("n");
  const cAfter = await waitRows(c, (n) => n === cSeed + 1);
  check(
    cAfter === cSeed + 1,
    `tab C's own edit landed (${cSeed} -> ${cAfter})`,
  );
  // give any cross-talk the same window the sync checks above needed to arrive
  await a.waitForTimeout(1500);
  const aStill = await rows(a);
  check(
    aStill === beforeIsolation,
    `tab A unaffected by the other document (${beforeIsolation} -> ${aStill} rows)`,
  );
  await c.close();

  // ---- agent API ----
  // A browser-driving agent loads a document from a JSON envelope and mutates the
  // live tree through edit(fn). Each successful edit is one undo step; a rejected
  // edit restores its baseline without clobbering an uncommitted UI-side change.
  const d = await open("D", "/#doc=agentapi00000000");
  const office = await Deno.readTextFile(
    "tools/fixtures/office.voxelier.json",
  );
  // deno-lint-ignore no-explicit-any
  const agent = await d.evaluate(async (json: string) => {
    // deno-lint-ignore no-explicit-any
    const v = (globalThis as any).voxelier;
    await v.load(json);

    // read-only views: outline, relations, render
    const outline = v.outline();
    const relations = v.relations();
    const tucked = v.relations(["n85", "n107"]);
    const png = await v.render("top", { size: 256 });
    const img = new Image();
    img.src = png;
    await img.decode();
    const shot = document.createElement("canvas");
    shot.width = img.width;
    shot.height = img.height;
    const g = shot.getContext("2d")!;
    g.drawImage(img, 0, 0);
    const px = g.getImageData(0, 0, img.width, img.height).data;
    let colored = 0;
    for (let i = 0; i < px.length; i += 4) {
      if (px[i] < 248 || px[i + 1] < 248 || px[i + 2] < 248) colored++;
    }

    const before = v.exportJSON();
    const start = v.worldBounds("n56");
    const node = v.findById("n56");
    const x = node.boxes[0].x1 + 5;
    v.edit(() => {
      node.boxes.push({
        x0: x,
        y0: 0,
        z0: 0,
        x1: x + 2,
        y1: 2,
        z1: 2,
        c: 0xff0000,
      });
    });
    const grown = v.worldBounds("n56");
    v.undo();
    const undone = v.exportJSON();

    // an in-place change the way the UI makes it — no API call, no flush
    v.S.root.name = "UI edit";
    const uiBefore = v.exportJSON();

    let overlap = "";
    try {
      v.edit(() => {
        const n = v.findById("n56");
        n.boxes.push({ ...n.boxes[0] });
      });
    } catch (e) {
      overlap = (e as Error).message;
    }
    const afterReject = v.exportJSON();

    let threw = "";
    try {
      v.edit(() => {
        throw new Error("boom");
      });
    } catch (e) {
      threw = (e as Error).message;
    }

    let badPos = "";
    try {
      v.edit(() => {
        v.S.root.children[0].pos = null;
      });
    } catch (e) {
      badPos = (e as Error).message;
    }
    const afterErrors = v.exportJSON();

    let duplicate = "";
    try {
      v.edit(() => {
        v.S.root.children[0].id = v.S.root.id;
      });
    } catch (e) {
      duplicate = (e as Error).message;
    }

    let missing = "";
    try {
      v.edit(() => {
        v.S.root.children[0].id = "";
      });
    } catch (e) {
      missing = (e as Error).message;
    }

    let badBox = "";
    try {
      v.edit(() => {
        v.findById("n56").boxes.push({
          x0: 0,
          y0: 0,
          z0: 0,
          x1: 0,
          y1: 1,
          z1: 1,
          c: 0,
        });
      });
    } catch (e) {
      badBox = (e as Error).message;
    }

    // face-adjacent boxes share a face without sharing a cell: legal
    const obj = v.newObject();
    obj.boxes.push({ x0: 0, y0: 0, z0: 0, x1: 2, y1: 2, z1: 2, c: 0xff0000 });
    obj.boxes.push({ x0: 2, y0: 0, z0: 0, x1: 4, y1: 2, z1: 2, c: 0x00ff00 });
    let touching = "";
    try {
      v.edit((root: { children: unknown[] }) => {
        root.children.push(obj);
      });
    } catch (e) {
      touching = (e as Error).message;
    }

    let badView = "";
    try {
      v.view("toString");
    } catch (e) {
      badView = (e as Error).message;
    }

    const editDiff = v.edit(() => {
      v.findById("n56").pos.x += 1;
    });
    v.undo();

    return {
      before,
      undone,
      uiBefore,
      afterReject,
      afterErrors,
      threw,
      badPos,
      grew: grown.max.x > start.max.x,
      overlap,
      duplicate,
      missing,
      badBox,
      touching,
      hasTouching: v.findById(obj.id) !== null,
      badView,
      outline,
      relations,
      tucked,
      pngW: img.width,
      pngH: img.height,
      colored,
      editDiff,
    };
  }, office);
  check(agent.grew, "agent API: edit changes world bounds");
  check(agent.before === agent.undone, "agent API: undo restores the document");
  check(
    /overlap/.test(agent.overlap),
    "agent API: edit rejects overlapping boxes",
  );
  check(
    agent.afterReject === agent.uiBefore,
    "agent API: rejected edit preserves an uncommitted UI-side change",
  );
  check(
    agent.afterErrors === agent.uiBefore,
    "agent API: failed edits leave the document untouched",
  );
  check(/boom/.test(agent.threw), "agent API: edit rethrows an error from fn");
  check(
    /position/.test(agent.badPos),
    "agent API: edit rejects invalid node positions",
  );
  check(
    /duplicate/.test(agent.duplicate),
    "agent API: edit rejects duplicate node ids",
  );
  check(
    /without an id/.test(agent.missing),
    "agent API: edit rejects missing node ids",
  );
  check(/inverted/.test(agent.badBox), "agent API: edit rejects empty boxes");
  check(
    agent.touching === "" && agent.hasTouching,
    "agent API: edit accepts face-adjacent boxes",
  );
  check(
    /unknown view/.test(agent.badView),
    "agent API: view rejects inherited property names",
  );
  check(
    agent.outline.includes('n9 S "Office"') &&
      agent.outline.includes('n107 O "Chair"'),
    "agent views: outline lists known ids",
  );
  check(
    /(?:n79 "Door" \| n76 "Futon"|n76 "Futon" \| n79 "Door"): z gap 4/.test(
      agent.relations,
    ),
    "agent views: relations reports a known gap",
  );
  check(
    !/overlap/.test(agent.tucked),
    "agent views: relations ignores a chair tucked under a table",
  );
  check(
    agent.pngW === 256 && agent.pngH === 256 && agent.colored > 1000,
    `agent views: render('top') returns a non-blank 256px PNG (${agent.colored} px)`,
  );
  check(
    /n56/.test(agent.editDiff) && /moved/.test(agent.editDiff),
    "agent views: edit returns a diff naming the moved node",
  );
  await d.close();

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
