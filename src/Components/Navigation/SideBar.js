import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './sidebar.css';

// updated side bar, may be used instead of side menu
// not sure if all pages are included but can be fixed
// or updated after group input
const SideBar = (props) => {

    return (
        <Nav vertical className="Menu">
            <NavItem>
                <NavLink href="/createrace">CREATE </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/showrace">SHOW</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/scoreboard">SCOREBOARD</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/settings">SETTINGS</NavLink>
            </NavItem>
            
        </Nav>
    
    )
}

export default SideBar;