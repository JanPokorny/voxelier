// Post-build step: put Loro's wasm next to the bundle, then drop stale bundles.
//
// The wasm copy is not optional. `deno bundle` inlines loro-crdt's JS glue but
// leaves the wasm as a sibling asset reference — the emitted bundle resolves it as
// `new URL("./loro_wasm_bg.wasm", import.meta.url)` — and never emits the file, so
// without this step the built site loads and then 404s on boot.
//
// The bundler and browser targets ship DIFFERENT wasm binaries for the same
// version, so the one we copy has to match the target the bundler actually
// resolved (`import`/`default` -> bundler/). If Deno ever changes which export
// condition it picks, the copied binary would stop matching the inlined glue, so
// tools/smoke.ts boots the built site in Chromium and fails loudly on a mismatch
// rather than letting a broken bundle ship.
const WASM = "loro_wasm_bg.wasm";
const DIST = "dist";

const src = import.meta.resolve(`loro-crdt/bundler/${WASM}`);
if (!src.startsWith("file:")) {
  console.error(`postbuild: expected a cached file: URL, got ${src}`);
  Deno.exit(1);
}

await Deno.mkdir(DIST, { recursive: true });
const bytes = await Deno.readFile(new URL(src));
await Deno.writeFile(`${DIST}/${WASM}`, bytes);
const kb = (bytes.length / 1024).toFixed(0);

// The bundle is written before this runs (except under `deno task dev`, which
// copies first and then watches), so when it's there, assert the reference we're
// satisfying actually exists.
let referenced = false;
for await (const e of Deno.readDir(DIST)) {
  if (!e.isFile || !e.name.endsWith(".js")) continue;
  if ((await Deno.readTextFile(`${DIST}/${e.name}`)).includes(WASM)) {
    referenced = true;
    break;
  }
}
console.log(
  referenced
    ? `postbuild: ${DIST}/${WASM} (${kb}KB)`
    : `postbuild: ${DIST}/${WASM} (${kb}KB) — no bundle references it yet`,
);

// `deno bundle` writes content-hashed filenames and does not clean its output
// directory, so every rebuild leaves the previous bundle behind. Production
// deploys clean the branch, but locally the strays pile up and quietly skew any
// measurement of what the site actually weighs. Keep only what index.html asks
// for; the wasm and the html itself are never candidates.
let html: string;
try {
  html = await Deno.readTextFile(`${DIST}/index.html`);
} catch {
  Deno.exit(0); // nothing bundled yet (the `dev` task's first pass)
}
const pruned: string[] = [];
for (const e of Deno.readDirSync(DIST)) {
  if (!e.isFile || !/\.(js|css)$/.test(e.name)) continue;
  if (html.includes(e.name)) continue;
  Deno.removeSync(`${DIST}/${e.name}`);
  pruned.push(e.name);
}
if (pruned.length) console.log(`postbuild: pruned stale ${pruned.join(", ")}`);
