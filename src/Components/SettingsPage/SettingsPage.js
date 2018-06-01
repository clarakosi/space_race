import React, { Component } from 'react';
import './settings.css'
import Breadcrumbs from '../Navigation/Breadcrumbs';
import SideMenu from '../Navigation/SideMenu';
import SignOutButton from'../Navigation/SignOutButton';
import SettingsForm from './SettingsForm';

class SettingsPage extends Component {
render() {
    return(
    <div>
    <SignOutButton/>
    <Breadcrumbs/>
    <div className="container-fluid" >
        <div className="row">
            <div className="col-xs">
                <SideMenu/>
            </div>
            <div className="col-sm">
                    <SettingsForm/>
            </div>
        </div>
    </div>
    </div>
        );
    }
}
export default SettingsPage;