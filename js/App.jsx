import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Introduction from "./Introduction";
import SelfReferential from "./SelfReferential";
import SeriesProgram from "./SeriesProgram"
import DialoguesFoundations from "./DialoguesFoundations"

const FourOhFor = () => (
  <div>
    <h1>Sorry, 404</h1>
    <Link to="/"><h3>Back to home</h3></Link>
 </div>);

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/introduction-to-work" component={Introduction} />
        <Route path="/self-referential-manner" component={SelfReferential} />
        <Route path="/series-program" component={SeriesProgram} />
        <Route path="/dialogues-foundations" component={DialoguesFoundations} />
        <Route component={FourOhFor} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
