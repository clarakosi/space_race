import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignUp from './SignUp';
import { signingUp } from '../../Actions/LogIn'
import NavBar from '../Navigation/NavBar';


class SignUpIndex extends Component {
  render() {
    return(
      <div style={{width: "100%"}}>
        <NavBar />
        <div style={{ marginLeft: 350, marginRight: 350}}>
          <SignUp signingUp={this.props.signingUp} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      state
  }
}
export default connect(mapStateToProps, {signingUp})(SignUpIndex);