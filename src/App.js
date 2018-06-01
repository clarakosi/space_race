import React, { Component } from 'react';
import './App.css';
import { WebSocketBridge } from 'django-channels'

let quizName = 'testing1'

const webSocketBridge = new WebSocketBridge();
// webSocketBridge.connect('ws://127.0.0.1:8000/ws/quiz/testing1/');
// webSocketBridge.listen(function(action, stream) {
//   console.log(action, stream);
// });

// webSocketBridge.onmessage = function(e) {
//   var data = JSON.parse(e.data);
//   var message = data['message'];
//   console.log(message)
// };
webSocketBridge.onclose = function(e) {
  console.log(e)
}
class App extends Component {
  state = {
    teams: [], 
    message: ''
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
    try {
      webSocketBridge.connect('ws://127.0.0.1:8000/ws/quiz/testing1/');
      webSocketBridge.listen(function(action, stream) {
        console.log(action, stream);
      });
    } catch (e) {
      console.log(e);
    }
  }

  messageChangeHandler = event => {
    event.preventDefault();

    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  submitMessage = (event) => {
    event.preventDefault();

  
    console.log('message being sent', this.state.message)
    webSocketBridge.send(JSON.stringify({
      'message': this.state.message
    }));
  }
  render() {
    return (

  
      <div>
        {/* {this.state.teams.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))} */}
        <input type="text" size="100" value={this.state.message} name='message' onChange={this.messageChangeHandler}/><br/>
        <button onClick={this.submitMessage}>Send</button>
      </div>

    );
  }
}


export default App;
