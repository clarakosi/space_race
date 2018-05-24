import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';

class LandingPage extends Component {

    render() {
        return (
          <div>
            <Header />
     
            <Footer />
          </div>
        );
      }
    }
    

export default LandingPage;

