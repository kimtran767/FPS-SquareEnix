import React from "react";

import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'

import GreetingContainer from '../components/greeting/greeting_container';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';

import ModalContainer from './modal/modal';
import NavBar from '../components/navbar/navbar';


const App = () => (
    
    <div className='grid'>
        <div className='header-navbar'>
            <header>
                <NavBar />  
                <ModalContainer />
            </header>
        </div>
        <div className='games-ads'>games-ads</div>
        <div className='games'>games</div>
        <div className='news'>news</div>
        <div className='social-connect'>social-connect</div>
        <div className='about-us'>about us information</div>
    </div>
);

export default App;