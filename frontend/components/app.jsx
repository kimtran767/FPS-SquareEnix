import React from "react";

import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'

import GreetingContainer from '../components/greeting/greeting_container';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';

import ModalContainer from './modal/modal';
import NavBar from '../components/navbar/navbar';


const App = () => (
    <div>
        <div className='nav-bar-app'>
            <header>
                
                <NavBar />  

            </header>
        </div>
        {/* <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
    </div>
);

export default App;