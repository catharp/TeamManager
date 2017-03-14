import React from 'react';
import { Link } from 'react-router';

import MemberInfoForm from '../../forms/memberInfoForm';

export default ({ updateMember }) => (
  <div className="container add-member">
    <Link to="/"><span className="btn-corner glyphicon glyphicon-remove" /></Link>
    <h1>Add a team member</h1>
    <h4 className="subtitle">Set email, location and role.</h4>
    <div className="divider"></div>
    <MemberInfoForm editting={false} initialValues={{role: 'regular'}} onSubmit={updateMember} />
  </div>
)
