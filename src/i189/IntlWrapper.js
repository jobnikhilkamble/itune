import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";
import  messages  from "./messages";

export const IntlWrapper = ({ children, locale }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);
