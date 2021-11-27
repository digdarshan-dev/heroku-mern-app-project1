import React from "react";
import Home from "./Home";
import Test from "./Test";

import { Switch, Route } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </main>
  );
}
