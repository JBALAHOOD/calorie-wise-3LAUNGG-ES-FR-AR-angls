
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../data/translations';

const FAQ = () => {
  const { currentLang, isRTL } = useLanguage();
  const t = (key) => getTranslation(currentLang, key);
  const [openItems, setOpenItems] = useState({});

  const faqItems = [
    {
      id: 'faq1',
      question: t('faq1Question'),
      answer: t('faq1Answer')
    },
    {
      id: 'faq2',
      question: t('faq2Question'),
      answer: t('faq2Answer')
    },
    {
      id: 'faq3',
      question: t('faq3Question'),
      answer: t('faq3Answer')
    },
    {
      id: 'faq4',
      question: t('faq4Question'),
      answer: t('faq4Answer')
    },
    {
      id: 'faq5',
      question: t('faq5Question'),
      answer: t('faq5Answer')
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-6">
      {/* FAQ Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('faqTitle')}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          {t('faqSubtitle')}
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="card overflow-hidden">
            <button
              onClick={() => toggleItem(item.id)}
              className={`w-full p-6 text-left transition-colors duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              <div className={`flex items-center justify-between ${
                isRTL ? 'flex-row-reverse' : ''
              }`}>
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className={`flex-shrink-0 transition-transform duration-200 ${
                  openItems[item.id] ? 'rotate-180' : ''
                }`}>
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </button>
            
            {/* Collapsible Content */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-6">
                <div className="border-t border-gray-100 pt-4">
                  <p className={`text-gray-700 leading-relaxed ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Help Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          {currentLang === 'ar' ? 'هل تحتاج مساعدة إضافية؟' : currentLang === 'es' ? '¿Necesitas más ayuda?' : 'Need More Help?'}
        </h3>
        <p className="text-blue-700 mb-4">
          {currentLang === 'ar'
            ? 'إذا كان لديك أسئلة أخرى حول التغذية أو حساب السعرات الحرارية، ننصحك بالتشاور مع أخصائي تغذية مؤهل.'
            : currentLang === 'es'
            ? 'Si tienes más preguntas sobre nutrición o cálculo de calorías, te recomendamos consultar con un nutricionista calificado.'
            : 'If you have more questions about nutrition or calorie calculation, we recommend consulting with a qualified nutritionist.'
          }
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {currentLang === 'ar' ? 'استشارة مجانية' : currentLang === 'es' ? 'Consulta Gratuita' : 'Free Consultation'}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {currentLang === 'ar' ? 'خبراء معتمدون' : currentLang === 'es' ? 'Expertos Certificados' : 'Certified Experts'}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            {currentLang === 'ar' ? 'دعم 24/7' : currentLang === 'es' ? 'Soporte 24/7' : '24/7 Support'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
