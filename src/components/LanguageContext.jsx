import React, { createContext, useState, useEffect, useContext } from 'react';

const languages = {
  ar: { name: "العربية", flag: "🇸🇦", dir: "rtl" },
  en: { name: "English", flag: "🇺🇸", dir: "ltr" },
  es: { name: "Español", flag: "🇪🇸", dir: "ltr" }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(null);
  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    const storedLang = localStorage.getItem('detectedLanguage');
    if (storedLang && languages[storedLang]) {
      handleLanguageChange(storedLang);
      setIsDetecting(false);
    } else {
      detectInitialLanguage();
    }
  }, []);

  const detectInitialLanguage = () => {
    let detectedLang = 'ar'; // Default language
    const browserLang = (navigator.language || navigator.userLanguage).split('-')[0];
    if (languages[browserLang]) {
      detectedLang = browserLang;
    }
    handleLanguageChange(detectedLang);
    setIsDetecting(false);
  };
  
  const handleLanguageChange = (newLang) => {
    if (languages[newLang]) {
      setCurrentLang(newLang);
      localStorage.setItem('detectedLanguage', newLang);
      document.documentElement.dir = languages[newLang].dir;
      document.documentElement.lang = newLang;
    }
  };

  const value = {
    currentLang,
    changeLanguage: handleLanguageChange,
    isRTL: languages[currentLang]?.dir === 'rtl',
    languages
  };

  if (isDetecting) {
    return (
      <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};