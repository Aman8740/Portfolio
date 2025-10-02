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