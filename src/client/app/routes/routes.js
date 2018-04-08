import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "../components/app";

// Route with the Path '/' that renders 'App' component
export const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
  </Switch>
);

export default Routes;
