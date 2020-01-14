import {
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions';
import { FETCH_NEWSPAPER } from '../actions/newspaper_actions';

const commentReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
      case FETCH_NEWSPAPER:
        return Object.assign(nextState, action.payload.comment);
      case RECEIVE_COMMENT:
        nextState[action.comment.id] = action.comment;
        return nextState;
      // case FETCH_NEWSPAPER:
      //     return action.payload.comment
      case REMOVE_COMMENT:
        delete nextState[action.commentId];
        return nextState;
      default:
        return state;
    }
};

export default commentReducer;