import React from "react";
import HomePage from "./page/HomePage.js";
import PayBill from "./page/PayBill.js";
import PrepaidSim from "./page/PrepaidSim.js";
import InternationalRoaming from "./page/InternationalRoaming.js";

import { Switch, Route, BrowserRouter } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/pay-bill" exact>
            <PayBill />
          </Route>
          <Route path="/prepaid-4g-sim" exact>
            <PrepaidSim />
          </Route>
          <Route path="/ir-packs" exact>
            <InternationalRoaming />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
