import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import { LandingPage } from './Components/LandingPage';

// import Notfound from './components/NotFound';

import './App.css';
class App extends Component {
  render() {
    return (
      <Router >
        <Switch>
          <Route path="/" component={LandingPage} exact />
         
      
        </Switch>
      </Router>
    );
  }
}

export default App;
