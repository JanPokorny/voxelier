// Build: bundle + minify src/main.ts with `deno bundle` (esbuild under the
// hood), minify the CSS the same way, and inline both into a single
// self-contained dist/index.html (three.js is bundled in, so the page has no
// runtime/CDN dependency). `deno task dev` rebuilds on any change under src/.
//
// We shell out to the `deno bundle` CLI rather than the programmatic
// `Deno.bundle()` API: the CLI is the stable interface (no --unstable-bundle
// flag, no untyped API), and with no -o flag it writes the bundle to stdout,
// which is exactly the in-memory string we want to inline.
const inject = (template: string, marker: string, value: string) =>
  template.replace(marker, () => value);

async function bundle(entrypoint: string): Promise<string> {
  const { success, stdout, stderr } = await new Deno.Command("deno", {
    args: [
      "bundle",
      "--platform",
      "browser",
      "--format",
      "iife",
      "--minify",
      entrypoint,
    ],
    stdout: "piped",
    stderr: "piped",
  }).output();
  if (!success) {
    throw new Error(
      `bundling ${entrypoint} failed:\n${new TextDecoder().decode(stderr)}`,
    );
  }
  return new TextDecoder().decode(stdout).trim();
}

async function build() {
  const js = await bundle("src/main.ts");
  const css = await bundle("src/style.css");

  const template = await Deno.readTextFile("src/template.html");
  let html = inject(template, "/*STYLE*/", css);
  html = inject(html, "/*SCRIPT*/", js);

  await Deno.mkdir("dist", { recursive: true });
  await Deno.writeTextFile("dist/index.html", html);
  console.log(`built dist/index.html (${(html.length / 1024).toFixed(1)} KB)`);
}

await build();

if (Deno.args.includes("--watch")) {
  console.log("watching src/ …");
  let t: number | undefined;
  for await (const _ of Deno.watchFs("src")) {
    clearTimeout(t);
    t = setTimeout(() => build().catch((e) => console.error(e.message)), 100);
  }
}
