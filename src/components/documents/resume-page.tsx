import { useMemo } from "react";
import { buildResumeModel } from "@/lib";
import { useDocumentProjects } from "@/hooks";
import * as data from "@/data";
import { DocumentShell } from "./document-shell";
import { ProjectPicker } from "./project-picker";
import { ResumeDocument } from "./resume-document";
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
  const model = useMemo(() => buildResumeModel(data, { projectIds: ids }), [ids]);

  return (
    <DocumentShell
      title={`${model.name} - Resume`}
      hint="Save as PDF · A4 · margins None."
      toolbar={<ProjectPicker projects={data.projectsData} selected={ids} onChange={setIds} onReset={reset} />}
    >
      <ResumeDocument model={model} />
    </DocumentShell>
  );
}
