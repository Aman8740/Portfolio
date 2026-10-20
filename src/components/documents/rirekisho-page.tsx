import { useMemo, useState } from "react";
import { buildRirekishoModel, type EraStyle } from "@/lib";
import * as data from "@/data";
import { DocumentShell } from "./document-shell";
import { RirekishoDocument } from "./rirekisho-document";

function initialOptions(): { era: EraStyle; photo: boolean } {
  const query = new URLSearchParams(window.location.hash.split("?")[1] ?? "");
  return { era: query.get("era") === "wareki" ? "wareki" : "western", photo: query.get("photo") !== "0" };
}

/**
 * Rirekisho route: preview, era / photo options, and print / save-as-PDF.
 * @returns Rendered rirekisho page
 */
export function RirekishoPage() {
  const [initial] = useState(initialOptions);
  const [era, setEra] = useState<EraStyle>(initial.era);
  const [showPhoto, setShowPhoto] = useState(initial.photo);
  const model = useMemo(() => buildRirekishoModel(data, { era }), [era]);

  return (
    <DocumentShell
      title={`履歴書 - ${model.name}`}
      hint="Save as PDF · A4 · margins None."
      toolbar={
        <>
          <button type="button" className="doc-btn" aria-pressed={era === "western"} onClick={() => setEra("western")}>
            西暦
          </button>
          <button type="button" className="doc-btn" aria-pressed={era === "wareki"} onClick={() => setEra("wareki")}>
            和暦
          </button>
          <button type="button" className="doc-btn" aria-pressed={showPhoto} onClick={() => setShowPhoto((v) => !v)}>
            写真
          </button>
        </>
      }
    >
      <RirekishoDocument model={model} showPhoto={showPhoto} />
    </DocumentShell>
  );
}
