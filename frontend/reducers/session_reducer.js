import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    // RECEIVE_ERRORS
} from '../actions/sessions_action';

const _nullUser = {
    id: null,
};

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return Object.assign({}, { id: action.user.id });
            let user = Object.assign({}, { id: action.user.id });
            return user;
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        // case RECEIVE_ERRORS:
        //     return action.errors;
        default:
            return state;
    }
};


export default sessionReducer;