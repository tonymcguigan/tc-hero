# Pick your line – hero animation

Thecosystems "Pick your line" animation for the Tilda site, served via jsDelivr.

## Tilda snippet
Zero Block → Add element → HTML → Edit code. Element size about 760 × 839.

```html
<div id="tcm"></div>
<script src="https://cdn.jsdelivr.net/gh/tonymcguigan/tc-hero@main/pick-your-line/pick-your-line.min.js" defer></script>
```

## Files
- `pick-your-line.min.js` – what the site loads
- `pick-your-line.js` – readable source (edit this, then re-minify to .min.js)
- `Lato-Regular.woff2`, `Lato-Bold.woff2` – Lato 2.015, Latin subset, loaded from this folder

## Settings (top of the script's settings block)
- `CFG` – condition names, scroll target (`#signup`), form field name (`conditions`)
- `ACT` – activity names shown under the end titles
- `QUESTION` – text typed into the search bar
- `REV` – how early spots turn into icons (px from the end)
- `SPOT` – spot radius (icons scale with it)
- `GAP` / `OFF` / `SPEED` – timing of the travelling spots
- `CLICK_DELAY` / `CLICK_MS` / `GO_ON` – the arrow-button "click" after typing

## Updating
jsDelivr caches `@main` for up to 12 hours. After pushing a change, clear it by opening:
https://purge.jsdelivr.net/gh/tonymcguigan/tc-hero@main/pick-your-line/pick-your-line.min.js
