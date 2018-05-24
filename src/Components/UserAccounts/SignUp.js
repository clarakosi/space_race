import React, { Componenet } from 'react';
import{ Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit(){
        
    }
    
    render() {
        return(
            <Form>
                <h2> Create a Space Race Account</h2>
                <FormGroup>
                    <Input  type="email" name="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" placeholder="Password(repeat)"/>
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
export default SignUp;