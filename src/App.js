import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Select from "components/Select/Select";
import Result from "components/Result/Result";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={Select} exact />
        <Route path="/:promptId" component={Result} exact />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
