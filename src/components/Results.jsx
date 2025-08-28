
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../data/translations';

const Results = ({ results }) => {
  const { currentLang, isRTL } = useLanguage();
  const t = (key) => getTranslation(currentLang, key);

  if (!results) return null;

  const { bmr, tdee, recommendedCalories, macronutrients } = results;

  const nutritionTips = [
    t('tip1'),
    t('tip2'),
    t('tip3'),
    t('tip4'),
    t('tip5')
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Results Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t('results')}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      {/* Main Results Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* BMR Card */}
        <div className="card p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t('bmr')}
          </h3>
          <div className="text-3xl font-bold text-blue-600 mb-1">
            {bmr.toLocaleString()}
          </div>
          <p className="text-sm text-gray-600">
            {t('calories')}
          </p>
        </div>

        {/* TDEE Card */}
        <div className="card p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t('tdee')}
          </h3>
          <div className="text-3xl font-bold text-green-600 mb-1">
            {tdee.toLocaleString()}
          </div>
          <p className="text-sm text-gray-600">
            {t('calories')}
          </p>
        </div>

        {/* Recommended Calories Card */}
        <div className="card p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {t('recommendedCalories')}
          </h3>
          <div className="text-3xl font-bold text-purple-600 mb-1">
            {recommendedCalories.toLocaleString()}
          </div>
          <p className="text-sm text-gray-600">
            {t('calories')}
          </p>
        </div>
      </div>

      {/* Macronutrients Section */}
      <div className="card p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          {t('macronutrients')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Protein */}
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {t('protein')}
            </h4>
            <div className="text-2xl font-bold text-red-600 mb-1">
              {macronutrients.protein}g
            </div>
            <div className="text-sm text-gray-600">
              25% • {(macronutrients.protein * 4).toLocaleString()} {t('calories')}
            </div>
          </div>

          {/* Carbohydrates */}
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {t('carbs')}
            </h4>
            <div className="text-2xl font-bold text-yellow-600 mb-1">
              {macronutrients.carbs}g
            </div>
            <div className="text-sm text-gray-600">
              45% • {(macronutrients.carbs * 4).toLocaleString()} {t('calories')}
            </div>
          </div>

          {/* Fats */}
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {t('fats')}
            </h4>
            <div className="text-2xl font-bold text-orange-600 mb-1">
              {macronutrients.fats}g
            </div>
            <div className="text-sm text-gray-600">
              30% • {(macronutrients.fats * 9).toLocaleString()} {t('calories')}
            </div>
          </div>
        </div>
      </div>

      {/* Nutrition Tips */}
      <div className="card p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          {t('tipsTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nutritionTips.map((tip, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-semibold text-blue-600">{index + 1}</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <div>
            <h4 className="text-sm font-semibold text-yellow-800 mb-1">
              {currentLang === 'ar' ? 'تنبيه مهم' : currentLang === 'es' ? 'Aviso Importante' : 'Important Notice'}
            </h4>
            <p className="text-sm text-yellow-700">
              {currentLang === 'ar'
                ? 'هذه النتائج تقديرية وتعتمد على معادلات عامة. استشر طبيبك أو أخصائي تغذية قبل إجراء تغييرات كبيرة على نظامك الغذائي.'
                : currentLang === 'es'
                ? 'Estos resultados son estimaciones basadas en fórmulas generales. Consulta a tu médico o nutricionista antes de hacer cambios significativos en tu dieta.'
                : 'These results are estimates based on general formulas. Consult your doctor or nutritionist before making significant changes to your diet.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
