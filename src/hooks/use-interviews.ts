import { useState, useEffect, useCallback } from "react"
import type { Interview } from "@/types"

const STORAGE_KEY = "portfolio-interviews"

function loadInterviews(): Interview[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveInterviews(interviews: Interview[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(interviews))
}

export function useInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>(loadInterviews)

  useEffect(() => {
    saveInterviews(interviews)
  }, [interviews])

  const addInterview = useCallback((interview: Omit<Interview, "id" | "createdAt" | "updatedAt">) => {
    const now = new Date().toISOString()
    const newInterview: Interview = {
      ...interview,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    }
    setInterviews((prev) => [newInterview, ...prev])
  }, [])

  const updateInterview = useCallback((id: string, updates: Partial<Omit<Interview, "id" | "createdAt">>) => {
    setInterviews((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, ...updates, updatedAt: new Date().toISOString() } : i
      )
    )
  }, [])

  const deleteInterview = useCallback((id: string) => {
    setInterviews((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const getInterview = useCallback(
    (id: string) => interviews.find((i) => i.id === id),
    [interviews]
  )

  return {
    interviews,
    addInterview,
    updateInterview,
    deleteInterview,
    getInterview,
  }
}
