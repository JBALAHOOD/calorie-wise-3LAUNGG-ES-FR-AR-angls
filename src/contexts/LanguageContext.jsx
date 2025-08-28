import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const languages = {
  en: { name: 'English', dir: 'ltr', flag: '🇺🇸' },
  es: { name: 'Español', dir: 'ltr', flag: '🇪🇸' },
  fr: { name: 'Français', dir: 'ltr', flag: '🇫🇷' },
  ar: { name: 'العربية', dir: 'rtl', flag: '🇸🇦' }
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('en');
  const [isLoading, setIsLoading] = useState(true);

  const detectInitialLanguage = async () => {
    // Check localStorage first
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && languages[savedLang]) {
      return savedLang;
    }
    
    // Try to detect language from browser
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0].toLowerCase();
    
    // Map browser language to supported languages
    const langMapping = {
      'ar': 'ar',
      'es': 'es',
      'fr': 'fr',
      'en': 'en'
    };
    
    if (langMapping[langCode]) {
      return langMapping[langCode];
    }
    
    // Try to detect language from IP geolocation (fallback)
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const countryCode = data.country_code?.toLowerCase();
      
      // Map country codes to languages
      const countryLangMapping = {
        'sa': 'ar', 'ae': 'ar', 'eg': 'ar', 'ma': 'ar', 'dz': 'ar', 'tn': 'ar',
        'ly': 'ar', 'sd': 'ar', 'sy': 'ar', 'iq': 'ar', 'jo': 'ar', 'lb': 'ar',
        'kw': 'ar', 'qa': 'ar', 'bh': 'ar', 'om': 'ar', 'ye': 'ar',
        'es': 'es', 'mx': 'es', 'ar': 'es', 'co': 'es', 've': 'es', 'pe': 'es',
        'cl': 'es', 'ec': 'es', 'gt': 'es', 'cu': 'es', 'bo': 'es', 'do': 'es',
        'hn': 'es', 'py': 'es', 'sv': 'es', 'ni': 'es', 'cr': 'es', 'pa': 'es',
        'uy': 'es', 'gq': 'es',
        'fr': 'fr', 'be': 'fr', 'ch': 'fr', 'ca': 'fr', 'lu': 'fr', 'mc': 'fr',
        'sn': 'fr', 'ci': 'fr', 'ml': 'fr', 'bf': 'fr', 'ne': 'fr', 'td': 'fr',
        'mg': 'fr', 'cm': 'fr', 'cd': 'fr', 'cg': 'fr', 'ga': 'fr', 'cf': 'fr',
        'dj': 'fr', 'km': 'fr', 'sc': 'fr', 'vu': 'fr', 'nc': 'fr', 'pf': 'fr'
      };
      
      if (countryLangMapping[countryCode]) {
        return countryLangMapping[countryCode];
      }
    } catch (error) {
      console.log('Geolocation detection failed, using default language');
    }
    
    // Default to English if no detection works
    return 'en';
  };

  useEffect(() => {
    const initLanguage = async () => {
      setIsLoading(true);
      const detectedLang = await detectInitialLanguage();
      setCurrentLang(detectedLang);
      
      // Set document direction and language
      document.documentElement.dir = languages[detectedLang].dir;
      document.documentElement.lang = detectedLang;
      
      // Save detected language to localStorage
      localStorage.setItem('selectedLanguage', detectedLang);
      
      setIsLoading(false);
    };
    
    initLanguage();
  }, []);

  useEffect(() => {
    // Update document direction and language
    const lang = languages[currentLang];
    document.documentElement.dir = lang.dir;
    document.documentElement.lang = currentLang;
    
    // Save to localStorage
    localStorage.setItem('selectedLanguage', currentLang);
  }, [currentLang]);

  const changeLanguage = (langCode) => {
    if (languages[langCode]) {
      setCurrentLang(langCode);
    }
  };

  const value = {
    currentLang,
    changeLanguage,
    languages,
    isRTL: languages[currentLang].dir === 'rtl'
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};