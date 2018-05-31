import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './navigation.css';
//Breadcrumbs are set up and working for Settings page
//TODO: update the includes statments based on pages urls-
//lines 9,18,& 27 will need to be updated

const Breadcrumbs = (props) => {
    const url = window.location.href;
    if(url.includes('/join')) {
        return (
            <div>
                <Breadcrumb tag="nav">
                    <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem active tag="span">Races</BreadcrumbItem>
                </Breadcrumb>
            </div> )

    } else if(url.includes('/race')) {
        return (
            <div >
                <Breadcrumb tag="nav">
                    <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem active tag="span">Race New</BreadcrumbItem>
                </Breadcrumb>
            </div> )

    }else if(url.includes('/scoreboard')) {
        return (
            <div >
                <Breadcrumb tag="nav">
                    <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem active tag="span">Scoreboard</BreadcrumbItem>
                </Breadcrumb>
            </div> )

    } else if(url.includes('/settings')) {
        return (
            <div className="Breadcrumb">
                <Breadcrumb tag="nav">
                    <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem active tag="span">Settings</BreadcrumbItem>
                </Breadcrumb>
            </div> )
    } else {
        return null;
    }

};

export default Breadcrumbs;