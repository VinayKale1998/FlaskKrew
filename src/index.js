import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  //provider used to wrap the whole app with the redux state access
  <Provider store={store}>
    <App />
  </Provider>
);

