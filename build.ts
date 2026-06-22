// Build: bundle + minify src/main.js with `Deno.bundle` (esbuild under the
// hood), minify the CSS the same way, and inline both into a single
// self-contained dist/index.html (three.js is bundled in, so the page has no
// runtime/CDN dependency). `deno task dev` rebuilds on any change under src/.
const inject = (template: string, marker: string, value: string) =>
  template.replace(marker, () => value);

// `Deno.bundle` is an unstable API (enabled at runtime via --unstable-bundle);
// its types aren't surfaced to `deno check`, so reach it through a typed boundary.
type BundleResult = {
  success: boolean;
  errors: unknown[];
  outputFiles?: { text(): string }[];
};
const denoBundle = (Deno as unknown as {
  bundle: (opts: Record<string, unknown>) => Promise<BundleResult>;
}).bundle;

async function bundle(entrypoint: string) {
  const result = await denoBundle({
    entrypoints: [entrypoint],
    platform: "browser",
    format: "iife",
    minify: true,
    write: false,
  });
  if (!result.success) {
    throw new AggregateError(result.errors, `bundling ${entrypoint} failed`);
  }
  return result.outputFiles![0].text().trim();
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
