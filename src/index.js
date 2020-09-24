import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import LangProvider from "./hoc/LangProvider";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <LangProvider>
      <App />
    </LangProvider>
  </Provider>,
  document.getElementById("root")
);
