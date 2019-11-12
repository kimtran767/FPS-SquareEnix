import {
    FETCH_ARTICLES,
    FETCH_ARTICLE
} from '../actions/article_actions';

const articleReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case FETCH_ARTICLES:
            return Object.assign({}, state, action.articles);
        case FETCH_ARTICLE:
            return Object.assign({}, state, {[action.article.id]: action.article})
        default:
            return state;
    }
};

export default articleReducer;