import { anyFaceHasAxis, clampAxis, faceAxis, type FontAxis } from "@/lib/design/fonts";
import { useDesign } from "@/lib/design/store";
import type { TextNode } from "@/lib/design/types";
import { NumField } from "./num-field";

export function MixedAxisSliders({
  nodes,
  patch,
}: {
  nodes: TextNode[];
  patch: (partial: Partial<TextNode>, commit?: boolean) => void;
}) {
  const keyNode = nodes[nodes.length - 1];
  if (!keyNode) return null;
  const families = nodes.map((n) => n.fontFamily);
  if (!anyFaceHasAxis(families, "opsz") && !anyFaceHasAxis(families, "wdth")) return null;
  const opsz = faceAxis(keyNode.fontFamily, "opsz") ?? ({ tag: "opsz", min: 9, max: 144, fallback: 144 } as FontAxis);
  const wdth = faceAxis(keyNode.fontFamily, "wdth") ?? ({ tag: "wdth", min: 75, max: 100, fallback: 100 } as FontAxis);
  const opszValue = clampAxis(opsz, keyNode.opticalSize, keyNode.fontSize);
  const wdthValue = clampAxis(wdth, keyNode.fontWidth);
  return (
    <>
      {anyFaceHasAxis(families, "opsz") && (
        <label className="mt-2 block text-[11px] text-ink-dim">
          <span className="mb-1 block">Optical {opszValue}</span>
          <input type="range" className="range-phosphor w-full" min={opsz.min} max={opsz.max} step={1} aria-label="type optical size mixed" value={opszValue} onChange={(e) => patch({ opticalSize: Number(e.target.value) }, false)} onPointerUp={() => useDesign.getState().commit()} />
          <NumField className="field mt-1 w-16 font-mono" value={opszValue} min={opsz.min} max={opsz.max} aria-label="type optical size" onCommit={(n) => patch({ opticalSize: n })} />
          <button type="button" className="mt-1 h-7 rounded-[8px] border border-border px-2 text-[10px]" onClick={() => patch({ opticalSize: undefined })}>Auto from size</button>
        </label>
      )}
      {anyFaceHasAxis(families, "wdth") && (
        <label className="mt-2 block text-[11px] text-ink-dim">
          <span className="mb-1 block">Width {wdthValue}</span>
          <input type="range" className="range-phosphor w-full" min={wdth.min} max={wdth.max} step={1} aria-label="type width mixed" value={wdthValue} onChange={(e) => patch({ fontWidth: Number(e.target.value) }, false)} onPointerUp={() => useDesign.getState().commit()} />
          <NumField className="field mt-1 w-16 font-mono" value={wdthValue} min={wdth.min} max={wdth.max} aria-label="type width" onCommit={(n) => patch({ fontWidth: n })} />
        </label>
      )}
    </>
  );
}
