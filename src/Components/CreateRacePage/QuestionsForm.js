import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { questionAdded, StartRace, getQuizInfo } from '../../Actions/createRace'
import Switch from '@material-ui/core/Switch';


class QuizAndTeamsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      shuffle_answers: false,
      answer: "",
      is_correct: false,
      answers: [],
      questions: []
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  nextHandler = (event) => {
    console.log(this.state);
    if (this.state.question && this.state.answers.length > 0) {
      let question = {
        question: this.state.question,
        shuffle_answers: this.state.shuffle_answers,
        answers: this.state.answers
      }
      this.state.questions.push(question)
      this.props.StartRace(this.state.questions);
    } else {
      this.props.StartRace(false)
    }
    
    this.props.handleNext();
  }

  backHandler = event => {
    this.props.getQuizInfo()
    this.props.handleBack()
  }

  questionHandler = event => {
    let question = {
      question: this.state.question,
      shuffle_answers: this.state.shuffle_answers,
      answers: this.state.answers
    }
    this.state.questions.push(question)
    this.setState({
      question: "",
      shuffle_answers: false,
      answer: "",
      is_correct: false,
      answers: [],
    })
    this.props.questionAdded(this.state.questions)
  }

  AnswerHandler = event => {
    let answer = {
      answer: this.state.answer,
      is_correct: this.state.is_correct
    }
    this.state.answers.push(answer);
    this.setState({
      answer: "",
      is_correct: false
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Question</label>
          <input type="text" name="question" placeholder="Question" value={this.state.question} onChange={this.changeHandler}/>
          <br />
          <label> Add an Answer </label>
          <br/>
          <div style={{display: "inline"}}>
            <input type="text" name="answer" placeholder="answer" value={this.state.answer} onChange={this.changeHandler}/>
            <Switch
          checked={this.state.is_correct}
          onChange={this.handleChange('is_correct')}
          value="is_correct"
          color="primary"
          />
            <Button onClick={this.AnswerHandler}>Add</Button>
          </div>
          {this.state.answers.map((answer, index) => {
            return <div key={index}>{answer.answer}</div>
          })}

          <Switch
          checked={this.state.shuffle_answers}
          onChange={this.handleChange('shuffle_answers')}
          value="shuffle_answers"
          color="primary"
        />

        <Button onClick={this.questionHandler}>Add Another Question</Button>

        {this.props.questionsAdded ? this.props.questions.map(question => {
          return <p>{question.question}</p>
        }): null}

          <Button
            disabled={this.props.activeStep === 0}
            onClick={this.backHandler}
            className={this.props.classes.backButton}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={this.nextHandler}>
            {this.props.activeStep === this.props.steps.length - 2 ? 'Start Race!' : 'Next'}
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questionsAdded: state.CreateRace.questionsAdded,
    questions: state.CreateRace.questions
  }
}
export default connect(mapStateToProps, { questionAdded, StartRace, getQuizInfo })(QuizAndTeamsForm);