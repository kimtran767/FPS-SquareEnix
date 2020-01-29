import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/sessions_action';


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

export default sessionErrorsReducer;