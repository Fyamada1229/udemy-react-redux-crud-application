import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import EventsIndex from "./components/EventsIndex";
import EventsNew from "./components/EventsNew";
import EventsShow from "./components/EventsShow";

// アプリケーションのストアがここに集約しています
// Redux DevToolsも設定
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/user" component={User} /> */}
          <Route exact path="/" component={EventsIndex} />
          <Route exact path="/events" component={EventsIndex} />
          <Route path="/events/new" component={EventsNew} />
          <Route path="/events/:id" component={EventsShow} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
