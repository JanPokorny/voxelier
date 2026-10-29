// End-to-end smoke test for the built site: boots dist/ in a real browser and
// checks the things unit tests can't reach.
//
// 1. The bundle boots at all. A packaging fault takes the whole editor down
//    rather than degrading — only a real browser exercises the bundled graph.
// 2. One document has one editing tab. A second tab is blocked (inert app), and
//    clicking its backdrop hands the lock over without losing the first tab's
//    last (still debounced) edit.
// 3. Old-format records are left untouched, and unreadable library entries are
//    disabled instead of being overwritten.
// 4. Documents are isolated, and a free lock goes to the tab that asks for it.
//
// Usage: bun run build && bun run smoke
// Set VOXELIER_CHROME to a Chromium binary if Playwright's own download is absent.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { chromium } from "playwright";

const PORT = Number(process.env.VOXELIER_PORT ?? 8231);
const DIST = "dist";
const TYPES: Record<string, string> = {
  html: "text/html; charset=utf-8",
  js: "text/javascript; charset=utf-8",
  css: "text/css; charset=utf-8",
};

const server = createServer(async (req, res) => {
  const p = new URL(req.url ?? "/", "http://localhost").pathname;
  if (p === "/favicon.ico") {
    res.writeHead(204).end();
    return;
  }
  const file = p === "/" ? "/index.html" : p;
  const ext = file.split(".").pop() ?? "";
  try {
    const body = await readFile(`${DIST}${file}`);
    res.writeHead(200, {
      "content-type": TYPES[ext] ?? "application/octet-stream",
    });
    res.end(body);
  } catch {
    res.writeHead(404).end("not found");
  }
});
await new Promise<void>((resolve) => server.listen(PORT, resolve));

const fail: string[] = [];
const check = (ok: boolean, what: string) => {
  console.log(`${ok ? "  ok  " : " FAIL "} ${what}`);
  if (!ok) fail.push(what);
};

const exe = process.env.VOXELIER_CHROME;
const browser = await chromium.launch(
  exe
    ? { executablePath: exe, args: ["--no-sandbox"] }
    : { args: ["--no-sandbox"] },
);
const ctx = await browser.newContext();
const errors: string[] = [];

type Page = any;
const rows = (p: Page): Promise<number> =>
  p.$$eval(".trow", (r: unknown[]) => r.length);
const locked = (p: Page): Promise<boolean> =>
  p.evaluate(() => !(document.getElementById("locked") as HTMLElement).hidden);
const inert = (p: Page): Promise<boolean> =>
  p.evaluate(() => (document.getElementById("app") as HTMLElement).inert);
const edit = (p: Page): Promise<void> =>
  p.evaluate(() =>
    document.body.dispatchEvent(
      new KeyboardEvent("keydown", { key: "n", bubbles: true }),
    )
  );

// Poll rather than page.waitForSelector: Playwright drives those waits from a
// requestAnimationFrame loop, which Chromium throttles in a background tab.
async function waitFor(
  p: Page,
  fn: () => Promise<boolean>,
  ms = 8000,
): Promise<boolean> {
  const until = Date.now() + ms;
  for (;;) {
    if (await fn()) return true;
    if (Date.now() > until) return false;
    await p.waitForTimeout(100);
  }
}
const waitRows = (p: Page, want: (n: number) => boolean, ms = 8000) =>
  waitFor(p, async () => want(await rows(p)), ms)
    .then(async () => await rows(p));
const waitLocked = (p: Page, want: boolean, ms = 8000) =>
  waitFor(p, async () => (await locked(p)) === want, ms);

async function open(label: string, path = "/") {
  const page = await ctx.newPage();
  page.on("pageerror", (e: Error) => errors.push(`${label}: ${e.message}`));
  // Playwright auto-dismisses dialogs when nothing is listening, so an alert() is
  // invisible unless captured — which is exactly how a broken import once passed
  // this test: the error was reported to the user and to nobody else.
  page.on(
    "dialog",
    async (d: { message: () => string; dismiss: () => Promise<void> }) => {
      const message = d.message();
      if (!/quota|cannot delete/i.test(message)) {
        errors.push(`${label} dialog: ${message}`);
      }
      await d.dismiss().catch(() => { /* page already closed */ });
    },
  );
  page.on("console", (m: { type: () => string; text: () => string }) => {
    const t = m.text();
    if (
      m.type() === "error" && !t.includes("favicon") && !/quota/i.test(t)
    ) {
      errors.push(`${label} console: ${t}`);
    }
  });
  await page.goto(`http://localhost:${PORT}${path}`, {
    waitUntil: "domcontentloaded",
  });
  return page;
}
const openEditable = async (label: string, path = "/") => {
  const page = await open(label, path);
  await waitRows(page, (n) => n > 0);
  await waitLocked(page, false);
  return page;
};

