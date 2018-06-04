import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Questions } from '../ScoreBoardPage/questionboard';
import { CreateRaceCard } from '../CardViews/CreateRaceCard';
import './AdminDeliveryPage.css';


const API = 'http://127.0.0.1:8000/api/<:id>/';
const DEFAULT_QUERY = 'redux';

/* Admin Delivery Page, to see the current question, answer choices, correct answer(initially hidden) */
class QuestionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: [],
            isLoading: false,
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

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(API + DEFAULT_QUERY)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ question: data.question, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
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

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div>
                {question.map(question =>
                <div key={question.objectID}>
                    <a href={question.url}>{question.title}</a>
                    </div>
                )}
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
    nextQuestion = event => {
        event.preventDefault();
        const id = this.props.question.id;
        this.props.nextQuestion(id + 1);
    }

    /* Next Question Button Options End Here */
}

//TODO add websocket to see how many students answered question

export default QuestionCard;