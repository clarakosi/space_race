import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStudent } from './Actions/studentPage';

import ScoreBoard from "./Components/ScoreBoardPage/index";
import LandingPage from "./Components/LandingPage/LandingPage";

import StudentJoinRacePage from "./Components/StudentJoinRacePage/StudentJoinRacePage";
import ShowRaceCard from "./Components/CardViews/ShowRaceCard";
import CreateRaceCard from "./Components/CreateRacePage/index";

import Settings from "./Components/SettingsPage/SettingsPage";
import SignUp from "./Components/UserAccounts/SignUp";
import StudentJoinRace from './Components/StudentJoinRacePage/StudentJoinRacePage'
import SignIn from "./Components/UserAccounts/SignIn";

import AdminDelivery from './Components/AdminDeliveryPage/index';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/admindelivery/:slug" component={AdminDelivery} />
        {/* <Route path="/adminrace" component={AdminRace} /> */}
        <Route path="/api" component={App} />
        <Route path="/createrace" component={CreateRaceCard} />
        <Route path="/race/:slug" component={ScoreBoard} />
        <Route path="/joinrace/:slug" component={StudentJoinRacePage} />
        <Route path="/showrace" component={ShowRaceCard} />
        <Route path="/settings" component={Settings} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/student" component={StudentJoinRace} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    studentCreated: state.Student.studentCreated
  }
}

export default withRouter(connect(mapStateToProps, { createStudent }) (App));