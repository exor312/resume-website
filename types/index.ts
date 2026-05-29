export type Experience = {
  id: string
  company: string
  role: string
  startDate: string
  endDate?: string
  description: string[]
  tech: string[]
}

export type Education = {
  id: string
  degree: string
  institution: string
  startDate: string
  endDate?: string
  gpa?: string
  achievements?: string[]
}

export type Skill = {
  name: string
  icon?: string
}

export type SkillCategory = {
  category: string
  skills: Skill[]
}

export type Project = {
  id: string
  title: string
  description: string
  role?: string
  details?: string[]
  image?: string
  tech: string[]
  githubUrl?: string
  liveUrl?: string
}

export type SocialLink = {
  platform: string
  url: string
  icon: string
}
