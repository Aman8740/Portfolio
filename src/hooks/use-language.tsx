import { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ja";

export interface LanguageContextState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const STORAGE_KEY = "portfolio-language";

const initialState: LanguageContextState = {
  language: "en",
  setLanguage: () => null,
};

const LanguageContext = createContext<LanguageContextState>(initialState);

export interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

/**
 * Provides application-wide language state and persists preference in localStorage.
 * @param children - React child nodes
 * @param defaultLanguage - Default language fallback
 * @returns Rendered LanguageProvider
 */
export function LanguageProvider({
  children,
  defaultLanguage = "en",
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "ja" || saved === "en" ? saved : defaultLanguage;
  });

  const setLanguage = (newLang: Language) => {
    localStorage.setItem(STORAGE_KEY, newLang);
    setLanguageState(newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextState = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Hook to access and update active portfolio language globally.
 * @returns Current LanguageContextState
 */
export function useLanguage(): LanguageContextState {
  const context = useContext(LanguageContext);
  if (!context) {
    return initialState;
  }
  return context;
}

export default LanguageProvider;
