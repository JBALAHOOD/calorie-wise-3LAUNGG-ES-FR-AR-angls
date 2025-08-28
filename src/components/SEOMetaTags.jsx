import React, { useEffect } from 'react';

const seoData = {
  ar: {
    title: "حاسبة السعرات الحرارية | احسب احتياجاتك اليومية من السعرات الحرارية مجاناً",
    description: "حاسبة السعرات الحرارية الاحترافية لحساب BMR و TDEE بدقة علمية. احسب احتياجاتك اليومية من السعرات الحرارية مع نصائح غذائية مخصصة للرجيم وإنقاص الوزن.",
    keywords: "حاسبة السعرات الحرارية, احتساب السعرات, حساب BMR, TDEE, رجيم, إنقاص الوزن, نصائح غذائية, حساب الوزن المثالي",
  },
  en: {
    title: "Calorie Calculator | Calculate Your Daily Calorie Needs Free",
    description: "Professional calorie calculator to calculate BMR and TDEE with scientific accuracy. Calculate your daily calorie needs with personalized nutrition tips for diet and weight loss.",
    keywords: "calorie calculator, daily calorie needs, BMR calculator, TDEE, diet, weight loss, nutrition tips, ideal weight calculator",
  },
  es: {
    title: "Calculadora de Calorías | Calcula tus Necesidades Calóricas Diarias Gratis",
    description: "Calculadora profesional de calorías para calcular TMB y GEDT con precisión científica. Calcula tus necesidades calóricas diarias con consejos nutricionales personalizados para dieta y pérdida de peso.",
    keywords: "calculadora de calorías, calorías diarias, calculadora BMR, GEDT, dieta, pérdida de peso, consejos nutricionales, calculadora peso ideal",
  }
};

export default function SEOMetaTags({ currentLang = 'ar' }) {
  const seo = seoData[currentLang];

  useEffect(() => {
    // Update document title
    document.title = seo.title;
    
    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = seo.description;
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = seo.keywords;
    
    // Update or create meta author
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.name = 'author';
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.content = 'Calorie Calculator Pro';
    
    // Update or create robots meta
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'index, follow';
    
    // Update language meta
    let metaLanguage = document.querySelector('meta[name="language"]');
    if (!metaLanguage) {
      metaLanguage = document.createElement('meta');
      metaLanguage.name = 'language';
      document.head.appendChild(metaLanguage);
    }
    metaLanguage.content = currentLang;
    
    // Update Open Graph meta tags
    const ogTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:site_name', content: 'Calorie Calculator Pro' },
      { property: 'og:locale', content: currentLang === 'ar' ? 'ar_SA' : currentLang === 'es' ? 'es_ES' : 'en_US' }
    ];
    
    ogTags.forEach(({ property, content }) => {
      let metaOG = document.querySelector(`meta[property="${property}"]`);
      if (!metaOG) {
        metaOG = document.createElement('meta');
        metaOG.setAttribute('property', property);
        document.head.appendChild(metaOG);
      }
      metaOG.content = content;
    });
    
    // Update Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description }
    ];
    
    twitterTags.forEach(({ name, content }) => {
      let metaTwitter = document.querySelector(`meta[name="${name}"]`);
      if (!metaTwitter) {
        metaTwitter = document.createElement('meta');
        metaTwitter.name = name;
        document.head.appendChild(metaTwitter);
      }
      metaTwitter.content = content;
    });
    
    // Update theme color
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.name = 'theme-color';
      document.head.appendChild(metaTheme);
    }
    metaTheme.content = '#3B82F6';
    
    // Add structured data for rich snippets
    let structuredDataScript = document.querySelector('#structured-data');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": currentLang === 'ar' ? 'حاسبة السعرات الحرارية' : currentLang === 'es' ? 'Calculadora de Calorías' : 'Calorie Calculator',
      "description": seo.description,
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Organization",
        "name": "Calorie Calculator Pro"
      },
      "inLanguage": currentLang,
      "audience": {
        "@type": "Audience",
        "audienceType": "Health and Fitness Enthusiasts"
      }
    };
    
    structuredDataScript.textContent = JSON.stringify(structuredData);
    
  }, [currentLang, seo]);

  return null; // This component doesn't render anything visible
}