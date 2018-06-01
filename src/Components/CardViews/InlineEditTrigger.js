import React, { Component } from 'react';
import InlineEdit from 'react-ions/lib/components/InlineEdit';
import 'bootstrap/dist/css/bootstrap.css';
/****
 * 
 * 
 * This will allow click to edit feature on input fields
 * 
 * 
 */

class InlineEditTrigger extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isEditing: false,
        value: 'Example value'
    }
  }

 

  handleCallback = event => {
    this.setState({ isEditing: false, value: event.target.value })
  }

  buttonCallback = () => {
    this.setState({ isEditing: true })
  }

  render = () => {
    return (
      <div className="col-auto align-items-center align-self-center">
        <InlineEdit name='test' value={this.state.value} isEditing={this.state.isEditing} changeCallback={this.handleCallback} />
        <i className="fa fa-pencil" data-bs-hover-animate="bounce" onClick={this.buttonCallback} optClass={styles['button-callback']}/>
      </div>
        
    )
  }
}

export default InlineEditTrigger;