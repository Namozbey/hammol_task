import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { NotFound } from "./components/Fallbacks";
import MainLayout from "./MainLayout";

export default function Router(): JSX.Element {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect push from="/" to="/search" />
      </Route>
      <Route path="/search" exact component={MainLayout} />
      <Route path="/search/:searchQuery" component={MainLayout} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
