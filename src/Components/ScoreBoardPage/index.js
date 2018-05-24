import React, {Component} from 'react';
import Board from './scoreboard';
import QuestionBaord from './questionboard'
import './index.css'


class ScoreBoard extends Component {
  render() {
    return (
      <div>
        ScoreBoard Page
        <div className="main">
          <Board />
          <QuestionBaord />
        </div>
      </div>
    );
  }
}

export default ScoreBoard;