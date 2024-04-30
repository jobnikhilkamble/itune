import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import { IntlWrapper } from "./i189/IntlWrapper";
import { LOCALES } from "./i189/locales";
import { connect } from "react-redux";

export function App({ selectedLanguage = LOCALES.ENGLISH }) {
  return (
    <Router>
      <IntlWrapper locale={selectedLanguage}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </IntlWrapper>
    </Router>
  );
}

export default connect((state) => {
  return { selectedLanguage: state.songs.selectedLanguage };
})(App);
