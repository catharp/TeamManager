import React from 'react';
import { Link } from 'react-router';

export default ({ team, setEditting }) => (
  <div className="container member-list">
    <Link to="/addMember"><span className="btn-corner glyphicon glyphicon-plus" /></Link>
    <h1>Team members</h1>
    <h4 className="subtitle">You have { team.members.length } team members.</h4>
    <div className="divider"></div>
    { team.members.map( (member, index) => (
      <Link key={ member.firstName + member.lastName } onClick={ () => setEditting(index) } to="/editMember">
        <div className="list-item">
          <img className="member-photo" src={ member.photo || "../../static/assets/defaultUser.png"} />
          <div className="member-info">
            <h4>{ member.firstName } { member.lastName } { member.role === 'Admin' ? '(admin)' : null }</h4>
            <p>{ member.phone }</p>
            <p>{ member.email }</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
)
