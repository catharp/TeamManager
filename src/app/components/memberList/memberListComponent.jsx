import React from 'react';
import { browserHistory } from 'react-router';

export default ({ teamMembers }) => (
  <div className="container member-list">
    <span className="btn-corner glyphicon glyphicon-plus" onClick={ () => browserHistory.push('/addMember') } />
    <h1>Team members</h1>
    <h3>You have { teamMembers.length } team members.</h3>
    <div className="divider"></div>
    { Object.keys(teamMembers).map( (memberId, i, arr, member = teamMembers[memberId]) => (
      <div className="list-item" key={ memberId }>
        <img className="member-photo" src={ member.photo || "../../static/assets/defaultUser.png"} />
        <div className="member-info">
          <h4>{ member.name } { member.role === 'Admin' ? '(admin)' : null }</h4>
          <p>{ member.phone }</p>
          <p>{ member.email }</p>
        </div>
      </div>
    ))}
  </div>
)
