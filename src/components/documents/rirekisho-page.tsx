import { useMemo, useState } from "react";
import { buildRirekishoModel, withoutPrivateDetails, type EraStyle } from "@/lib";
import { isPublicExport, useDocumentProjects } from "@/hooks";
import * as data from "@/data";
import { DocumentShell } from "./document-shell";
import { ProjectPicker } from "./project-picker";
import { RirekishoDocument } from "./rirekisho-document";
import { SaveChoicesButton } from "./save-choices-button";

function initialOptions(): { era: EraStyle; photo: boolean } {
  const query = new URLSearchParams(window.location.hash.split("?")[1] ?? "");
  return {
    era: query.has("era") ? (query.get("era") === "wareki" ? "wareki" : "western") : data.documentEra,
    photo: query.has("photo") ? query.get("photo") !== "0" : data.documentShowPhoto,
  };
}

/**
 * Rirekisho route: preview, era / photo / project options, and print / save-as-PDF.
 * @returns Rendered rirekisho page
 */
export function RirekishoPage() {
  const [initial] = useState(initialOptions);
  const [era, setEra] = useState<EraStyle>(initial.era);
  const [showPhoto, setShowPhoto] = useState(initial.photo);
  const { ids, setIds, reset } = useDocumentProjects();
  const source = useMemo(
    () => (isPublicExport() ? { ...data, privateDetails: withoutPrivateDetails() } : data),
    [],
  );
  const model = useMemo(() => buildRirekishoModel(source, { era, projectIds: ids }), [source, era, ids]);

  return (
    <DocumentShell
      title={`履歴書 - ${model.name}`}
      hint="Save as PDF · A4 · margins None."
      toolbar={
        <>
          <ProjectPicker projects={data.projectsData} selected={ids} onChange={setIds} onReset={reset} />
          <SaveChoicesButton choices={{ projects: ids, era, photo: showPhoto }} />
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
