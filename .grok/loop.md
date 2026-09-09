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

1. Path inspector: Shift+Tab from first hole-path x of hole N+1 onto last hole-path x of hole N while both lists stay mid-scroll after growth.

## Done

- Path inspector Tab from last hole-path x of hole N lands on hole N+1 first-point x and holds Points and Holes list scroll after growth. `shouldTabFromLastHoleXToNextFirstX` + shared `focusNextHoleFirstX` / `pickNextHoleFirstPointXTabTarget`; last-x still falls through to next header when no next first point; `focus({ preventScroll: true })` + double-rAF restore.

- Path inspector Tab from last hole-path y of hole N lands on hole N+1 first-point x and holds Points and Holes list scroll after growth. `shouldTabFromLastHoleYToNextFirstX` + `pickNextHoleFirstPointXTabTarget`; point-to-point `holdPointAndHoleLists`; `focus({ preventScroll: true })` + double-rAF restore.
