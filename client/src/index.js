import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reactThunk from "redux-thunk";
import reducers from "./reducers";

import App from "./components/App";

const INIT_STATE = {};
const store = createStore(reducers, INIT_STATE, applyMiddleware(reactThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

console.log(process.env.REACT_APP_STRIPE_KEY);
console.log(process.env.NODE_ENV);
