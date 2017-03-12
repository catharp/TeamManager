import React from 'react';

export default ({ teamMembers }) => {
  return (
    <div className="container member-list">
      <h1>Team members</h1>
      <h3>You have { teamMembers.length } team members.</h3>
      { teamMembers.map(member => (
        <div className="member-details" key={ member.id }>
          <h4>{ member.name } { member.role === 'Admin' ? '(admin)' : null }</h4>
          <p>{ member.phone }</p>
          <p>{ member.email }</p>
        </div>)
      )}
    </div>
  )
}
