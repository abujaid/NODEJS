import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import routes from "./components/routes/routes";
import Header from "./components/header";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Route component={routes} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
