/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Language } from '../types/content'
import { translations } from './translations'

const STORAGE_KEY = 'desa-segar-language'

interface I18nContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (typeof translations)['bm']
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

function getInitialLanguage(): Language {
  const storedLanguage = localStorage.getItem(STORAGE_KEY)
  if (storedLanguage === 'bm' || storedLanguage === 'en') {
    return storedLanguage
  }
  return 'bm'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language === 'bm' ? 'ms-MY' : 'en'
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
