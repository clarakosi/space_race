import React, { Component } from 'react';

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
        </form>
    )
}
}
export default SettingsForm;