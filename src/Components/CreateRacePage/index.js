import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import QuizAndTeamsForm from './QuizAndTeams';
import QuestionForm from './QuestionsForm';
import StartRace from './StartRace';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Create race and add teams', 'Create questions and add Answers', 'Start Race!'];
}


class HorizontalLabelPositionBelowStepper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeStep: 0,
      addToggle: false
    };
  }

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  addToggle = event => {
    this.setState({
      addToggle: true
    })
  }
  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };


  getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <QuizAndTeamsForm  classes={this.props.classes} steps={getSteps()} handleBack={this.handleBack} activeStep={this.state.activeStep} handleNext={this.handleNext}/>;
      case 1:
        return <QuestionForm classes={this.props.classes} steps={getSteps()} handleBack={this.handleBack} activeStep={this.state.activeStep} handleNext={this.handleNext}/>;
      case 2:
        return <StartRace classes={this.props.classes} steps={getSteps()} handleBack={this.handleBack} activeStep={this.state.activeStep} handleNext={this.handleNext}/>
      default:
        return 'Uknown stepIndex';
    }
  }


  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root} style={this.state.addToggle ? {padding: 30} : {padding: 200}}>
      <Button variant="fab" onClick={this.addToggle} color="primary" style={this.state.addToggle ? {display: "none"} : null}  size="medium" aria-label="add" className={classes.button}>
        <AddIcon />
      </Button>
        <Paper className={classes.root} elevation={4} style={!this.state.addToggle ? {display: "none"} : null} >
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div>
              {this.state.activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&quot;re finished
                  </Typography>
                  <Button onClick={this.handleReset}>Reset</Button>
                </div>
              ) : (
                <div>
                  <div className={classes.instructions}>{this.getStepContent(activeStep)}</div>
                </div>
              )}
            </div>
            <br/>
          </Paper>
      </div>
    );
  }
}

HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);
