import { useEffect, useMemo, useState } from "react";
import { buildResumeModel, withoutPrivateDetails } from "@/lib";
import { isPublicExport, useDocumentProjects } from "@/hooks";
import * as data from "@/data";
import { DocumentShell } from "./document-shell";
import { ProjectPicker } from "./project-picker";
import { ResumeDocument } from "./resume-document";
import { SaveChoicesButton } from "./save-choices-button";
import "@fontsource/lato/400.css";
import "@fontsource/lato/400-italic.css";
import "@fontsource/lato/700.css";
import "@fontsource/dejavu-sans/400.css";
import "@fontsource/dejavu-sans/700.css";

const ORIGINAL_PAGE_MM = 264;
const A4_HEIGHT_MM = 297;

/**
 * Resume route: preview, project selection, and print / save-as-PDF.
 * @returns Rendered resume page
 */
export function ResumePage() {
  const { ids, setIds, reset } = useDocumentProjects();
  const source = useMemo(
    () => (isPublicExport() ? { ...data, privateDetails: withoutPrivateDetails() } : data),
    [],
  );
  const model = useMemo(() => buildResumeModel(source, { projectIds: ids }), [source, ids]);
  const [pageSize, setPageSize] = useState(`210mm ${ORIGINAL_PAGE_MM}mm`);

  // One page sized to the content (never shorter than the original resume, never taller than A4);
  // longer content falls back to A4 pages.
  useEffect(() => {
    const paper = document.querySelector<HTMLElement>(".resume-paper");
    const zoomed = document.querySelector<HTMLElement>(".doc-zoom");
    if (!paper || !zoomed) return;
    const measure = () => {
      const zoom = parseFloat(getComputedStyle(zoomed).zoom) || 1;
      const mm = paper.getBoundingClientRect().height / zoom / (96 / 25.4);
      setPageSize(
        mm <= A4_HEIGHT_MM ? `210mm ${Math.max(ORIGINAL_PAGE_MM, Math.ceil(mm + 0.6))}mm` : "A4",
      );
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(paper);
    return () => observer.disconnect();
  }, [model]);

  return (
    <DocumentShell
      title={`${model.name} - Resume`}
      hint="Save as PDF · margins None."
      pageSize={pageSize}
      toolbar={
        <>
          <ProjectPicker projects={data.projectsData} selected={ids} onChange={setIds} onReset={reset} />
          <SaveChoicesButton choices={{ projects: ids }} />
        </>
      }
    >
      <ResumeDocument model={model} />
    </DocumentShell>
  );
}
