import React, { Component } from 'react';
import './settings.css'
import Breadcrumbs from '../Navigation/Breadcrumbs';
// import SideMenu from '../Navigation/SideMenu';
import SideBar from '../Navigation/SideBar';
import SignOutButton from'../Navigation/SignOutButton';
import SettingsForm from './SettingsForm';
import { Row, Col } from 'reactstrap'

class SettingsPage extends Component {
render() {
    return(
    <div className="dashboard">
    {/* <SignOutButton/> */}
    {/* <Breadcrumbs/> */}
    <div className="container-fluid" >
        <Row className="row">
            <Col xs="3" style={{padding: 0}}>
                <SideBar/>
            </Col>
            {/* <div className="col-sm">
                    <SettingsForm/>
            </div> */}
        </Row>
    </div>
    </div>
        );
    }
}
export default SettingsPage;