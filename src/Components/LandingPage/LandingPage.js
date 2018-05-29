import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Middle from './Middle';
import Footer from './Footer';

class LandingPage extends Component {

    render() {
        return (
          <div>
            <Header />
            <br />
            <br />
            <Middle/>
            <br />
            <br />
            <Footer />
          </div>
        );
      }
    }
    

export default LandingPage;

