import React, { Componenet } from 'react';
import{ Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignIn extends Component {
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
                <h2> Sign-In to your Space Race Account</h2>
                <FormGroup>
                    <Input type="email" name="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" placeholder="Password"/>
                </FormGroup>
                <Button onClick={this.handleSubmit}>Sign In </Button>
                    <h6> Don't Already have an Account?</h6>
                    <Link to="/SignUp"> Sign Up Today </Link>
            </Form>
        );
    }
}
export default SignIn;