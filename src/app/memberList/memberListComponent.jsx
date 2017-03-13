import React from 'react';
import { browserHistory } from 'react-router';

export default ({ teamMembers }) => {
  return (
    <div className="container member-list">
      <span className="add-member glyphicon glyphicon-plus" onClick={ () => browserHistory.push('/addMember') } />
      <h1>Team members</h1>
      <h3>You have { teamMembers.length } team members.</h3>
      { teamMembers.map( member => (
        <div className="member-details" key={ member.id }>
          <img className="member-photo" src={ member.photo || "../static/assets/defaultUser.png"} />
          <div className="member-info">
            <h4>{ member.name } { member.role === 'Admin' ? '(admin)' : null }</h4>
            <p>{ member.phone }</p>
            <p>{ member.email }</p>
          </div>
        </div>)
      )}
    </div>
  )
}
