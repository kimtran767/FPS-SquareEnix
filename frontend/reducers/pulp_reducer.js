import { FETCH_NEWSPAPER } from '../actions/newspaper_actions';

const pulpReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case FETCH_NEWSPAPER:
            return Object.assign({}, state, action.payload.pulps)
        default: 
            return state;
    }
}

export default pulpReducer;