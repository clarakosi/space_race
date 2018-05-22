import React, { Component } from 'react';
import BillingInfo from './BillingInfo';

class SettingsForm extends Component {

render() {
    return (
        <form>
            <label>
                Email:
                <input type="text"/>
            </label>
            <label>
                Old Password:
                <input type="text"/>
            </label>
            <label>
                New Password:
                <input type="text"/>
            </label>
            <BillingInfo/>
            <button onSumbit={this.handleSumbmit}> Save </button>
        </form>
    )
}
}
export default SettingsForm;