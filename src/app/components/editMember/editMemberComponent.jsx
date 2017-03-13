import React from 'react';
import { browserHistory, Link } from 'react-router';

import MemberInfoForm from '../memberInfoForm/memberInfoFormContainer';

export default ({ team, updateMember }) => (
  <div className="container edit-member">
    <Link to="/"><span className="btn-corner glyphicon glyphicon-remove" /></Link>
    <h1>Edit team member</h1>
    <h4 className="subtitle">Edit contact info, location and role.</h4>
    <div className="divider"></div>
    <MemberInfoForm initialValues={team.members[team.editting]} onSubmit={ member => { updateMember(member); browserHistory.push('/') } } />
  </div>
)
