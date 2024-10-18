// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to my application",
          // Agrega más traducciones aquí
        }
      },
      es: {
        translation: {
          welcome: "Bienvenido a mi aplicación",
          // Agrega más traducciones aquí
        }
      }
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma por defecto si la traducción no está disponible
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;
