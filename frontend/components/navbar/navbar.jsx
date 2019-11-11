import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import ModalContainer from '../modal/modal';
import { Link } from 'react-router-dom';


const NavBar = () => (

  <div className='navbar-header'>
    <div className='navbar-black-top'></div>
    <div className='navbar-white'>
      <div className='navbar-name'>
        FINAL ENIX
      </div>

      <div className='navbar-link'>

        <div>
          <Link className='nav-btn' to={'/games'}>GAME</Link>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
          <a className='nav-btn' href="https://square-enix-games.com/en_US/news">NEWS</a>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
          <a className='nav-btn' href="https://store.na.square-enix-games.com/en_US/">STORE</a>
        </div>

      </div>

    </div>

    <div className='navbar-black-bot'></div>
  </div>
)

export default NavBar;

