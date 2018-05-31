import React, { Component } from 'react';
import './App.css';
// import ReconnectingWebSocket from 'reconnecting-websocket';
import { WebSocketBridge } from 'django-channels'

let quizName = 'testing1'

// // window.location.pathname = '/quiz/' + quizName + '/';

// let quizSocket = new WebSocket(`ws://127.0.0.1:8000/ws/quiz/${quizName}/`)


// const scheme = window.location.protocol === 'https:' ? 'wss' : 'ws';

// const base_url = `${scheme}://127.0.0.1:8000/api/ws/quiz/test`
// let quizSocket = new ReconnectingWebSocket(base_url)

const webSocketBridge = new WebSocketBridge();
webSocketBridge.connect('ws://127.0.0.1:8000/ws/quiz/testing1/');
webSocketBridge.listen(function(action, stream) {
  console.log(action, stream);
});

// quizSocket.onmessage = function(e) {
//   let data = JSON.parse(e.data);
//   let message = data['message'];
//   console.log('Message from server', message)
// }


// quizSocket.onclose = function(e) {
//     console.error('Quiz socket closed unexpectedly');
//   }
class App extends Component {
  state = {
    teams: []
  };

  // async componentDidMount() {
  //   try {
  //     // for deployment in local change to http://127.0.0.1:8000/api/
  //     const res = await fetch('/api/');
  //     const teams = await res.json();
  //     this.setState({
  //       teams
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  async componentDidMount() {
    // try {
    //   quizSocket.onopen = () => {
    //     quizSocket.send(JSON.stringify({
    //       'message': "hello!"
    //     }));
    //   } 
    // } catch(e) {
    //   console.error(e)
    // }
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
