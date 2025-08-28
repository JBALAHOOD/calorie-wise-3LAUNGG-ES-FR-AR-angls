import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../data/translations';

const Layout = ({ children }) => {
  const { currentLang, changeLanguage, languages, isRTL } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = (key) => getTranslation(currentLang, key);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'font-arabic' : 'font-sans'}`}>
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Title */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                {t('title')}
              </h1>
            </div>

            {/* Desktop Language Selector */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                {Object.entries(languages).map(([code, lang]) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                      currentLang === code
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span className="mr-1">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Language Selector */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-medium text-gray-700 mb-2">
                  Language / اللغة / Idioma
                </span>
                {Object.entries(languages).map(([code, lang]) => (
                  <button
                    key={code}
                    onClick={() => {
                      changeLanguage(code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      currentLang === code
                        ? 'bg-blue-50 text-blue-600 border border-blue-200'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t('subtitle')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {currentLang === 'ar' 
              ? 'احسب احتياجاتك اليومية من السعرات الحرارية بدقة باستخدام حاسبتنا المتقدمة'
              : currentLang === 'es'
              ? 'Calcula con precisión tus necesidades calóricas diarias con nuestra calculadora avanzada'
              : 'Calculate your daily caloric needs accurately with our advanced calculator'
            }
          </p>
        </div>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              {currentLang === 'ar'
                ? '© 2024 حاسبة السعرات الحرارية. جميع الحقوق محفوظة.'
                : currentLang === 'es'
                ? '© 2024 Calculadora de Calorías. Todos los derechos reservados.'
                : '© 2024 Calorie Calculator. All rights reserved.'
              }
            </p>
            <p className="text-xs mt-2 text-gray-500">
              {currentLang === 'ar'
                ? 'استشر طبيبك قبل إجراء تغييرات كبيرة على نظامك الغذائي'
                : currentLang === 'es'
                ? 'Consulta a tu médico antes de hacer cambios importantes en tu dieta'
                : 'Consult your doctor before making significant changes to your diet'
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;