# The Voice Design — 100-hour improvement loop

## Iteration

2026-09-27 02:05 BST — Wrap measure includes letter-spacing the same way canvas and SVG do: glyph width with tracking off, then `spacing * (n-1)` via `measureTracked`. Canvas zeros `ctx.letterSpacing` during measure so it does not double-count.

## Next recommended

Bake rotated cubic handles into path d when groups are flattened. SVG clip-path lives inside the rotate group so rotation and clip stay in the same space. Optical-size wrap vs canvas.
