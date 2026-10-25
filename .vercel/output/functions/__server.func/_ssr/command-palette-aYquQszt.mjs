import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { m as useRouterState, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as loadDoc, L as isGroup, N as instantiateTemplate, S as deleteDoc, U as loadIndex, V as loadBrand, X as saveDoc, Y as rotatePoint, bt as writeCampaignOrder, g as campaignPages, h as campaignPageName, k as formatById, m as blankDocument, s as aabb, vt as uid } from "./render-Dlu19Uyc.mjs";
import { T as Layers, o as SwatchBook } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/command-palette-aYquQszt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function AppShell({ children }) {
	const inStudio = useRouterState({ select: (s) => s.location.pathname }).startsWith("/studio");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-dvh overflow-hidden bg-ground text-ink",
		children: [!inStudio && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden w-[220px] shrink-0 flex-col border-r border-border bg-surface/60 md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 px-5 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-phosphor shadow-[0_0_12px_var(--color-phosphor)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-semibold tracking-[0.18em] uppercase",
						children: "The Voice"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-1 flex-col gap-0.5 px-3",
					"aria-label": "Sections",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavItem, {
						active: !inStudio,
						to: "/",
						icon: Layers,
						label: "Design"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/#brand",
						className: "flex h-11 items-center gap-3 rounded-[12px] px-3 text-sm text-ink-dim transition-colors duration-150 hover:bg-surface-alt hover:text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwatchBook, {
							className: "size-4",
							strokeWidth: 1.75
						}), "Brand"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-ink-faint uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-phosphor" }), "Loop live"]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-0 min-w-0 flex-1 flex-col",
			children
		})]
	});
}
function NavItem({ to, icon: Icon, label, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: cn("flex h-11 items-center gap-3 rounded-[12px] px-3 text-sm transition-colors duration-150", active ? "bg-phosphor/10 text-phosphor" : "text-ink-dim hover:bg-surface-alt hover:text-ink"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			className: "size-4",
			strokeWidth: 1.75
		}), label]
	});
}
var DEFAULT_FILTERS = {
	brightness: 1,
	contrast: 1,
	saturate: 1,
	blur: 0
};
function normalizeFilters(filters) {
	return {
		brightness: filters?.brightness ?? DEFAULT_FILTERS.brightness,
		contrast: filters?.contrast ?? DEFAULT_FILTERS.contrast,
		saturate: filters?.saturate ?? DEFAULT_FILTERS.saturate,
		blur: filters?.blur ?? DEFAULT_FILTERS.blur
	};
}
function cloneFilters(filters) {
	return { ...normalizeFilters(filters) };
}
function filterKey(filters) {
	const f = normalizeFilters(filters);
	return `${f.brightness}:${f.contrast}:${f.saturate}:${f.blur}`;
}
function filterChipLabel(filters) {
	const f = normalizeFilters(filters);
	if (f.brightness === 1 && f.contrast === 1 && f.saturate === 1 && f.blur === 0) return "flat";
	const parts = [
		`B${Math.round(f.brightness * 100)}`,
		`C${Math.round(f.contrast * 100)}`,
		`S${Math.round(f.saturate * 100)}`
	];
	if (f.blur) parts.push(`R${f.blur}`);
	return parts.join(" ");
}
function clampUnit(n, fallback) {
	if (!Number.isFinite(n)) return fallback;
	return Math.min(2, Math.max(0, n));
}
/** CSS / canvas `filter` matching SVG export (brightness/contrast/saturate/blur). */
function cssFilterStyle(filters) {
	const f = normalizeFilters(filters);
	const b = clampUnit(f.brightness, 1);
	const c = clampUnit(f.contrast, 1);
	const s = clampUnit(f.saturate, 1);
	const blur = Number.isFinite(f.blur) ? Math.max(0, f.blur) : 0;
	if (b === 1 && c === 1 && s === 1 && blur === 0) return "";
	return `brightness(${b}) contrast(${c}) saturate(${s}) blur(${blur}px)`;
}
function normalizeCrop(crop) {
	if (!crop) return null;
	const w = Number.isFinite(crop.w) ? crop.w : 1;
	const h = Number.isFinite(crop.h) ? crop.h : 1;
	if (w <= 0 || h <= 0) return null;
	const x = Number.isFinite(crop.x) ? crop.x : 0;
	const y = Number.isFinite(crop.y) ? crop.y : 0;
	const nx = Math.min(.99, Math.max(0, x));
	const ny = Math.min(.99, Math.max(0, y));
	const nw = Math.min(1 - nx, Math.max(.01, w));
	const nh = Math.min(1 - ny, Math.max(.01, h));
	if (nx <= 1e-4 && ny <= 1e-4 && nw >= .999 && nh >= .999) return null;
	return {
		x: nx,
		y: ny,
		w: nw,
		h: nh
	};
}
function cropSourceRect(img, crop) {
	const nw = img.naturalWidth;
	const nh = img.naturalHeight;
	const c = normalizeCrop(crop);
	if (!c) return {
		sx: 0,
		sy: 0,
		sw: nw,
		sh: nh
	};
	return {
		sx: c.x * nw,
		sy: c.y * nh,
		sw: Math.max(1, c.w * nw),
		sh: Math.max(1, c.h * nh)
	};
}
function paintBakeSize(w, h) {
	return {
		w: Math.max(1, Math.round(Number.isFinite(w) ? w : 1)),
		h: Math.max(1, Math.round(Number.isFinite(h) ? h : 1))
	};
}
function paintNeedsBake(n, nextW, nextH) {
	if (n.kind !== "paint") return false;
	const size = paintBakeSize(nextW, nextH);
	const cur = paintBakeSize(n.w, n.h);
	if (normalizeCrop(n.crop)) return true;
	if (!n.bitmap) return false;
	return size.w !== cur.w || size.h !== cur.h;
}
function makeCanvas(w, h) {
	if (typeof OffscreenCanvas === "function") try {
		return new OffscreenCanvas(w, h);
	} catch {}
	if (typeof document !== "undefined" && document.createElement) {
		const c = document.createElement("canvas");
		c.width = w;
		c.height = h;
		return c;
	}
	return null;
}
function drawBaked(canvas, img, crop, tw, th) {
	const ctx = canvas.getContext("2d");
	if (!ctx) return false;
	const nw = Number(img.naturalWidth ?? img.width ?? 0);
	const nh = Number(img.naturalHeight ?? img.height ?? 0);
	if (nw < 1 || nh < 1) return false;
	const src = cropSourceRect({
		naturalWidth: nw,
		naturalHeight: nh
	}, crop);
	ctx.clearRect(0, 0, tw, th);
	ctx.imageSmoothingEnabled = true;
	ctx.imageSmoothingQuality = "high";
	ctx.drawImage(img, src.sx, src.sy, src.sw, src.sh, 0, 0, tw, th);
	return true;
}
function canvasToDataUrl(canvas) {
	if ("toDataURL" in canvas && typeof canvas.toDataURL === "function") try {
		return canvas.toDataURL("image/png");
	} catch {
		return null;
	}
	return null;
}
/** Resample a paint bitmap into the node box. Crop is flattened into pixels. */
function bakePaintNode(n, nextW = n.w, nextH = n.h) {
	const size = paintBakeSize(nextW, nextH);
	const crop = normalizeCrop(n.crop);
	if (!n.bitmap) return {
		...n,
		w: nextW,
		h: nextH,
		crop: null
	};
	const canvas = makeCanvas(size.w, size.h);
	if (!canvas || typeof Image === "undefined") return {
		...n,
		w: nextW,
		h: nextH
	};
	const img = new Image();
	img.src = n.bitmap;
	if (img.complete && (img.naturalWidth || img.width)) {
		if (!drawBaked(canvas, img, crop, size.w, size.h)) return {
			...n,
			w: nextW,
			h: nextH
		};
		const url = canvasToDataUrl(canvas);
		if (!url) return {
			...n,
			w: nextW,
			h: nextH
		};
		return {
			...n,
			w: nextW,
			h: nextH,
			bitmap: url,
			crop: null
		};
	}
	return {
		...n,
		w: nextW,
		h: nextH
	};
}
function bakePaintIfSized(n, patch) {
	const w = patch.w ?? n.w;
	const h = patch.h ?? n.h;
	const merged = {
		...n,
		...patch
	};
	if (paintNeedsBake(n, w, h) || n.crop && (patch.w != null || patch.h != null)) return bakePaintNode(merged, w, h);
	return merged;
}
var RESIZE_HANDLES = [
	"nw",
	"n",
	"ne",
	"e",
	"se",
	"s",
	"sw",
	"w"
];
function handlePoint(box, handle) {
	const midX = box.x + box.w / 2;
	const midY = box.y + box.h / 2;
	const right = box.x + box.w;
	const bottom = box.y + box.h;
	switch (handle) {
		case "nw": return {
			x: box.x,
			y: box.y
		};
		case "n": return {
			x: midX,
			y: box.y
		};
		case "ne": return {
			x: right,
			y: box.y
		};
		case "e": return {
			x: right,
			y: midY
		};
		case "se": return {
			x: right,
			y: bottom
		};
		case "s": return {
			x: midX,
			y: bottom
		};
		case "sw": return {
			x: box.x,
			y: bottom
		};
		case "w": return {
			x: box.x,
			y: midY
		};
	}
}
function hitResizeHandle(box, x, y, zoom) {
	const r = 7 / Math.max(zoom, .01);
	let best = null;
	let bestD = r;
	for (const h of RESIZE_HANDLES) {
		const p = handlePoint(box, h);
		const d = Math.hypot(x - p.x, y - p.y);
		if (d <= bestD) {
			bestD = d;
			best = h;
		}
	}
	return best;
}
/** Opposite corner stays fixed when dragging a handle. */
function resizeBox(box, handle, x, y, lockAspect = false) {
	let left = box.x;
	let top = box.y;
	let right = box.x + box.w;
	let bottom = box.y + box.h;
	const aspect = box.w > 0 && box.h > 0 ? box.w / box.h : 1;
	if (handle.includes("w")) left = x;
	if (handle.includes("e")) right = x;
	if (handle.includes("n")) top = y;
	if (handle.includes("s")) bottom = y;
	if (lockAspect && box.h > 0) {
		if (handle === "n" || handle === "s") {
			const w = Math.abs(bottom - top) * aspect;
			const cx = box.x + box.w / 2;
			left = cx - w / 2;
			right = cx + w / 2;
		} else if (handle === "e" || handle === "w") {
			const h = Math.abs(right - left) / aspect;
			const cy = box.y + box.h / 2;
			top = cy - h / 2;
			bottom = cy + h / 2;
		} else {
			const h = Math.abs(right - left) / aspect;
			if (handle.includes("n")) top = bottom - (bottom > top ? h : -h);
			else bottom = top + (bottom > top ? h : -h);
		}
	}
	return {
		x: Math.min(left, right),
		y: Math.min(top, bottom),
		w: Math.max(1, Math.abs(right - left)),
		h: Math.max(1, Math.abs(bottom - top))
	};
}
function scalePathPoint(p, sx, sy) {
	return {
		...p,
		x: p.x * sx,
		y: p.y * sy,
		in: p.in ? {
			x: p.in.x * sx,
			y: p.in.y * sy
		} : p.in,
		out: p.out ? {
			x: p.out.x * sx,
			y: p.out.y * sy
		} : p.out
	};
}
function mapNodeToBox(n, from, to) {
	if (from.w < 1e-6 || from.h < 1e-6) return n;
	const sx = to.w / from.w;
	const sy = to.h / from.h;
	const x = to.x + (n.x - from.x) * sx;
	const y = to.y + (n.y - from.y) * sy;
	const w = Math.max(1, n.w * sx);
	const h = n.kind === "text" ? n.h : Math.max(1, n.h * sy);
	if (n.kind === "path") return {
		...n,
		x,
		y,
		w,
		h,
		points: n.points.map((p) => scalePathPoint(p, sx, sy)),
		holes: n.holes?.map((ring) => ring.map((p) => scalePathPoint(p, sx, sy)))
	};
	return {
		...n,
		x,
		y,
		w,
		h
	};
}
function childrenOf(nodes, parentId) {
	return nodes.filter((n) => n.parentId === parentId);
}
function descendantIds(nodes, rootId) {
	const out = [];
	const walk = (id) => {
		for (const child of childrenOf(nodes, id)) {
			out.push(child.id);
			walk(child.id);
		}
	};
	walk(rootId);
	return out;
}
function unionBounds(nodes) {
	if (!nodes.length) return null;
	let minX = Infinity;
	let minY = Infinity;
	let maxX = -Infinity;
	let maxY = -Infinity;
	for (const n of nodes) {
		minX = Math.min(minX, n.x);
		minY = Math.min(minY, n.y);
		maxX = Math.max(maxX, n.x + n.w);
		maxY = Math.max(maxY, n.y + n.h);
	}
	return {
		x: minX,
		y: minY,
		w: maxX - minX,
		h: maxY - minY
	};
}
function edges(n) {
	return {
		l: n.x,
		c: n.x + n.w / 2,
		r: n.x + n.w,
		t: n.y,
		m: n.y + n.h / 2,
		b: n.y + n.h
	};
}
function uniq(xs, eps = .5) {
	const out = [];
	for (const x of [...xs].sort((a, b) => a - b)) if (!out.length || Math.abs(out[out.length - 1] - x) > eps) out.push(x);
	return out;
}
function overlap1d(a0, a1, b0, b1) {
	return Math.min(a1, b1) - Math.max(a0, b0);
}
/** Axis-aligned world bounds of a node, rotation-aware via corner transform. */
function nodeWorldAabb(n) {
	return aabb([n]);
}
/**
* After a snap delta is applied, measure gaps from the moving box to siblings
* and artboard edges that share an overlap and sit on a live guide.
*/
function spacingTicks(moving, siblings, artboard, guides) {
	const ticks = [];
	const gx = new Set((guides.x ?? []).map((n) => Math.round(n * 10) / 10));
	const gy = new Set((guides.y ?? []).map((n) => Math.round(n * 10) / 10));
	const onX = (v) => gx.size === 0 || gx.has(Math.round(v * 10) / 10) || [...gx].some((g) => Math.abs(g - v) < .6);
	const onY = (v) => gy.size === 0 || gy.has(Math.round(v * 10) / 10) || [...gy].some((g) => Math.abs(g - v) < .6);
	const frames = [
		{
			x: 0,
			y: 0,
			w: 0,
			h: artboard.height
		},
		{
			x: artboard.width,
			y: 0,
			w: 0,
			h: artboard.height
		},
		...siblings
	];
	for (const s of frames) {
		const ovY = overlap1d(moving.y, moving.y + moving.h, s.y, s.y + s.h);
		if (ovY <= 1) continue;
		const mid = Math.max(moving.y, s.y) + ovY / 2;
		if (s.x + s.w <= moving.x + .5) {
			const a = s.x + s.w;
			const b = moving.x;
			if (b - a > .5 && (onX(a) || onX(b))) ticks.push({
				axis: "x",
				a,
				b,
				mid,
				size: b - a
			});
		} else if (moving.x + moving.w <= s.x + .5) {
			const a = moving.x + moving.w;
			const b = s.x;
			if (b - a > .5 && (onX(a) || onX(b))) ticks.push({
				axis: "x",
				a,
				b,
				mid,
				size: b - a
			});
		}
	}
	const stacks = [
		{
			x: 0,
			y: 0,
			w: artboard.width,
			h: 0
		},
		{
			x: 0,
			y: artboard.height,
			w: artboard.width,
			h: 0
		},
		...siblings
	];
	for (const s of stacks) {
		const ovX = overlap1d(moving.x, moving.x + moving.w, s.x, s.x + s.w);
		if (ovX <= 1) continue;
		const mid = Math.max(moving.x, s.x) + ovX / 2;
		if (s.y + s.h <= moving.y + .5) {
			const a = s.y + s.h;
			const b = moving.y;
			if (b - a > .5 && (onY(a) || onY(b))) ticks.push({
				axis: "y",
				a,
				b,
				mid,
				size: b - a
			});
		} else if (moving.y + moving.h <= s.y + .5) {
			const a = moving.y + moving.h;
			const b = s.y;
			if (b - a > .5 && (onY(a) || onY(b))) ticks.push({
				axis: "y",
				a,
				b,
				mid,
				size: b - a
			});
		}
	}
	ticks.sort((p, q) => p.size - q.size);
	const kept = [];
	for (const t of ticks) {
		if (!kept.some((k) => k.axis === t.axis && Math.abs(k.a - t.a) < 1 && Math.abs(k.b - t.b) < 1)) kept.push(t);
		if (kept.length >= 6) break;
	}
	return kept;
}
/**
* Snap a moving selection to the artboard and unselected siblings.
* Aligns left/center/right and top/middle/bottom, plus equal-gap spacing
* against neighboring sibling boxes.
*/
function smartSnap(moving, others, artboard, threshold = 8, extra) {
	if (!moving.length) return {
		dx: 0,
		dy: 0,
		guides: {
			x: [],
			y: [],
			spaces: []
		}
	};
	const box = aabb(moving);
	const m = edges(box);
	const siblingBoxes = others.filter((n) => n.visible).map(nodeWorldAabb);
	const xs = [
		0,
		artboard.width / 2,
		artboard.width,
		...extra?.x ?? []
	];
	const ys = [
		0,
		artboard.height / 2,
		artboard.height,
		...extra?.y ?? []
	];
	for (const b of siblingBoxes) {
		const e = edges(b);
		xs.push(e.l, e.c, e.r);
		ys.push(e.t, e.m, e.b);
	}
	const xCands = [];
	const yCands = [];
	for (const tx of xs) for (const my of [
		m.l,
		m.c,
		m.r
	]) xCands.push({
		delta: tx - my,
		dist: Math.abs(tx - my),
		line: tx
	});
	for (const ty of ys) for (const my of [
		m.t,
		m.m,
		m.b
	]) yCands.push({
		delta: ty - my,
		dist: Math.abs(ty - my),
		line: ty
	});
	const sortedX = [...siblingBoxes].sort((a, b) => a.x - b.x);
	const sortedY = [...siblingBoxes].sort((a, b) => a.y - b.y);
	for (let i = 0; i < sortedX.length; i++) {
		const a = sortedX[i];
		const ar = a.x + a.w;
		for (let j = i + 1; j < sortedX.length; j++) {
			const b = sortedX[j];
			const gap = b.x - ar;
			if (gap <= 0) continue;
			xCands.push({
				delta: a.x - gap - box.w - box.x,
				dist: Math.abs(a.x - gap - box.w - box.x),
				line: a.x,
				gap
			});
			xCands.push({
				delta: ar + gap - box.x,
				dist: Math.abs(ar + gap - box.x),
				line: ar + gap,
				gap
			});
			xCands.push({
				delta: b.x + b.w + gap - box.x,
				dist: Math.abs(b.x + b.w + gap - box.x),
				line: b.x + b.w,
				gap
			});
		}
		xCands.push({
			delta: a.x - box.w - box.x,
			dist: Math.abs(a.x - box.w - box.x),
			line: a.x
		});
		xCands.push({
			delta: ar - box.x,
			dist: Math.abs(ar - box.x),
			line: ar
		});
	}
	for (let i = 0; i < sortedY.length; i++) {
		const a = sortedY[i];
		const ab = a.y + a.h;
		for (let j = i + 1; j < sortedY.length; j++) {
			const b = sortedY[j];
			const gap = b.y - ab;
			if (gap <= 0) continue;
			yCands.push({
				delta: a.y - gap - box.h - box.y,
				dist: Math.abs(a.y - gap - box.h - box.y),
				line: a.y,
				gap
			});
			yCands.push({
				delta: ab + gap - box.y,
				dist: Math.abs(ab + gap - box.y),
				line: ab + gap,
				gap
			});
			yCands.push({
				delta: b.y + b.h + gap - box.y,
				dist: Math.abs(b.y + b.h + gap - box.y),
				line: b.y + b.h,
				gap
			});
		}
		yCands.push({
			delta: a.y - box.h - box.y,
			dist: Math.abs(a.y - box.h - box.y),
			line: a.y
		});
		yCands.push({
			delta: ab - box.y,
			dist: Math.abs(ab - box.y),
			line: ab
		});
	}
	let bestX = threshold + 1;
	let dx = 0;
	let gapX = null;
	const gx = [];
	for (const c of xCands) if (c.dist < bestX - .01) {
		bestX = c.dist;
		dx = c.delta;
		gx.length = 0;
		gx.push(c.line);
		gapX = c.gap ?? null;
	} else if (Math.abs(c.dist - bestX) <= .01 && c.dist <= threshold) {
		gx.push(c.line);
		if (gapX == null && c.gap != null) gapX = c.gap;
	}
	let bestY = threshold + 1;
	let dy = 0;
	let gapY = null;
	const gy = [];
	for (const c of yCands) if (c.dist < bestY - .01) {
		bestY = c.dist;
		dy = c.delta;
		gy.length = 0;
		gy.push(c.line);
		gapY = c.gap ?? null;
	} else if (Math.abs(c.dist - bestY) <= .01 && c.dist <= threshold) {
		gy.push(c.line);
		if (gapY == null && c.gap != null) gapY = c.gap;
	}
	const guides = {
		x: bestX <= threshold ? uniq(gx) : [],
		y: bestY <= threshold ? uniq(gy) : []
	};
	guides.spaces = spacingTicks({
		x: box.x + (bestX <= threshold ? dx : 0),
		y: box.y + (bestY <= threshold ? dy : 0),
		w: box.w,
		h: box.h
	}, siblingBoxes, artboard, guides);
	const equalGaps = [];
	if (bestX <= threshold && gapX != null) equalGaps.push({
		axis: "x",
		size: gapX
	});
	if (bestY <= threshold && gapY != null) equalGaps.push({
		axis: "y",
		size: gapY
	});
	if (equalGaps.length) {
		guides.equalGaps = equalGaps;
		guides.spaces = (guides.spaces ?? []).filter((t) => equalGaps.some((g) => g.axis === t.axis && Math.abs(g.size - t.size) < .75));
	}
	return {
		dx: bestX <= threshold ? dx : 0,
		dy: bestY <= threshold ? dy : 0,
		guides
	};
}
function rectsIntersect(a, b) {
	return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}
