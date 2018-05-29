import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import reducers from "./Reducers";
import ReduxPromise from "redux-promise";
import App from "./App";
import ScoreBoard from "./Components/ScoreBoardPage/index";
import LandingPage from "./Components/LandingPage/LandingPage";
import StudentJoinRacePage from "./Components/StudentJoinRacePage/StudentJoinRacePage";
import AdminRaceCreate from "./Components/CardViews/ShowRaceCard";
import Settings from "./Components/SettingsPage/SettingsPage";
import SignUp from "./Components/UserAccounts/SignUp";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, ReduxPromise, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/api" component={App} />
        <Route path="/joinrace" component={StudentJoinRacePage} />
        <Route path="/race" component={AdminRaceCreate} />
        <Route path="/scoreboard" component={ScoreBoard} />
        <Route path="/settings" component={Settings} />
        <Route path="/signup" component={SignUp} />
        
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
