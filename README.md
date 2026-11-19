# 🐄 Rindsviecher

**Rundenbasierte 3D-Artillerie-Taktik im Browser – mit Kühen, Stieren und derbem österreichischem Schmäh.**

Ein Fan-Remaster im Geist der rundenbasierten Artillerie-Klassiker aus dem Jahr 2000 – mit eigenen Figuren, eigenem Namen und eigenem Humor. Läuft in Full HD auf Desktop, Tablet und Handy, ohne Installation.

▶️ **Spielen:** https://cgloeckel.github.io/fs-game/

## Features

- **Feldzug mit 12 Einsätzen:** Hochalm, Weinberg, Donau-Au, Kukuruzfeld, Steinbruch und Gletscher, mit Föhnsturm, Nebel, Hochwasser, Minenfeld und Drei-Parteien-Rauferei
- **Bundesheer-Dienstgrade:** vom Rekrut über Gefreiter, Zugsführer und Wachtmeister bis zu Leutnant (Held) und Hauptmann (Legende)
- **Beförderungsbaum mit 4 Laufbahnen:** Schwere Waffen, Pioniere, Sanität und Jäger, dazu Heldenränge; gefallene Viecher bleiben weg (Permadeath)
- **23 Waffen:** Kopfnuss, Dienstpistole, Sturmgewehr, MG, Jagdflinte, Scharfschützengewehr, Mistgabel, Handgranate, Splittergranate, Güllebombe, Wespennest, Panzerfaust, Granatwerfer, Heilige-Kuh-Bombe, Amok-Traktor, Kuhfladen-Mine, Sprengladung, Obstler-Flammenwerfer, Brettljause, Feldlazarett, Fallschirmsprung, Haubitzenfeuer und Abfangjäger
- **Verformbares Gelände:** Krater, Wind, Wasser, Kisten vom Himmel und zerstörbare Bäume und Heuballen
- **CPU-Gegner** in drei Stärken: Sie rechnen Flugbahnen durch, verschätzen sich aber beim Wind, streuen und bauen auch mal an Patzer
- **Schnelles Gefecht** mit 2–4 Teams, auch als Hot-Seat für mehrere Menschen an einem Gerät
- **Neun Fraktionen**, eine pro Bundesland: von der Wiener Grantlergarde bis zur Seewinkler Weinbrigade
- **Touch-Steuerung** mit Joystick und Wischgesten, außerdem Tastatur und Maus
- **Grafik:** automatische Qualitätsstufen und dynamische Auflösung für flüssige Bildraten
- **Synthetischer Sound** (Muhen, Kuhglocken, Explosionen) und eine Polka

## Steuerung

| | Handy & Tablet | Computer |
|---|---|---|
| Gehen / Drehen | Joystick links | W/S, A/D |
| Kamera | Wischen, zwei Finger zoomen | Maus ziehen, Mausrad |
| Hupfen | ⤴ | Leertaste |
| Zielen | 🎯, dann wischen | F oder Rechtsklick, dann Maus bewegen (Maus wird eingefangen) |
| Feuer | 🔥 antippen (halten = Kraft selbst laden) | Linksklick (halten = Kraft selbst laden) |
| Kraft bei Wurfwaffen | ⌖ stellt sie ein | Mausrad oder E |
| Nächstes Ziel | ⌖ | E |
| Zurück | ✖ | Rechtsklick oder Esc |
| Waffenkammer | Waffen-Button | Q oder 1–9 |
| Einheit wechseln | ⇄ | Tab |
| Karte | 🗺️ | M |
| Zug beenden | ⏭ | X |

## Technik

- [three.js](https://threejs.org/) (WebGL), alle Modelle, Texturen und Sounds entstehen prozedural im Code
- Gebündelt mit esbuild zu `js/rindsviecher.js`; statisches Hosting über GitHub Pages

```bash
npm install
npm run build   # baut js/rindsviecher.js
npm run dev     # Watch-Modus
python3 -m http.server 8000   # dann http://localhost:8000
```

Quellcode in `src/`:
- `game.js`: Rundenablauf und Waffenwirkung
- `ai.js`: CPU-Gegner
- `terrain.js` / `world.js`: Insel und Umgebung
- `models.js`: Rindsviecher und Requisiten
- `menus.js` / `hud.js`: Oberfläche
- `campaign.js`: Feldzug und Beförderungen
