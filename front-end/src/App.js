import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';



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
      <div>
        {this.state.teams.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    );
  }
}


export default App;
