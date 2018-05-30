import React, { Component } from 'react';
import{ Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

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
    }
    
    render() {
        return(
            <Form className="container">
                <h5> Sign-In to your Space Race Account</h5>
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
                <Button onClick={this.handleSubmit}>Sign In </Button>
                    <h6> Don't Already have an Account?</h6>
                    <Link to="/SignUp"> Sign Up Today </Link>
            </Form>
        );
    }
}
export default SignIn;