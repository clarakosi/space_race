import React, { Component } from 'react';
import{ Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import BillingInfo from './BillingInfo';
import { connect } from 'react-redux';
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

class SettingsForm extends Component {


    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root} elevation={4} style={{width: "100%", height:"100%", padding: 30}}>
            {/* <Form style={{width: "100%"}}> */}
                <FormGroup >
                    <Label> Email:</Label>
                    {/* needs to be changed to include login information */}
                    <Input type="email" placeholder="Youremail@something.com" value={this.props.loggedIn ? this.props.user.email : "youremail@something"}/>
                </FormGroup>
                <FormGroup>
                    <Label> Old-Password:</Label>
                    <Input type="password" placeholder="********"/>
                </FormGroup>
                <FormGroup>
                    <Label> New-Password:</Label>
                    <Input type="password" placeholder="********"/>
                </FormGroup>
                <BillingInfo/>
                <Button > Save </Button>
            {/* </Form> */}
            </Paper>

            // Need to handleSumbit on the Save button
        )
    }
}

SettingsForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(SettingsForm);

// const mapStateToProps = state => {
//     return {
//         loggedIn: state.LogIn.loggedIn,
//         user: state.LogIn.user
//     }
// }
// export default connect(mapStateToProps, {}) (SettingsForm);