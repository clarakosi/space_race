import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field, FormSpy } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { OnChange } from 'react-final-form-listeners'
import Icon from './icons/Icon';
import { ICONS } from './icons/Iconstants';
import { connect } from 'react-redux';
// import { ColorMenu } from './colormenu/ColorMenu';
import { createRace }  from '../../Actions';
/**
 * 
 * for local dev testing*********************************************************/
handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);

}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}
/**
 * 
 *  ***********verifies all input fields when user submits formdata, alert window verifies the data******
 */

 /**
  * set up conditional field rendering, if admin chooses random, disable adding teams feature, if adding teams, disable random etc. 
  */
 const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);




const required = value => (value ? undefined : 'Required')
const WhenFieldChanges = ({ field, becomes, set, to }) => (
    <Field name={set} subscription={{}}>
      {(
        // No subscription. We only use Field to get to the change function
        { input: { onChange } }
      ) => (
        <OnChange name={field}>
          {value => {
            if (value === becomes) {
              OnChange(to)
            }
          }}
        </OnChange>
      )}
    </Field>
  )
  
const CreateRaceCard = () => (
  
  
  <Styles>
    <h1>🏁 Create Race 🏁</h1>
    <Form
      onSubmit={onSubmit}
      mutators={{
        ...arrayMutators
      }}
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        mutators: { push, pop }, // injected from final-form-arrays above
        pristine,
        reset,
        submitting,
        values
      }) => {
        return (
          <form onSubmit={handleSubmit}>
          <WhenFieldChanges
            field="name"
            becomes={!undefined}
            set="randomize"
            to={false}
            />
          <WhenFieldChanges
            field="randomize"
            becomes={true}
            set="teams"
            to={undefined}
            />
            <div>
              <label><h4><strong>Race Name</strong></h4></label>
              <Field name="name" component="input" disabled={ values.teams || values.randomize } validate={required} />
            </div>
            <div>
              <label>
                <Field
                  name="randomize"
                  component="input"
                  disabled={ !values.name || values.teams }
                  type="checkbox"
                  value="true"
                  initialValues={false}
                />{" "}
                Random Teams
              </label>
              </div>
            <div className="buttons">
            <div className="buttons">
            <button type="submit" disabled={submitting || pristine && !values.name}>
              Submit Race 
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={submitting || pristine}>
              Reset
            </button>
          </div>
              <button
                type="button"
                disabled={ pristine || values.randomize || (!values.name || values.randomize) || (values.name && pristine) }
                onClick={() => push('teams', undefined)}>
                Add Team
              </button>
              <button type="button" disabled={ !values.race || values.randomize } onClick={() => pop('teams')}>
                Remove Team
              </button>
            </div>
            <FieldArray name="teams">
              {({ fields }) =>
                fields.map((team, index) => (
                  <div key={team}>
                    <label><h3>Team {index + 1}</h3></label>
                    <Field
                      name={`${team}.team`}
                      component="input"
                      placeholder="Team" 
                    />
                     <div>
                     <label>Team Color</label>
                     <Field name={`${team}.color`} component="select">
                       <option />
                       <option value="#ff0000">❤️ Red</option>
                       <option value="#00ff00">💚 Green</option>
                       <option value="#0000ff">💙 Blue</option>
                     </Field>
                     <Error name="favoriteColor" />
                   </div>
                   <div>
                   <label>Mascot</label>
                   <Field name={`${team}.mascot`}  component="select" multiple>
                     <option value="ham">🐷 Ham</option>
                     <option value="mushrooms">🍄 Mushrooms</option>
                     <option value="cheese">🧀 Cheese</option>
                     <option value="chicken">🐓 Chicken</option>
                     <option value="pineapple">🍍 Pinapple</option>
                   </Field>
                   <Error name="mascot" />
                 </div>
                    <span
                      onClick={() => fields.remove(index)}
                      style={{ cursor: 'pointer' }}>
                      <Icon icon={ICONS.BIN2} color={"blue"} size={24} />
                    </span>
                  </div>
                ))}
            </FieldArray>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
        )
      }}
    /> 
  </Styles>
    )

      function mapStateToProps(state) {
      return {
        // TeamsArray : state.teamsArray,
        FormData: state.FormData
      }
    }
    
      export default connect(mapStateToProps, { createRace })(CreateRaceCard);
