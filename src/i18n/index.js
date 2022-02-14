import i18n from "i18n-js";
import fr from "./fr.json";
import en from "./en.json";
import es from "./es.json";

export const buildI18n = (selectedLang = null) => {
  const navigatorLang = window.navigator.language.substr(0, 2).toLowerCase();

  i18n.translations = {
    en: en,
    fr: fr,
    es: es,
  };

  i18n.locale = selectedLang ? selectedLang : navigatorLang;
  i18n.fallbacks = true;
  return i18n;
};
