import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler,
  NavItem, NavLink } from 'reactstrap';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Header">
        <Navbar color="faded" light toggleable fixed="top">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">
            <div className="SpaceRace">
              <p className="name">SpaceRace</p>
              <p className="title">Race Your Friends Using Your Favorite Cohort!!</p>
            </div>
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#SignUp">SignUp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#SignIn">SignIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#About">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;