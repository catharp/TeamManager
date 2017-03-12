import React from 'react';

export default ({ teamMembers }) => {
  return (
    <div className="container member-list">
      { teamMembers.map(member => (<div key={ member.id }>{ member.name }</div>))}
    </div>
  )
}
