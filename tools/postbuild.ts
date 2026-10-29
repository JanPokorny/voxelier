// Post-build step: drop stale bundles.
//
// `bun build` writes content-hashed filenames and does not clean its output
// directory, so every rebuild leaves the previous bundle behind. Production
// deploys clean the branch, but locally the strays pile up and quietly skew any
// measurement of what the site actually weighs. Keep only what index.html asks for.
import { readFileSync, readdirSync, rmSync } from "node:fs";

const DIST = "dist";

let html: string;
try {
  html = readFileSync(`${DIST}/index.html`, "utf8");
} catch {
  process.exit(0); // nothing bundled yet (the `dev` task's first pass)
}
const pruned: string[] = [];
for (const e of readdirSync(DIST, { withFileTypes: true })) {
  if (!e.isFile() || !/\.(js|css)$/.test(e.name)) continue;
  if (html.includes(e.name)) continue;
  rmSync(`${DIST}/${e.name}`);
  pruned.push(e.name);
}
console.log(
  pruned.length
    ? `postbuild: pruned stale ${pruned.join(", ")}`
    : "postbuild: clean",
);
