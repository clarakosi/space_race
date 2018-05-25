import React from 'react';
import { Button} from 'reactstrap';

const Questions = (props) => {
  return (
    <div className="Question_Board">
      <h5>Question 1 of 12</h5>
      <div className="question">
        <h6>How many days are in a week?</h6>
      </div>
      <br/>
      <div className="answers">
        {/* will be mapped from data in database */}
        <ul>
          <li>A.   6 <Button className="btn-sm" outline color="primary">Submit</Button></li>
          <li>B.   7 <Button className="btn-sm" outline color="primary">Submit</Button></li>
          <li>C.   8 <Button className="btn-sm" outline color="primary">Submit</Button></li>
          <li>D.   5 <Button className="btn-sm" outline color="primary">Submit</Button></li>
        </ul>
      </div>
    </div>
  );
}

export default Questions;