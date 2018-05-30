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
            { value: '3', display: 'Gryffindor', notShowing: false, icon: <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" space="preserve">  <image id="image0" width="24" height="24" x="0" y="0"
            href="data:image/png;base64,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
          AAAASUVORK5CYII=" />
          </svg>
           }
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
