// Baut js/rindsviecher.js und schreibt Version + Datum ins Spiel.
// Version kommt aus package.json, das Datum ist der Tag des Builds (Wien).
import { build, context } from 'esbuild';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const date = new Intl.DateTimeFormat('de-AT', {
  timeZone: 'Europe/Vienna', day: '2-digit', month: '2-digit', year: 'numeric',
}).format(new Date());
const watch = process.argv.includes('--watch');

const opts = {
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: !watch,
  format: 'iife',
  target: 'es2020',
  outfile: 'js/rindsviecher.js',
  define: { __VERSION__: JSON.stringify(pkg.version), __BUILD_DATE__: JSON.stringify(date) },
  logLevel: 'info',
};

if (watch) {
  const ctx = await context(opts);
  await ctx.watch();
} else {
  await build(opts);
  console.log(`Rindsviecher v${pkg.version} · ${date}`);
}
