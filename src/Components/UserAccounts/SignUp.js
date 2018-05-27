import React, { Componenet } from 'react';
import userSignupRequest from './Actions/SignupActions';
import{ Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            passwordRepeat: '',
            accountType:'',
        };

        this.onChange =this.onChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.userSignupRequest(this.state);
        
    }
    
    render() {
        return(
            <Form>
                <h2> Create a Space Race Account</h2>
                <FormGroup>
                    <Input 
                    value={this.state.email}
                    onChange={this.onChange} 
                    type="email"
                    name="email"
                    placeholder="Enter your Email"/>
                </FormGroup>
                <FormGroup>
                    <Input 
                    value={this.state.username}
                    onChange={this.onChange} 
                    type="username" 
                    name="username" 
                    placeholder="Pick a Username"/>
                </FormGroup>
                <FormGroup>
                    <Input 
                    value={this.state.password}
                    onChange={this.onChange} 
                    type="password" 
                    name="password" 
                    placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                    <Input 
                    value={this.state.passwordRepeat}
                    onChange={this.onChange} 
                    type="password" 
                    name="password(repeat)" 
                    placeholder="Verify Password"/>
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Account Type</legend>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        I'm Signing Up for a Teacher Account
                    </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                        I'm Signing Up for a Student Account
                </Label>
                </FormGroup>
                </FormGroup>
                    <Button onClick={this.handleSubmit}>Sign Up </Button>
                    <h6> Already have an Account?</h6>
                    <Link to="/SignIn"> Sign In </Link>
            </Form>
    
        );
    }
}
export default connect(null, { userSignupRequest }) SignUp;