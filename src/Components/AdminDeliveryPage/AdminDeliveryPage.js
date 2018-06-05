import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        };
    }

    // componentDidMount() {
    //     // this.props.gettingRace(this.props.match.params.slug)
    // }

     revealAnswerToggle = () => {
        const active = !this.state.show
        this.setState({show: active});
    } 

    nextQuestion = event => {
        event.preventDefault();
        let index = this.props.index + 1
        let qlength = this.props.race.questions.length

        if (index >= qlength) {
            this.setState({
                lastQuestion: true
            })
        } else {
            this.props.nextQuestion();
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
                    {<div key={this.props.race.questions[this.props.index].id}>
                        <h3>{this.props.race.questions[this.props.index].question}</h3>
                        <ol>
                        {this.props.race.questions[this.props.index].answers.map(answer => {
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

}

//TODO add websocket to see how many students answered question

const mapStateToProps = state => {
    return {
        race: state.AdminDelivery.race,
        gotRace: state.AdminDelivery.gotRace,
        index: state.AdminDelivery.index
    }
}
export default connect(mapStateToProps, { gettingRace, nextQuestion }) (QuestionCard);