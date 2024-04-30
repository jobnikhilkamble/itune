import React from "react";
import { injectIntl } from "react-intl";

export const WelcomeMessage = ({ intl }) => {
  return (
    <h2 style={{ color: "white", fontSize: 35 }}>
      {intl.formatMessage({ id: "Welcome" })}
      <span> ItuneApp </span>
    </h2>
  );
};
export default injectIntl(WelcomeMessage);
