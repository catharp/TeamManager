import React from 'react';
import { browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';

const AddMember = ({ handleSubmit }) => (
  <div className="container add-member">
    <span className="btn-corner glyphicon glyphicon-remove" onClick={ () => browserHistory.push('/') } />
    <h1>Add a team member</h1>
    <h3 className="subtitle">Set email, location and role.</h3>
    <div className="divider"></div>
    <h3>Info</h3>
    <form onSubmit={ handleSubmit }>
      <Field name="firstName" component="input" type="text" />
      <Field name="lastName" component="input" type="text" />
      <Field name="email" component="input" type="text" />
      <Field name="phone" component="input" type="text" />
      <h3>Role</h3>
      <p className="list-item"><Field name="role" component="input" type="radio" value="regular" />Regular - Can't delete members</p>
      <p className="list-item"><Field name="role" component="input" type="radio" value="admin" />Admin - Can delete members</p>
      <button type="submit">Save</button>
    </form>
  </div>
)

export default reduxForm({
  form: 'addMember',
  initialValues: {role: 'regular'}
})(AddMember);
