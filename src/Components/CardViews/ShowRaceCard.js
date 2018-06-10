import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRaces } from '../../Actions/showRaces'
import { Input, Label, Card, Col, CardText, Button, Row, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './ShowRaceCard.css'


class ShowRaceCard extends Component {
  // On page load get all of the races for the user out of the database.
  componentDidMount() {
    this.props.getRaces();
  }
  render() {
    return (
      <div>
        {this.props.gotRaces ?
        <Row>
          {this.props.races.map(race => {
               return <Col sm="4" key={race.id}>
               <Card body>
                 <CardTitle>{race.name}</CardTitle>
                 <CardText>Teams: {race.teams.length}</CardText>
                 <CardText>Questions: {race.questions.length}</CardText>
                 <Button>Finish Setting Up Race</Button>
               </Card>
             </Col>
            })}
        </Row>
      : null}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    races: state.Races.races,
    gotRaces: state.Races.gotRaces
  }
}

export default connect(mapStateToProps, { getRaces })(ShowRaceCard)