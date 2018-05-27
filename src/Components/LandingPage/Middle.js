import React, { Component } from 'react'
import { Button } from 'reactstrap'
/****
 * 
 * So far this just has a background image with title and start button
 * 
 * 
 */
class Middle extends Component {

    render() {
        return (
            <div>
                <div className="hero-image"> 
                    <img  />                 
                        <div className="hero-text">
                            <Button>START</Button>
                            <br/>
                            <h1>SPACE RACE</h1>
                        </div>
                </div>
            </div>
        );
    }
}

export default Middle;