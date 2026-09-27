# The Voice Design — 100-hour improvement loop

## Iteration

2026-09-27 17:05 BST — SVG wrap measure reuses one OffscreenCanvas (or tiny HTML canvas) for the whole export pass. applyFontFace runs only when wrapFaceCacheKey (family/weight/size/opsz + axes) changes, so long copy and many text layers no longer allocate a canvas per node.

## Next recommended

Images still use a rotate group — bake those boxes only if RIP work requires it. After fonts reload, call resetWrapMeasureCache so measureText does not keep a stale face.

## Done

- wrapMeasureForText caches wrapCtxCache; wrapFaceCacheKey gates applyFontFace.
- resetWrapMeasureCache clears the wrap canvas and last face key.
