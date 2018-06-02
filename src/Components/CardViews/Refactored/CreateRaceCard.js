import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field, FormSpy } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { OnChange } from 'react-final-form-listeners'
// import { ColorMenu } from './colormenu/ColorMenu';

/**
 * 
 * for local dev testing*********************************************************/

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
            field="randomize"
            becomes={true}
            set="teams"
            to={undefined}
            />
            <div>
              <label>RACE NAME</label>
              <Field name="race" component="input" />
            </div>
            <label>Randomize Teams</label>
            <div>
              <label>
                <Field
                  name="randomize"
                  component="input"
                  disabled={ values.teams }
                  type="checkbox"
                  value="true"
                />{" "}
                Randomize  
              </label>
              <p><b>NOTE: if you plan to randomly assign students to teams, the ability to add teams to each race will be disabled.</b></p>
              </div>
            
            <div className="buttons">
              <button
                type="button"
                disabled={ pristine || values.randomize || (!values.race && values.randomize) }
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
                    <label>Team #{index + 1}</label>
                    <Field
                      name={`${team}.teamName`}
                      component="input"
                      placeholder="Team"
                    />
                    <Field
                      name={`${team}.teamColor`}
                      component="input"
                      placeholder="Team Color"
                    />
                    
                    <span
                      onClick={() => fields.remove(index)}
                      style={{ cursor: 'pointer' }}>
                      ❌
                    </span>
                  </div>
                ))}
            </FieldArray>

            <div className="buttons">
              <button type="submit" disabled={submitting || pristine && !values.race }>
                Submit Race 
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={submitting || pristine}>
                Reset
              </button>
            </div>
          
          </form>
        )
      }}
    />
  </Styles>
)

export default CreateRaceCard;