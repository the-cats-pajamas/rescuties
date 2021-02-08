import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Spinner from "./views/spinner/Spinner";
import "./assets/scss/style.scss";
import "./data";
// setup fake backend
import { ConfigureFakeBackend } from "./jwt/_helpers";

ConfigureFakeBackend();
const App = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./app")), 0);
    })
);

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
