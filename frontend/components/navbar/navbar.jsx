import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';


const NavBar = () => (

    <div className='navbar-header'>

        <div className='welcome'>
 
            <Link to='/'>FINAL ENIX</Link>

        </div>

        <div className='navbar-link'>

          <Link className='nav-btn' to={'/games'}>GAME</Link>
          &nbsp;&nbsp;&nbsp;
          <Link className='nav-btn' to={'/newspapers'}>NEWS</Link>
          &nbsp;&nbsp;&nbsp;
          <a className='nav-btn' href="https://store.na.square-enix-games.com/en_US/">STORE</a>

          <div className='greeting-nav-link'>

            <div>
              <GreetingContainer />
            </div>

          </div>
        </div>

        
    </div>
)

export default NavBar;