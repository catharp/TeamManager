import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Member List</Link>
          </li>
          <li>
            <Link to="/addMember">Add Member</Link>
          </li>
          <li>
            <Link to="/editMember">Edit Member</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
