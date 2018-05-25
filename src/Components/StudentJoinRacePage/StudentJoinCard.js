import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, Label } from 'reactstrap';

// still need to add functionality
// also will need to map over the availble teams for the dropdown menu

class StudentJoinCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            teams: [],
            raceName: '',
            randomTeams:'',
            dropdownOpen: false,

        };
        this.handleClick = this.handleClick.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
    }

    toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

    handleClick(){
        // somehting needs to happen when the button is clicked
    }

    render() {
        const randomTeams =this.state.randomTeams;
        return(
            <div>
                {!randomTeams ? (
                    <div>
                        <h4>Join {this.props.racename}</h4>
                        <Form>
                            <FormGroup>
                                <Label> First Name :</Label>
                                <Input type="text" placeholder="Enter your First Name" />
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                <Input />
                                <Label> Team </Label>
                                <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                                <DropdownToggle caret>
                                    Pick A Team
                                </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Teams</DropdownItem>
                                        <DropdownItem >Team1</DropdownItem>
                                        <DropdownItem>Team2</DropdownItem>
                                        <DropdownItem>Team3</DropdownItem>
                                    </DropdownMenu>
                                </InputGroupButtonDropdown>
                                </InputGroup>
                            </FormGroup>
                                <Button onClick ={this.handleClick}> Join the Race! </Button>
                        </Form>
                    </div> ) : (
                    <div>
                        <Form>
                            <FormGroup>
                            <Label> First Name :</Label>
                            <Input type="text" placeholder="Enter your First Name" />
                            </FormGroup>
                                <Button onClick ={this.handleClick}> Join the Race! </Button>
                        </Form>
                    </div>
                )}
            </div>
        );
    }
}
export default StudentJoinCard;