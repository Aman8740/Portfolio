import { useState, useEffect, useCallback } from "react";
import { safeJsonParse } from "@/lib";
import type { Interview } from "@/types";

const STORAGE_KEY = "portfolio-interviews";

/**
 * Loads interview records from local storage safely.
 * @returns Array of loaded Interview objects
 */
function loadInterviews(): Interview[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return safeJsonParse<Interview[]>(data, []);
}

/**
 * Saves interview records into local storage.
 * @param interviews - Array of interview records to persist
 */
function saveInterviews(interviews: Interview[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(interviews));
}

/**
 * Hook for managing interview lifecycle, tracking status, updates, and persistence.
 * @returns State and mutating callbacks for interview records
 */
export function useInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>(loadInterviews);

  useEffect(() => {
    saveInterviews(interviews);
  }, [interviews]);

  const addInterview = useCallback((interview: Omit<Interview, "id" | "createdAt" | "updatedAt">) => {
    const now = new Date().toISOString();
    const newInterview: Interview = {
      ...interview,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    };
    setInterviews((prev) => [newInterview, ...prev]);
  }, []);

  const updateInterview = useCallback((id: string, updates: Partial<Omit<Interview, "id" | "createdAt">>) => {
    setInterviews((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, ...updates, updatedAt: new Date().toISOString() } : i
      )
    );
  }, []);

  const deleteInterview = useCallback((id: string) => {
    setInterviews((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const getInterview = useCallback(
    (id: string) => interviews.find((i) => i.id === id),
    [interviews]
  );

  return {
    interviews,
    addInterview,
    updateInterview,
    deleteInterview,
    getInterview,
  };
}

export default useInterviews;
