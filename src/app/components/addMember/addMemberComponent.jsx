import React from 'react';
import { browserHistory } from 'react-router';

export default () => (
  <div className="container add-member">
    <span className="btn-corner glyphicon glyphicon-remove" onClick={ () => browserHistory.push('/') } />
    <h1>Add a team member</h1>
    <h3>Set email, location and role.</h3>
  </div>
)
