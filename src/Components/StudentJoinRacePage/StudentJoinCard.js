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
        this.select =this.select.bind(this);
        this.onChange=this.onChange.bind(this);
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

    select(e) {
        this.setState({ [e.target.team]: e.target.value})
    }
    handleClick(e){
        e.preventDefault();
        //this.props.studentJoinRace(this.state);
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
                            <FormGroup >
                                <Label for="selectTeam"> Team: </Label>
                                 <Input 
                                 type="select"
                                 name='team'
                                 id ="selectTeam">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Input>
                            </FormGroup>
                                <Button onClick ={this.handleClick}> Join the Race! </Button>
                        </Form>
                    </div> ) : (
                    <div className="Join_Card">
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
                                <Button onClick ={this.handleClick}> Join the Race! </Button>
                        </Form>
                    </div>
                )}
            </div>
        );
    }
}
export default StudentJoinCard;