# The Voice Design — 100-hour improvement loop

## Iteration

2026-09-27 16:08 BST — SVG wrap measure uses OffscreenCanvas + applyFontFace (opsz baked) when `document.fonts` is loaded, so line breaks match canvas `measureText`. Falls back to opticalWrapScale glyph estimates when fonts are not ready.

## Next recommended

Images still use a rotate group — bake those boxes only if RIP work requires it. Cache the wrap OffscreenCanvas context per face/opsz so export of long copy does not allocate a canvas per text node.

## Done

- wrapMeasureForText prefers OffscreenCanvas measureText after applyFontFace when document.fonts.status === "loaded".
