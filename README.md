# The Locked Study

A complete static React/Vite/TypeScript/Tailwind browser escape room prototype. It uses image-based room exploration, percentage hotspots, close-ups, inventory, notebook, hints, score, localStorage saves, placeholder audio/video, and a data-driven puzzle chain.


## See it in action

If dependencies install successfully, run the React/Vite source version:

```bash
npm install
npm run dev
```

Then open the Vite URL printed in the terminal, usually `http://localhost:5173/`.

If package installation is blocked, run the static demo build instead:

```bash
npm run build
python3 -m http.server 4173 -d dist
```

Then open `http://localhost:4173/`. The static demo is fully clickable, uses the same placeholder media paths, and demonstrates the room hotspots, puzzle chain, notebook, inventory unlocks, video fallbacks, and save/restart loop without requiring npm dependencies.

## Run locally

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Game flow and answers from clues

1. Calendar close-up shows Oct 18 and year plaque 47 → `1847`.
2. Desk keypad uses `1847`, opens drawer, plays `/videos/desk-unlock-placeholder.mp4`.
3. Red lens over photograph reveals `△ ○ ✦ ♜`.
4. Bookshelf order uses those symbols and opens projector.
5. Projector assembly uses metal gear + projector slide.
6. Star chart maps projection to `☉ ☽ ♃ ♄ ✦`.
7. Cabinet symbol lock uses that sequence.
8. Cipher disk uses pocket-watch offset 7 to decode `TIME REFLECTS WHAT MEMORY HIDES`.
9. Mirror reads reversed clock markings as `10:35`.
10. Clock set to `10:35` powers machine.
11. Machine light sequence is `amber blue amber white blue` with visual alternatives.
12. Final door code displayed by machine is `7391`.

Mistakes never permanently block progress; hints and notebook entries remain available.

## Architecture

Game content is editable without component rewrites:

- `src/game-data/rooms.ts` — rooms, state images, percentage-based hotspots.
- `src/game-data/puzzles.ts` — puzzle types, answers, grants, videos, hints.
- `src/game-data/items.ts` — inventory item metadata.
- `src/game-data/videos.ts` — cinematic clips, posters, captions.
- `src/stores/useGameState.ts` — versioned localStorage save, scoring, modes.

## Replacing placeholder media

Keep the same public paths or update only data files. Use 16:9 room images, 4:3 close-ups, transparent inventory SVG/PNG/WebP, and short 3–10 second videos. Before/after states should preserve camera angle, object placement, lighting direction, and hotspot alignment. If a video fails, game logic still updates on puzzle solve.

## Deployment

### GitHub Pages
Set Vite `base` as needed in `vite.config.ts`, run `npm run build`, and publish `dist/` with GitHub Pages or an action.

### Netlify
Build command: `npm run build`; publish directory: `dist`.

### Cloudflare Pages
Framework preset: Vite; build command: `npm run build`; output directory: `dist`.

## Accessibility and mobile

The game includes focusable hotspots, accessible labels, keyboard-submit puzzle inputs, captions/transcripts, non-audio clue alternatives, reduced-motion fallback, high-contrast-ready styling, large tap targets, responsive bottom-sheet puzzle panels, pinch/wheel zoom, panning, and a mobile landscape suggestion.
