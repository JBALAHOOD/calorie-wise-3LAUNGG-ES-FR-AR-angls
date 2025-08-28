import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BacklinksSection = () => {
  const { currentLang, isRTL } = useLanguage();

  const backlinks = {
    ar: {
      title: 'مواقع مفيدة للتغذية والصحة',
      subtitle: 'اكتشف المزيد من الموارد المفيدة حول التغذية والصحة',
      links: [
        {
          title: 'منظمة الصحة العالمية - التغذية',
          description: 'معلومات موثوقة حول التغذية الصحية من منظمة الصحة العالمية',
          url: 'https://www.who.int/health-topics/nutrition',
          category: 'صحة عامة'
        },
        {
          title: 'وزارة الصحة السعودية - التغذية',
          description: 'دليل التغذية الصحية من وزارة الصحة السعودية',
          url: 'https://www.moh.gov.sa/HealthAwareness/EducationalContent/Diseases/Lifestyle/Pages/Nutrition.aspx',
          category: 'حكومي'
        },
        {
          title: 'أكاديمية التغذية الأمريكية',
          description: 'نصائح غذائية من خبراء التغذية المعتمدين',
          url: 'https://www.eatright.org/',
          category: 'تعليمي'
        },
        {
          title: 'MyFitnessPal - تتبع السعرات',
          description: 'تطبيق شهير لتتبع السعرات الحرارية والتغذية',
          url: 'https://www.myfitnesspal.com/',
          category: 'تطبيقات'
        },
        {
          title: 'Healthline - التغذية',
          description: 'مقالات علمية موثوقة حول التغذية والصحة',
          url: 'https://www.healthline.com/nutrition',
          category: 'معلومات طبية'
        },
        {
          title: 'Harvard Health - التغذية',
          description: 'أبحاث ونصائح غذائية من جامعة هارفارد',
          url: 'https://www.health.harvard.edu/topics/diet-and-weight-loss',
          category: 'أكاديمي'
        }
      ]
    },
    en: {
      title: 'Useful Nutrition and Health Resources',
      subtitle: 'Discover more helpful resources about nutrition and health',
      links: [
        {
          title: 'World Health Organization - Nutrition',
          description: 'Reliable information about healthy nutrition from WHO',
          url: 'https://www.who.int/health-topics/nutrition',
          category: 'Public Health'
        },
        {
          title: 'Academy of Nutrition and Dietetics',
          description: 'Nutritional advice from certified nutrition experts',
          url: 'https://www.eatright.org/',
          category: 'Educational'
        },
        {
          title: 'MyFitnessPal - Calorie Tracking',
          description: 'Popular app for tracking calories and nutrition',
          url: 'https://www.myfitnesspal.com/',
          category: 'Apps'
        },
        {
          title: 'Healthline - Nutrition',
          description: 'Reliable scientific articles about nutrition and health',
          url: 'https://www.healthline.com/nutrition',
          category: 'Medical Info'
        },
        {
          title: 'Harvard Health - Nutrition',
          description: 'Nutrition research and advice from Harvard University',
          url: 'https://www.health.harvard.edu/topics/diet-and-weight-loss',
          category: 'Academic'
        },
        {
          title: 'Mayo Clinic - Healthy Diet',
          description: 'Expert advice on healthy eating from Mayo Clinic',
          url: 'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating',
          category: 'Medical'
        }
      ]
    },
    es: {
      title: 'Recursos Útiles de Nutrición y Salud',
      subtitle: 'Descubre más recursos útiles sobre nutrición y salud',
      links: [
        {
          title: 'Organización Mundial de la Salud - Nutrición',
          description: 'Información confiable sobre nutrición saludable de la OMS',
          url: 'https://www.who.int/health-topics/nutrition',
          category: 'Salud Pública'
        },
        {
          title: 'Academia de Nutrición y Dietética',
          description: 'Consejos nutricionales de expertos certificados en nutrición',
          url: 'https://www.eatright.org/',
          category: 'Educativo'
        },
        {
          title: 'MyFitnessPal - Seguimiento de Calorías',
          description: 'Aplicación popular para rastrear calorías y nutrición',
          url: 'https://www.myfitnesspal.com/',
          category: 'Aplicaciones'
        },
        {
          title: 'Healthline - Nutrición',
          description: 'Artículos científicos confiables sobre nutrición y salud',
          url: 'https://www.healthline.com/nutrition',
          category: 'Info Médica'
        },
        {
          title: 'Harvard Health - Nutrición',
          description: 'Investigación y consejos nutricionales de Harvard',
          url: 'https://www.health.harvard.edu/topics/diet-and-weight-loss',
          category: 'Académico'
        },
        {
          title: 'Mayo Clinic - Dieta Saludable',
          description: 'Consejos expertos sobre alimentación saludable de Mayo Clinic',
          url: 'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating',
          category: 'Médico'
        }
      ]
    },
    fr: {
      title: 'Ressources Utiles de Nutrition et Santé',
      subtitle: 'Découvrez plus de ressources utiles sur la nutrition et la santé',
      links: [
        {
          title: 'Organisation Mondiale de la Santé - Nutrition',
          description: 'Informations fiables sur la nutrition saine de l\'OMS',
          url: 'https://www.who.int/health-topics/nutrition',
          category: 'Santé Publique'
        },
        {
          title: 'Académie de Nutrition et Diététique',
          description: 'Conseils nutritionnels d\'experts certifiés en nutrition',
          url: 'https://www.eatright.org/',
          category: 'Éducatif'
        },
        {
          title: 'MyFitnessPal - Suivi des Calories',
          description: 'Application populaire pour suivre les calories et la nutrition',
          url: 'https://www.myfitnesspal.com/',
          category: 'Applications'
        },
        {
          title: 'Healthline - Nutrition',
          description: 'Articles scientifiques fiables sur la nutrition et la santé',
          url: 'https://www.healthline.com/nutrition',
          category: 'Info Médicale'
        },
        {
          title: 'Harvard Health - Nutrition',
          description: 'Recherche et conseils nutritionnels de Harvard',
          url: 'https://www.health.harvard.edu/topics/diet-and-weight-loss',
          category: 'Académique'
        },
        {
          title: 'Mayo Clinic - Alimentation Saine',
          description: 'Conseils d\'experts sur l\'alimentation saine de Mayo Clinic',
          url: 'https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating',
          category: 'Médical'
        }
      ]
    }
  };

  const content = backlinks[currentLang];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.links.map((link, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {link.category}
                  </span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                
                {/* Link Title */}
                <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </h3>
                
                {/* Description */}
                <p className={`text-gray-600 text-sm leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                  {link.description}
                </p>
                
                {/* Visit Link */}
                <div className="mt-4">
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                  >
                    {currentLang === 'ar' ? 'زيارة الموقع' : currentLang === 'es' ? 'Visitar sitio' : 'Visit site'}
                    <svg className={`w-4 h-4 ${isRTL ? 'mr-1' : 'ml-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M7 16l-4-4m0 0l4-4m-4 4h18" : "M17 8l4 4m0 0l-4 4m4-4H3"} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div>
              <h4 className="text-sm font-semibold text-yellow-800 mb-1">
                {currentLang === 'ar' ? 'إخلاء مسؤولية' : currentLang === 'es' ? 'Descargo de responsabilidad' : 'Disclaimer'}
              </h4>
              <p className="text-sm text-yellow-700">
                {currentLang === 'ar'
                  ? 'هذه الروابط مقدمة للمعلومات العامة فقط. نحن لا نتحمل مسؤولية محتوى المواقع الخارجية. يُنصح بالتشاور مع أخصائي صحي مؤهل قبل اتخاذ أي قرارات صحية.'
                  : currentLang === 'es'
                  ? 'Estos enlaces se proporcionan solo para información general. No somos responsables del contenido de sitios web externos. Se recomienda consultar con un profesional de la salud calificado antes de tomar decisiones de salud.'
                  : 'These links are provided for general information only. We are not responsible for the content of external websites. It is recommended to consult with a qualified health professional before making health decisions.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BacklinksSection;