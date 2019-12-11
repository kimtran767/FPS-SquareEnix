import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';



const NavBar = () => (
  <div className='navbar-header'>
    <h1 className='title'>FINAL ENIX</h1> 

    <ul className='nav-links'>
     <li><Link to='/games'>Games</Link></li>
     <li><Link to='/newspapers'>News</Link></li>
     <li><Link to='/'>Store</Link></li>

    </ul>

    <div>

    </div>
  </div>
);

export default NavBar;