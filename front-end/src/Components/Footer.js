import React, { Component } from 'react';
import { Col, Container, Row, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import {Button} from 'reactstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <Container>
          <Row>
            <Col sm="11" xs="10">
              <p>&nbsp;</p>
            </Col>
            <Col sm="1" xs="2">
              <a href="#now" className="top-link">top</a>
            </Col>
          </Row>
          <Row>
            <Col sm="2" xs="3">
              <Nav className="footer-nav">

                <NavItem>
                  <NavLink href="" target="_blank">
                    <FontAwesome name="" className="social-icon" size="3x" />
                  </NavLink>
                </NavItem>
                <NavItem>                                            
                
                    <Button >BUY NOW</Button>
                
                </NavItem>
              </Nav>
            </Col>
            <Col sm="4" xs="9">
              <Row>
                <div className="wrapper">
                  <h6>Contact</h6>
                  <div className="left">
                    <p className="name">contact@somecontact.com</p>
                  </div>
                  <div className="right">
                    <p className="domain">our heroku domain</p>
                    <p className="domain">our heroku domain</p>
                  </div>
                </div>
              </Row>
              <Row>
                <p className="race-responsibly"><em>Race Responsibly</em></p>
              </Row>
            </Col>
            <Col sm="5" xs="12">
              <h6>About</h6>
              <p className="about-text">
               Tell about game here
            </p>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <p>Created by LambdaSchool CS6</p>
              <p className="copyright">Copyright 2018. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
