import { useCallback, useState } from "react";
import { documentProjectIds } from "@/data";

const STORAGE_KEY = "portfolio-document-projects";

function load(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.filter((id): id is string => typeof id === "string");
    }
  } catch {
    // Storage unavailable or corrupt: fall back to the configured defaults.
  }
  return documentProjectIds;
}

/**
 * Which projects appear on the resume and rirekisho. Remembered in the browser; defaults to documentProjectIds.
 * @returns The selected project ids, a setter, and a reset-to-defaults function
 */
export function useDocumentProjects(): { ids: string[]; setIds: (ids: string[]) => void; reset: () => void } {
  const [ids, setState] = useState<string[]>(load);

  const setIds = useCallback((next: string[]) => {
    setState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Selection still applies for this visit.
    }
  }, []);

  const reset = useCallback(() => {
    setState(documentProjectIds);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Nothing to clear.
    }
  }, []);

  return { ids, setIds, reset };
}
