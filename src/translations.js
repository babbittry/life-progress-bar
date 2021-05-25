const { encodeHTML } = require("./common/utils");

const langCardLocales = {
  "langcard.title": {
    cn: "最常用的语言",
    en: "Most Used Languages",
  },
};

const availableLocales = Object.keys(repoCardLocales["repocard.archived"]);

function isLocaleAvailable(locale) {
  return availableLocales.includes(locale.toLowerCase());
}

module.exports = {
  isLocaleAvailable,
  availableLocales,
  langCardLocales,
};
