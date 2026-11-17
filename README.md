# 🐄 Rindsviecher

**Rundenbasierte 3D-Artillerie-Taktik im Browser – mit Kühen, Stieren und derbem österreichischem Schmäh.**

Ein Fan-Remaster im Geist der rundenbasierten Artillerie-Klassiker aus dem Jahr 2000 – mit eigenen Figuren, eigenem Namen und eigenem Humor. Läuft in Full HD auf Desktop, Tablet und Handy, ohne Installation.

▶️ **Spielen:** https://cgloeckel.github.io/fs-game/

## Features

- **Feldzug mit 12 Einsätzen:** Hochalm, Weinberg, Donau-Au, Kukuruzfeld, Steinbruch und Gletscher, mit Föhnsturm, Nebel, Hochwasser, Minenfeld und Drei-Parteien-Rauferei
- **Bundesheer-Dienstgrade:** vom Rekrut über Gefreiter, Zugsführer und Wachtmeister bis zu Leutnant (Held) und Hauptmann (Legende)
- **Beförderungsbaum mit 4 Laufbahnen:** Schwere Waffen, Pioniere, Sanität und Jäger, dazu Heldenränge; gefallene Viecher bleiben weg (Permadeath)
- **20 Waffen:** Kopfnuss, Dienstpistole, Sturmgewehr, MG, Jagdflinte, Scharfschützengewehr, Handgranate, Splittergranate, Güllebombe, Panzerfaust, Granatwerfer, Kuhfladen-Mine, Sprengladung, Obstler-Flammenwerfer, Brettljause, Feldlazarett, Fallschirmsprung, Haubitzenfeuer, Abfangjäger und die Heilige-Kuh-Bombe
- **Verformbares Gelände:** Krater, Wind, Wasser, Kisten vom Himmel und zerstörbare Bäume und Heuballen
- **CPU-Gegner** in drei Stärken, die Flugbahnen samt Wind durchrechnen
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
| Zielen | 🎯, dann wischen | F, dann A/D + W/S oder Maus |
| Kraft & Feuer | 🔥 halten, loslassen | Leertaste halten, loslassen |
| Nächstes Ziel | ⌖ | E |
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
