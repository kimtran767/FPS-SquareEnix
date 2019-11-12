import React from "react";

import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util'

import GreetingContainer from '../components/greeting/greeting_container';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';

import ModalContainer from './modal/modal';
import NavBar from '../components/navbar/navbar';
import GamesContainer from './games/games_container';
import GameShowContainer from './games/games_show_container';
import Footer from '../components/footer/footer';
import SocialConnect from '../components/social_connect/social_connect';
import ArticlesContainer from '../components/articles/articles_container';


const App = () => (
    
    <div className='app'>
            <ModalContainer />
            <NavBar />

            <Switch>
                
                <Route exact path="/games/:gameId" component={GameShowContainer} />
                <Route exact path='/games' component={GamesContainer} />
                <Route exact path='/news' component={ArticlesContainer} />

            </Switch>

            <SocialConnect />
            <Footer />
    </div>
);


export default App;