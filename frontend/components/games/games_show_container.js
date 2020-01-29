import { connect } from 'react-redux';
import { fetchGame } from '../../actions/game_actions';
import GameShow from './game_show';
import { closeModal } from '../../actions/modal_actions';

const mstp = (state, ownProps) => ({
    game: state.entities.games[ownProps.match.params.gameId]
});

const mdtp = (dispatch) => ({
    fetchGame: (gameId) => dispatch(fetchGame(gameId)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mstp, mdtp)(GameShow);

