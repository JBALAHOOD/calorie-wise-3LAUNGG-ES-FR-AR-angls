

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Globe, Calculator, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SEOMetaTags from "./components/SEOMetaTags";
import { LanguageProvider, useLanguage } from './components/LanguageContext';

const LayoutContent = ({ children, currentPageName }) => {
  const { currentLang, changeLanguage, isRTL, languages } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    ar: { title: "حاسبة السعرات الحرارية", subtitle: "احسب احتياجاتك اليومية", calculator: "الحاسبة" },
    en: { title: "Calorie Calculator", subtitle: "Calculate your daily needs", calculator: "Calculator" },
    es: { title: "Calculadora de Calorías", subtitle: "Calcula tus necesidades diarias", calculator: "Calculadora" }
  };

  if (!currentLang) {
    return null; // Don't render if language is not yet determined
  }
  
  const t = translations[currentLang];

  return (
    <>
      <SEOMetaTags currentLang={currentLang} />
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
          body { font-family: ${isRTL ? "'Amiri', serif" : "'Inter', sans-serif"}; }
          .font-arabic { font-family: 'Amiri', serif; }
        `}</style>
        
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to={createPageUrl("Calculator")} className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <h1 className="text-xl font-bold text-gray-900">{t.title}</h1>
                  <p className="text-xs text-gray-500">{t.subtitle}</p>
                </div>
              </Link>
              <div className="hidden md:flex items-center gap-8">
                <nav className="flex items-center gap-6">
                  <Link
                    to={createPageUrl("Calculator")}
                    className={`text-sm font-medium transition-colors hover:text-blue-600 ${currentPageName === "Calculator" ? "text-blue-600" : "text-gray-700"}`}
                  >
                    {t.calculator}
                  </Link>
                </nav>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2 h-9">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">{languages[currentLang].flag}</span>
                      <ChevronDown className="w-3 h-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-[150px]">
                    {Object.entries(languages).map(([code, lang]) => (
                      <DropdownMenuItem key={code} onClick={() => changeLanguage(code)} className={`gap-3 ${currentLang === code ? 'bg-blue-50' : ''}`}>
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="md:hidden flex items-center">
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>
            {isMenuOpen && (
              <div className="md:hidden border-t border-gray-200 py-4">
                <nav className="flex flex-col gap-4">
                  <Link to={createPageUrl("Calculator")} className="text-sm font-medium text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                    {t.calculator}
                  </Link>
                  <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Globe className="w-4 h-4" />
                      <span>{languages[currentLang].name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-full">
                    {Object.entries(languages).map(([code, lang]) => (
                      <DropdownMenuItem key={code} onClick={() => { changeLanguage(code); setIsMenuOpen(false); }}>
                        {lang.flag} {lang.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                </nav>
              </div>
            )}
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            <p className="text-sm text-gray-600">
              © 2024 {t.title}. {isRTL ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default function Layout({ children, currentPageName }) {
  return (
    <LanguageProvider>
      <LayoutContent currentPageName={currentPageName}>
        {children}
      </LayoutContent>
    </LanguageProvider>
  );
}

