import React from 'react';
import { browserHistory } from 'react-router';

export default ({ team }) => (
  <div className="container member-list">
    <span className="btn-corner glyphicon glyphicon-plus" onClick={ () => browserHistory.push('/addMember') } />
    <h1>Team members</h1>
    <h3 className="subtitle">You have { team.length } team members.</h3>
    <div className="divider"></div>
    { team.map( member => (
      <div className="list-item" key={ member.firstName + member.lastName }>
        <img className="member-photo" src={ member.photo || "../../static/assets/defaultUser.png"} />
        <div className="member-info">
          <h4>{ member.firstName } { member.lastName } { member.role === 'Admin' ? '(admin)' : null }</h4>
          <p>{ member.phone }</p>
          <p>{ member.email }</p>
        </div>
      </div>
    ))}
  </div>
)
