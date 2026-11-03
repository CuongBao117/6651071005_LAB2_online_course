export type Lang = 'vi' | 'en'
export type Localized = Record<Lang, string>
export type Level = 'beginner' | 'intermediate' | 'advanced'

export interface Course {
  id: number
  title: Localized
  category: Localized
  instructor: string
  price: number
  level: Level
  hours: number
  lessons: number
  rating: number
  description: Localized
}
