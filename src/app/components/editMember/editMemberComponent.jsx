import React from 'react';
import { browserHistory, Link } from 'react-router';

import MemberInfoForm from '../../forms/memberInfoForm';

export default ({ updateMember }) => (
  <div className="container edit-member">
    <Link to="/"><span className="btn-corner glyphicon glyphicon-remove" /></Link>
    <h1>Edit team member</h1>
    <h4 className="subtitle">Edit contact info, location and role.</h4>
    <div className="divider"></div>
    <MemberInfoForm onSubmit={ member => { updateMember(member); browserHistory.push('/') } } />
  </div>
)
