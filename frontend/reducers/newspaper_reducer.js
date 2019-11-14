import {
    FETCH_NEWSPAPERS,
    FETCH_NEWSPAPER
} from '../actions/newspaper_actions';

const newspaperReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case FETCH_NEWSPAPERS:
            return Object.assign({}, state, action.newspapers);
        case FETCH_NEWSPAPER:
            return Object.assign({}, state, {[action.payload.newspaper.id]: action.payload.newspaper})
        default:
            return state;
    }
};

export default newspaperReducer;