import React, { Component } from 'react';
import{ Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggingIn } from '../../Actions/LogIn';
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

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
            
        };
        this.onChange =this.onChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.loggingIn(data)
    }
    
    render() {
        const { classes } = this.props;
        return(
            <Paper className={classes.root} elevation={4}>
                <Form className="container">
                    <h4> Sign-In to your Space Race Account</h4>
                    <FormGroup>
                        <Input 
                        value={this.state.username}
                        onChange={this.onChange}
                        type="username" 
                        name="username" 
                        placeholder="Username"/>
                    </FormGroup>
                    <FormGroup>
                        <Input 
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password" 
                        name="password" 
                        placeholder="Password"/>
                    </FormGroup>
                    <Button onClick={this.handleSubmit} type="submit">Sign In </Button>
                        <h6> Don't Already have an Account?</h6>
                        <Link to="/SignUp"> Sign Up Today </Link>
                </Form>
            </Paper>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SignIn);

// const mapStateToProps = state => {
//     return {
//         loggedIn: state.LogIn.loggedIn
//     }
// }
// export default SignIn;