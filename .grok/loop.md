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

1. Knife through boolean compounds and live boolean of more than two selections with a progress preview.
2. Self-overlapping figure-eight traces still need a winding pass before clip.

## Done

- Clipper snaps vertices, splits collinear shared edges, caps high-vertex rings, and drops colinear slivers so abutting squares union cleanly.

## Iterations

### 2026-09-01T22:15Z — loop 114

**Boolean clipper robustness.** Shared / collinear edges now split at both endpoints. Vertices snap to a 0.0001 grid. High-vertex traces cap at 480 points. Colinear mid-vertices collapse after chain.

## Next recommended

Knife through boolean compounds; live boolean of more than two selections.
