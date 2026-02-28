export interface Education {
  id: string
  instituteName: string
  course: string
  grades: Grade[]
  logo: string
  timeframe: string
}

export interface Grade {
  type: string
  value: string
}

export interface Certificate {
  id: string
  name: string
  institute: string
  imageUrl: string
}

export interface Experience {
  id: string
  companyName: string
  position: string
  description: string
  logo: string
  timeframe: string
}

export interface Skill {
  id: string
  name: string
  category: string
  level: string
}

export interface Project {
  id: string
  name: string
  slogan: string
  description: string
  logo: string
  madeAt: number
  skills: string[]
}

export interface PersonalInfo {
  name: string
  photo: string
  linkedin: string
  github: string
}

export interface Resume {
  id: string
  name: string
  fileName: string
}

export type InterviewStatus = "applied" | "scheduled" | "taken" | "passed" | "failed" | "offer" | "rejected" | "ghosted" | "cancelled"

export type InterviewRound = "applied" | "phone-screen" | "technical" | "system-design" | "behavioral" | "hr" | "final" | "assignment" | "other"

export type InterviewSource = "linkedin" | "naukri" | "indeed" | "company-website" | "referral" | "recruiter" | "angel-list" | "japandev" | "other"

export type InterviewLocation = "remote" | "onsite" | "hybrid"

export type SalaryCurrency = "inr" | "jpy"

export interface Interview {
  id: string
  companyName: string
  position: string
  status: InterviewStatus
  round: InterviewRound
  source: InterviewSource
  appliedVia: string
  appliedDate: string
  interviewDate: string
  location: InterviewLocation
  salaryCurrency: SalaryCurrency
  salary: string
  jobUrl: string
  contactPerson: string
  contactEmail: string
  notes: string
  createdAt: string
  updatedAt: string
}