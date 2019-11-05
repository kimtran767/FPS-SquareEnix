import { combineReducers } from 'redux';
import errorsReducers from './errors_reducer';
import entitiesReducers from './entities_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducers,
    session: sessionReducer,
    errors: errorsReducers
});

export default rootReducer;