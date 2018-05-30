import { Form, Text } from 'react-form';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TeamColorPicker from './TeamColorPicker';
import ToggleRandom from './ToggleRandom';
import { connect } from 'react-redux';
import { shuffleArray } from '../../Actions/';
import  InlineEditTrigger  from './InlineEditTrigger';
 export default class DynamicForm extends Component {

    constructor( props ) {
      super( props );
      this.state = {
        inlineValue:''
          // data:[]
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
        <div className="card border-dark" style={{backgroundColor: 'rgba(189,245,252,0.2)'}}>
        <div className="card-header" style={{height: 55}}>
          <div className="col-auto">
            <div className="row">
              <div className="col-auto">
                <h4>Race Info</h4>
              </div>
            </div>
          </div>
        </div>
          <Form
            onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <div style={{margin:'5px'}}>
                <form onSubmit={formApi.submitForm} id="dynamic-form">
                  <label  htmlFor="dynamic-first">Race Name</label>
                  <InlineEditTrigger value={this.props.inlineValue}/>

                  <button
                  onClick={() => formApi.addValue('siblings', '')}
                  type="button"
                  className="mb-4 mr-4 btn btn-success" style={{margin: '10px'}}>Add Team</button>
                </form>
                  <h5 className="text-left bg-info" style={{margin: 10}}>Teams</h5>
                  { formApi.values.siblings && formApi.values.siblings.map(( sibling, i ) => (
                    <div style={{margin: '5px'}} key={`sibling${i}`}>
                      <label htmlFor={`sibling-name-${i}`}>
                        <select field={['siblings', i]} id={`sibling-name-${i}`}><optgroup label="Select Team"><option value="Slytherin">Slytherin</option><option value="Griffyndor">Griffyndor</option><option value="Hufflepuff">Hufflepuff</option><option value="Ravenclaw">Ravenclaw</option></optgroup></select> </label>
                      <label htmlFor={`sibling-name-${i}`}>
                        <TeamColorPicker field={['siblings', i]} id={`sibling-name-${i}`} /></label>
                      <select><optgroup placeholder= "select mascott" label="Select Mascott"><option value={12} selected>This is item 1</option><option value={13}>This is item 2</option><option value={14}>This is item 3</option></optgroup></select>
                        <button style={{margin: '6px'}}className="mb-4 btn btn-primary"><i className="fa fa-pencil" data-bs-hover-animate="bounce"/></button>
                        <button
                          style={{margin: '6px'}}
                          onClick={() => formApi.removeValue('siblings', i)}
                          type="button"
                          className="mb-4 btn btn-danger"
                        >
                            <i className="fa fa-trash-o" />
                        </button>
                    </div> 
                  )
                )
              }
                <div style={{margin: '10px'}} className="form-check"><label className="form-check-label" htmlFor="formCheck-1">Random Teams</label><input className="form-check-input" type="radio" id="formCheck-1" /></div>
                  <div className="col-auto"><a className="btn btn-outline-primary" role="button" href="#Questions" style={{width: 225, margin: '10px'}}>On To Questions &nbsp;<i className="fa fa-space-shuttle" /></a></div>
                </div>  
            )
          } 
          </Form>
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      teamsArray : state.teamsArray
    }
  }
  
    export default connect(mapStateToProps, { shuffleArray })(CreateRaceCard);