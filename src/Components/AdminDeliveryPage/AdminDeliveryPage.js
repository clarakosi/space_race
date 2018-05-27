import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Questions } from '../ScoreBoardPage/questionboard';


/* Admin Delivery Page, to see the current question, answer choices, correct answer(initially hidden) */

class QuestionPanel extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        if (this.props.activeRace) {
            return ( <div className="text-center">
                        <p className="question-panel">{ this.props.question }</p>
                    </div>)
        } else {
            return ( <div className="text-center">
                        <p className="question-panel message">End Race</p>
                        <div className="hyperlink-button">
                            <a onClick={ this.props.resetRace } href="#">Restart</a>    
                        </div>
                    </div>);
        }
    }
}

class Option extends Component {
    render() {
        return <div><a href="#"
                        onClick={ this.props.triggerProcess }
                        className="option-card">
                        { this.props.optionValue }
                    </a></div>
    }
}

class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.processGuess = this.processGuess.bind(this);
        this.resetGame = this.resetGame.bind(this);

        this.state = {
            currentIndex: 0,
            correct: 0,
        }
    }
}

export default connect(mapStateToProps)(QuestionPanel);
