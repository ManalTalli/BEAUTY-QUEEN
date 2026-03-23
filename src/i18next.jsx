import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

i18n
.use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Shop": "Shop",
          "New Arrivals": "New Arrivals",
          "Bestsellers": "Bestsellers",
          "Gifts": "Gifts",
          "Language": "Language",
          "Search": "Search",
          "Logout": "Logout",
          "Account": "Account",
          "Login": "Login",
          "Register": "Register",
          "Delete":"Delete",
      }
    },
    ar: {
      translation: {
        "Shop": "متجر",
        "New Arrivals": "وصل حديثاً",
        "Bestsellers": "الأكثر مبيعاً",
        "Gifts": "هدايا",
        "Language": "اللغة",
        "Search": "بحث",
        "Logout": "خروج",
        "Account": "الحساب",
        "Login": "دخول",
        "Delete":"حذف",
      }
    }
  },
    lng: "", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
  });
  export default i18n;