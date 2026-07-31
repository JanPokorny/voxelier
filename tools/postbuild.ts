// Post-build step: drop stale bundles.
//
// `deno bundle` writes content-hashed filenames and does not clean its output
// directory, so every rebuild leaves the previous bundle behind. Production
// deploys clean the branch, but locally the strays pile up and quietly skew any
// measurement of what the site actually weighs. Keep only what index.html asks for.
const DIST = "dist";

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
console.log(
  pruned.length
    ? `postbuild: pruned stale ${pruned.join(", ")}`
    : "postbuild: clean",
);
