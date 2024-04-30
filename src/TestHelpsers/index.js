import React from "react";
import renderer from "react-test-renderer";
import { IntlProvider } from "react-intl";
import { LOCALES } from "../i189/locales";
import { addLocaleData } from "react-intl";

import en from "react-intl/locale-data/en";
import "intl/locale-data/jsonp/en";

addLocaleData(en);

const createComponentWithIntl = (children, props = { locale: LOCALES.FRENCH }) => {
  return renderer.create(<IntlProvider {...props}>{children}</IntlProvider>);
};
export default createComponentWithIntl;
