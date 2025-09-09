import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import ja from "./locales/ja/translation.json";

i18n
  .use(LanguageDetector) // 👈 add this
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"], // check localStorage first
      caches: ["localStorage"], // save language to localStorage
    },
  });

export default i18n;
