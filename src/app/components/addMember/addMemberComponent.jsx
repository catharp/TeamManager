import React from 'react';
import { browserHistory } from 'react-router';

import MemberInfoForm from '../../forms/memberInfoForm';

export default ({ addMember }) => (
  <div className="container add-member">
    <span className="btn-corner glyphicon glyphicon-remove" onClick={ () => browserHistory.push('/') } />
    <h1>Add a team member</h1>
    <h3 className="subtitle">Set email, location and role.</h3>
    <div className="divider"></div>
    <MemberInfoForm onSubmit={ member => { addMember(member); browserHistory.push('/') } } />
  </div>
)
