import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import ModalContainer from '../modal/modal';


const NavBar = () => (

    <div className='nav-bar-header'>
        <div className='h1-welcome'><h1>Final Enix</h1></div>
        <div className='modal-container'> <ModalContainer /> </div>
        <div><GreetingContainer /></div>

        <div id='greeting-nav-link'>
            <a className='nav-btn' href="https://square-enix-games.com/en_US/games">GAME</a>
            <a className='nav-btn' href="https://square-enix-games.com/en_US/news">NEWS</a>
            <a className='nav-btn' href="https://store.na.square-enix-games.com/en_US/">STORE</a>
        </div>
    </div>
)

export default NavBar;