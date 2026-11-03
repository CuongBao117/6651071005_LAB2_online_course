import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from '../types'
import { LanguageContext } from './LanguageContext'
import { translations, type TranslationKey } from './translations'

const STORAGE_KEY = 'lang'

function readInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'vi' || saved === 'en') return saved
  } catch {
    // localStorage không dùng được thì rơi về mặc định
  }
  return 'vi'
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // bỏ qua nếu không ghi được
    }
  }, [])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (key: TranslationKey) => translations[lang][key],
    }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
