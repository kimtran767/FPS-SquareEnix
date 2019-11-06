import { combineReducers } from 'redux';
import errorsReducers from './errors_reducer';
import entitiesReducers from './entities_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducers,
    session: sessionReducer,
    errors: errorsReducers,
    ui: uiReducer,
});

export default rootReducer;