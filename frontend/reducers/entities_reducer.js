import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import gamesReducer from './game_reducer';
import articleReducer from './article_reducer';

const entitiesReducers = combineReducers({
    users: usersReducer,
    games: gamesReducer,
    articles: articleReducer,
});

export default entitiesReducers;