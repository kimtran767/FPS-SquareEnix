import { ERRORS_COMMENT } from "../actions/comment_actions";


const commentErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case ERRORS_COMMENT:
      return action.errors;
    default:
      return state;
  }
};

export default commentErrorsReducer;