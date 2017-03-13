import React from 'react';
import { browserHistory } from 'react-router';

export default ({ team, setEditting }) => (
  <div className="container member-list">
    <span className="btn-corner glyphicon glyphicon-plus" onClick={ () => browserHistory.push('/addMember') } />
    <h1>Team members</h1>
    <h3 className="subtitle">You have { team.members.length } team members.</h3>
    <div className="divider"></div>
    { team.members.map( (member, index) => (
      <div className="list-item" key={ member.firstName + member.lastName } onClick= { () => { setEditting(index); browserHistory.push('/editMember') } }>
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
