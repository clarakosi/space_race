import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Questions } from '../ScoreBoardPage/questionboard';
import './AdminDeliverPage.css';



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
            activeGame: true,
            questionsAnswer: [
                // TODO: Connect created questions to gameboard
            ]
        }
        // this.resetGame();
    };

    processGuess(e) {
        if (this.state.currentIndex + 1 === this.state.questionsAnswer.length) {
            this.setState( { activeGame: false } );

            return;
        }
        let answer = parseInt(e.target.textContent);
        let correctAnswer =
            parseInt(
                this.state.questionsAnswer[this.state.currentIndex]['answer']
            );
        if ( answer === correctAnswer ) {
            this.setState( { correct: this.state.correct + 1 } );
        } else {
            this.setState( { incorrect: this.state.incorrect + 1 } );
        }
        this.setState( { currentIndex: this.state.currentIndex + 1 } );
    }

    render() {
        let options = [];

        if (this.state.activeGame) {
            options = this.state.questionsAnswer[this.state.currentIndex].options.map(option => (
                <Option optionValue={ option }
                        triggerProcess={ this.processGuess }
                        activeGame={ this.state.activeGame } />
            ));
        }
        return (  <div>
            <div className="row">
              <div className="offset-lg-2 col-lg-7 col-md-12">
                  <QuestionPanel activeGame={ this.state.activeGame } 
                                 question={
                                    this
                                      .state
                                      .questionsAnswer[this.state.currentIndex]
                                      .question }
                                 resetGame = { this.resetGame } />
                  <div className={ this.state.activeGame 
                                    ? 'visible'
                                    : 'hidden' } >
                     { options }
                  </div>
              </div>
              <div className="col-lg-3 col-md-12">
                  <StatusDisplay 
                    correct={ this.state.correct } 
                    incorrect={ this.state.incorrect } />
              </div>
          </div>
        </div> );
    }
}

export default connect(mapStateToProps)(QuestionPanel);

/* ReactDom.render( <GameBoard className="game-board" />,
                    document.getElementById('board') );
                    */
