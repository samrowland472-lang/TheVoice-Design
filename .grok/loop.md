# The Voice Design — 100-hour improvement loop

## Iteration

2026-09-23 18:58 BST — Escape after a muted Home/End keep stays in present and does not restore the next-frame fallback name while Shift is still held.

## Next recommended

Shift-release after a quiet Escape keep should stay muted so the fallback name does not flash on the peek strip.

## Done

- peekCaptionAfterQuietEscape clears namedId, keeps mute, and stays in present when Shift is held.
- Present chrome applies that helper on Escape before exit; muted Home/End still go through peekCaptionAfterQuietHomeEnd / peekTickAfterQuietHomeEnd.
- applyLostCapture + peekAfterLostCapture share pointer-cancel and window-blur mid-scrub.
