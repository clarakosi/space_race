import React from 'react';


const ShowRaceCard = React.createClass({
    render() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>showRaceCard</title>
          <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/fonts/font-awesome.min.css" />
          <link rel="stylesheet" href="assets/css/styles.css" />
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
            <div className="col-auto"><input type="text" placeholder="Race Name" /></div>
            <h5 className="text-left bg-info" style={{margin: 10}}>Add a Team</h5>
            <div className="row my-auto visible" style={{margin: '-4px'}}>
              <div className="col-auto m-auto"><select><optgroup label="Select Team"><option value="Slytherin">Team 1</option><option value="Griffyndor">Team2</option><option value="Hufflepuff">Team 3</option><option value="Ravenclaw">Team 4</option></optgroup></select></div>
              <div className="col-auto m-auto"><input type="color" /></div>
              <div className="col-auto m-auto"><select><optgroup label="Select Spaceship"><option value={12} selected>This is item 1</option><option value={13}>This is item 2</option><option value={14}>This is item 3</option></optgroup></select></div>
              <div className="col"><button className="btn btn-primary btn-lg float-right" type="submit" style={{fontSize: 10, padding: 0, width: 55, margin: '15px 12px', height: 25}}>ADD</button></div>
            </div>
            <div className="row no-gutters" style={{width: 1000, margin: 0}}>
              <div className="col" style={{margin: 10}}>
                <h3 className="text-left bg-info align-content-center m-auto">Teams</h3>
              </div>
            </div>
            <div className="row m-auto" style={{width: 1000, margin: 0}}>
              <div className="col-auto justify-content-center align-content-center" style={{margin: 10}}><input className="form-control-plaintext order-1" type="text" defaultValue="team name" readOnly style={{fontSize: 20}} /></div>
              <div className="col-auto" style={{margin: 10}}><input className="form-control-plaintext order-1" type="text" defaultValue="Color(chosen from above)" readOnly style={{fontSize: 15, padding: 0, margin: 10}} /></div>
              <div className="col-auto" style={{margin: 10}}><button className="btn btn-primary" type="button"><i className="fa fa-trash-o" /></button></div>
              <div className="col-auto align-self-center"><i className="fa fa-star d-table-cell d-inline-flex justify-content-center align-items-center m-auto" /></div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col m-auto"><a className="btn btn-outline-primary" role="button" href="#Questions" style={{width: 225}}>On To Questions &nbsp;<i className="fa fa-space-shuttle" /></a></div>
                <div className="col" />
              </div>
            </div>
          </div>
        </div>
      );
    }
  });