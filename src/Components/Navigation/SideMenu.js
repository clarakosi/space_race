import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

//Basic Skeleton of SideMenu
//TODO: update urls.includes() to respective pages
// add dropdown to races link
//figure out what schools links to


const SideMenu = (props) => {
    const url = window.location.href;
    if(url.includes('/join')) {
        return (
            <div>
        <Nav vertical>
          <NavLink href="/races">Races</NavLink> 
          <NavLink href="/scoreboard">Scoreboard</NavLink> 
          <NavLink href="/settings">Settings</NavLink> 
        </Nav>
      </div> )

    } else if(url.includes('/race')) {
        return (
            <div>
        <Nav vertical>
          <NavLink href="/races">Races</NavLink> 
          <NavLink href="/scoreboard">Scoreboard</NavLink> 
          <NavLink href="/settings">Settings</NavLink> 
        </Nav>
      </div>)

    }else if(url.includes('/admindeliverypage')) {
        return (
             <div>
        <Nav vertical>
          <NavLink href="/schools">Schools</NavLink> 
          <NavLink href="/scoreboard">Scoreboard</NavLink> 
          <NavLink href="/settings">Settings</NavLink> 
        </Nav>
      </div>)

    } else if(url.includes('/settings')) {
        return (
            <div>
        <Nav vertical>
          <NavLink href="/races">Races</NavLink> 
          <NavLink href="/scoreboard">Scoreboard</NavLink> 
          <NavLink href="/settings">Settings</NavLink> 
        </Nav>
      </div> )
    } else {
        return null;
    }

};

export default SideMenu;