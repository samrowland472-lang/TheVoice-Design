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

1. Present-mode keyboard focus ring on the active page dot (done on focus-visible; tighten active-dot ring).

## Done

- Present-mode speaker notes drawer: **N** toggles notes; **Escape** closes the drawer first, then exits present. Header control **Notes · N**. Notes stay off the stage until opened.
- Restored the Zustand store so campaign, persist, and studio actions resolve.
- Campaign chip context menu: rename, duplicate, unlink, delete page.
- Present-mode page dots: Tab-focusable; Alt+Left / Alt+Right on a focused dot calls `nudgeCampaignPage`.

## Iteration

2026-09-21 12:30 BST — Present-mode N toggles the speaker-notes drawer.

## Next recommended

Tighten the present-mode active page-dot focus ring (phosphor ring on the current frame).
