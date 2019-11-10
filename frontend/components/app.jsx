import React from "react";

import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'

import GreetingContainer from '../components/greeting/greeting_container';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';

import ModalContainer from './modal/modal';
import NavBar from '../components/navbar/navbar';
import GamesContainer from './games/games_container';


const App = () => (
    
    <div className='app'>
            <ModalContainer />
            <header>
                <NavBar />
            </header>  

            <div className='body'>
                <Route path='/games' component={GamesContainer} />
                {/* <Route path='/navbar' component={NavBar} /> */}
                
            </div>

        <div className='social-media'>SOCIAL MEDIA INFOMATION</div>

            <footer className='footer'>
                ABOUT US FOOTER INFORMATION
            </footer>
    </div>
);


export default App;