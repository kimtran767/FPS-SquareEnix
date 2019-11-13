import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import gamesReducer from './game_reducer';
import newspaperReducer from './newspaper_reducer';

const entitiesReducers = combineReducers({
    users: usersReducer,
    games: gamesReducer,
    newspapers: newspaperReducer,
});

export default entitiesReducers;