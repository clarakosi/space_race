import React, { Component } from 'react';
import Toggle from 'react-ions/lib/components/Toggle';

/******
 * this is the toggle switch used to randomize teams
 * 
 * 
 * 
 * 
 */

class ToggleRandom extends Component {
  constructor(props) {
	super(props);
	this.state = {
		status: false
	}
  }

 

  handleChange = (event) => {
    console.log('Name: ' + event.target.name, 'Value: ' + event.target.value)
    this.setState({status: 'Value is ' + event.target.value})
  }

  render() {
    return (
		
      <div>
        <Toggle label='Random' value={false} hasText={true} changeCallback={this.handleChange} name='toggle_random' />
      </div>
    )
  }
}

export default ToggleRandom;