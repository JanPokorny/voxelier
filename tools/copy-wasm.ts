// Copy Loro's wasm binary next to the bundle.
//
// `deno bundle` inlines loro-crdt's JS glue but leaves the wasm as a sibling
// asset reference — the emitted bundle resolves it as
// `new URL("./loro_wasm_bg.wasm", import.meta.url)` — and does not emit the file
// itself. Without this step the built site loads and then 404s on the wasm.
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
  console.error(`copy-wasm: expected a cached file: URL, got ${src}`);
  Deno.exit(1);
}

await Deno.mkdir(DIST, { recursive: true });
const bytes = await Deno.readFile(new URL(src));
await Deno.writeFile(`${DIST}/${WASM}`, bytes);

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
const kb = (bytes.length / 1024).toFixed(0);
console.log(
  referenced
    ? `copy-wasm: ${DIST}/${WASM} (${kb}KB)`
    : `copy-wasm: ${DIST}/${WASM} (${kb}KB) — no bundle references it yet`,
);
