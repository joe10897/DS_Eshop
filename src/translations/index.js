export const appLocales = ["en", "zh-TW"];

const enTranslationMessages = require("./en.js");

const DEFAULT_LOCALE = "en";

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {};

export const importLocale = async (locale) => {
  if (!appLocales.includes(locale) || translationMessages[locale]) {
    return;
  }
  const localeFile = await import(`./${locale}.js`);
  translationMessages[locale] = formatTranslationMessages(
    locale,
    localeFile.default
  );
};

export const getBrowserLanguage = (locale = navigator.language) => {
  let lang;
  if (locale.indexOf("zh") === -1) {
    if (locale === "fil") {
      lang = "fil";
    } else {
      lang = locale.slice(0, 2);
    }
  } else {
    lang = locale.replace("_", "-");
  }
  if (appLocales.includes(lang)) {
    return lang;
  } else {
    return DEFAULT_LOCALE;
  }
};
