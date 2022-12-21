import * as ENG from "./eng.json";
import * as UA from "./ua.json";
const translations = { ENG, UA };

export const t = (key) => {
  if (key === false) return;
  const language = localStorage.getItem("language") || "ENG";
  console.log(localStorage.getItem("language"));

  const keys = key.split(".");
  return getNestedTranslation(language, keys) || key;

  function getNestedTranslation(language, keys) {
    return keys.reduce((obj, key) => {
      return obj?.[key];
    }, translations[language]);
  }
};
