import { useMemo } from "react";
import { buildResumeModel } from "@/lib";
import * as data from "@/data";
import { DocumentShell } from "./document-shell";
import { ResumeDocument } from "./resume-document";
import "@fontsource/lato/400.css";
import "@fontsource/lato/400-italic.css";
import "@fontsource/lato/700.css";
import "@fontsource/dejavu-sans/400.css";
import "@fontsource/dejavu-sans/700.css";

/**
 * Resume route: preview plus print / save-as-PDF.
 * @returns Rendered resume page
 */
export function ResumePage() {
  const model = useMemo(() => buildResumeModel(data), []);

  return (
    <DocumentShell
      title={`${model.name} - Resume`}
      hint="Choose “Save as PDF”, paper A4, margins None, background graphics on."
    >
      <ResumeDocument model={model} />
    </DocumentShell>
  );
}
