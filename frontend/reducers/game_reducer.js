import {
    RECEIVE_ALL_GAMES,
    RECEIVE_GAME
} from '../actions/game_actions';


const gamesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_ALL_GAMES:
            return Object.assign({}, state, action.games)
        case RECEIVE_GAME:
            return Object.assign({}, state, {[action.game.id]: action.game});
        default:
            return state;
    }
}

export default gamesReducer;
