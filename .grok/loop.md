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

1. Path overlay: live cubic handles while drawing, not only after close.
2. Inspector Boolean hover buttons wired to `setBooleanPreview`.

## Done

- Canvas overlay restored: marquee select, move + snap, create-drag shapes, pan, paint, pen rubber-band, handles, rulers.

## Iterations

### 2026-08-30T08:20Z — loop 77

**Canvas overlay restored.** Select-tool marquee and move are live again. Shape tools drag-create. Viewport pans with Hand or space.

## Next recommended

Path overlay: live cubic handles while drawing, not only after close.
