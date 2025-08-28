
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../data/translations';
import CalculatorForm from '../components/CalculatorForm';
import Results from '../components/Results';
import BacklinksSection from '../components/BacklinksSection';

const Calculator = () => {
  const { currentLang } = useLanguage();
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const t = (key) => getTranslation(currentLang, key);

  const calculateCalories = async (formData) => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    try {
      const { age, weight, height, gender, activityLevel, goal } = formData;
      
      // Calculate BMR using Mifflin-St Jeor Equation
      let bmr;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      
      // Activity multipliers
      const activityMultipliers = {
        sedentary: 1.2,
        lightlyActive: 1.375,
        moderatelyActive: 1.55,
        veryActive: 1.725,
        extraActive: 1.9
      };
      
      // Calculate TDEE
      const tdee = bmr * activityMultipliers[activityLevel];
      
      // Adjust calories based on goal
      let recommendedCalories;
      switch (goal) {
        case 'lose':
          recommendedCalories = tdee - 500; // 500 calorie deficit for ~1lb/week loss
          break;
        case 'gain':
          recommendedCalories = tdee + 500; // 500 calorie surplus for ~1lb/week gain
          break;
        default:
          recommendedCalories = tdee;
      }
      
      // Calculate macronutrients (general recommendations)
      const protein = Math.round((recommendedCalories * 0.25) / 4); // 25% of calories, 4 cal/g
      const carbs = Math.round((recommendedCalories * 0.45) / 4); // 45% of calories, 4 cal/g
      const fats = Math.round((recommendedCalories * 0.30) / 9); // 30% of calories, 9 cal/g
      
      const calculationResults = {
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        recommendedCalories: Math.round(recommendedCalories),
        macronutrients: {
          protein,
          carbs,
          fats
        },
        formData
      };
      
      setResults(calculationResults);
    } catch (error) {
      console.error('Calculation error:', error);
    } finally {
      setIsCalculating(false);
    }
  };

  const resetCalculation = () => {
    setResults(null);
  };

  return (
    <div className="space-y-8">
      {/* Healthy Diet Introduction */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {currentLang === 'ar' ? 'النظام الغذائي الصحي' : currentLang === 'es' ? 'Dieta Saludable' : currentLang === 'fr' ? 'Alimentation Saine' : 'Healthy Diet'}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {currentLang === 'ar'
              ? 'اكتشف احتياجاتك اليومية من السعرات الحرارية وابدأ رحلتك نحو نمط حياة صحي. النظام الغذائي المتوازن هو أساس الصحة الجيدة والعافية.'
              : currentLang === 'es'
              ? 'Descubre tus necesidades calóricas diarias y comienza tu viaje hacia un estilo de vida saludable. Una dieta equilibrada es la base de una buena salud y bienestar.'
              : currentLang === 'fr'
              ? 'Découvrez vos besoins caloriques quotidiens et commencez votre voyage vers un mode de vie plus sain. Une alimentation équilibrée est la base d\'une bonne santé et du bien-être.'
              : 'Discover your daily caloric needs and start your journey towards a healthier lifestyle. A balanced diet is the foundation of good health and wellness.'
            }
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              {currentLang === 'ar' ? 'حساب دقيق' : currentLang === 'es' ? 'Cálculo preciso' : currentLang === 'fr' ? 'Calcul précis' : 'Accurate calculation'}
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {currentLang === 'ar' ? 'نصائح مخصصة' : currentLang === 'es' ? 'Consejos personalizados' : currentLang === 'fr' ? 'Conseils personnalisés' : 'Personalized tips'}
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              {currentLang === 'ar' ? 'دعم متعدد اللغات' : currentLang === 'es' ? 'Soporte multiidioma' : currentLang === 'fr' ? 'Support multilingue' : 'Multi-language support'}
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="max-w-2xl mx-auto">
        <CalculatorForm 
          onCalculate={calculateCalories}
          isCalculating={isCalculating}
          onReset={resetCalculation}
          hasResults={!!results}
        />
      </div>

      {/* Results */}
      {results && (
        <div className="max-w-4xl mx-auto">
          <Results results={results} />
        </div>
      )}

      {/* Backlinks Section */}
      <div className="max-w-4xl mx-auto">
        <BacklinksSection />
      </div>
    </div>
  );
};

export default Calculator;
