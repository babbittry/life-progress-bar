const { encodeHTML } = require("./common/utils");

const langCardLocales = {
  "langcard.title": {
    cn: "人生进度条",
    en: "Life progress bar",
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
