import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { IntlProvider } from "react-intl";

import { importLocale, translationMessages } from "../../translations";

const LangProvider = ({ children }) => {
  const locale = useSelector((appState: any) => appState.AppReducer.locale);
  const [displayLocal, setDisplayLocal] = useState("");

  useEffect(() => {
    const loadLang = async () => {
      await importLocale(locale);
      setDisplayLocal(locale);
    };
    if (translationMessages[locale]) {
      setDisplayLocal(locale);
    } else {
      loadLang();
    }
  }, [locale]);

  const handleError = () => {};

  return translationMessages[displayLocal] ? (
    <IntlProvider
      locale={displayLocal}
      messages={translationMessages[displayLocal]}
      onError={handleError}
    >
      {children}
    </IntlProvider>
  ) : null;
};

export default LangProvider;
