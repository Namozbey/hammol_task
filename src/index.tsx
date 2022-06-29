import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "material-icons/iconfont/material-icons.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { FallbackLoading } from "./components/Loading";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <ErrorBoundary>
    <Suspense fallback={<FallbackLoading />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </ErrorBoundary>,
  document.getElementById("root")
);
