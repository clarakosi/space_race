import React, { Component } from 'react';
// import './App.css';

class App extends Component {
  state = {
    teams: []
  };

  async componentDidMount() {
    try {
      // for deployment in local change to http://127.0.0.1:8000/api/
      const res = await fetch('/api/');
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
