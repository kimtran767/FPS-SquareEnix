import { connect } from 'react-redux';
import { fetchGame } from '../../actions/game_actions';
import GameShow from './game_show';

const mstp = (state, ownProps) => ({
    game: state.entities.games[ownProps.match.params.gameId]
});

const mdtp = (dispatch) => ({
    fetchGame: (gameId) => dispatch(fetchGame(gameId))
});

export default connect(mstp, mdtp)(GameShow);

