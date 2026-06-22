// Build: bundle + minify src/main.js with esbuild, minify the CSS, and inline
// both into a single self-contained dist/index.html (three.js is bundled in, so
// the page has no runtime/CDN dependencies). `node build.mjs --watch` rebuilds
// on any change under src/.
import * as esbuild from 'esbuild';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { watch as fsWatch } from 'node:fs';

const inject = (template, marker, value) => template.replace(marker, () => value);

async function build() {
  const bundle = await esbuild.build({
    entryPoints: ['src/main.js'],
    bundle: true,
    minify: true,
    format: 'iife',
    target: ['es2020'],
    legalComments: 'none',
    write: false,
  });
  const js = bundle.outputFiles[0].text.trim();

  const css = (await esbuild.transform(await readFile('src/style.css', 'utf8'),
    { loader: 'css', minify: true })).code.trim();

  const template = await readFile('src/template.html', 'utf8');
  let html = inject(template, '/*STYLE*/', css);
  html = inject(html, '/*SCRIPT*/', js);

  await mkdir('dist', { recursive: true });
  await writeFile('dist/index.html', html);
  console.log(`built dist/index.html (${(html.length / 1024).toFixed(1)} KB)`);
}

await build();

if (process.argv.includes('--watch')) {
  console.log('watching src/ …');
  let t;
  fsWatch('src', { recursive: true }, () => {
    clearTimeout(t);
    t = setTimeout(() => build().catch(e => console.error(e.message)), 100);
  });
}
