import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import ModalContainer from '../modal/modal';
import { Link } from 'react-router-dom';


const NavBar = () => (

    <div className='navbar-header'>
        <div className='welcome'>
          
          <div className='logo'>
            <Link to='/'>
              <img src="/Final Enix Logo.png" alt="logo" width='300' height='90'/>
            </Link>
          </div>

          <div className='navbar-link'>

              <div>
                <Link className='nav-btn' to={'/games'}>GAME</Link>
              </div>

              <div>
                <a className='nav-btn' href="https://square-enix-games.com/en_US/news">NEWS</a>   
              </div>

              <div>
                <a className='nav-btn' href="https://store.na.square-enix-games.com/en_US/">STORE</a>
              </div>
          </div>

    

        </div>
        <div className='nav-start-triangle'> </div>
        <div className='nav-end-triangle'></div>
        <div className='greeting-nav-link'>
          <div>
            <GreetingContainer />
          </div>
          
        </div>
        
    </div>
)

export default NavBar;