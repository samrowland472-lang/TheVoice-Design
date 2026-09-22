/** Hide present chrome after idle; any activity or F reveals the campaign rail. */

export const PRESENT_IDLE_MS = 2800;

export function shouldHidePresentChrome(opts: {
  idle: boolean;
  notesOpen: boolean;
  menuOpen: boolean;
}): boolean {
  if (opts.notesOpen || opts.menuOpen) return false;
  return opts.idle;
}

export function shouldShowPresentPeek(opts: {
  hideChrome: boolean;
  pageCount: number;
}): boolean {
  return opts.hideChrome && opts.pageCount > 0;
}

export function isQuietPresentNavKey(key: string): boolean {
  return (
    key === "ArrowRight" ||
    key === "ArrowLeft" ||
    key === " " ||
    key === "PageDown" ||
    key === "PageUp" ||
    key === "Home" ||
    key === "End" ||
    key === "Shift"
  );
}

export function isQuietPresentPeekTarget(target: EventTarget | null): boolean {
  return target instanceof Element && Boolean(target.closest("[data-present-peek]"));
}

export function peekScrubIndex(clientX: number, stripLeft: number, stripWidth: number, pageCount: number): number {
  if (pageCount <= 0) return 0;
  if (stripWidth <= 0) return 0;
  const t = (clientX - stripLeft) / stripWidth;
  const i = Math.floor(t * pageCount);
  return Math.max(0, Math.min(pageCount - 1, i));
}

export function peekScrubTickId(
  startId: string | null,
  endId: string | null,
  lastOtherId: string | null = null,
): string | null {
  if (!endId || !startId) return null;
  if (startId !== endId) return endId;
  if (lastOtherId && lastOtherId !== endId) return lastOtherId;
  return null;
}

export const PEEK_TICK_FADE_MS = 3200;

export function peekTickAfterDwell(
  tickId: string | null,
  dwellMs: number,
  fadeMs: number = PEEK_TICK_FADE_MS,
): string | null {
  if (!tickId) return null;
  if (dwellMs >= fadeMs) return null;
  return tickId;
}

export function peekTickFadeShouldRestart(
  prevTickId: string | null,
  nextTickId: string | null,
): boolean {
  if (!nextTickId) return false;
  return prevTickId !== nextTickId;
}

export function peekTickAfterQuietAdvance(tickId: string | null, key: string): string | null {
  if (!tickId) return null;
  if (isQuietPresentNavKey(key) && key !== "Shift") return null;
  return tickId;
}

export function peekTickAfterQuietDotClick(
  tickId: string | null,
  clickedId: string | null,
  currentId: string | null,
): string | null {
  if (!tickId) return null;
  if (clickedId && currentId && clickedId !== currentId) return null;
  return tickId;
}

export function peekTickShown(tickId: string | null, currentId: string | null): string | null {
  if (!tickId) return null;
  if (currentId && tickId === currentId) return null;
  return tickId;
}

export function peekTickOpacity(distance: number): number {
  if (!Number.isFinite(distance) || distance <= 0) return 0;
  const d = Math.abs(Math.round(distance));
  if (d === 1) return 0.7;
  if (d === 2) return 0.42;
  if (d === 3) return 0.26;
  return 0.14;
}
