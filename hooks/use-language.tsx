"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { languages, translations, type Language, type TranslationKey } from "@/lib/i18n"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const saved = localStorage.getItem("raidin-language") as Language
    if (saved && saved in languages) {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("raidin-language", language)
    document.documentElement.lang = language
    document.documentElement.dir = languages[language].dir
  }, [language])

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.fr[key] || key
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        dir: languages[language].dir,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