function marqueeHitsNode(n, mq) {
	return rectsIntersect(nodeWorldAabb(n), mq);
}
function marqueeContainsNode(n, mq) {
	const b = nodeWorldAabb(n);
	return b.x >= mq.x && b.y >= mq.y && b.x + b.w <= mq.x + mq.w && b.y + b.h <= mq.y + mq.h;
}
function nodesInMarquee(nodes, mq, mode = "intersect") {
	const test = mode === "contain" ? marqueeContainsNode : marqueeHitsNode;
	return nodes.filter((n) => n.visible && !n.locked && test(n, mq)).map((n) => n.id);
}
/** Phosphor smart-guides: full-span edge/center lines plus gap ticks. */
function drawSmartGuides(ctx, guides, artboard, zoom) {
	const lw = 1.15 / zoom;
	ctx.save();
	ctx.strokeStyle = "rgba(63,198,255,0.92)";
	ctx.fillStyle = "rgba(63,198,255,0.95)";
	ctx.lineWidth = lw;
	ctx.setLineDash([5 / zoom, 4 / zoom]);
	for (const x of guides.x) {
		ctx.beginPath();
		ctx.moveTo(x, -12 / zoom);
		ctx.lineTo(x, artboard.height + 12 / zoom);
		ctx.stroke();
	}
	for (const y of guides.y) {
		ctx.beginPath();
		ctx.moveTo(-12 / zoom, y);
		ctx.lineTo(artboard.width + 12 / zoom, y);
		ctx.stroke();
	}
	ctx.setLineDash([]);
	const tick = 5 / zoom;
	const named = guides.equalGaps ?? [];
	for (const s of guides.spaces ?? []) {
		ctx.beginPath();
		if (s.axis === "x") {
			ctx.moveTo(s.a, s.mid);
			ctx.lineTo(s.b, s.mid);
			ctx.moveTo(s.a, s.mid - tick);
			ctx.lineTo(s.a, s.mid + tick);
			ctx.moveTo(s.b, s.mid - tick);
			ctx.lineTo(s.b, s.mid + tick);
		} else {
			ctx.moveTo(s.mid, s.a);
			ctx.lineTo(s.mid, s.b);
			ctx.moveTo(s.mid - tick, s.a);
			ctx.lineTo(s.mid + tick, s.a);
			ctx.moveTo(s.mid - tick, s.b);
			ctx.lineTo(s.mid + tick, s.b);
		}
		ctx.stroke();
		const match = named.find((g) => g.axis === s.axis && Math.abs(g.size - s.size) < .75);
		if (!match) continue;
		paintEqualGapLabel(ctx, match, s.axis === "x" ? (s.a + s.b) / 2 : s.mid + 14 / zoom, s.axis === "x" ? s.mid - 10 / zoom : (s.a + s.b) / 2, zoom);
	}
	for (const g of named) {
		if ((guides.spaces ?? []).some((s) => s.axis === g.axis && Math.abs(s.size - g.size) < .75)) continue;
		const line = g.axis === "x" ? guides.x[0] : guides.y[0];
		if (line == null) continue;
		paintEqualGapLabel(ctx, g, g.axis === "x" ? line : artboard.width / 2 + 14 / zoom, g.axis === "x" ? artboard.height / 2 - 10 / zoom : line, zoom);
	}
	ctx.restore();
}
/** Same wording as the inspector Equal gap readout: size across or down. */
function paintEqualGapLabel(ctx, gap, x, y, zoom) {
	const label = `${Math.round(gap.size * 10) / 10} px ${gap.axis === "x" ? "across" : "down"}`;
	ctx.save();
	ctx.font = `${11 / zoom}px "IBM Plex Mono", ui-monospace, monospace`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(label, x, y);
	ctx.restore();
}
function groupBox(nodes, groupId) {
	const g = nodes.find((n) => n.id === groupId);
	if (!g || !isGroup(g)) return null;
	const kids = [];
	for (const id of descendantIds(nodes, groupId)) {
		const n = nodes.find((node) => node.id === id);
		if (n && !isGroup(n)) kids.push(n);
	}
	const union = kids.length ? unionBounds(kids) : {
		x: g.x,
		y: g.y,
		w: g.w,
		h: g.h
	};
	if (!union) return {
		x: g.x,
		y: g.y,
		w: Math.max(1, g.w),
		h: Math.max(1, g.h)
	};
	return union;
}
function groupTransformIds(nodes, groupId) {
	return [groupId, ...descendantIds(nodes, groupId)];
}
/**
* Axis-aligned scale in the group frame, refit as a rectangle so a rotated
* child stays a rect (edge lengths follow the scaled axes; no skew).
*/
function frameScaleAxes(rotationDeg, sx, sy) {
	const r = rotationDeg * Math.PI / 180;
	const c = Math.cos(r);
	const s = Math.sin(r);
	const ux = sx * c;
	const uy = sy * s;
	const vx = -sx * s;
	const vy = sy * c;
	const wScale = Math.hypot(ux, uy) || 1;
	const hScale = Math.hypot(vx, vy) || 1;
	let rotation = Math.atan2(uy, ux) * 180 / Math.PI;
	if (Object.is(rotation, -0)) rotation = 0;
	return {
		wScale,
		hScale,
		rotation
	};
}
function scaleLocalPoint(p, sx, sy) {
	return {
		...p,
		x: p.x * sx,
		y: p.y * sy,
		in: p.in ? {
			x: p.in.x * sx,
			y: p.in.y * sy
		} : p.in,
		out: p.out ? {
			x: p.out.x * sx,
			y: p.out.y * sy
		} : p.out
	};
}
/** Scale a leaf in the unrotated nest frame. Rotation is refit so the rect does not shear. */
function scaleNodeInFrame(n, from, to) {
	if (from.w < 1e-6 || from.h < 1e-6) return n;
	const sx = to.w / from.w;
	const sy = to.h / from.h;
	const cx = n.x + n.w / 2;
	const cy = n.y + n.h / 2;
	const ncx = to.x + (cx - from.x) * sx;
	const ncy = to.y + (cy - from.y) * sy;
	const fitted = frameScaleAxes(n.rotation || 0, sx, sy);
	const w = Math.max(1, n.w * fitted.wScale);
	const h = n.kind === "text" ? n.h : Math.max(1, n.h * fitted.hScale);
	const x = ncx - w / 2;
	const y = ncy - h / 2;
	if (n.kind === "path") return {
		...n,
		x,
		y,
		w,
		h,
		rotation: fitted.rotation,
		points: n.points.map((pt) => scaleLocalPoint(pt, fitted.wScale, fitted.hScale)),
		holes: n.holes?.map((ring) => ring.map((pt) => scaleLocalPoint(pt, fitted.wScale, fitted.hScale)))
	};
	return {
		...n,
		x,
		y,
		w,
		h,
		rotation: fitted.rotation
	};
}
function scaleGroupNodes(nodes, groupId, to) {
	const from = groupBox(nodes, groupId);
	if (!from) return nodes;
	const ids = new Set(groupTransformIds(nodes, groupId));
	return nodes.map((n) => {
		if (!ids.has(n.id)) return n;
		if (n.id === groupId) return {
			...n,
			x: to.x,
			y: to.y,
			w: to.w,
			h: to.h
		};
		return scaleNodeInFrame(n, from, to);
	});
}
function isEdgeHandle(handle) {
	return handle === "n" || handle === "e" || handle === "s" || handle === "w";
}
/** Midpoint of the edge opposite the dragged handle, in the unrotated nest frame. */
function oppositeEdgePoint(box, handle) {
	const cx = box.x + box.w / 2;
	const cy = box.y + box.h / 2;
	if (handle === "e") return {
		x: box.x,
		y: cy
	};
	if (handle === "w") return {
		x: box.x + box.w,
		y: cy
	};
	if (handle === "s") return {
		x: cx,
		y: box.y
	};
	return {
		x: cx,
		y: box.y + box.h
	};
}
/** Endpoints of the pinned edge in the unrotated nest frame. */
function oppositeEdgeSegment(box, handle) {
	if (handle === "e" || handle === "w") {
		const x = handle === "e" ? box.x : box.x + box.w;
		return [{
			x,
			y: box.y
		}, {
			x,
			y: box.y + box.h
		}];
	}
	const y = handle === "s" ? box.y : box.y + box.h;
	return [{
		x: box.x,
		y
	}, {
		x: box.x + box.w,
		y
	}];
}
/**
* One-axis local scale moves the nest centre, so a spun group would swing the
* opposite edge. Shift so that edge's midpoint stays on the same world point.
*/
function edgePinDelta(from, to, handle, rotation) {
	const anchor = oppositeEdgePoint(from, handle);
	const pinned = oppositeEdgePoint(to, handle);
	const before = spinPoint(from, anchor.x, anchor.y, rotation);
	const after = spinPoint(to, pinned.x, pinned.y, rotation);
	return {
		dx: before.x - after.x,
		dy: before.y - after.y
	};
}
function isCornerHandle(handle) {
	return handle === "nw" || handle === "ne" || handle === "se" || handle === "sw";
}
/** Corner opposite the dragged handle, in the unrotated nest frame. */
function oppositeCornerPoint(box, handle) {
	if (handle === "nw") return {
		x: box.x + box.w,
		y: box.y + box.h
	};
	if (handle === "ne") return {
		x: box.x,
		y: box.y + box.h
	};
	if (handle === "se") return {
		x: box.x,
		y: box.y
	};
	return {
		x: box.x + box.w,
		y: box.y
	};
}
/** Local-frame point just outside the dragged corner, for a live W/H readout. */
function cornerReadoutAnchor(box, handle, zoom) {
	const hp = handlePoint(box, handle);
	const dx = hp.x - (box.x + box.w / 2);
	const dy = hp.y - (box.y + box.h / 2);
	const len = Math.hypot(dx, dy) || 1;
	const pad = 20 / Math.max(zoom, .01);
	return {
		x: hp.x + dx / len * pad,
		y: hp.y + dy / len * pad
	};
}
/**
* A local corner scale moves the nest centre, so a spun group would swing the
* opposite corner. Shift so that corner stays on the same world point.
*/
function cornerPinDelta(from, to, handle, rotation) {
	const anchor = oppositeCornerPoint(from, handle);
	const pinned = oppositeCornerPoint(to, handle);
	const before = spinPoint(from, anchor.x, anchor.y, rotation);
	const after = spinPoint(to, pinned.x, pinned.y, rotation);
	return {
		dx: before.x - after.x,
		dy: before.y - after.y
	};
}
function translateNest(nodes, groupId, dx, dy) {
	if (!dx && !dy) return nodes;
	const ids = new Set(groupTransformIds(nodes, groupId));
	return nodes.map((n) => ids.has(n.id) ? {
		...n,
		x: n.x + dx,
		y: n.y + dy
	} : n);
}
function formatStep(n) {
	const rounded = Math.round(n * 10) / 10;
	return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}
