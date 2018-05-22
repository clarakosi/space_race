import React, { Component } from 'react';
<<<<<<< HEAD
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';


=======
// import './App.css';
>>>>>>> 8f2cb37cd609cec8d33473acf186bb6c4fc62fd0

import { LandingPage } from './Components/LandingPage';

// import Notfound from './components/NotFound';

import './App.css';
class App extends Component {
  state = {
    teams: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const teams = await res.json();
      this.setState({
        teams
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
<<<<<<< HEAD
      <Router >
        <Switch>
          <Route path="/" component={LandingPage} exact />
         
      
        </Switch>
      </Router>
=======
      <div>
        {this.state.teams.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
>>>>>>> 8f2cb37cd609cec8d33473acf186bb6c4fc62fd0
    );
  }
}


export default App;
