import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';
import NotificationContainer from '../notification/notify_container';

const NavBar = () => (
  <div className='navbar-header'>
    <Link className='nav-title' to='/'>
      FINAL ENIX
    </Link>

    <ul className='nav-links'>
      <li>
        <Link className='link' to='/games'>
          Games
        </Link>
      </li>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <li>
        <Link className='link' to='/newspapers'>
          News
        </Link>
      </li>
    </ul>
     <div className='nav-notify'>
      <NotificationContainer />

     </div>

    <div className='nav-greeting'>
      <GreetingContainer />
    </div>
  </div>
);

export default NavBar;