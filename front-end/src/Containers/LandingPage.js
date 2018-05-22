import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
// import {Button} from 'reactstrap';
import { Card, CardHeader, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class LandingPage extends Component {

    render() {
        return(
            <div>
            <h1> Space Race </h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
}

export default connect(mapStateToProps, {})(LandingPage);