/** Arrow-key copy: one group moves the nest; mixed selections expand like a drag. */
function nudgeSelection(nodes, selectedIds, dx, dy) {
	if (!dx && !dy || !selectedIds.length) return nodes;
	const byId = new Map(nodes.map((n) => [n.id, n]));
	const selected = selectedIds.map((id) => byId.get(id)).filter((n) => n != null && !n.locked);
	if (!selected.length) return nodes;
	if (selected.length === 1 && isGroup(selected[0])) return translateNest(nodes, selected[0].id, dx, dy);
	const expanded = expandMovePlaces(nodes, selected.map((n) => ({
		id: n.id,
		x: n.x + dx,
		y: n.y + dy
	})));
	const map = new Map(expanded.map((p) => [p.id, p]));
	return nodes.map((n) => {
		const p = map.get(n.id);
		return p ? {
			...n,
			x: p.x,
			y: p.y
		} : n;
	});
}
function nudgeStatus(dx, dy, group, snapped = false, equalGaps = []) {
	const parts = [];
	if (dx) parts.push(`${formatStep(Math.abs(dx))} px ${dx < 0 ? "left" : "right"}`);
	if (dy) parts.push(`${formatStep(Math.abs(dy))} px ${dy < 0 ? "up" : "down"}`);
	const motion = parts.join(" · ");
	const gaps = equalGaps.map((g) => `${formatStep(g.size)} px ${g.axis === "x" ? "across" : "down"}`).join(" · ");
	const snap = gaps ? ` · snapped to equal gap ${gaps}` : snapped ? " · snapped to guide" : "";
	return group ? `Nest nudged ${motion} · group moved as one${snap}` : `Nudged ${motion}${snap}`;
}
var emptyGuides = () => ({
	x: [],
	y: [],
	spaces: []
});
/**
* A drag snaps when the box is within threshold. Keyboard steps are smaller than
* that window, so a guide would trap the nest. If the snap cancels the step,
* the nest was already on the line — leave it so the next arrow can depart.
*/
function releaseSnapAxis(step, snapDelta) {
	if (Math.abs(snapDelta) < .05) return {
		delta: step,
		held: false
	};
	const next = step + snapDelta;
	if (Math.abs(step) > .01 && Math.abs(next) < .05) return {
		delta: step,
		held: false
	};
	return {
		delta: next,
		held: true
	};
}
/** Same artboard, sibling, and ruler-guide snap as a drag. Alt skips this. */
function keyboardSnapNudge(nodes, selectedIds, dx, dy, artboard, extra, threshold = 6) {
	const byId = new Map(nodes.map((n) => [n.id, n]));
	const selected = selectedIds.map((id) => byId.get(id)).filter((n) => n != null && !n.locked);
	if (!selected.length || !dx && !dy) return {
		dx,
		dy,
		guides: emptyGuides(),
		snapped: false
	};
	const exclude = /* @__PURE__ */ new Set();
	let moving;
	if (selected.length === 1 && isGroup(selected[0])) {
		const box = groupBox(nodes, selected[0].id);
		for (const id of groupTransformIds(nodes, selected[0].id)) exclude.add(id);
		moving = box ? [{
			...selected[0],
			x: box.x,
			y: box.y,
			w: box.w,
			h: box.h,
			rotation: 0
		}] : [selected[0]];
	} else {
		for (const n of selected) {
			exclude.add(n.id);
			if (isGroup(n)) for (const id of descendantIds(nodes, n.id)) exclude.add(id);
		}
		moving = selected;
	}
	const others = nodes.filter((n) => n.visible && !exclude.has(n.id) && !isGroup(n));
	const hit = smartSnap(moving.map((n) => ({
		...n,
		x: n.x + dx,
		y: n.y + dy
	})), others, artboard, threshold, extra);
	const x = releaseSnapAxis(dx, hit.dx);
	const y = releaseSnapAxis(dy, hit.dy);
	const equalGaps = (hit.guides.equalGaps ?? []).filter((g) => g.axis === "x" && x.held || g.axis === "y" && y.held);
	const spaces = (hit.guides.spaces ?? []).filter((t) => {
		if (t.axis === "x" && !x.held) return false;
		if (t.axis === "y" && !y.held) return false;
		if (!equalGaps.length) return true;
		return equalGaps.some((g) => g.axis === t.axis && Math.abs(g.size - t.size) < .75);
	});
	const guides = {
		x: x.held ? hit.guides.x : [],
		y: y.held ? hit.guides.y : [],
		spaces,
		equalGaps
	};
	return {
		dx: x.delta,
		dy: y.delta,
		guides,
		snapped: x.held || y.held
	};
}
var nudgeCue = null;
var equalGapHold = [];
var equalGapListeners = /* @__PURE__ */ new Set();
function publishEqualGapHold(next) {
	if (next.length === equalGapHold.length && next.every((g, i) => g.axis === equalGapHold[i]?.axis && g.size === equalGapHold[i]?.size)) return;
	equalGapHold = next;
	for (const fn of equalGapListeners) fn();
}
/** Matched spacing while a drag or keyboard snap holds the equal-gap tick. */
function getEqualGapHold() {
	return equalGapHold;
}
/** Drag publishes the matched size directly; keyboard still goes through the nudge cue. */
function setEqualGapHold(gaps) {
	publishEqualGapHold(gaps.map((g) => ({
		axis: g.axis,
		size: g.size
	})));
}
function subscribeEqualGapHold(fn) {
	equalGapListeners.add(fn);
	return () => {
		equalGapListeners.delete(fn);
	};
}
function formatEqualGapHold(gaps) {
	return gaps.map((g) => `${formatStep(g.size)} px ${g.axis === "x" ? "across" : "down"}`).join(" · ");
}
function setNudgeCue(next) {
	nudgeCue = next;
	const gaps = next?.guides?.equalGaps ?? [];
	publishEqualGapHold(gaps.length ? gaps.map((g) => ({
		axis: g.axis,
		size: g.size
	})) : []);
}
function getNudgeCue() {
	return nudgeCue;
}
function selectionTransformBox(nodes, selectedIds) {
	if (selectedIds.length === 1) {
		const only = nodes.find((n) => n.id === selectedIds[0]);
		if (only && isGroup(only)) return groupBox(nodes, only.id);
	}
	const picked = nodes.filter((n) => selectedIds.includes(n.id));
	if (!picked.length) return null;
	const groups = picked.filter(isGroup);
	if (groups.length === picked.length && groups.length === 1) return groupBox(nodes, groups[0].id);
	return unionBounds(picked);
}
function rotateHandlePoint(box, zoom) {
	return {
		x: box.x + box.w / 2,
		y: box.y - 28 / Math.max(zoom, .01)
	};
}
/** Screen-space chip just above a group AABB so the name can be edited on the board. */
function selectionLabelScreen(box, viewport) {
	const z = Math.max(viewport.zoom, .01);
	return {
		left: viewport.x + box.x * z,
		top: viewport.y + box.y * z - 26
	};
}
/** World point into the unrotated frame (group angle turns the nest about the box centre). */
function unspinPoint(box, x, y, rotation) {
	if (!rotation) return {
		x,
		y
	};
	return rotatePoint(x, y, box.x + box.w / 2, box.y + box.h / 2, -rotation);
}
function spinPoint(box, x, y, rotation) {
	if (!rotation) return {
		x,
		y
	};
	return rotatePoint(x, y, box.x + box.w / 2, box.y + box.h / 2, rotation);
}
function hitRotateHandle(box, x, y, zoom, rotation = 0) {
	const local = unspinPoint(box, x, y, rotation);
	const p = rotateHandlePoint(box, zoom);
	const r = 12 / Math.max(zoom, .01);
	return Math.hypot(local.x - p.x, local.y - p.y) <= r;
}
function rotateNodeAbout(n, cx, cy, delta) {
	if (!delta) return n;
	const ocx = n.x + n.w / 2;
	const ocy = n.y + n.h / 2;
	const p = rotatePoint(ocx, ocy, cx, cy, delta);
	return {
		...n,
		x: p.x - n.w / 2,
		y: p.y - n.h / 2,
		rotation: n.rotation + delta
	};
}
/** Nest angle lives on the group. Board, PNG, and SVG turn children about the group centre. */
function rotateGroupNodes(nodes, groupId, delta) {
	if (!delta) return nodes;
	return nodes.map((n) => n.id === groupId ? {
		...n,
		rotation: n.rotation + delta
	} : n);
}
/** Rotate every selected node (and group descendants) about the shared AABB centre. */
function rotateSelectionNodes(nodes, selectedIds, delta) {
	if (!delta || !selectedIds.length) return nodes;
	if (selectedIds.length === 1) {
		const only = nodes.find((n) => n.id === selectedIds[0]);
		if (only && isGroup(only)) return rotateGroupNodes(nodes, only.id, delta);
	}
	const box = selectionTransformBox(nodes, selectedIds);
	if (!box) return nodes;
	const cx = box.x + box.w / 2;
	const cy = box.y + box.h / 2;
	const ids = /* @__PURE__ */ new Set();
	for (const id of selectedIds) {
		ids.add(id);
		const n = nodes.find((x) => x.id === id);
		if (n && isGroup(n)) for (const d of descendantIds(nodes, id)) ids.add(d);
	}
	return nodes.map((n) => ids.has(n.id) ? rotateNodeAbout(n, cx, cy, delta) : n);
}
function drawTransformHandles(ctx, box, zoom, rotation = 0) {
	const hair = 1 / Math.max(zoom, .01);
	const size = 8 / Math.max(zoom, .01);
	const rot = rotateHandlePoint(box, zoom);
	const midTop = {
		x: box.x + box.w / 2,
		y: box.y
	};
	ctx.save();
	if (rotation) {
		const cx = box.x + box.w / 2;
		const cy = box.y + box.h / 2;
		ctx.translate(cx, cy);
		ctx.rotate(rotation * Math.PI / 180);
		ctx.translate(-cx, -cy);
	}
	ctx.strokeStyle = "rgba(63,198,255,0.95)";
	ctx.lineWidth = hair * 1.2;
	ctx.setLineDash([6 * hair, 4 * hair]);
	ctx.strokeRect(box.x, box.y, box.w, box.h);
	ctx.setLineDash([]);
	ctx.beginPath();
	ctx.moveTo(midTop.x, midTop.y);
	ctx.lineTo(rot.x, rot.y);
	ctx.stroke();
	ctx.fillStyle = "#0b1218";
	ctx.beginPath();
	ctx.arc(rot.x, rot.y, 5 / Math.max(zoom, .01), 0, Math.PI * 2);
	ctx.fill();
	ctx.stroke();
	for (const h of RESIZE_HANDLES) {
		const p = handlePoint(box, h);
		ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size);
		ctx.strokeRect(p.x - size / 2, p.y - size / 2, size, size);
	}
	ctx.restore();
}
function expandMovePlaces(nodes, orig) {
	const byId = new Map(nodes.map((n) => [n.id, n]));
	const extra = [];
	const seen = new Set(orig.map((o) => o.id));
	for (const o of orig) {
		const n = byId.get(o.id);
		if (!n || !isGroup(n)) continue;
		const dx = o.x - n.x;
		const dy = o.y - n.y;
		for (const id of descendantIds(nodes, n.id)) {
			if (seen.has(id)) continue;
			const child = byId.get(id);
			if (!child) continue;
			seen.add(id);
			extra.push({
				id,
				x: child.x + dx,
				y: child.y + dy
			});
		}
	}
	return [...orig, ...extra];
}
/** Canvas / inspector status strip (path inspector Tab exit, etc). */
var status = null;
var held = false;
var listeners = /* @__PURE__ */ new Set();
function emit() {
	for (const fn of listeners) fn();
}
function getStudioStatus() {
	return status;
}
function isHeldStudioStatus() {
	return held && status != null;
}
function setStudioStatus(next, opts) {
	if (next == null && held) return;
	status = next;
	held = Boolean(next && opts?.hold);
	emit();
}
/** Keep until the next inspector action — tool-hint refresh must not wipe it. */
function holdStudioStatus(next) {
	setStudioStatus(next, { hold: true });
}
function releaseStudioStatus() {
	if (!held && status == null) return;
	status = null;
	held = false;
	emit();
}
function subscribeStudioStatus(fn) {
	listeners.add(fn);
	return () => {
		listeners.delete(fn);
	};
}
function descendantsOf(nodes, parentId) {
	const out = [];
	const walk = (id) => {
		for (const n of nodes) if (n.parentId === id) {
			out.push(n);
			walk(n.id);
		}
	};
	walk(parentId);
	return out;
}
function withDescendants(nodes, ids) {
	const set = new Set(ids);
	for (const id of [...set]) for (const d of descendantsOf(nodes, id)) set.add(d.id);
	return set;
}
function flattenLayers(nodes) {
	const byParent = /* @__PURE__ */ new Map();
	for (const n of nodes) {
		const key = n.parentId;
		const list = byParent.get(key) ?? [];
		list.push(n);
		byParent.set(key, list);
	}
	const rows = [];
	const walk = (parentId, depth) => {
		const kids = byParent.get(parentId);
		if (!kids) return;
		for (const n of [...kids].reverse()) {
			rows.push({
				node: n,
				depth
			});
			if (isGroup(n) && n.collapsed) continue;
			walk(n.id, depth + 1);
		}
	};
	walk(void 0, 0);
	return rows;
}
function makeGroup(nodes, memberIds) {
	const unique = [...new Set(memberIds)];
	if (unique.length < 2) return null;
	const members = nodes.filter((n) => unique.includes(n.id));
	if (members.length < 2) return null;
	if (new Set(members.map((n) => n.parentId)).size > 1) return null;
	const parentId = members[0]?.parentId;
	const leaves = members.filter((n) => !isGroup(n));
	const boxSrc = leaves.length ? leaves : members;
	const box = aabb(boxSrc);
	const group = {
		id: uid("gp"),
		name: "Group",
		kind: "group",
		x: box.x,
		y: box.y,
		w: box.w,
		h: box.h,
		rotation: 0,
		opacity: 1,
		visible: true,
		locked: false,
		blend: "source-over",
		fill: "transparent",
		stroke: "transparent",
		strokeWidth: 0,
		strokeDash: 0,
		strokeDashOffset: 0,
		lineCap: "round",
		lineJoin: "round",
		miterLimit: 4,
		radius: 0,
		shadow: null,
		parentId,
		collapsed: false
	};
	const memberSet = new Set(unique);
	const next = nodes.map((n) => memberSet.has(n.id) ? {
		...n,
		parentId: group.id
	} : n);
	const firstIdx = next.findIndex((n) => memberSet.has(n.id));
	const insertAt = firstIdx < 0 ? next.length : firstIdx;
	next.splice(insertAt, 0, group);
	return {
		nodes: next,
		groupId: group.id
	};
}
function ungroup(nodes, groupIds) {
	const drop = new Set(groupIds.filter((id) => nodes.some((n) => n.id === id && isGroup(n))));
	if (!drop.size) return nodes;
	return nodes.filter((n) => !drop.has(n.id)).map((n) => {
		if (n.parentId && drop.has(n.parentId)) {
			const g = nodes.find((x) => x.id === n.parentId);
			return {
				...n,
				parentId: g?.parentId
			};
		}
		return n;
	});
}
function ancestorIds(nodes, id) {
	const byId = new Map(nodes.map((n) => [n.id, n]));
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	let cur = byId.get(id);
	while (cur?.parentId && !seen.has(cur.parentId)) {
		seen.add(cur.parentId);
		out.push(cur.parentId);
		cur = byId.get(cur.parentId);
	}
	return out;
}
function movingRoots(nodes, ids) {
	const idset = new Set(ids);
	return nodes.filter((n) => idset.has(n.id) && !ancestorIds(nodes, n.id).some((a) => idset.has(a)));
}
function subtreeEnd(nodes, id) {
	const desc = new Set(descendantsOf(nodes, id).map((n) => n.id));
	let end = nodes.findIndex((n) => n.id === id);
	nodes.forEach((n, i) => {
		if (desc.has(n.id) && i > end) end = i;
	});
	return end;
}
/** A group cannot land inside itself or a descendant. Sibling drops need a real anchor. */
function layerDropLegal(nodes, ids, drop) {
	const moving = movingRoots(nodes, ids);
	if (!moving.length) return false;
	const movingIds = new Set(moving.map((n) => n.id));
	if (drop.mode === "into") {
		if (movingIds.has(drop.groupId)) return false;
		const group = nodes.find((n) => n.id === drop.groupId);
		if (!group || !isGroup(group)) return false;
		if (moving.some((m) => ancestorIds(nodes, group.id).includes(m.id))) return false;
		return true;
	}
	if (movingIds.has(drop.anchorId)) return false;
	const anchor = nodes.find((n) => n.id === drop.anchorId);
	if (!anchor) return false;
	if (moving.some((m) => ancestorIds(nodes, anchor.id).includes(m.id))) return false;
	return true;
}
/** Move layer roots in the list. Into a group sets parentId. Sibling drops keep the anchor parent. */
function applyLayerDrop(nodes, ids, drop) {
	if (!layerDropLegal(nodes, ids, drop)) return null;
	const moving = movingRoots(nodes, ids);
	const movingIds = new Set(moving.map((n) => n.id));
	let parentId;
	if (drop.mode === "into") parentId = drop.groupId;
	else parentId = nodes.find((n) => n.id === drop.anchorId)?.parentId;
	const rest = nodes.filter((n) => !movingIds.has(n.id));
	const patched = moving.map((n) => ({
		...n,
		parentId
	}));
	let index = rest.length;
	if (drop.mode === "into") index = subtreeEnd(rest, drop.groupId) + 1;
	else {
		const anchorAt = rest.findIndex((n) => n.id === drop.anchorId);
		if (anchorAt < 0) return null;
		index = drop.mode === "before" ? subtreeEnd(rest, drop.anchorId) + 1 : anchorAt;
	}
	if (index < 0) index = 0;
	if (index > rest.length) index = rest.length;
	const next = rest.slice();
	next.splice(index, 0, ...patched);
	return next;
}
/** Visual up is in front (later in the node array) among siblings. */
function nudgeLayer(nodes, id, dir) {
	const node = nodes.find((n) => n.id === id);
	if (!node) return null;
	const siblings = nodes.filter((n) => n.parentId === node.parentId);
	const idx = siblings.findIndex((n) => n.id === id);
	const other = dir === "up" ? siblings[idx + 1] : siblings[idx - 1];
	if (!other) return null;
	const a = nodes.findIndex((n) => n.id === id);
	const b = nodes.findIndex((n) => n.id === other.id);
	if (a < 0 || b < 0) return null;
	const next = nodes.slice();
	const tmp = next[a];
	next[a] = next[b];
	next[b] = tmp;
	return next;
}
function sameSet(a, b) {
	const other = new Set(b);
	if (a.length !== other.size) return false;
	return a.every((id) => other.has(id));
}
function visibleIds(nodes) {
	return nodes.filter((n) => n.visible).map((n) => n.id);
}
function restoreFromSnapshot(nodes, snapshot) {
	return nodes.map((n) => ({
		...n,
		visible: snapshot[n.id] ?? n.visible
	}));
}
/**
* Isolate `keepIds` (hide everything else).
* Empty `keepIds` restores the snapshot (Show all).
* A second call with the same keep set also restores.
* A different keep set while isolated restores first, then isolates the new set
* so hidden layers from the first pass do not stay hidden.
*/
function applyIsolate(nodes, keepIds, snapshot) {
	const allIds = new Set(nodes.map((n) => n.id));
	if (keepIds.length === 0 || snapshot != null && keepIds.length === allIds.size && keepIds.every((id) => allIds.has(id))) {
		if (!snapshot) return {
			nodes,
			isolateSnapshot: null
		};
		return {
			isolateSnapshot: null,
			nodes: restoreFromSnapshot(nodes, snapshot)
		};
	}
	if (snapshot && sameSet(keepIds, visibleIds(nodes))) return {
		isolateSnapshot: null,
		nodes: restoreFromSnapshot(nodes, snapshot)
	};
	const base = snapshot ? restoreFromSnapshot(nodes, snapshot) : nodes;
	const snap = snapshot ? { ...snapshot } : {};
	if (!snapshot) for (const n of base) snap[n.id] = n.visible;
	else for (const n of base) if (!(n.id in snap)) snap[n.id] = n.visible;
	const keep = new Set(keepIds);
	return {
		isolateSnapshot: snap,
		nodes: base.map((n) => ({
			...n,
			visible: keep.has(n.id)
		}))
	};
}
var useDesign = create((set, get) => ({
	index: [],
	doc: null,
	selection: [],
	tool: "select",
	viewport: {
		x: 0,
		y: 0,
		zoom: .4
	},
	past: [],
	future: [],
	grid: true,
	snap: true,
	nudgeHold: 0,
	rulers: true,
	safeArea: false,
	brand: loadBrand(),
	brush: {
		id: "ink",
		size: 16,
		opacity: 1,
		hardness: .95,
		spacing: .12,
		color: "#0a0d0c",
		symmetry: "none"
	},
	color: "#0a0d0c",
	editingText: null,
	dirty: false,
	clipboard: [],
	opacityClipboard: null,
	pasteCount: 1,
	present: false,
	viewIntent: null,
	paletteOpen: false,
	printMarks: false,
	pathEditHit: null,
	booleanPreview: null,
	guideSelection: [],
	guideLooks: {
		x: {},
		y: {}
	},
	isolateSnapshot: null,
	alignTarget: "selection",
	strokeGhost: null,
	typeGhost: null,
	hydrate: () => set({
		index: loadIndex(),
		brand: loadBrand()
	}),
	open: (id) => {
		const doc = loadDoc(id);
		if (doc) set({
			doc,
			selection: [],
			dirty: false,
			present: get().present,
			isolateSnapshot: null
		});
	},
	fromTemplate: (templateId) => {
		const doc = instantiateTemplate(templateId);
		saveDoc(doc);
		set({
			doc,
			dirty: false,
			index: loadIndex(),
			isolateSnapshot: null
		});
		return doc.id;
	},
	fromBlank: (formatId) => {
		const fmt = formatById(formatId);
		const doc = blankDocument(formatId, `Untitled ${fmt.label}`);
		saveDoc(doc);
		set({
			doc,
			dirty: false,
			index: loadIndex(),
			isolateSnapshot: null
		});
		return doc.id;
	},
	save: () => {
		const { doc } = get();
		if (!doc) return;
		const next = {
			...doc,
			updatedAt: Date.now()
		};
		saveDoc(next);
		set({
			doc: next,
			dirty: false,
			index: loadIndex()
		});
	},
	setNotes: (notes) => {
		const { doc } = get();
		if (!doc) return;
		const next = {
			...doc,
			notes,
			updatedAt: Date.now()
		};
		saveDoc(next);
		set({
			doc: next,
			dirty: false,
			index: loadIndex()
		});
	},
	setPresent: (present) => set({ present }),
	togglePresent: () => set({
		present: !get().present,
		paletteOpen: false
	}),
	makeCampaign: () => {
		const { doc } = get();
		if (!doc) return [];
		get().save();
		const live = get().doc;
		const cid = live.campaignId ?? uid("camp");
		const named = {
			...live,
			campaignId: cid,
			updatedAt: Date.now()
		};
		saveDoc(named);
		set({
			doc: named,
			dirty: false,
			index: loadIndex()
		});
		return [named.id];
	},
	addCampaignPage: (formatId) => {
		const { doc } = get();
		if (!doc) return "";
		get().save();
		const live = get().doc;
		const cid = live.campaignId ?? uid("camp");
		if (!live.campaignId) {
			const named = {
				...live,
				campaignId: cid,
				updatedAt: Date.now()
			};
			saveDoc(named);
			set({ doc: named });
		}
		const fmt = formatById(formatId);
		const page = blankDocument(formatId, campaignPageName(live.name, fmt.label));
		page.campaignId = cid;
		saveDoc(page);
		const after = campaignPages(loadIndex(), cid).map((p) => p.id);
		if (!after.includes(page.id)) after.push(page.id);
		set({ index: writeCampaignOrder(cid, after) });
		return page.id;
	},
	duplicateCampaignPage: () => {
		const { doc } = get();
		if (!doc) return "";
		get().save();
		const live = get().doc;
		const cid = live.campaignId ?? uid("camp");
		const copy = structuredClone(live);
		copy.id = uid("doc");
		copy.campaignId = cid;
		copy.name = `${live.name} copy`;
		copy.createdAt = Date.now();
		copy.updatedAt = Date.now();
		saveDoc(copy);
		const after = campaignPages(loadIndex(), cid).map((p) => p.id);
		if (!after.includes(copy.id)) {
			const at = after.indexOf(live.id);
			after.splice(at >= 0 ? at + 1 : after.length, 0, copy.id);
		}
		set({ index: writeCampaignOrder(cid, after) });
		return copy.id;
	},
	reorderCampaignPages: (ids) => {
		const { doc } = get();
		if (!doc?.campaignId) return;
		set({ index: writeCampaignOrder(doc.campaignId, ids) });
	},
	nudgeCampaignPage: (id, dir) => {
		const { doc } = get();
		const cid = doc?.campaignId;
		if (!cid) return;
		const ids = campaignPages(get().index, cid).map((p) => p.id);
		const from = ids.indexOf(id);
		if (from < 0) return;
		const to = from + (dir < 0 ? -1 : 1);
		if (to < 0 || to >= ids.length) return;
		ids.splice(from, 1);
		ids.splice(to, 0, id);
		set({ index: writeCampaignOrder(cid, ids) });
	},
	renameCampaignPage: (id, name) => {
		const trimmed = String(name || "").trim();
		if (!trimmed) return;
		const { doc } = get();
		if (doc?.id === id) {
			const next = {
				...doc,
				name: trimmed,
				updatedAt: Date.now()
			};
			saveDoc(next);
			set({
				doc: next,
				dirty: false,
				index: loadIndex()
			});
			return;
		}
		const other = loadDoc(id);
		if (!other) return;
		saveDoc({
			...other,
			name: trimmed,
			updatedAt: Date.now()
		});
		set({ index: loadIndex() });
	},
	unlinkCampaignPage: (id) => {
		const { doc } = get();
		const target = loadDoc(id);
		if (!target) return;
		const camp = target.campaignId ?? doc?.campaignId;
		saveDoc({
			...target,
			campaignId: void 0,
			updatedAt: Date.now()
		});
		if (doc?.id === id) set({
			doc: {
				...doc,
				campaignId: void 0
			},
			dirty: false
		});
		if (camp) {
			const rest = campaignPages(loadIndex(), camp).map((p) => p.id).filter((pid) => pid !== id);
			set({ index: writeCampaignOrder(camp, rest) });
		} else set({ index: loadIndex() });
	},
	removeCampaignPage: (id) => {
		const camp = loadDoc(id)?.campaignId;
		const rest = camp ? campaignPages(loadIndex(), camp).map((p) => p.id).filter((pid) => pid !== id) : [];
		deleteDoc(id);
		if (camp) writeCampaignOrder(camp, rest);
		const { doc } = get();
		set({
			index: loadIndex(),
			doc: doc?.id === id ? null : doc
		});
		return rest[0] ?? null;
	},
	remove: (id) => {
		deleteDoc(id);
		const { doc } = get();
		set({
			index: loadIndex(),
			doc: doc?.id === id ? null : doc
		});
	},
	setTool: (tool) => set({
		tool,
		editingText: null
	}),
	setViewport: (v) => set({ viewport: {
		...get().viewport,
		...v
	} }),
	setStrokeGhost: (ghost) => set({ strokeGhost: ghost }),
	setTypeGhost: (ghost) => set({ typeGhost: ghost }),
	requestFit: () => set({ viewIntent: { type: "fit" } }),
	requestZoom: (zoom) => set({ viewIntent: {
		type: "zoom",
		zoom
	} }),
	select: (ids, additive) => {
		if (additive) {
			const cur = new Set(get().selection);
			for (const id of ids) if (cur.has(id)) cur.delete(id);
			else cur.add(id);
			set({ selection: [...cur] });
		} else set({
			selection: ids,
			pathEditHit: null
		});
	},
	commit: () => {
		const { doc, past } = get();
		if (!doc) return;
		set({
			past: [...past.slice(-60), structuredClone(doc)],
			future: []
		});
	},
	undo: () => {
		const { doc, past, future } = get();
		const prev = past[past.length - 1];
		if (!prev || !doc) return;
		set({
			doc: prev,
			past: past.slice(0, -1),
			future: [structuredClone(doc), ...future],
			dirty: true
		});
	},
	redo: () => {
		const { doc, past, future } = get();
		const next = future[0];
		if (!next || !doc) return;
		set({
			doc: next,
			future: future.slice(1),
			past: [...past, structuredClone(doc)],
			dirty: true
		});
	},
	restoreHistory: (slot, index) => {
		const { past, future, doc } = get();
		if (!doc) return;
		const chosen = (slot === "past" ? past : future)[index];
		if (!chosen) return;
		get().commit();
		set({
			doc: structuredClone(chosen),
			dirty: true
		});
	},
	toggleIsolate: (keepIds) => {
		const { doc, isolateSnapshot } = get();
		if (!doc) return;
		const next = applyIsolate(doc.nodes, keepIds, isolateSnapshot);
		get().commit();
		set({
			doc: {
				...doc,
				nodes: next.nodes
			},
			isolateSnapshot: next.isolateSnapshot,
			dirty: true
		});
	},
	groupSelection: () => {
		const { doc, selection } = get();
		if (!doc) return;
		const made = makeGroup(doc.nodes, selection);
		if (!made) return;
		get().commit();
		set({
			doc: {
				...doc,
				nodes: made.nodes
			},
			selection: [made.groupId],
			dirty: true
		});
	},
	ungroupSelection: () => {
		const { doc, selection } = get();
		if (!doc) return;
		const groups = selection.filter((id) => doc.nodes.some((n) => n.id === id && n.kind === "group"));
		if (!groups.length) return;
		const kids = doc.nodes.filter((n) => n.parentId && groups.includes(n.parentId)).map((n) => n.id);
		const next = ungroup(doc.nodes, groups);
		get().commit();
		set({
			doc: {
				...doc,
				nodes: next
			},
			selection: kids.length ? kids : selection.filter((id) => !groups.includes(id)),
			dirty: true
		});
	},
	dropLayers: (ids, drop) => {
		const { doc } = get();
		if (!doc || !ids.length) return;
		const next = applyLayerDrop(doc.nodes, ids, drop);
		if (!next) return;
		get().commit();
		set({
			doc: {
				...doc,
				nodes: next
			},
			dirty: true
		});
	},
	reorder: (id, dir) => {
		const { doc } = get();
		if (!doc) return;
		const next = nudgeLayer(doc.nodes, id, dir);
		if (!next) return;
		get().commit();
		set({
			doc: {
				...doc,
				nodes: next
			},
			dirty: true
		});
	},
	updateNodes: (ids, patch, commit = false) => {
		const { doc } = get();
		if (!doc) return;
		if (commit) get().commit();
		const idset = new Set(ids);
		set({
			doc: {
				...doc,
				nodes: doc.nodes.map((n) => {
					if (!idset.has(n.id)) return n;
					if (n.kind === "paint") return bakePaintIfSized(n, patch);
					return {
						...n,
						...patch
					};
				})
			},
			dirty: true
		});
	},
	mapNodes: (ids, map, commit = false) => {
		const { doc } = get();
		if (!doc) return;
		if (commit) get().commit();
		const idset = new Set(ids);
		set({
			doc: {
				...doc,
				nodes: doc.nodes.map((n) => {
					if (!idset.has(n.id)) return n;
					const next = map(n);
					if (n.kind === "paint" && next.kind === "paint" && paintNeedsBake(n, next.w, next.h)) return bakePaintNode(next, next.w, next.h);
					return next;
				})
			},
			dirty: true
		});
	},
	replaceNode: (id, node, commit = false) => {
		const { doc } = get();
		if (!doc) return;
		if (commit) get().commit();
		set({
			doc: {
				...doc,
				nodes: doc.nodes.map((n) => {
					if (n.id !== id) return n;
					if (n.kind === "paint" && node.kind === "paint" && paintNeedsBake(n, node.w, node.h)) return bakePaintNode(node, node.w, node.h);
					return node;
				})
			},
			dirty: true
		});
	},
	addNode: (node, commit = true) => {
		const { doc } = get();
		if (!doc) return;
		if (commit) get().commit();
		set({
			doc: {
				...doc,
				nodes: [...doc.nodes, node]
			},
			selection: [node.id],
			dirty: true
		});
	},
	resizeArtboard: (formatId, magic) => {
		const { doc } = get();
		if (!doc) return;
		get().commit();
		const fmt = formatById(formatId);
		const sx = fmt.width / doc.artboard.width;
		const sy = fmt.height / doc.artboard.height;
		const nodes = magic ? doc.nodes.map((n) => {
			const next = {
				...n,
				x: n.x * sx,
				y: n.y * sy,
				w: n.w * sx,
				h: n.kind === "text" ? n.h : n.h * sy
			};
			if (n.kind === "paint") return bakePaintNode(next, next.w, next.h);
			return next;
		}) : doc.nodes;
		set({
			doc: {
				...doc,
				artboard: {
					...doc.artboard,
					width: fmt.width,
					height: fmt.height,
					formatId: fmt.id,
					name: fmt.label
				},
				nodes
			},
			dirty: true
		});
	},
	translateSelected: (dx, dy, opts) => {
		const { doc, selection } = get();
		if (!doc || !selection.length || !dx && !dy) return;
		let appliedX = dx;
		let appliedY = dy;
		let guides = {
			x: [],
			y: [],
			spaces: [],
			equalGaps: []
		};
		let snapped = false;
		if (opts?.snap) {
			const extra = {
				x: (doc.guides ?? []).filter((g) => g.axis === "x").map((g) => g.pos),
				y: (doc.guides ?? []).filter((g) => g.axis === "y").map((g) => g.pos)
			};
			const hit = keyboardSnapNudge(doc.nodes, selection, dx, dy, doc.artboard, extra);
			appliedX = hit.dx;
			appliedY = hit.dy;
			guides = hit.guides;
			snapped = hit.snapped;
		}
		if (!appliedX && !appliedY) return;
		const next = nudgeSelection(doc.nodes, selection, appliedX, appliedY);
		if (next === doc.nodes) return;
		get().commit();
		const only = selection.length === 1 ? doc.nodes.find((n) => n.id === selection[0]) : null;
		const group = Boolean(only && isGroup(only) && !only.locked);
		setNudgeCue({
			dx: appliedX,
			dy: appliedY,
			group,
			guides,
			snapped
		});
		setStudioStatus(nudgeStatus(appliedX, appliedY, group, snapped, guides.equalGaps ?? []));
		set({
			doc: {
				...doc,
				nodes: next
			},
			dirty: true,
			nudgeHold: Date.now()
		});
	},
	releaseNudgeGuides: () => {
		const cue = getNudgeCue();
		if (cue?.guides && (cue.guides.x.length || cue.guides.y.length || (cue.guides.spaces?.length ?? 0) > 0)) setNudgeCue({
			...cue,
			guides: {
				x: [],
				y: [],
				spaces: [],
				equalGaps: []
			},
			snapped: false
		});
		set({ nudgeHold: Date.now() });
	},
	placeNodes: (places) => {
		const { doc } = get();
		if (!doc) return;
		const expanded = expandMovePlaces(doc.nodes, places);
		const map = new Map(expanded.map((p) => [p.id, p]));
		set({
			doc: {
				...doc,
				nodes: doc.nodes.map((n) => {
					const p = map.get(n.id);
					return p ? {
						...n,
						x: p.x,
						y: p.y
					} : n;
				})
			},
			dirty: true
		});
	},
	copySelected: () => {
		const { doc, selection } = get();
		if (!doc || !selection.length) return;
		const ids = withDescendants(doc.nodes, selection);
		set({
			clipboard: doc.nodes.filter((n) => ids.has(n.id)).map((n) => structuredClone(n)),
			pasteCount: 1
		});
		setStudioStatus(`Copied ${selection.length} layer${selection.length === 1 ? "" : "s"}`);
	},
	duplicateSelected: () => {
		const { doc, selection } = get();
		if (!doc || !selection.length) return;
		get().commit();
		const ids = withDescendants(doc.nodes, selection);
		const idMap = /* @__PURE__ */ new Map();
		const clones = [];
		for (const n of doc.nodes) {
			if (!ids.has(n.id)) continue;
			const newId = uid(n.kind.slice(0, 2));
			idMap.set(n.id, newId);
			const c = structuredClone(n);
			c.id = newId;
			c.x += 16;
			c.y += 16;
			clones.push(c);
		}
		const remapped = clones.map((n) => n.parentId && idMap.has(n.parentId) ? {
			...n,
			parentId: idMap.get(n.parentId)
		} : n);
		const newSel = selection.map((id) => idMap.get(id)).filter((id) => Boolean(id));
		set({
			doc: {
				...doc,
				nodes: [...doc.nodes, ...remapped]
			},
			selection: newSel.length ? newSel : remapped.map((n) => n.id),
			dirty: true
		});
		setStudioStatus(`Duplicated ${selection.length} layer${selection.length === 1 ? "" : "s"}`);
	},
	cutSelected: () => {
		get().copySelected();
		get().removeSelected();
		setStudioStatus("Cut selection");
	},
	pasteClipboard: () => {
		const { doc, clipboard, pasteCount } = get();
		if (!doc || !clipboard.length) return;
		get().commit();
		const offset = 16 * (pasteCount || 1);
		const idMap = /* @__PURE__ */ new Map();
		const remapped = clipboard.map((n) => {
			const newId = uid(n.kind.slice(0, 2));
			idMap.set(n.id, newId);
			const c = structuredClone(n);
			c.id = newId;
			c.x += offset;
			c.y += offset;
			return c;
		}).map((n) => n.parentId && idMap.has(n.parentId) ? {
			...n,
			parentId: idMap.get(n.parentId)
		} : n);
		const copiedIds = new Set(clipboard.map((n) => n.id));
		const topIds = clipboard.filter((n) => !n.parentId || !copiedIds.has(n.parentId)).map((n) => idMap.get(n.id));
		const newSel = topIds.length ? topIds : remapped.map((n) => n.id);
		set({
			doc: {
				...doc,
				nodes: [...doc.nodes, ...remapped]
			},
			selection: newSel.length ? newSel : remapped.map((n) => n.id),
			pasteCount: (pasteCount || 1) + 1,
			dirty: true
		});
		setStudioStatus(`Pasted ${newSel.length || remapped.length} layer${(newSel.length || remapped.length) === 1 ? "" : "s"}`);
	},
	removeSelected: () => {
		const { doc, selection } = get();
		if (!doc || !selection.length) return;
		get().commit();
		const ids = withDescendants(doc.nodes, selection);
		set({
			doc: {
				...doc,
				nodes: doc.nodes.filter((n) => !ids.has(n.id))
			},
			selection: [],
			dirty: true
		});
		setStudioStatus(`Removed ${selection.length} layer${selection.length === 1 ? "" : "s"}`);
	},
	selectAll: () => {
		const { doc } = get();
		if (!doc) return;
		set({ selection: doc.nodes.filter((n) => !n.locked).map((n) => n.id) });
	},
	copyOpacity: () => {
		const { doc, selection } = get();
		if (!doc || !selection.length) return;
		const nodes = doc.nodes.filter((n) => selection.includes(n.id));
		if (!nodes.length) return;
		const value = nodes[0].opacity;
		const mixed = new Set(nodes.map((n) => n.opacity)).size > 1;
		set({ opacityClipboard: value });
		setStudioStatus(`Copied opacity ${Math.round(value * 100)}%${mixed ? " (mixed — first layer)" : ""}`);
	},
	pasteOpacity: () => {
		const { selection, opacityClipboard } = get();
		if (!selection.length || opacityClipboard == null) return;
		get().updateNodes(selection, { opacity: opacityClipboard }, true);
		setStudioStatus(`Pasted opacity ${Math.round(opacityClipboard * 100)}%`);
	},
	setPaletteOpen: (paletteOpen) => set({ paletteOpen }),
	togglePrintMarks: () => set({ printMarks: !get().printMarks }),
	setBleed: (px) => {
		const { doc } = get();
		if (!doc) return;
		get().commit();
		set({
			doc: {
				...doc,
				artboard: {
					...doc.artboard,
					bleed: px
				}
			},
			dirty: true
		});
	},
	setBleedEdges: (patch) => {
		const { doc } = get();
		if (!doc) return;
		get().commit();
		const prev = doc.artboard.bleedEdges ?? {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		};
		set({
			doc: {
				...doc,
				artboard: {
					...doc.artboard,
					bleedEdges: {
						...prev,
						...patch
					}
				}
			},
			dirty: true
		});
	},
	rename: (name) => {
		const { doc } = get();
		if (!doc) return;
		get().commit();
		set({
			doc: {
				...doc,
				name
			},
			dirty: true
		});
	}
}));
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-phosphor/70", {
	variants: {
		variant: {
			primary: "bg-phosphor text-phosphor-ink hover:bg-phosphor/90",
			secondary: "border border-border bg-glass text-ink hover:border-phosphor hover:bg-surface-alt",
			ghost: "text-ink-dim hover:bg-surface-alt hover:text-ink",
			danger: "border border-alert/40 text-alert hover:bg-alert/10"
		},
		size: {
			sm: "h-8 px-3 text-xs rounded-[8px]",
			md: "h-10 px-4 text-sm rounded-[12px]",
			icon: "size-10 rounded-[12px]",
			"icon-sm": "size-8 rounded-[8px]"
		}
	},
	defaultVariants: {
		variant: "secondary",
		size: "md"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		ref,
		...props
	});
});
Button.displayName = "Button";
function CommandPalette({ open, onClose, commands, placeholder = "Search tools, actions, templates…" }) {
	const [q, setQ] = (0, import_react.useState)("");
	const [i, setI] = (0, import_react.useState)(0);
	const inputRef = (0, import_react.useRef)(null);
	const filtered = (0, import_react.useMemo)(() => {
		const s = q.trim().toLowerCase();
		if (!s) return commands;
		return commands.filter((c) => `${c.group} ${c.label} ${c.hint ?? ""}`.toLowerCase().includes(s));
	}, [commands, q]);
	(0, import_react.useEffect)(() => {
		if (open) {
			setQ("");
			setI(0);
			const t = window.setTimeout(() => inputRef.current?.focus(), 20);
			return () => window.clearTimeout(t);
		}
	}, [open]);
	(0, import_react.useEffect)(() => {
		setI(0);
	}, [q]);
	if (!open) return null;
	const active = filtered[i];
	function run(cmd) {
		if (!cmd) return;
		onClose();
		cmd.run();
	}
	const groups = [...new Set(filtered.map((c) => c.group))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center bg-ground/70 px-3 pt-[12vh] backdrop-blur-[2px]",
		onMouseDown: (e) => {
			if (e.target === e.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-label": "Command palette",
			className: "w-full max-w-lg overflow-hidden rounded-[20px] border border-border bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.55)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: inputRef,
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder,
					className: "h-12 w-full border-b border-border bg-transparent px-4 text-sm text-ink outline-none placeholder:text-ink-faint",
					onKeyDown: (e) => {
						if (e.key === "Escape") {
							e.preventDefault();
							onClose();
						} else if (e.key === "ArrowDown") {
							e.preventDefault();
							setI((n) => Math.min(filtered.length - 1, n + 1));
						} else if (e.key === "ArrowUp") {
							e.preventDefault();
							setI((n) => Math.max(0, n - 1));
						} else if (e.key === "Enter") {
							e.preventDefault();
							run(active);
						}
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-h-[min(52vh,420px)] overflow-auto py-2 scrollbar-thin",
					children: [groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-2 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-2 py-1 font-mono text-[10px] tracking-[0.18em] text-ink-faint uppercase",
							children: g
						}), filtered.filter((c) => c.group === g).map((c) => {
							const idx = filtered.indexOf(c);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onMouseEnter: () => setI(idx),
								onClick: () => run(c),
								className: cn("flex h-9 w-full items-center justify-between rounded-[10px] px-3 text-left text-sm", idx === i ? "bg-phosphor/10 text-ink" : "text-ink-dim hover:bg-surface-alt hover:text-ink"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.label }), c.hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] text-ink-faint",
									children: c.hint
								})]
							}, c.id);
						})]
					}, g)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 py-8 text-center text-sm text-ink-faint",
						children: "Nothing matches."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between border-t border-border px-4 py-2 font-mono text-[10px] text-ink-faint uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↑↓ Move · Enter run" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Esc close" })]
				})
			]
		})
	});
}
//#endregion
export { useDesign as $, mapNodeToBox as A, rotateSelectionNodes as B, hitResizeHandle as C, isEdgeHandle as D, isCornerHandle as E, oppositeCornerPoint as F, setNudgeCue as G, selectionLabelScreen as H, oppositeEdgeSegment as I, spinPoint as J, setStudioStatus as K, releaseStudioStatus as L, nodesInMarquee as M, normalizeCrop as N, isHeldStudioStatus as O, normalizeFilters as P, unspinPoint as Q, resizeBox as R, handlePoint as S, holdStudioStatus as T, selectionTransformBox as U, scaleGroupNodes as V, setEqualGapHold as W, subscribeStudioStatus as X, subscribeEqualGapHold as Y, translateNest as Z, formatEqualGapHold as _, cloneFilters as a, getStudioStatus as b, cornerReadoutAnchor as c, drawTransformHandles as d, edgePinDelta as f, flattenLayers as g, filterKey as h, DEFAULT_FILTERS as i, nodeWorldAabb as j, layerDropLegal as k, cssFilterStyle as l, filterChipLabel as m, Button as n, cn as o, expandMovePlaces as p, smartSnap as q, CommandPalette as r, cornerPinDelta as s, AppShell as t, drawSmartGuides as u, getEqualGapHold as v, hitRotateHandle as w, groupBox as x, getNudgeCue as y, rotateGroupNodes as z };
