import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import gamesReducer from './game_reducer';

const entitiesReducers = combineReducers({
    users: usersReducer,
    games: gamesReducer,
});

export default entitiesReducers;