import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter, Link } from 'react-router-dom';
// import {Button} from 'reactstrap';
// import { Card, CardHeader, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Header from './Header';
import Footer from './Footer';


class LandingPage extends Component {

    render() {
        return (
          <div>
            <Header />
           <Middle />
            <Footer />
          </div>
        );
      }
    }
    
//  just in case this page changes and we need to add any actions
// const mapStateToProps = state => {
//     return {

//     };
// }

// export default connect(mapStateToProps, {})(LandingPage);

export deafault LandingPage;