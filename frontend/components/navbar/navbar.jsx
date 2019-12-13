import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';



const NavBar = () => (
  <div className='navbar-header'>
<<<<<<< HEAD

    <h1 className='title'>FINAL ENIX</h1> 

    <ul className='nav-links'>
      <li><Link className='link' to='/games'>Games</Link></li>
      <li><Link className='link' to='/newspapers'>News</Link></li>
      <li><Link className='link' to='/'>Store</Link></li>
    </ul>

    <div className='nav-greeting'>
        <GreetingContainer />
=======
    <h1 className='title'>FINAL ENIX</h1> 

    <ul className='nav-links'>
     <li><Link className='link' to='/games'>Games</Link></li>
     <li><Link className='link' to='/newspapers'>News</Link></li>
     <li><Link className='link' to='/'>Store</Link></li>

    </ul>

    <div>

>>>>>>> 659be86915825915a81828d318a8c8a958fe41d1
    </div>
  </div>
);

export default NavBar;