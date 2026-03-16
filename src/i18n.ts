import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { daycareen } from './content/daycareen';
import { daycareru } from './content/daycareru';

const resources = {
  en: { translation: daycareen },
  ru: { translation: daycareru }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
