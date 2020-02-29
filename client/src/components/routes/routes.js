import React from "react";
import { Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "../home";
import Login from "../auth/login";

export default function routes() {
  return (
    <Fragment>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </Fragment>
  );
}
