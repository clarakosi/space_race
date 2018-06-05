import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { connect } from 'react-redux';
import { gettingRace } from '../../Actions/adminDeliveryPage'

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: false,
    }
  }

  answerHandler = event => {
    event.preventDefault();
    this.setState({answer: true})
    let data = {
      slug: this.props.slug,
      answer_id: Number(event.target.value),
      question_id: this.props.race.questions[this.props.index].id
    }
    this.props.handleAnswerFunc(data)
  }
  render() {
    return (
      <div>
        {!this.props.gotRace ? null :
        <div className="Question_Board">
          <h5>Question {this.props.index + 1} of {this.props.race.questions.length}</h5>
          <div className="question">
            <h6>{this.props.race.questions[this.props.index].question}</h6>
          </div>
          <br/>
          <div className="answers">
            <ul>
              {this.props.race.questions[this.props.index].answers.map(answer => {
                return <li key={answer.id}>{answer.answer} <Button disabled={this.state.answer} className="btn-sm" outline color="primary" onClick={this.answerHandler} value={answer.id}>Submit</Button></li>
              })}
            </ul>
          </div>
        </div> }
      </div>
    );
  }
}

export default Questions;