import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { QuizInfo } from '../../Actions/createRace';
import Switch from '@material-ui/core/Switch';


class QuizAndTeamsForm extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef()
    this.state = {
      name:"",
      teamName: "",
      mascot: "",
      color: "",
      teams: [],
      randomize_team: false
    }
  }
  componentDidMount() {
    if (this.props.quizAdded) {
      this.setState({
        name: this.props.quiz.name,
        teams: this.props.quiz.teams,
        randomize_team: this.props.quiz.randomize_team
      })
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
    let quiz = {name: this.state.name, teams: this.state.teams, randomize_team: this.state.randomize_team}
    this.props.QuizInfo(quiz)
    this.props.handleNext();
  }

  teamHandler = event => {
    let team = {
      name: this.state.teamName,
      color: this.state.color,
      mascot: this.state.mascot
    }
    this.state.teams.push(team);
    this.setState({
      teamName: "",
      color: "",
      mascot: ""
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Race Info</label>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler} />
          <br />
          <label> Add a Team </label>
          <div style={{display: "inline"}}>
            <input type="text" name="teamName" placeholder="Team Name" value={this.state.teamName} onChange={this.changeHandler}/>
            <select name="mascot" onChange={this.changeHandler} value={this.state.mascot}>
              <option></option>
              <option value="car">Car</option>
              <option value="tree">tree</option>
            </select>
            <select name="color" onChange={this.changeHandler} value={this.state.color}>
              <option></option>
              <option value="yellow">yellow</option>
              <option value="blue">blue</option>
            </select>
            <Button onClick={this.teamHandler}>Add</Button>
          </div>
          {this.state.teams.map((team, index) => {
            return <div key={index}>{team.name}</div>
          })}
          <Switch
          checked={this.state.randomize_team}
          onChange={this.handleChange('randomize_team')}
          value="randomize_team"
          color="primary"
        />
          <Button
            disabled={this.props.activeStep === 0}
            onClick={this.props.handleBack}
            className={this.props.classes.backButton}
          >
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={this.nextHandler}>
            {this.props.activeStep === this.props.steps.length - 1 ? 'Start Race!' : 'Next'}
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizAdded: state.CreateRace.quizAdded,
    quiz: state.CreateRace.quiz
  }
}

export default connect(mapStateToProps, {QuizInfo}) (QuizAndTeamsForm);