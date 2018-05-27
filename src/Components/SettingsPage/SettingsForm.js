import React, { Component } from 'react';
import{ Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import BillingInfo from './BillingInfo';

class SettingsForm extends Component {

render() {
    return (
        <Form>
            <FormText> 
                Update User Setting 
            </FormText>
            <FormGroup>
                <Label> Email:</Label>
                <Input type="emial" placeholder="Youremail@something.com"/>
            </FormGroup>
            <FormGroup>
                <Label> Old-Password:</Label>
                <Input type="password" placeholder="********"/>
            </FormGroup>
            <FormGroup>
                <Label> New-Password:</Label>
                <Input type="password" placeholder="********"/>
            </FormGroup>
            <BillingInfo/>
            <Button > Save </Button>
        </Form>
        // Need to handleSumbit on the Save button
    )
}
}
export default SettingsForm;