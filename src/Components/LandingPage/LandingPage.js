import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LandingPage.css';
import Header from './Header';
// import Middle from './Middle';
import Footer from './Footer';
import Carousel from './Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar2 from '../Navigation/NavBar2';
import Carousel2 from './Carousel2';
class LandingPage extends Component {

    render() {
        return (
          <div style={{width: "100%"}}>
            <NavBar2/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {/* <Header /> */}
            {/* <Carousel/> */}
            <Carousel2 />
            {/* <br /> */}
            {/* <br /> */}
            {/* <Footer /> */}
          </div>
        );
      }
    }
    

export default LandingPage;

