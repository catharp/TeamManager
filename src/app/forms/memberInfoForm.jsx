import React from 'react';
import { browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';

const MemberInfoForm = ({ editting, deleteMember, handleSubmit }) => (
  <form onSubmit={ editting, deleteMember, handleSubmit }>
    <h3>Info</h3>
    <Field name="firstName" component="input" type="text" />
    <Field name="lastName" component="input" type="text" />
    <Field name="email" component="input" type="text" />
    <Field name="phone" component="input" type="text" />
    <h3>Role</h3>
    <label className="list-item">
      <Field name="role" component="input" type="radio" value="regular" />
      <span>Regular - Can't delete members</span>
    </label>
    <label className="list-item">
      <Field name="role" component="input" type="radio" value="admin" />
      <span>Admin - Can delete members</span>
    </label>
    { editting ? <button className="btn-delete" type="button" onClick={ () => {deleteMember(); browserHistory.push('/') } }>Delete Member</button> : null }
    <button type="submit">Save</button>
  </form>
)

export default reduxForm({
  form: 'MemberInfo'
})(MemberInfoForm);
