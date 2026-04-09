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
          "Home": "Home",
          "Shop": "Shop",
          "About Us": "About Us",
          "FAQ": "FAQ",
          "Services": "Services",
          "Language": "Language",
          "Search": "Search",
          "Logout": "Logout",
          "ACCOUNT": "ACCOUNT",
          "Login": "Login",
          "Register": "Register",
          "Delete": "Delete",
          "Profile": "Profile",
          "Arabic": "Arabic",
          "English":"English",
          "WELCOME TO BEAUTY QUEEN":"WELCOME TO BEAUTY QUEEN",
          "REGISTER ON BEAUTY QUEEN TO SAVE YOUR DELIVERY ADDRESSES,":"REGISTER ON BEAUTY QUEEN TO SAVE YOUR DELIVERY ADDRESSES,",
          "AND MANAGE YOUR ORDERS AND RETURNS.":"AND MANAGE YOUR ORDERS AND RETURNS.",
          "LOG IN":"LOG IN",
          "CREATE ACCOUNT":"CREATE ACCOUNT",
        }
      },
      ar: {
        translation: {
          "Home": "الرئيسية",
          "Shop": "متجر",
          "About Us": "من نحن",
          "FAQ": "الأسئلة الشائعة",
          "Services": "خدماتنا",
          "Language": "اللغة",
          "Search": "بحث",
          "Logout": "خروج",
          "ACCOUNT": "الحساب",
          "Login": "دخول",
          "Delete": "حذف",
          "Profile": "الملف الشخصي ",
          "Arabic":"عربي",
          "English":"انجليزي",
          "WELCOME TO BEAUTY QUEEN":"أهلاً بكم في بيوتي كوين",
          "REGISTER ON BEAUTY QUEEN TO SAVE YOUR DELIVERY ADDRESSES,":"سجل في بيوتي كوين لحفظ عناوين التوصيل الخاصة بك،",
          "AND MANAGE YOUR ORDERS AND RETURNS.":"وإدارة طلباتك وعمليات الإرجاع.",
          "LOG IN":"دخول",
          "CREATE ACCOUNT":"انشاء حساب",

        }
      }
    },
    lng: "", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
  });
export default i18n;