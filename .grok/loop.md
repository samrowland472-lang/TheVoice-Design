# The Voice Design — 100-hour improvement loop

## Iteration

2026-09-27 00:05 BST — SVG text export clips glyphs to the node box (`clipPath` + `clip-path`) so overflow matches canvas `ctx.clip()` on the text rect.

## Next recommended

Letter-spacing on wrap measure vs canvas. Bake rotated cubic handles into path d when groups are flattened. SVG clip-path lives inside the rotate group so rotation and clip stay in the same space.

## Done

- SVG text export wraps overflow with clipPath on the node box.
