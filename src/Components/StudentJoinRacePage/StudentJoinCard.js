import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, Label } from 'reactstrap';

// still need to add functionaly
// need to add logic for if the teacher has picked random teams- or 
// if student can select their own team
class StudentJoinCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            teams: [],
            raceName: '',
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
         <InputGroup>
          <Input />
          <Label> Team </Label>
          <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>
              Pick A Team
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem >Team1</DropdownItem>
              <DropdownItem>Team2</DropdownItem>
              <DropdownItem>team3</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
         <FormGroup>
         </FormGroup>
         <Button onClick ={this.handleClick}> Join the Race! </Button>
         </Form>
        </div>
        );
    }
}
export default StudentJoinCard;