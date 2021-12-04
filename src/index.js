import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import EventsIndex from "./components/EventsIndex";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

import reportWebVitals from "./reportWebVitals";

// アプリケーションのストアがここに集約しています
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <EventsIndex />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
