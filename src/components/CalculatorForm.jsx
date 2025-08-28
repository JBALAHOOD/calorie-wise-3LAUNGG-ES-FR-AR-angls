import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../data/translations';

const CalculatorForm = ({ onCalculate, isCalculating, onReset, hasResults }) => {
  const { currentLang, isRTL } = useLanguage();
  const t = (key) => getTranslation(currentLang, key);
  
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    gender: 'male',
    activityLevel: 'sedentary',
    goal: 'maintain'
  });
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.age) {
      newErrors.age = t('ageRequired');
    } else if (formData.age < 10 || formData.age > 120) {
      newErrors.age = t('invalidAge');
    }
    
    if (!formData.weight) {
      newErrors.weight = t('weightRequired');
    } else if (formData.weight < 30 || formData.weight > 300) {
      newErrors.weight = t('invalidWeight');
    }
    
    if (!formData.height) {
      newErrors.height = t('heightRequired');
    } else if (formData.height < 100 || formData.height > 250) {
      newErrors.height = t('invalidHeight');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onCalculate({
        ...formData,
        age: parseInt(formData.age),
        weight: parseFloat(formData.weight),
        height: parseFloat(formData.height)
      });
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleReset = () => {
    setFormData({
      age: '',
      weight: '',
      height: '',
      gender: 'male',
      activityLevel: 'sedentary',
      goal: 'maintain'
    });
    setErrors({});
    onReset();
  };

  return (
    <div className="card p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('age')} ({t('years')})
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
              className={`input ${errors.age ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="25"
              min="10"
              max="120"
            />
            {errors.age && (
              <p className="text-red-500 text-xs mt-1">{errors.age}</p>
            )}
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('weight')} ({t('kg')})
            </label>
            <input
              type="number"
              value={formData.weight}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              className={`input ${errors.weight ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="70"
              min="30"
              max="300"
              step="0.1"
            />
            {errors.weight && (
              <p className="text-red-500 text-xs mt-1">{errors.weight}</p>
            )}
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('height')} ({t('cm')})
            </label>
            <input
              type="number"
              value={formData.height}
              onChange={(e) => handleInputChange('height', e.target.value)}
              className={`input ${errors.height ? 'border-red-500 focus:ring-red-500' : ''}`}
              placeholder="175"
              min="100"
              max="250"
            />
            {errors.height && (
              <p className="text-red-500 text-xs mt-1">{errors.height}</p>
            )}
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('gender')}
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{t('male')}</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{t('female')}</span>
            </label>
          </div>
        </div>

        {/* Activity Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('activityLevel')}
          </label>
          <select
            value={formData.activityLevel}
            onChange={(e) => handleInputChange('activityLevel', e.target.value)}
            className="input"
          >
            <option value="sedentary">{t('sedentary')}</option>
            <option value="lightlyActive">{t('lightlyActive')}</option>
            <option value="moderatelyActive">{t('moderatelyActive')}</option>
            <option value="veryActive">{t('veryActive')}</option>
            <option value="extraActive">{t('extraActive')}</option>
          </select>
        </div>

        {/* Goal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            {t('goal')}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {['maintain', 'lose', 'gain'].map((goalOption) => (
              <label key={goalOption} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="goal"
                  value={goalOption}
                  checked={formData.goal === goalOption}
                  onChange={(e) => handleInputChange('goal', e.target.value)}
                  className="mr-3 text-blue-600 focus:ring-blue-500"
                />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {t(goalOption)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {goalOption === 'lose' && (currentLang === 'ar' ? '-500 سعرة حرارية' : currentLang === 'es' ? '-500 calorías' : '-500 calories')}
                    {goalOption === 'gain' && (currentLang === 'ar' ? '+500 سعرة حرارية' : currentLang === 'es' ? '+500 calorías' : '+500 calories')}
                    {goalOption === 'maintain' && (currentLang === 'ar' ? 'الحفاظ على الوزن الحالي' : currentLang === 'es' ? 'Mantener peso actual' : 'Maintain current weight')}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="submit"
            disabled={isCalculating}
            className="btn btn-primary flex-1 flex items-center justify-center"
          >
            {isCalculating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {currentLang === 'ar' ? 'جاري الحساب...' : currentLang === 'es' ? 'Calculando...' : 'Calculating...'}
              </>
            ) : (
              t('calculate')
            )}
          </button>
          
          {hasResults && (
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-secondary flex-1"
            >
              {t('recalculate')}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CalculatorForm;