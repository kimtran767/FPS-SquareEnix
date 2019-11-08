import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import ModalContainer from '../modal/modal';
// import { Route }


const NavBar = () => (

    <div className='navbar-header'>
        <div className='welcome'>
          
          <div>
            <h1>Final Enix</h1>
          </div>

          <div className='navbar-link'>
              <div>
                <a className='nav-btn' href="https://square-enix-games.com/en_US/games">GAME</a>
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