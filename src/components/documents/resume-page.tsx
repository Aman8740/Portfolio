import { useMemo } from "react";
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

  return (
    <DocumentShell
      title={`${model.name} - Resume`}
      hint="Save as PDF · margins None."
      pageSize="210mm 264mm"
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
