import * as GameApiUtil from '../util/game_api_util';

export const RECEIVE_ALL_GAMES = 'RECEIVE_ALL_GAMES';
export const RECEIVE_GAME = 'RECEIVE_GAME';

const receiveAllGames = (games) => {
    return {
    type: RECEIVE_ALL_GAMES,
    games
}};

const receiveGame = (game) => ({
    type: RECEIVE_GAME,
    game
});

export const fetchGames = () => dispatch => ( 
    GameApiUtil.fetchGames()
    .then(games => dispatch(receiveAllGames(games)))
);

export const fetchGame = (gameId) => dispatch => (
    GameApiUtil.fetchGame(gameId)
    .then (game => dispatch(receiveGame(game)))
)