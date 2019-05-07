import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Park from "./pages/Park";

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/park" component={Park} />
      </Switch>
    );
  }
}

export default App;
