# 🐄 Rindsviecher

**Rundenbasierte 3D-Artillerie-Taktik im Browser – mit Kühen, Stieren und derbem österreichischem Schmäh.**

Ein Fan-Remaster im Geist der rundenbasierten Artillerie-Klassiker aus dem Jahr 2000 – mit eigenen Figuren, eigenem Namen und eigenem Humor. Läuft in Full HD auf Desktop, Tablet und Handy, ohne Installation.

▶️ **Spielen:** https://cgloeckel.github.io/fs-game/

## Features

- **Feldzug mit 12 Einsätzen:** Hochalm, Weinberg, Donau-Au, Kukuruzfeld, Steinbruch und Gletscher, mit Föhnsturm, Nebel, Hochwasser, Minenfeld und Drei-Parteien-Rauferei
- **Bundesheer-Dienstgrade:** vom Rekrut über Gefreiter, Zugsführer und Wachtmeister bis zu Leutnant (Held) und Hauptmann (Legende)
- **Beförderungsbaum mit 4 Laufbahnen:** Schwere Waffen, Pioniere, Sanität und Jäger, dazu Heldenränge; gefallene Viecher bleiben weg (Permadeath)
- **26 Waffen und Ausrüstung:** Kopfnuss, Dienstpistole, Sturmgewehr, MG, Jagdflinte, Scharfschützengewehr, Mistgabel, Handgranate, Splittergranate, Güllebombe, Wespennest, Panzerfaust, Granatwerfer, Heilige-Kuh-Bombe, Amok-Traktor, Kuhfladen-Mine, Sprengladung, Obstler-Flammenwerfer, Brettljause, Feldlazarett, Fallschirmsprung, Maulwurfgang, Eingraben, Bretterverschlag, Haubitzenfeuer und Abfangjäger
- **Lebendige Inseln:** Bergsee mit Holzbrücke, Feldweg mit Zaun und Marterl, Wäldchen und Lichtungen, Blumenwiesen, Sonnenblumenfelder, Heumandln, Vogelscheuchen, Seerosen und rauchende Rauchfänge
- **Tiere:** Hoppelhasen (die bei Explosionen eine Flugstunde nehmen), pfeifende Murmeltiere, eine Entenfamilie, Schmetterlinge und kreisende Bussarde – rein zur Zierde, ihnen passiert nix
- **Stellungsbau:** Bretterverschlag zum Rausschießen (kann zerbombt werden), Eingraben und Maulwurfgang
- **Verformbares Gelände:** Krater, Wind, Wasser, Kisten vom Himmel und zerstörbare Bäume, Heuballen und Heumandln
- **CPU-Gegner** in drei Stärken: Sie rechnen Flugbahnen durch, verschätzen sich aber beim Wind, streuen und bauen auch mal an Patzer
- **Schnelles Gefecht** mit 2–4 Teams, wählbarer Kartengröße (klein, mittel, groß) und Zufalls-Fraktionen, auch als Hot-Seat für mehrere Menschen an einem Gerät
- **Zehn Fraktionen** aus ganz Österreich: von der Wiener Grantlergarde bis zu den Waldviertler Mohnzuzlern
- **Touch-Steuerung** mit Joystick und Wischgesten, außerdem Tastatur und Maus
- **Grafik:** automatische Qualitätsstufen und dynamische Auflösung für flüssige Bildraten
- **Synthetischer Sound** (Muhen, Kuhglocken, Explosionen) und eine Polka

## Steuerung

| | Handy & Tablet | Computer |
|---|---|---|
| Gehen / Drehen | Joystick links | W/S, A/D |
| Kamera | Wischen, zwei Finger zoomen | Maus ziehen, Mausrad |
| Hupfen | ⤴ | Leertaste |
| Zielen | 🎯, dann wischen | F oder Rechtsklick; Gewehre: Maus bewegen (Maus wird eingefangen) |
| Wurfwaffen (Granate, Panzerfaust, Mörser …) | 🎯, wischen, ⌖ stellt die Kraft ein | Maus aufs Ziel zeigen und klicken – Winkel, Kraft und Wind rechnet das Spiel; W/S = Bogen hoch/flach, Mausrad = Zoom, A/D = Ansicht drehen |
| Feuer | 🔥 antippen (halten = Kraft selbst laden) | Linksklick |
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
- `terrain.js` / `world.js`: Insel, See, Brücke, Feldweg und Requisiten
- `life.js`: Hasen, Murmeltiere, Enten, Schmetterlinge und Bussarde
- `fort.js`: Bretterverschlag, Eingraben und Maulwurfgang
- `models.js`: Rindsviecher und Requisiten
- `menus.js` / `hud.js`: Oberfläche
- `campaign.js`: Feldzug und Beförderungen
