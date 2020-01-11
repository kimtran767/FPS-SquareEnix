import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className='navbar-header'>

    <Link className='nav-title' to='/'>FINAL ENIX</Link>

    {/* <ul className='nav-links'> */}
      <li><Link className='link' to='/games'>Games</Link></li>
      <li><Link className='link' to='/newspapers'>News</Link></li>
    {/* </ul> */}

    <div className='nav-greeting'>
      <GreetingContainer />
    </div>
  </div>
);

export default NavBar;