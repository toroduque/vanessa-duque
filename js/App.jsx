import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Title from "./Title";
import Introduction from "./Introduction"

const FourOhFor = () => <h1>Sorry, 404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Title} />
        <Route path="/introduction" component={Introduction} />
        <Route component={FourOhFor} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
