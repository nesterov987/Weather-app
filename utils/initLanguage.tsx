import i18n from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../translation/en.json'
import ruTranslation from '../translation/ru.json'

const resources = {
    en: { translation: enTranslation },
    ru: { translation: ruTranslation },
  };
  
  const LANGUAGE_KEY = '@app_language';
  
  export const initLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
      const language = savedLanguage || 'en';
  
    await i18n.use(initReactI18next).init({
        resources,
        lng: language,
        fallbackLng: 'en', 
        interpolation: { escapeValue: false },
        });
    } catch (error) {
    console.error('Error loading language:', error);
    }
};

export default i18n;