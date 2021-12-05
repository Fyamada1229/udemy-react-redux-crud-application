import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import EventsIndex from "./components/EventsIndex";
import EventsNew from "./components/EventsNew";
//import User from "./components/User";

// アプリケーションのストアがここに集約しています
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/user" component={User} /> */}
        <Route exact path="/" component={EventsIndex} />
        <Route path="/events/new" component={EventsNew} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
