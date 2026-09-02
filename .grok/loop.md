# The Voice Design — 100-hour improvement loop

Automated, recurring quality loop. Each run ships **one coherent slice**, verifies it, then stops.
Do **not** scaffold a new app. Do **not** add auth or a database. Visual language stays phosphor-on-ground.

## Cadence

Every **5 minutes**. After each successful slice, **push to GitHub** `samrowland472-lang/TheVoice` on `main` under `design/`.
If the previous iteration is < 4 minutes old, polish that slice or skip. Never push empty/placeholder files.

## GitHub (required)

Repo of record: **https://github.com/samrowland472-lang/TheVoice** — folder `design/`.
Confirm file sizes after push (`types.ts` / `store.ts` / `render.ts` / `canvas-stage.tsx` / `export.ts` must be KB, not 11 bytes).

## Product

**The Voice Design** — local-first graphic studio (hub + artboard).
TanStack Start, Zustand, canvas renderer, `localStorage` persistence.
Auth OFF, DB OFF.

## Backlog (priority order)

1. Knife live preview along the whole stroke, not only the pointer tip.
2. Align / distribute using oriented (rotated) boxes instead of axis-aligned ink boxes.

## Done

- Align / distribute bake rotated path islands into world-space ink boxes before explode.
- Knife planarizes figure-eight / bowtie traces into simple lobes before the cut, and the K tool now draws and applies the stroke on the artboard.

## Iterations

### 2026-09-02T21:20Z — loop 128

**Rotation-aware island boxes.** Align and distribute flatten a path's rotation into its points, then tighten and explode islands on those world-space boxes.

## Next recommended

Knife live preview along the whole stroke, not only the pointer tip.
