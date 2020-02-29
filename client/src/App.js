import React, { Fragment } from "react";
import Header from "./component/header";
import { BrowserRouter, Router } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
