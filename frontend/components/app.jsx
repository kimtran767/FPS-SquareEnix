import React from "react";

import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'

import GreetingContainer from '../components/greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


const App = () => (
    <div>
        <header>
            <h1>Welcome to Final Enix</h1>
    
            <GreetingContainer />

        </header>

        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
    </div>
);

export default App;