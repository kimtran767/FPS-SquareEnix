import {
    RECEIVE_COMMENT,
    REMOVE_COMMENT,
    RECEIVE_ALL_COMMENT
} from '../actions/comment_actions';
import { FETCH_NEWSPAPER } from '../actions/newspaper_actions';

const commentReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
      case FETCH_NEWSPAPER:
        return Object.assign(nextState, action.payload.comments);
      case RECEIVE_ALL_COMMENT:
        return Object.assign({}, state, action.comments)
      case RECEIVE_COMMENT:
        nextState[action.comment.id] = action.comment;
        return nextState;
      case REMOVE_COMMENT:
        delete nextState[action.commentId];
        return nextState;
      default:
        return state;
    }
};

export default commentReducer;