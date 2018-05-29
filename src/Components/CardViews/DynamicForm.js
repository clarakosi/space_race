import { Form, Text } from 'react-form';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TeamColorPicker from './TeamColorPicker'
 export default class DynamicForm extends Component {

    constructor( props ) {
      super( props );
      this.state = {
          data:[]
      };
    }
    // onEdit = (id) => {
    //     let record = this.state.find((d) => {
    //       return d.id == id;
    //     });
        
    //     this.setState({
    //       current: record
    //     })
    //   }
    render() {
       
          
      return (
        <div>
          <Form
            onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <div>
               
                <form onSubmit={formApi.submitForm} id="dynamic-form">
                  <label htmlFor="dynamic-first">Race Name</label>
                  <Text field="firstName" id="dynamic-first" />
                  { formApi.values.siblings && formApi.values.siblings.map( ( sibling, i ) => (
                    <div key={`sibling${i}`}>
                   
                      <label htmlFor={`sibling-name-${i}`}>Team
                      <select field={['siblings', i]} id={`sibling-name-${i}`}><optgroup label="Select Team"><option value="Slytherin">Slytherin</option><option value="Griffyndor">Griffyndor</option><option value="Hufflepuff">Hufflepuff</option><option value="Ravenclaw">Ravenclaw</option></optgroup></select>  </label>
                   
                    
                      <label htmlFor={`sibling-name-${i}`}>
                      <TeamColorPicker field={['siblings', i]} id={`sibling-name-${i}`} /></label>
                     
                  
                      <button
                      style={{margin: '12px'}}
                        onClick={() => formApi.removeValue('siblings', i)}
                        type="button"
                        className="mb-4 btn btn-danger"><i className="fa fa-trash-o" /></button>
                    </div>
                    
                  ))}
                  <button
                  onClick={() => formApi.addValue('siblings', '')}
                  type="button"
                  className="mb-4 mr-4 btn btn-success" style={{marginTop: '10px'}}>Add Team</button>
                </form>
              </div>
            )}
          </Form>
        </div>
      );
    }