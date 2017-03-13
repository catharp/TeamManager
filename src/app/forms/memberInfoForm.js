import React from 'react';
import { Field, reduxForm } from 'redux-form';

const MemberInfoForm = ({ handleSubmit }) => (
  <form onSubmit={ handleSubmit }>
    <h3>Info</h3>
    <Field name="firstName" component="input" type="text" />
    <Field name="lastName" component="input" type="text" />
    <Field name="email" component="input" type="text" />
    <Field name="phone" component="input" type="text" />
    <h3>Role</h3>
    <p className="list-item"><Field name="role" component="input" type="radio" value="regular" />Regular - Can't delete members</p>
    <p className="list-item"><Field name="role" component="input" type="radio" value="admin" />Admin - Can delete members</p>
    <button type="submit">Save</button>
  </form>
)

export default reduxForm({
  form: 'addMember'
})(MemberInfoForm);
