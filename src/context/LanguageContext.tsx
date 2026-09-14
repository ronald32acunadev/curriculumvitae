import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CVContent, UILabels } from '../types/cv';
import { cvData, uiLabels } from '../data/cvData';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  data: CVContent;
  labels: UILabels;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const detectBrowserLanguage = (): Language => {
  if (typeof navigator !== 'undefined') {
    const languages =
      navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language];

    for (const lang of languages) {
      if (!lang) continue;
      const normalized = lang.toLowerCase();
      if (normalized.startsWith('es')) {
        return 'es';
      }
      if (normalized.startsWith('en')) {
        return 'en';
      }
    }
  }
  return 'en'; // Default to English
};

export const detectSystemLanguage = detectBrowserLanguage;

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('cv_language') as Language | null;
    if (saved === 'es' || saved === 'en') return saved;
    return detectBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('cv_language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        data: cvData[language],
        labels: uiLabels[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
