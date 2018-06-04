import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { connect } from 'react-redux';
import { gettingRace } from '../../Actions/adminDeliveryPage'

class Questions extends Component {
  componentDidMount() {
    // will dynamically be passed down
    this.props.gettingRace(1)
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
                return <li>{answer.answer} <Button className="btn-sm" outline color="primary">Submit</Button></li>
              })}
            </ul>
          </div>
        </div> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      race: state.AdminDelivery.race,
      gotRace: state.AdminDelivery.gotRace,
      index: state.AdminDelivery.index
  }
}
export default connect(mapStateToProps, { gettingRace }) (Questions);