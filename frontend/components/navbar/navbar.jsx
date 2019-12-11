import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';



const NavBar = () => (
  <div className='navbar-header'>
    <h1>FINAL ENIX</h1>

    <ul className='nav-links'>
     <li><Link to='/games'>GAME</Link></li>
     <li><Link to='/newspapers'>NEWS</Link></li>
     <li><Link to='/'>STORE</Link></li>

    </ul>

    <div>

    </div>
  </div>
);

export default NavBar;