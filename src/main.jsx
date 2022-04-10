import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./Global/Redux/store";
// Style & Components
import "./index.css";
import App from "./App";

import {OrderItemsProvider } from "./Global/Context/OrderItems"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <OrderItemsProvider>
          <App />
        </OrderItemsProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
