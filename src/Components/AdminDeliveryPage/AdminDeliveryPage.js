import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Questions } from '../ScoreBoardPage/questionboard';
import { CreateRaceCard } from '../CardViews/CreateRaceCard';
import { gettingRace } from '../../Actions/adminDeliveryPage'
import './AdminDeliveryPage.css';



/* Admin Delivery Page, to see the current question, answer choices, correct answer(initially hidden) */
class QuestionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: [],
            error: null,
        };
    }

    componentDidMount() {
        // id will be dynamically passed down
        this.props.gettingRace(1);
    }

     revealAnswerToggle = () => {
        const active = !this.state.show
        this.setState({show: active});
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
                {this.props.race.questions.map(question => {
                    return <div key={question.id}>
                        <h3>{question.question}</h3>
                        <ol>
                        {question.answers.map(answer => {
                            return <li key={answer.id}>{answer.answer}</li>
                        })}
                        </ol>          
                    </div>

                     }
                )}
                </div> }
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

    nextQuestion = event => {
        event.preventDefault();
        const id = this.props.question.id;
        this.props.nextQuestion(id);
    }
}

//TODO add websocket to see how many students answered question

const mapStateToProps = state => {
    return {
        race: state.AdminDelivery.race,
        gotRace: state.AdminDelivery.gotRace
    }
}
export default connect(mapStateToProps, { gettingRace }) (QuestionCard);