try {
  const a = await openEditable("A");
  const seeded = await rows(a);
  check(seeded > 1, `tab A boots and renders the seed scene (${seeded} rows)`);
  check(
    await a.evaluate(() => /[#&]doc=[0-9a-z]+/.test(location.hash)),
    "the open document is addressed in the URL fragment",
  );

  // ---- one editor per document ----
  const b = await open("B");
  await waitLocked(b, true);
  check(await inert(b), "tab B is locked out behind an inert app");
  await b.bringToFront();
  await b.keyboard.press("n"); // real shortcut, blocked by inert + readiness guard
  await b.waitForTimeout(400);
  check((await rows(b)) === 0, "the locked-out tab cannot edit");
  const blocked = await b.evaluate(() => {
    try {
      (globalThis as any).voxelier.edit(() => {});
      return "";
    } catch (e) {
      return (e as Error).message;
    }
  });
  check(
    blocked === "document is open for editing in another tab",
    "the locked-out agent API refuses mutations",
  );

  // A's last edit is still inside the 250 ms save debounce when B asks for the
  // lock; the handoff must flush it before releasing.
  await edit(a);
  await b.evaluate(() =>
    (document.getElementById("locked") as HTMLElement).click()
  );
  const firstLocked = await waitLocked(a, true);
  const secondEditing = await waitLocked(b, false);
  const handedRows = await waitRows(b, (n) => n === seeded + 1);
  check(
    firstLocked && secondEditing && handedRows === seeded + 1,
    `click hands over the lock with the pending edit saved (${
      seeded
    } -> ${handedRows})`,
  );

  // ---- handoff mid-gesture ----
  // A lifted selection is carved out of the object. The handoff must stamp it
  // back before flushing, or the geometry is lost.
  const floorId = await b.evaluate(() => {
    const v = (globalThis as any).voxelier;
    const o = v.S.root.children.find((c: any) => c.name === "Floor");
    const bx = o.boxes[0];
    o.boxes = [];
    v.S.editObject = o;
    v.S.path = [v.S.root, o];
    v.S.sel3d = {
      region: { x0: bx.x0, y0: bx.y0, z0: bx.z0, x1: bx.x1, y1: bx.y1, z1: bx.z1 },
      boxes: [bx],
      lifted: true,
    };
    v.S.drag = { mode: "selmove", x: 0, y: 0, sx: 0, sy: 0 };
    return o.id;
  });
  await a.evaluate(() =>
    (document.getElementById("locked") as HTMLElement).click()
  );
  const gestureLocked = await waitLocked(b, true);
  const gestureEditing = await waitLocked(a, false);
  await waitRows(a, (n) => n === seeded + 1);
  const restored = await a.evaluate((id: string) =>
    (globalThis as any).voxelier.findById(id).boxes.length, floorId);
  check(
    gestureLocked && gestureEditing && restored === 1,
    "handoff mid-drag settles a lifted selection back into the object",
  );

  // ---- document isolation ----
  const beforeIsolation = await rows(a);
  const c = await openEditable("C", "/#doc=zzzzzzzzzzzzzzzz");
  const cSeed = await rows(c);
  check(cSeed > 1, `tab C seeded its own document (${cSeed} rows)`);
  await edit(c);
  const cAfter = await waitRows(c, (n) => n === cSeed + 1);
  check(cAfter === cSeed + 1, `tab C's own edit landed (${cSeed} -> ${cAfter})`);
  await a.waitForTimeout(600);
  const aStill = await rows(a);
  check(
    aStill === beforeIsolation,
    `tab A unaffected by the other document (${beforeIsolation} -> ${aStill} rows)`,
  );
  await c.close();

  // ---- stale blocked tabs hold no lock request ----
  // B and C are both blocked; only C clicks, so C must get the lock, not the
  // tab that merely opened the document earlier.
  const tId = "threetabs000000001";
  const t1 = await openEditable("T1", `/#doc=${tId}`);
  await t1.evaluate(() => {
    const v = (globalThis as any).voxelier;
    v.edit((root: any) => {
      root.name = "ThreeTabs";
    });
  });
  const t2 = await open("T2", `/#doc=${tId}`);
  const t3 = await open("T3", `/#doc=${tId}`);
  await waitLocked(t2, true);
  await waitLocked(t3, true);
  await t3.evaluate(() =>
    (document.getElementById("locked") as HTMLElement).click()
  );
  const t3Editing = await waitLocked(t3, false);
  const t1Locked = await waitLocked(t1, true);
  const t2Locked = await waitLocked(t2, true);
  check(
    t3Editing && t1Locked && t2Locked,
    "three tabs: the clicking tab takes over, not the older blocked tab",
  );

  // ---- deleting a document held elsewhere is refused ----
  const dm = await openEditable("DM", "/#doc=manager000000001");
  await dm.click("#btn-docs");
  const deleteHeld = await dm.evaluate(async (id: string) => {
    (window as any).confirm = () => true;
    const row = [...document.querySelectorAll(".docrow")].find((r) =>
      r.textContent?.includes("ThreeTabs")
    );
    (row?.querySelector(".docdel") as HTMLElement | null)?.click();
    await new Promise((r) => setTimeout(r, 100));
    return {
      found: !!row,
      exists: localStorage.getItem(`voxelier-doc:${id}`) !== null,
    };
  }, tId);
  check(
    deleteHeld.found && deleteHeld.exists,
    "delete of a document held by another tab is refused",
  );
  await dm.close();

  // ---- pagehide flushes a debounced edit ----
  const ph = await openEditable("PH", "/#doc=pagehide00000001");
  const pagehide = await ph.evaluate(() => {
    const v = (globalThis as any).voxelier;
    const before = v.S.root.children.length;
    document.body.dispatchEvent(
      new KeyboardEvent("keydown", { key: "n", bubbles: true }),
    );
    window.dispatchEvent(new PageTransitionEvent("pagehide"));
    const id = new URLSearchParams(location.hash.slice(1)).get("doc")!;
    const stored = JSON.parse(localStorage.getItem(`voxelier-doc:${id}`)!);
    return { before, after: stored.root.c.length };
  });
  check(
    pagehide.after === pagehide.before + 1,
    `pagehide flushes the pending edit (${
      pagehide.before
    } -> ${pagehide.after} children)`,
  );
  await ph.close();

  // ---- mid-paint pagehide saves ----
  const pp = await openEditable("PP", "/#doc=paint00000000001");
  const painted = await pp.evaluate(() => {
    const v = (globalThis as any).voxelier;
    v.S.root.name = "Painted";
    v.S.painting = true; // the model is already mutated, save waits for pointerup
    window.dispatchEvent(new PageTransitionEvent("pagehide"));
    const id = new URLSearchParams(location.hash.slice(1)).get("doc")!;
    return JSON.parse(localStorage.getItem(`voxelier-doc:${id}`)!).root.nm;
  });
  check(painted === "Painted", "pagehide saves a mid-paint gesture");
  await pp.close();

  // ---- direct-API quota failure keeps the document dirty ----
  const qt = await openEditable("QT", "/#doc=quota00000000001");
  const quota = await qt.evaluate(() => {
    const set = Storage.prototype.setItem;
    Storage.prototype.setItem = function (key: string, value: string) {
      if (key.startsWith("voxelier-doc:")) {
        throw new DOMException("full", "QuotaExceededError");
      }
      return set.call(this, key, value);
    };
    const v = (globalThis as any).voxelier;
    v.edit((root: any) => {
      root.name = "quota-edit";
    }); // its synchronous flush fails
    const id = new URLSearchParams(location.hash.slice(1)).get("doc")!;
    const stored = JSON.parse(localStorage.getItem(`voxelier-doc:${id}`)!);
    const e = new Event("beforeunload", { cancelable: true });
    window.dispatchEvent(e);
    return {
      prompt: e.defaultPrevented,
      stored: stored.root.nm,
      live: v.S.root.name,
    };
  });
  check(
    quota.prompt && quota.stored !== quota.live,
    "direct-API quota failure keeps the document dirty and prompts on unload",
  );
  await qt.close();

  // ---- focused rename commits before handoff, then stops writing ----
  const renameId = "renamehand00000001";
  const rh = await openEditable("RH", `/#doc=${renameId}`);
  const rx = await open("RX", `/#doc=${renameId}`);
  await waitLocked(rx, true);
  await rh.click(".trow.root", { button: "right" });
  await rh.click(".ctxitem:has-text('Rename')");
  await rh.fill(".nminput", "RenamedHandoff");
  await rh.evaluate(() => {
    const set = Storage.prototype.setItem;
    (window as any).__docWrites = 0;
    Storage.prototype.setItem = function (key: string, value: string) {
      if (key.startsWith("voxelier-doc:")) (window as any).__docWrites++;
      return set.call(this, key, value);
    };
  });
  const renameFocused = await rh.evaluate(() =>
    document.activeElement?.classList.contains("nminput") === true
  );
  await rx.evaluate(() =>
    (document.getElementById("locked") as HTMLElement).click()
  );
  const renameHanded = await waitLocked(rx, false);
  await rh.waitForTimeout(300);
  const renameResult = await rh.evaluate(() =>
    (window as any).__docWrites as number
  );
  const renamed = await rx.evaluate(() =>
    (globalThis as any).voxelier.S.root.name
  );
  check(
    renameFocused && renameHanded && renamed === "RenamedHandoff" &&
      renameResult === 1,
    "focused rename commits before handoff and writes no more after release",
  );
  await rh.close();
  await rx.close();

  // ---- two tabs on different documents both reach the library ----
  const la = await openEditable("LA", "/#doc=liba00000000001");
  const lb = await openEditable("LB", "/#doc=libb00000000001");
  await la.evaluate(() => {
    const v = (globalThis as any).voxelier;
    v.edit((root: any) => {
      root.name = "LibraryA";
    });
  });
  await lb.evaluate(() => {
    const v = (globalThis as any).voxelier;
    v.edit((root: any) => {
      root.name = "LibraryB";
    });
  });
  await Promise.all([
    la.evaluate(() => {
      const v = (globalThis as any).voxelier;
      v.edit((root: any) => {
        root.name = "LibraryA2";
      });
    }),
    lb.evaluate(() => {
      const v = (globalThis as any).voxelier;
      v.edit((root: any) => {
        root.name = "LibraryB2";
      });
    }),
  ]);
  const lm = await openEditable("LM", "/#doc=libmgr000000001");
  await lm.click("#btn-docs");
  const bothListed = await waitFor(
    lm,
    () =>
      lm.evaluate(() => {
        const names = [...document.querySelectorAll(".docopen")].map((b) =>
          b.textContent
        );
        return names.includes("LibraryA2") && names.includes("LibraryB2");
      }),
  );
  check(
    bothListed,
    "two tabs on different documents both appear in the library",
  );
  await la.close();
  await lb.close();
  await lm.close();

  // ---- agent API ----
  // A browser-driving agent loads a document from a JSON envelope and mutates the
  // live tree through edit(fn); the tab must own the lock first.
  const d = await openEditable("D", "/#doc=agentapi00000000");
  const office = await readFile("tools/fixtures/office.voxelier.json", "utf8");
  const agent = await d.evaluate(async (json: string) => {
    const v = (globalThis as any).voxelier;
    await v.load(json);

    // north: edit -> export -> storage -> import, and compass direction mapping
    const outlineDefault = v.outline();
    const northDoc = new URLSearchParams(location.hash.slice(1)).get("doc")!;
    v.edit((root: any) => {
      root.north = "+x";
    });
    const northExport = v.exportJSON();
    const northStored = JSON.parse(
      localStorage.getItem(`voxelier-doc:${northDoc}`)!,
    ).root.n;
    const northClear = JSON.stringify(v.clearance("n107", "n")) ===
      JSON.stringify(v.clearance("n107", "+x"));
    await v.load(northExport);
    const northImported = v.S.root.north;
    const outlineNorth = v.outline();
    v.edit((root: any) => {
      root.north = "-z";
    });

    // read-only views: outline, relations, render
    const outline = v.outline();
    const nestedOutline = v.outline("n28");
    const relations = v.relations();
    const tucked = v.relations(["n85", "n107"]);
    const stats = async (url: string) => {
      const im = new Image();
      im.src = url;
      await im.decode();
      const c = document.createElement("canvas");
      c.width = im.width;
      c.height = im.height;
      const x = c.getContext("2d")!;
      x.drawImage(im, 0, 0);
      const d = x.getImageData(0, 0, c.width, c.height).data;
      let n = 0, blue = 0;
      for (let i = 0; i < d.length; i += 4) {
        if (d[i] < 248 || d[i + 1] < 248 || d[i + 2] < 248) {
          n++;
          if (d[i + 2] > d[i] && d[i + 2] > d[i + 1]) blue++;
        }
      }
      return { w: im.width, h: im.height, colored: n, blue };
    };
    const topUrl = await v.render("top", {
      size: 256,
      grid: false,
      labels: false,
    });
    const top = await stats(topUrl);
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

    // a hidden descendant must not contribute geometry to its visible parent
    v.edit(() => {
      const o = v.newObject();
      o.vis = "hidden";
      o.boxes.push({
        x0: -1000,
        y0: -1000,
        z0: -1000,
        x1: 1000,
        y1: 1000,
        z1: 1000,
        c: 0xff0000,
      });
      v.findById("n44").children.push(o);
    });
    const hiddenRel = v.relations(["n44", "n110"]);
    v.undo();

    // rotating a parent moves its children's world bounds
    const rotatedDiff = v.edit(() => {
      v.findById("n44").rot = 1;
    });
    v.undo();

    // recolour a sibling blue: an isolate render must not leak it
    v.edit(() => {
      for (const b of v.findById("n69").boxes) b.c = 0x0000ff;
    });
    const isolated = await stats(
      await v.render("top", {
        focus: ["n28"],
        isolate: true,
        size: 256,
        grid: false,
        labels: false,
      }),
    );
    const all = await stats(
      await v.render("top", { size: 256, grid: false, labels: false }),
    );
    v.undo();

    // labels: record the strings the renderer actually draws
    const drawn: string[] = [];
    const proto = CanvasRenderingContext2D.prototype;
    const fillText = proto.fillText;
    proto.fillText = function (
      this: CanvasRenderingContext2D,
      t: string,
      ...a: [number, number]
    ) {
      drawn.push(t);
      return fillText.call(this, t, ...a);
    } as typeof proto.fillText;
    await v.render("top", { size: 256, grid: false });
    proto.fillText = fillText;

    // relations(ids) against every visible object, not just the listed ones;
    // a hidden variant is still answered, and a child never matches its parent
    const doorRel = v.relations(["n79"]);
    const hiddenVariant = v.relations(["n46"]);
    const nested = v.relations(["n28"]);
    // clearance: the chair's back to the mattress across a height gap
    const clear = v.clearance("n107", "+z");
    const nestedClear = v.clearance("n28", "+z");

    // variants: clone as a sibling, show as one edit, undo reports the change
    const cloneId = v.clone("n46");
    const clone = v.findById(cloneId)!;
    const cloneIsSibling = v.S.root.children.some((c: any) => c.id === cloneId);
    const freshIds = clone.children.every((c: any, i: number) =>
      c.id !== v.findById("n46").children[i].id
    );
    const showDiff = v.show(cloneId);
    const shownSiblings = v.S.root.children
      .filter((c: any) => c.vis === "visible")
      .map((c: any) => c.id);
    const undoDiff = v.undo();
    const restored = v.findById("n46").vis;
    v.undo(); // drop the clone again
    const cloneGone = v.findById(cloneId) === null;

    // shape helpers: a round pot and a groove carved through it
    const pot = v.voxelize(
      (x: number, y: number, z: number) =>
        (x - 8) ** 2 + (z - 8) ** 2 <= 25 && y < 10 ? 0xcb997e : null,
      { x0: 0, y0: 0, z0: 0, x1: 17, y1: 10, z1: 17 },
    );
    const cells = (bs: any[]) =>
      bs.reduce((n, b) =>
        n + (b.x1 - b.x0) * (b.y1 - b.y0) * (b.z1 - b.z0), 0);
    const potCells = cells(pot);
    const carved = v.carve(pot, (x: number) => x === 8);
    let unsafeBounds = "";
    try {
      v.voxelize(() => null, {
        x0: Number.MAX_SAFE_INTEGER,
        y0: 0,
        z0: 0,
        x1: Number.MAX_SAFE_INTEGER + 2,
        y1: 1,
        z1: 1,
      });
    } catch (e) {
      unsafeBounds = (e as Error).message;
    }
    const shapeOk = pot.length > 0 && potCells > 0 &&
      pot.length < potCells && cells(carved) < potCells &&
      /safe integer/.test(unsafeBounds);

    // distances and relation kinds on the office
    const near = v.distance("n107", "n3.cg40m8");
    const overlapRels = v.relations(undefined, { only: "overlap" });
    const gapRels = v.relations(undefined, { only: "gap" });
    const touchRels = v.relations(undefined, { only: "touch" });
    const distancesOk = Math.abs(near.distance - Math.hypot(near.x, near.y, near.z)) < 1e-9 &&
      near.distance > 0;
    const onlyOk = !/ \| /.test(overlapRels) && !/ ~ /.test(gapRels) &&
      !/ ~ /.test(touchRels);

    // two probes in a column: the near one hides the far one from an east
    // elevation until hide/cutaway removes it. Spy on the labels actually drawn.
    const front = v.newObject();
    front.name = "FrontProbe";
    front.pos = { x: 20, y: 1000, z: 0 };
    front.boxes.push({
      x0: 0, y0: 0, z0: 0, x1: 20, y1: 20, z1: 20, c: 0x0000ff,
    });
    const back = v.newObject();
    back.name = "BackProbe";
    back.pos = { x: 0, y: 1000, z: 0 };
    back.boxes.push({
      x0: 0, y0: 0, z0: 0, x1: 20, y1: 20, z1: 20, c: 0xff0000,
    });
    const below = v.newObject();
    below.name = "BelowProbe";
    below.pos = { x: 0, y: 0, z: 10000 };
    below.boxes.push({
      x0: 0, y0: 0, z0: 0, x1: 20, y1: 10, z1: 20, c: 0x00ff00,
    });
    const above = v.newObject();
    above.name = "AboveProbe";
    above.pos = { x: 0, y: 200, z: 10000 };
    above.boxes.push({
      x0: 0, y0: 0, z0: 0, x1: 20, y1: 10, z1: 20, c: 0x00ffff,
    });
    const repackA = v.newObject();
    repackA.name = "RepackA";
    repackA.pos = { x: 0, y: 1000, z: 10000 };
    repackA.boxes.push({
      x0: 0, y0: 0, z0: 0, x1: 20, y1: 10, z1: 10, c: 0x123456,
    });
    const repackB = v.newObject();
    repackB.name = "RepackB";
    repackB.pos = { x: 15, y: 1020, z: 10000 };
    repackB.boxes.push({
      x0: 0, y0: 0, z0: 0, x1: 2, y1: 10, z1: 10, c: 0x654321,
    });
    const bandA = v.newObject();
    bandA.name = "BandA";
    bandA.pos = { x: 0, y: 1000, z: 20000 };
    bandA.boxes.push(
      { x0: 0, y0: 0, z0: 0, x1: 10, y1: 10, z1: 10, c: 1 },
      { x0: 50, y0: 100, z0: 0, x1: 60, y1: 110, z1: 10, c: 1 },
    );
    const bandB = v.newObject();
    bandB.name = "BandB";
    bandB.pos = { x: 20, y: 1000, z: 20000 };
    bandB.boxes.push({
      x0: 0, y0: 0, z0: 0, x1: 10, y1: 120, z1: 10, c: 2,
    });
    const stepsA = v.newObject();
    stepsA.name = "StepsA";
    stepsA.pos = { x: 0, y: 1000, z: 30000 };
    stepsA.boxes.push(
      { x0: 0, y0: 0, z0: 0, x1: 10, y1: 10, z1: 10, c: 3 },
      { x0: 0, y0: 0, z0: 20, x1: 20, y1: 10, z1: 30, c: 3 },
    );
    const stepsB = v.newObject();
    stepsB.name = "StepsB";
    stepsB.pos = { x: 15, y: 1000, z: 30000 };
    stepsB.boxes.push({
      x0: 0, y0: 0, z0: 0, x1: 3, y1: 10, z1: 30, c: 4,
    });
    const floorA = v.newObject();
    floorA.name = "FloorA";
    floorA.pos = { x: 0, y: 1010, z: 40000 };
    floorA.boxes.push({
      x0: 0, y0: 0, z0: 0, x1: 10, y1: 10, z1: 10, c: 5,
    });
    const floorB = v.newObject();
    floorB.name = "FloorB";
    floorB.pos = { x: 0, y: 1000, z: 40000 };
    floorB.boxes.push(
      { x0: 0, y0: 0, z0: 0, x1: 10, y1: 5, z1: 10, c: 6 },
      { x0: 10, y0: 0, z0: 0, x1: 20, y1: 5, z1: 10, c: 6 },
    );
    v.edit((root: any) => {
      root.children.push(
        front, back, below, above, repackA, repackB, bandA, bandB, stepsA,
        stepsB, floorA, floorB,
      );
    });
    const labelsFor = async (view: string, opts: any) => {
      const seen: string[] = [];
      const proto = CanvasRenderingContext2D.prototype;
      const fillText = proto.fillText;
      proto.fillText = function (
        this: CanvasRenderingContext2D,
        t: string,
        ...a: [number, number]
      ) {
        seen.push(t);
        return fillText.call(this, t, ...a);
      } as typeof proto.fillText;
      try {
        await v.render(view, { size: 256, grid: false, ...opts });
      } finally {
        proto.fillText = fillText;
      }
      return seen;
    };
    const probe = [front.id, back.id];
    const occluded = await labelsFor("elevation", {
      from: "e",
      focus: probe,
      isolate: true,
    });
    const hiddenProbe = await labelsFor("elevation", {
      from: "e",
      focus: probe,
      isolate: true,
      hide: [front.id],
    });
    const cutProbe = await labelsFor("elevation", {
      from: "e",
      focus: probe,
      isolate: true,
      cutaway: true,
    });
    const cutLabels = await labelsFor("top", {
      focus: [below.id, above.id],
      isolate: true,
    });
    const abutLabels = await labelsFor("elevation", { from: "s", focus: probe, isolate: true });
    const northInto = await labelsFor("elevation", { from: "s", labels: false }), northOut = await labelsFor("elevation", { from: "n", labels: false });
    const clearBefore = v.clearance(repackA.id, "+x");
    v.edit(() => {
      const a = v.findById(repackA.id);
      a.boxes = [
        { x0: 0, y0: 0, z0: 0, x1: 10, y1: 10, z1: 10, c: 0x123456 },
        { x0: 10, y0: 0, z0: 0, x1: 20, y1: 10, z1: 10, c: 0x123456 },
      ];
    });
    const clearAfter = v.clearance(repackA.id, "+x");
    const bandNear = v.distance(bandA.id, bandB.id);
    const bandHigh = v.distance(bandA.id, bandB.id, { y: [1050, 1120] });
    const bandOk = bandHigh.distance > bandNear.distance;
    const steps = v.clearance(stepsA.id, "+x");
    const stepsOk = steps?.id === stepsB.id && steps.distance === 5;
    const floorOk = v.clearance(floorA.id, "+x") === null;
    v.undo(); // drop the split boxes
    v.undo(); // drop the probes
    const cutOk = !occluded.includes("BackProbe") &&
      occluded.includes("FrontProbe") &&
      hiddenProbe.includes("BackProbe") && !hiddenProbe.includes("FrontProbe") &&
      cutProbe.includes("BackProbe") && !cutProbe.includes("FrontProbe");
    const cutLabelsOk = cutLabels.includes("BelowProbe") &&
      !cutLabels.includes("AboveProbe");
    const clearStable = clearBefore === null && clearAfter === null;
    const elev = await stats(
      await v.render("elevation", {
        from: "w", hide: ["n2"], size: 256, grid: false, labels: false,
      }),
    );
    const arb = await stats(
      await v.render("top", {
        azim: 0.4, elev: 0.5, size: 128, grid: false, labels: false,
      }),
    );

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
      nestedOutline,
      relations,
      tucked,
      hiddenRel,
      rotatedDiff,
      pngW: top.w,
      pngH: top.h,
      topMime: topUrl.slice(5, 15),
      colored: top.colored,
      isolatedColored: isolated.colored,
      isolatedBlue: isolated.blue,
      drawn,
      doorRel,
      hiddenVariant,
      nested,
      clear,
      nestedClear,
      cloneIsSibling,
      freshIds,
      showDiff,
      shownSiblings,
      undoDiff,
      restored,
      cloneGone,
      allBlue: all.blue,
      editDiff,
      outlineDefault,
      outlineNorth,
      northStored,
      northImported,
      northClear,
      shapeOk,
      near,
      distancesOk,
      onlyOk,
      cutOk,
      cutLabelsOk,
      abutOk: abutLabels.includes("FrontProbe") && abutLabels.includes("BackProbe"),
      northOk: northInto.includes("⊗ N") && northOut.includes("⊙ N"),
      clearStable,
      bandOk,
      stepsOk,
      floorOk,
      elevColored: elev.colored,
      arbColored: arb.colored,
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
    agent.nestedOutline.includes('n28 O "Cutout table" x-134..-3'),
    "agent views: outline(id) reports world coordinates",
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
    !/overlap/.test(agent.hiddenRel),
    "agent views: relations prunes hidden descendants",
  );
  check(
    agent.pngW === 256 && agent.pngH === 256 && agent.colored > 1000,
    `agent views: render('top') returns a non-blank 256px image (${agent.colored} px)`,
  );
  check(
    agent.topMime === "image/webp",
    `agent views: render defaults to a small webp payload (${agent.topMime})`,
  );
  check(
    agent.isolatedColored > 100 && agent.isolatedBlue < 10 &&
      agent.allBlue > 100,
    `agent views: isolate omits a blue sibling (${agent.isolatedBlue} isolated, ${agent.allBlue} all)`,
  );
  check(
    /n56/.test(agent.editDiff) && /→/.test(agent.editDiff),
    "agent views: edit returns a diff naming the changed node",
  );
  check(
    /n28/.test(agent.rotatedDiff) && /→/.test(agent.rotatedDiff),
    "agent views: diff tracks children under a rotated parent",
  );

  check(
    /north = -z, east = \+x/.test(agent.outlineDefault) &&
      /pos z=-1/.test(agent.outlineDefault) &&
      agent.northStored === "+x" && agent.northImported === "+x" &&
      /north = \+x, east = \+z/.test(agent.outlineNorth) &&
      agent.northClear,
    "agent views: north round-trips and rotates the compass mapping",
  );
  check(
    agent.cutOk && agent.cutLabelsOk && agent.abutOk && agent.northOk &&
      agent.elevColored > 100 && agent.arbColored > 100,
    `agent views: elevations, hide/cutaway, labels, abutting objects and north marker (${
      agent.elevColored}/${agent.arbColored} px)`,
  );
  check(
    agent.shapeOk,
    "agent views: voxelize merges cells and carve removes them",
  );
  check(
    agent.distancesOk && agent.onlyOk && agent.clearStable && agent.bandOk &&
      agent.stepsOk && agent.floorOk,
    `agent views: distance, bands, relation kinds, repack-stable contour clearance (${
      JSON.stringify(agent.near)
    })`,
  );

  // ---- agent files: downloads instead of base64 in the tool result ----
  const downloads: any[] = [];
  d.on("download", (x: any) => downloads.push(x));
  const saved = await d.evaluate(async () => {
    const v = (globalThis as any).voxelier;
    return [
      await v.render("top", {
        size: 256,
        grid: false,
        save: "smoke-render.webp",
      }),
      v.exportJSON({ save: "smoke-scene.voxelier.json" }),
    ];
  });
  await waitFor(d, async () => downloads.length === 2, 5000);
  const files = await Promise.all(downloads.map(async (x: any) => {
    const p = await x.path(); // undefined when downloads are not accepted
    return p ? { name: x.suggestedFilename(), size: (await stat(p)).size } : null;
  }));
  const savedBytes = files.filter(Boolean).map((f) => f!.size);
  console.log(`  ..  downloads: ${JSON.stringify(files)}`);
  check(
    files.length === 2 && savedBytes.every((n) => n > 1000) &&
      saved.every((s) => /^saved /.test(s)),
    `agent API: save downloads files and returns a confirmation (${savedBytes.join("/")} bytes; ${saved[0]})`,
  );
  await d.evaluate(() =>
    (document.getElementById("btn-save") as HTMLElement).click()
  );
  await waitFor(d, async () => downloads.length === 3, 5000);
  check(
    downloads.length === 3,
    "the UI export button still downloads through the shared helper",
  );
  check(
    agent.drawn.includes("Chair") &&
      !agent.drawn.some((l: string) => /^(Walls|Floor|Ceiling)$/.test(l)),
    `agent views: render labels names and skips shells (${
      agent.drawn.join(", ")
    })`,
  );
  check(
    /n76 "Futon": z gap 4/.test(agent.doorRel) &&
      /n110 "Shelving": overlap/.test(agent.hiddenVariant) &&
      !/n44 "/.test(agent.nested),
    `agent views: relations(ids) compares against every visible object (${
      agent.hiddenVariant.split("\n")[0]
    })`,
  );
  check(
    agent.clear?.distance === 10 && agent.clear.id === "n3.cg40m8" &&
      agent.nestedClear.id !== "n44",
    `agent views: clearance measures the nearest box ahead (${
      JSON.stringify(agent.clear)
    })`,
  );
  check(
    agent.cloneIsSibling && agent.freshIds && agent.cloneGone &&
      agent.shownSiblings.length === 2 &&
      agent.shownSiblings.includes("n75") &&
      !agent.showDiff.includes("\"Immutable\"") &&
      /vis visible→hidden/.test(agent.showDiff) &&
      /→/.test(agent.undoDiff) && agent.restored === "hidden",
    `agent views: clone/show switch a sibling variant and undo returns the diff`,
  );
  await d.close();

  // ---- importing a smaller uid does not rewind the old document ----
  const uidId = "uidold00000000001";
  const uo = await openEditable("UO", `/#doc=${uidId}`);
  const oldUid = await uo.evaluate(() =>
    JSON.parse((globalThis as any).voxelier.exportJSON()).uid
  );
  await uo.evaluate(async (json: string) => {
    await (globalThis as any).voxelier.load(json); // office envelope uid = 1
  }, office);
  const savedUid = await uo.evaluate((id: string) =>
    JSON.parse(localStorage.getItem(`voxelier-doc:${id}`)!).uid, uidId);
  const uo2 = await openEditable("UO2", `/#doc=${uidId}`);
  const duplicate = await uo2.evaluate(() => {
    const v = (globalThis as any).voxelier;
    const seen = new Set<string>();
    let dup: string | null = null;
    const walk = (n: any) => {
      if (seen.has(n.id)) dup = n.id;
      seen.add(n.id);
      if (n.type === "scene") n.children.forEach(walk);
    };
    walk(v.S.root);
    const beforeIds = [...seen];
    document.body.dispatchEvent(
      new KeyboardEvent("keydown", { key: "n", bubbles: true }),
    );
    seen.clear();
    dup = null;
    walk(v.S.root);
    const added = [...seen].filter((id) => !beforeIds.includes(id));
    return { dup, added };
  });
  check(
    oldUid > 1 && savedUid === oldUid && duplicate.dup === null &&
      duplicate.added.length === 1,
    "a smaller import uid leaves the old document's counter and ids intact",
  );
  await uo.close();
  await uo2.close();

  // ---- load() mid-lift keeps the carved-out voxels ----
  const liftId = "liftload000000001";
  const ml = await openEditable("ML", `/#doc=${liftId}`);
  const liftFloorId = await ml.evaluate(() => {
    const v = (globalThis as any).voxelier;
    const o = v.S.root.children.find((c: any) => c.name === "Floor");
    const bx = o.boxes[0];
    o.boxes = [];
    v.S.editObject = o;
    v.S.path = [v.S.root, o];
    v.S.sel3d = {
      region: { x0: bx.x0, y0: bx.y0, z0: bx.z0, x1: bx.x1, y1: bx.y1, z1: bx.z1 },
      boxes: [bx],
      lifted: true,
    };
    v.S.drag = { mode: "selmove", x: 0, y: 0, sx: 0, sy: 0 };
    return o.id;
  });
  await ml.evaluate(async (json: string) => {
    await (globalThis as any).voxelier.load(json); // settles the lift first
  }, office);
  const ml2 = await openEditable("ML2", `/#doc=${liftId}`);
  const liftVoxels = await ml2.evaluate((id: string) =>
    (globalThis as any).voxelier.findById(id).boxes.length, liftFloorId);
  check(
    liftVoxels === 1,
    "load() during a lifted selection keeps the carved-out voxels",
  );
  await ml.close();
  await ml2.close();

  // ---- fast document switch ----
  // Switching must flush the departing document before the new lock loads.
  const targetId = "switchto000000001";
  const target = await openEditable("TG", `/#doc=${targetId}`);
  await target.evaluate(() => {
    const v = (globalThis as any).voxelier;
    v.edit((root: any) => {
      root.name = "SwitchTarget";
    });
  });
  await target.waitForTimeout(1200); // let the save and library metadata land
  await target.close(); // release its lock before another tab opens it
  await new Promise((r) => setTimeout(r, 200));

  const fromId = "switchfrom000001";
  const sw = await openEditable("SW", `/#doc=${fromId}`);
  const swBase = await rows(sw);
  await sw.click("#btn-docs");
  const listed = await waitFor(
    sw,
    () =>
      sw.evaluate(() =>
        [...document.querySelectorAll(".docopen")].some((b) =>
          b.textContent === "SwitchTarget"
        )
      ),
  );
  const editLanded = await sw.evaluate(() => {
    const before = document.querySelectorAll(".trow").length;
    document.body.dispatchEvent(
      new KeyboardEvent("keydown", { key: "n", bubbles: true }),
    );
    const after = document.querySelectorAll(".trow").length;
    const row = [...document.querySelectorAll(".docopen")].find((b) =>
      b.textContent === "SwitchTarget"
    ) as HTMLButtonElement | undefined;
    row?.click();
    return !!row && after > before;
  });
  const switched = await waitFor(
    sw,
    () =>
      sw.evaluate(
        (id: string) => new RegExp(`[#&]doc=${id}`).test(location.hash),
        targetId,
      ),
  );
  const switchedEditing = await waitLocked(sw, false);
  await sw.waitForTimeout(400);
  const beforeUndo = await sw.evaluate(() =>
    (globalThis as any).voxelier.exportJSON()
  );
  const afterUndo = await sw.evaluate(() => {
    const v = (globalThis as any).voxelier;
    v.undo();
    return v.exportJSON();
  });
  const fromAgain = await openEditable("SW2", `/#doc=${fromId}`);
  const fromRows = await rows(fromAgain);
  check(
    listed && editLanded,
    "switch test setup: the departing edit and library row are live",
  );
  check(
    fromRows === swBase + 1,
    `fast document switch flushes the departing edit (${
      swBase
    } -> ${fromRows})`,
  );
  check(
    switched && switchedEditing && beforeUndo === afterUndo,
    "library open: undo stays in the newly opened document",
  );

  // ---- import/load baseline ----
  const imp = await openEditable("IMP", "/#doc=importundo00001");
  await imp.evaluate(() => {
    const v = (globalThis as any).voxelier;
    v.edit((root: any) => {
      root.name = "before-load";
    });
  });
  const loaded = await imp.evaluate(async (json: string) => {
    const v = (globalThis as any).voxelier;
    await v.load(json); // resolves only once the new document is owned
    return v.exportJSON();
  }, office);
  const undone = await imp.evaluate(() => {
    const v = (globalThis as any).voxelier;
    v.undo();
    return v.exportJSON();
  });
  check(undone === loaded, "load/import baseline survives undo");

  for (const p of [a, b, t1, t2, t3, sw, fromAgain, imp]) await p.close();

  check(errors.length === 0, `no page errors (${errors.join("; ") || "none"})`);
} finally {
  await browser.close();
  await new Promise<void>((resolve) => server.close(() => resolve()));
}

if (fail.length) {
  console.error(`\nsmoke: ${fail.length} check(s) failed`);
  process.exit(1);
}
console.log("\nsmoke: all checks passed");
