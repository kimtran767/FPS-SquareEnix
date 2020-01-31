import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import ModalContainer from './modal/modal';
import NavBar from '../components/navbar/navbar';
import GamesContainer from './games/games_container';
import GameShowContainer from './games/games_show_container';
import Footer from '../components/footer/footer';
import NewspapersContainer from '../components/newspapers/newspapers_container';
import NewspaperShowContainer from '../components/newspapers/newspaper_show_container';
import HomeContainer from '../components/home/home_container';
import NotificationContainer from '../components/notification/notify_container';
import SocialConnect from '../components/social_connect/social_connect'
import Testing from './testing';

const App = () => (
    
    <div className='app'>
            <ModalContainer />
            <NavBar />

            <Switch>
                <Route exact path='/test/' component={Testing} />
                <Route exact path='/notify/' component={NotificationContainer} />
                <Route exact path="/games/:gameId" component={GameShowContainer} />
                <Route exact path='/games' component={GamesContainer} />
                <Route exact path='/newspapers/:newspaperId' component={NewspaperShowContainer} />
                <Route exact path='/newspapers' component={NewspapersContainer} />
                <Route exact path='/' component={HomeContainer} />

            </Switch>

            <br/><br/><br/>
            <SocialConnect />
            <Footer />
    </div>
);


export default App;