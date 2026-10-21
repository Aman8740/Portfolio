import type { ComponentType } from 'react'

export interface Education {
  id: string
  instituteName: string
  course: string
  grades: Grade[]
  logo: string
  timeframe: string
  expectedEnd?: string
  instituteNameJa?: string
  courseJa?: string
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
  shortName?: string
  completedOn?: string
  url?: string
  nameJa?: string
  instituteJa?: string
}

export interface Experience {
  id: string
  companyName: string
  position: string
  description: string
  logo: string
  timeframe: string
  resumeBullets?: string[]
  companyNameJa?: string
  positionJa?: string
  descriptionJa?: string
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
  sloganJa?: string
  description: string
  descriptionJa?: string
  logo?: string
  logoComponent?: ComponentType<{ size?: number }>
  madeAt: number
  skills: string[]
  projectUrl?: string
  media?: string[]
  resume?: ProjectResume
}

export interface ProjectResume {
  order: number
  headline: string
  bullets: string[]
  tech: string[]
}

export interface PersonalInfo {
  name: string
  nameJa: string
  title: string
  photo: string
  portfolioUrl: string
  linkedin: string
  github: string
}

export type InterviewStatus = "applied" | "scheduled" | "taken" | "passed" | "failed" | "offer" | "rejected" | "ghosted" | "cancelled"

export type InterviewRound = "applied" | "phone-screen" | "technical" | "system-design" | "behavioral" | "hr" | "final" | "assignment" | "other"

export type InterviewSource = "linkedin" | "indeed" | "company-website" | "japandev" | "tokyodev" | "glassdoor" | "daijob" | "other"

export type InterviewLocation = "remote" | "onsite" | "hybrid"

export type SalaryCurrency = "inr" | "jpy" | "usd"

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

export interface ResumeConfig {
  profile: string
  languageSkillIds: string[]
  skillGroups: string[][]
}

export interface RirekishoConfig {
  birthDate?: string
  gender?: string
  postalCode?: string
  addressFurigana?: string
  address?: string
  addressJa?: string
  phone?: string
  contactPostalCode?: string
  contactAddressFurigana?: string
  contactAddress?: string
  contactPhone?: string
  motivation: string
  requests: string
}

export interface PrivateDetails {
  email: string
  phone: string
  rirekisho?: Partial<RirekishoConfig>
}
