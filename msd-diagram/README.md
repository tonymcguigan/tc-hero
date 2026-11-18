# MSD diagram – hero animation

Thecosystems MSD diagram (top node → ChatGPT Plugin → askTheco → Dyslipidaemia / Prostate Cancer), served via jsDelivr.

## Tilda snippet
Zero Block → HTML element, about 550 × 862 (height = width × 1.568), centred on the grid
(Container: Grid, Axis X: Center, X: 0).

```html
<div id="tcm"></div>
<script src="https://cdn.jsdelivr.net/gh/tonymcguigan/tc-hero@main/msd-diagram/msd-diagram.min.js?cb=1" defer></script>
```

## Files
- `msd-diagram.min.js` – what the site loads
- `msd-diagram.js` – readable source
- `Lato-Regular.woff2`, `Lato-Bold.woff2` – Lato 2.015, Latin subset, loaded from this folder

## Settings (top of the script's settings block)
- `CFG` – condition names, scroll target (`#signup`), form field name (`conditions`)
- `ACT` – activity names shown under the end titles
- `QUESTION` – text typed into the search bar
- `GAP` / `SPEED` – how often spots leave the top node, and how fast they travel
- `REV` – how early spots turn into icons; `SPOT` – spot size
- `PLUG_MS` – length of the ChatGPT Plugin ring pulse

## Updating
Upload new files into this same `msd-diagram` folder (don't drag in a new folder),
then bump `?cb=1` → `?cb=2` in the Tilda snippet and republish.
