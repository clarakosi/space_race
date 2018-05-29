import React, { Component } from 'react';
import './JoinRace.css';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, Label } from 'reactstrap';

// still need to add functionality
// also will need to map over the availble teams for the dropdown menu

class StudentJoinCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            team:'',
            teams: this.props.teams,
            raceName: this.props.raceName,
            randomTeams:this.props.randomTeams,
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

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleClick(){
        // somehting needs to happen when the button is clicked
    }

    render() {
        const randomTeams =this.state.randomTeams;
        return(
            <div>
                {!randomTeams ? (
                    <div className="Join_Card">
                        <h5>Join {this.state.raceName}</h5>
                        <Form className="Join_Form">
                            <FormGroup>
                                <Label> First Name :</Label>
                                <Input 
                                onChange={this.onChange}
                                name="name"
                                value={this.state.name}
                                type="text" 
                                placeholder="Enter your First Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Team: </Label>
                                <InputGroup>
                                <Input
                                value={this.state.team}
                                onChange={this.onChange}
                                type="team" 
                                placeholder="Pick a team from the dropdown menu"
                                />
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
                                <Button className="Btn_Sub" onClick ={this.handleClick}> Join the Race! </Button>
                        </Form>
                    </div> ) : (
                    <div className="Join_Card">
                        <Form className="Join_Form">
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