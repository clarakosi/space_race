import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { connect } from 'react-redux';
import { gettingRace } from '../../Actions/adminDeliveryPage'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: false,
    }
  }

  answerHandler = event => {
    event.preventDefault();
    this.setState({answer: true})
    let data = {
      slug: this.props.slug,
      answer_id: Number(event.target.value),
      question_id: this.props.race.questions[this.props.index].id
    }
    this.props.handleAnswerFunc(data)
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
          {!this.props.gotRace ? null :
            <div>
              <Typography variant="headline" component="h3">
                Question {this.props.index + 1} of {this.props.race.questions.length}
              </Typography>
              <br/>
              <Typography variant="title" gutterBottom>
                Question: {this.props.race.questions[this.props.index].question}
              </Typography>
              <br/>
              <Typography variant="subheading" gutterBottom>
                <ul>
                  {this.props.race.questions[this.props.index].answers.map(answer => {
                    return <li key={answer.id}>{answer.answer} <Button className="btn-sm" outline color="primary" onClick={this.answerHandler} value={answer.id}>Submit</Button></li>
                  })}
                </ul>
              </Typography>
            </div>}
        </Paper>
    );
  }
}

Questions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Questions);