# The Voice Design — 100-hour improvement loop

## Iteration

2026-09-26 21:10 BST — SVG export wraps every layer (outline paths, text, rects) in rotate(deg cx cy) around nodeCenter so rotation matches the canvas.

## Next recommended

SVG clip to text box. Letter-spacing on wrap measure vs canvas. Compound path islands as groups.

## Done

- SVG export svgRotateWrap applies canvas-matching rotation to outlines, paths, text, and rects.
