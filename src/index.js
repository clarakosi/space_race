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
import rootReducer from "./Reducers/index";
import ReduxPromise from "redux-promise";
import App from "./App";
import ScoreBoard from "./Components/ScoreBoardPage/index";
import LandingPage from "./Components/LandingPage/LandingPage";

import StudentJoinRacePage from "./Components/StudentJoinRacePage/StudentJoinRacePage";
import ShowRaceCard from "./Components/CardViews/ShowRaceCard";
import CreateRaceCard from "./Components/CardViews/CreateRaceCard";

import Settings from "./Components/SettingsPage/SettingsPage";
import SignUp from "./Components/UserAccounts/SignUp";
import StudentJoinRace from './Components/StudentJoinRacePage/StudentJoinRacePage'
import SignIn from "./Components/UserAccounts/SignIn";

import AdminDelivery from './Components/AdminDeliveryPage/AdminDeliveryPage'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, ReduxPromise, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/admindelivery" component={AdminDelivery} />
        {/* <Route path="/adminrace" component={AdminRace} /> */}
        <Route path="/api" component={App} />
        <Route path="/createrace" component={CreateRaceCard} />
        <Route path="/joinrace" component={StudentJoinRacePage} />
        <Route path="/scoreboard" component={ScoreBoard} />
        <Route path="/showrace" component={ShowRaceCard} />
        <Route path="/settings" component={Settings} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/student" component={StudentJoinRace} />
        
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
