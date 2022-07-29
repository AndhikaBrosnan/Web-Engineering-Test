import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
