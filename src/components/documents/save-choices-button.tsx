import { useState } from "react";
import { Save } from "lucide-react";

export interface SaveChoicesButtonProps {
  choices: Record<string, unknown>;
}

/**
 * Saves the current choices to generated/selection.json (dev server only) so `npm run pdf` uses them.
 * @param choices - Values to remember, for example the selected project ids
 * @returns Rendered button with a short status message
 */
export function SaveChoicesButton({ choices }: SaveChoicesButtonProps) {
  const [status, setStatus] = useState<"idle" | "saved" | "failed">("idle");

  const save = async () => {
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}__doc-selection`, {
        method: "POST",
        body: JSON.stringify(choices),
      });
      setStatus(response.ok ? "saved" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <button type="button" className="doc-btn" onClick={save}>
      <Save size={16} />
      <span>{status === "saved" ? "Saved for PDF" : status === "failed" ? "Save failed" : "Save choices for PDF"}</span>
    </button>
  );
}
