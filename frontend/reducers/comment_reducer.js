import {
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions';
import { FETCH_NEWSPAPER } from '../actions/newspaper_actions';

const commentReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_COMMENT:
            let comment =  Object.assign({}, nextState, {[action.comment.id]: action.comment})
            return comment;
        // case FETCH_NEWSPAPER:
        //     return action.payload.comment
        case FETCH_NEWSPAPER: 
            return Object.assign({}, state, action.payload.comment)
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return state;
    }
};

export default commentReducer;