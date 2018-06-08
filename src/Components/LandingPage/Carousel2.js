import React, { Component } from "react";
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

class Carousel2 extends Component {

  render() {
    return (
      <StyleRoot >
          <Coverflow
            style={{backgroundColor: "yellow"}}
            displayQuantityOfSide={2}
            navigation
            infiniteScroll
            enableHeading
            media={{
              '@media (max-width: 900px)': {
                width: '600px',
                height: '300px'
              },
              '@media (min-width: 900px)': {
                width: '960px',
                height: '400px'
              }
            }}
          >
            <img src='cockpit6.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
            <img src='maxresdefault' alt='Album two' data-action="http://passer.cc"/>
            <img src='stripe' alt='Album three' data-action="https://doce.cc/"/>
            {/* <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/> */}
          </Coverflow>
        </StyleRoot>
    );

  }
}

export default Carousel2;