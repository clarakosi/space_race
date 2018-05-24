import React, { Componenet } from 'react';
import{ Button, Link } from 'reactstrap';

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
            <div>
                <form onSumbit={this.handleSubmit}>
                    <h2> Sign-In to your Space Race Account</h2>
                    <input class="form-control" type="email" name="email" placeholder="Email"/>
                    <input class="form-control" type="password" name="password" placeholder="Password"/>
                    <Button onClick={this.handleSubmit}>Sign In </Button>
                    <h6> Don't Already have an Account?</h6>
                    <Link to="/SignUp"> Sign Up Today </Link>
                </form>
            </div>
        );
    }
}
export default SignIn;