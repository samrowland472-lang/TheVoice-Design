# The Voice Design — 100-hour improvement loop

## Iteration

2026-09-27 15:05 BST — SVG text wrap now scales glyph estimates with optical size (opsz), so caption vs display optical settings break lines in the same direction as canvas `fontVariationSettings`. Present mode exports the same baked-path SVG as the studio (toolbar SVG · E).

## Next recommended

Images still use a rotate group — bake those boxes only if RIP work requires it. OffscreenCanvas wrap measure when fonts are loaded so opsz wrap matches measureText exactly.

## Done

- SVG wrap measure uses opticalWrapScale from the face opsz axis (1.08 caption → 0.96 display).
- Present chrome downloads baked-path SVG (E).
