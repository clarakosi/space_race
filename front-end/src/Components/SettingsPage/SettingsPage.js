import React, { Component } from 'react';
import BillingInfo from './BillingInfo';
import SettingsForm from './SettingsForm';

class SettingsPage extends Component {
render() {
    return(
//BreadCrumbs:Top Navigation- Signout button
//SideBar
    <div>
    <SettingsForm/>
    <BillingInfo/>
    </div>
        );
    }
}
export default SettingsPage;