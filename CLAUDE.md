# Rindsviecher – Projektregeln

Browser-Game (three.js), statisch gehostet über GitHub Pages aus `main` (Root).
Ein Push auf `main` ist ein Deployment: https://cgloeckel.github.io/fs-game/

## Versionierung (wichtig)
- Bei **jedem** Deployment die Version in `package.json` erhöhen:
  - kleine Änderungen/Fixes: Patch (1.0.4 → 1.0.5)
  - große Updates (neue Spielmodi, große Features): Minor (1.0.x → 1.1.0)
- Einen Eintrag in `CHANGELOG.md` ergänzen.
- `npm run build` schreibt Version und Build-Datum (Wien) automatisch ins Spiel;
  sie stehen im Hauptmenü unten.

## Ablauf
- Quellcode in `src/`, gebaut wird nach `js/rindsviecher.js` (wird mit eingecheckt).
- Vor jedem Commit: `npm run build`.
- Tests: lokal `python3 -m http.server`, dann mit `?autotest=skirmish&speed=4&quality=low` ein
  CPU-Gefecht laufen lassen; `human=1` macht Team 1 menschlich, `diff=easy|normal|hard`.
- Sprache im Spiel: Deutsch mit derbem österreichischem Schmäh, keine fremden Marken/Figuren.
