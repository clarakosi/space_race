import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class StudentJoinCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            teams: [],
            raceName: ''
            randomTeams:'',

        };
    }

    render() {

        
        return(
        <div>
         <h4>Join {this.props.racename}</h4>
         <Form>
         <FormGroup>
             <Label> First Name :</Label>
             <Input type="text" placeholder="Enter your FIrst Name" />
         </FormGroup>
         <FormGroup>
         </FormGroup>
         <Button onClick ={this.handleClick}> Join the Race! </Button>
         </Form>
        </div>
        );
    }
}
export default StudentJoinCard;