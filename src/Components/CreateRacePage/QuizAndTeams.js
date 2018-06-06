import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { QuizInfo } from '../../Actions/createRace';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Alert, Col, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem  } from 'reactstrap';
import { TwitterPicker } from 'react-color';
import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';




class QuizAndTeamsForm extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef()
    this.state = {
      name:"",
      teamName: "",
      mascot: "",
      color: "#000",
      teams: [],
      randomize_team: false,
      colorToggle: false,
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

  colorToggle = event => {
    this.setState({
      colorToggle: !this.state.colorToggle
    })
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

  handleChangeComplete = (color) => {
    this.setState({ color: color.hex, colorToggle: !this.state.colorToggle });

  };

  nextHandler = (event) => {
    console.log(this.state);
    let quiz = {name: this.state.name, teams: this.state.teams, randomize_team: this.state.randomize_team}
    this.props.QuizInfo(quiz)
    this.props.handleNext();
  }

  teamHandler = event => {
    if (!this.state.color || !this.state.mascot) {
      window.alert("You must include both a color and mascot")
    } else {
      let team = {
        name: this.state.teamName,
        color: this.state.color,
        mascot: this.state.mascot
      }
      this.state.teams.push(team);
      this.setState({
        teamName: "",
        color: "#000",
        mascot: "",
        colorToggle: false
      })
    }
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup >
            <Label>Race Name</Label>
            <Input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.changeHandler} />
          </FormGroup>
          <br />
          <Label> Add a Team </Label>
          <FormGroup row >
            <Col sm={3}>
              <Input  sm="4" type="text" name="teamName" placeholder="Team Name" value={this.state.teamName} onChange={this.changeHandler}/>
            </Col>
            <Col sm={3}>
              <Input sm="4" name="mascot" onChange={this.changeHandler} value={this.state.mascot} type="select">
                <option>Pick Mascot</option>
                <option value="🐝">🐝</option>
                <option value="🐶">🐶</option>
                <option value="🐈">🐈</option>
                <option value="🐎">🐎</option>
                <option value="🐍">🐍</option>
                <option value="🐋">🐋</option>
                <option value="🐊">🐊</option>
                <option value="🐘">🐘</option>
                <option value="🦒">🦒</option>
                <option value="🦆">🦆</option>
                <option value="🐇">🐇</option>
              </Input>
            </Col>
            <Col sm={3}>
              <Button onClick={this.colorToggle} variant="outlined">Pick a color</Button>
              <br/>
              <div style={this.state.colorToggle ? null: {display: 'none'}}>
                <TwitterPicker
                    color={ this.state.color }
                    onChangeComplete={ this.handleChangeComplete }
                />
              </div>
            </Col>
            <Col sm={3}>
            <Button onClick={this.teamHandler} variant="contained" color="primary">Add</Button>
            </Col>
          </FormGroup>
          <FormGroup>
          <ListGroup>
          {this.state.teams.map((team, index) => {
            return <ListGroupItem key={index}>{team.name}</ListGroupItem>
          })}
          </ListGroup>
          </FormGroup>
          <br/>
          <FormControlLabel 
            label="Random Teams"
            control= {
              <Switch
              checked={this.state.randomize_team}
              onChange={this.handleChange('randomize_team')}
              value="randomize_team"
              color="primary"
            />
            }
          />
          <FormGroup>
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
          </FormGroup>
        </Form>
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