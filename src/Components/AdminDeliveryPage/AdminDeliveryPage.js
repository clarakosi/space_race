import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'reactstrap';
import { Questions } from '../ScoreBoardPage/questionboard';
import { CreateRaceCard } from '../CardViews/CreateRaceCard';
import { gettingRace, nextQuestion } from '../../Actions/adminDeliveryPage'
import ScoreBoard from '../ScoreBoardPage/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './AdminDeliveryPage.css';

/* Progress bar will get data from this.props.race.questions[this.props.index] DIVIDED BY this.props.race.number_of_participants
*/

/* Admin Delivery Page, to see the current question, answer choices, correct answer(initially hidden) */
class QuestionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastQuestion: false,
            error: null,
           // isHidden: true
        }
    }
    /*toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render () { 
        return (
            <div>
                <button onClick={this.toggleHidden.bind(this)} >
                Show answer
                </button>
                {!this.state.isHidden && <Child />}
            </div>
        )
    } */

    // componentDidMount() {
    //     // this.props.gettingRace(this.props.match.params.slug)
    // }

     revealAnswerToggle = () => {
        const active = !this.state.show
        this.setState({show: active});
    } 

    nextQuestion = event => {
        event.preventDefault();
        let index = this.props.race.index + 1
        let qlength = this.props.race.questions.length

        if (index >= qlength) {
            this.setState({
                lastQuestion: true
            })
        } else {
            this.props.nextQuestion(this.props.slug);
        }

    }

    render() {
        const { question, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        return (
            <div>
                {!this.props.gotRace ? null : 
                <div>
                    {<div key={this.props.race.questions[this.props.race.index].id}>
                        <h3>{this.props.race.questions[this.props.race.index].question}</h3>
                        <ol>
                        {this.props.race.questions[this.props.race.index].answers.map(answer => {
                            return <li key={answer.id}>{answer.answer}</li>
                        })}
                        </ol>          
                    </div>

                    }
                </div>}
                <button onClick={this.nextQuestion}> Next Question</button>
                {this.state.lastQuestion ? <div>You're all done!</div> : null}
            </div>
            // Potential setup for questions/answers? Need opinions
            // This is based from React-II Instagram Clone during Week 4
            /*<div className="question-panel">
                    {this.state.question ? this.state.question.map((question, i) => (
                        <div className="question__wrapper" key={i}>
                            <div className="question__user">{question.question}</div>
                            <div className="question__text">{question.answer}</div>
                            <div className="question__text">{question.answer}</div>
                            <div className="question__text">{question.answer}</div>
                            <div className="question__text">{question.answer}</div>
                        </div>
                    )) : "question failed to load"}
                </div> */
        );
    }
 
    /* Next Question Button Options Start Here */

  /* <button onClick={ this.nextQuestion }> Next Question </button>
    
     -------- This Section Allows for going to the next or previous section --------
    nextQuestion: function(e) {
        e.preventDefault()
        this.props.nextStep()
    } 
    
    nextStep: function() {
        this.setSTate({
            step : this.state.step + 1
        })
    },

    previousStep: function() {
        this.setState({
            step : this.state.step - 1
        })
    }
    
    */
   // -------- This section will just go to the next question --------
    // nextQuestion = event => {
    //     event.preventDefault();
    //     const id = this.props.question.id;
    //     this.props.nextQuestion(id + 1);
    // }

    /* Next Question Button Options End Here */
}

/* ------- Websocket showing how many have answered question ------- */
const progressBar = (props) => {
    return (
    <div>
        <div className="text-center">Progress</div>
        <Progress multi>
            <Progress animated value={2 * 5}>Team 1 </Progress>
            <Progress animated color="success" value="25">Team 2 </Progress>
            <Progress animated color="info" value={50}>Team 3 </Progress>
            <Progress animated color="warning" value={75}>Team 4 </Progress>
        </Progress>
    </div>
    );
}

const mapStateToProps = state => {
    return {
        race: state.AdminDelivery.race,
        gotRace: state.AdminDelivery.gotRace,
    }
}
export default connect(mapStateToProps, { gettingRace, nextQuestion }) (QuestionCard);