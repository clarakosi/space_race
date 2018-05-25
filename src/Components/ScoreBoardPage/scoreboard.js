import React from 'react';
import { Progress } from 'reactstrap';

const ScoreBoard = (props) => {
  return (
    <div className="scoreboard">
      <Progress animated value={2 * 5}>Team 1 </Progress>
      <Progress animated color="success" value="25">Team 2 </Progress>
      <Progress animated color="info" value={50}>Team 3 </Progress>
      <Progress animated color="warning" value={75}>Team 4 </Progress>
  </div>
  )
}

export default ScoreBoard;