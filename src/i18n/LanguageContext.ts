import { createContext } from 'react'
import type { Lang } from '../types'
import type { TranslationKey } from './translations'

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TranslationKey) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
