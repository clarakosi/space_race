import React, { Component } from 'react';
import SelectField from 'react-ions/src/components/SelectField/SelectField'
import * as icons from './icons';
class SelectFieldHide extends Component {
  constructor(props) {
    super(props);
    this.state = {
        options: [
            { value: '0', display: 'Slytherin', notShowing: false, icon: 'icons.slytherin.svg' },
            { value: '1', display: 'Hufflepuff', notShowing: false, icon: 'icons.hugglepuff.svg' },
            { value: '2', display: 'Ravenclaw', notShowing: false, icon: 'icons.ravenclaw.svg' },
            { value: '3', display: 'Gryffindor', notShowing: false, icon: 'icons. gryffindor.svg' }
          ],
          value: '1',
          status: ''
    }
  }

  

  handleChange = event => {
    let options = this.state.options.map(option => {
      option.notShowing = option.value === event.target.value
      return option
    })

    this.setState({ value: event.target.value, status: 'Chosen option is ' + event.target.value, options })
  }

  render() {
    return (
      <SelectField
        options={this.state.options}
        valueProp='value'
        displayProp='display'
        changeCallback={this.handleChange}
        value={this.state.value}
        hideProp='notShowing'
      />
    )
  }
}

export default SelectFieldHide;
