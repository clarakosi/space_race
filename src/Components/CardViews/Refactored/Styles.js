import styled, { css } from 'styled-components'

const btn = (light, dark) => css`


  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
 
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const btnDefault = css`${btn('#ffffff', '#d5d5d5')} color: #555;`

const btnPrimary = btn('#4f93ce', '#285f8f')
const btnDanger = btn('#e27c79', '#c9302c')

export default styled.div`
@import './fonts.css'
  font-family: sans-serif;

  h1 {
    text-align: center;
    color: #222;
  }

  h2 {
    font-family: XtrusionBRK;
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
    margin-bottom: 10px;
  }

  p {
    max-width: 500px;
    margin: 10px auto;
    & > a {
      display: inline;
    }
  }

  form {
    background: rgba(160,0,240,0.19);
    background: -moz-linear-gradient(45deg, rgba(160,0,240,0.19) 0%, rgba(56,69,220,0.19) 14%, rgba(90,159,231,0.19) 35%, rgba(120,236,240,0.26) 53%, rgba(14,79,114,0.44) 96%, rgba(4,64,102,0.44) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(160,0,240,0.19)), color-stop(14%, rgba(56,69,220,0.19)), color-stop(35%, rgba(90,159,231,0.19)), color-stop(53%, rgba(120,236,240,0.26)), color-stop(96%, rgba(14,79,114,0.44)), color-stop(100%, rgba(4,64,102,0.44)));
    background: -webkit-linear-gradient(45deg, rgba(160,0,240,0.19) 0%, rgba(56,69,220,0.19) 14%, rgba(90,159,231,0.19) 35%, rgba(120,236,240,0.26) 53%, rgba(14,79,114,0.44) 96%, rgba(4,64,102,0.44) 100%);
    background: -o-linear-gradient(45deg, rgba(160,0,240,0.19) 0%, rgba(56,69,220,0.19) 14%, rgba(90,159,231,0.19) 35%, rgba(120,236,240,0.26) 53%, rgba(14,79,114,0.44) 96%, rgba(4,64,102,0.44) 100%);
    background: -ms-linear-gradient(45deg, rgba(160,0,240,0.19) 0%, rgba(56,69,220,0.19) 14%, rgba(90,159,231,0.19) 35%, rgba(120,236,240,0.26) 53%, rgba(14,79,114,0.44) 96%, rgba(4,64,102,0.44) 100%);
    background: linear-gradient(45deg, rgba(160,0,240,0.19) 0%, rgba(56,69,220,0.19) 14%, rgba(90,159,231,0.19) 35%, rgba(120,236,240,0.26) 53%, rgba(14,79,114,0.44) 96%, rgba(4,64,102,0.44) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a000f0', endColorstr='#044066', GradientType=1 );
    max-width: 600px;
    margin: 10px auto;
    border: 1px solid #ccc;
   
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    position: relative;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      position: relative;
      & > label {
        color: #333;
        width: 110px;
        min-width: 60px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type='checkbox'] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
      & > span {
        line-height: 32px;
        margin-left: 10px;
        color: #800;
        font-weight: bold;
      }
      & > button.remove {
        ${btnDanger};
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }
    button {
      margin: 0 10px;
      &[type='submit'] {
        ${btnPrimary};
      }
      &[type='button'] {
        ${btnDefault};
      }
    }
    .error {
      display: flex;
      font-weight: bold;
      color: #800;
      flex-flow: row nowrap;
      justify-content: center;
    }
    pre {
      position: relative;
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }
`
