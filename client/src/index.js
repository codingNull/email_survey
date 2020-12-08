import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reactThunk from "redux-thunk";
import reducers from "./reducers";

import App from "./components/App";

const store = createStore(reducers, {}, applyMiddleware(reactThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
