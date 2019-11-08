import { connect } from 'react-redux';
import GamesIndex from './games_index';
import { fetchGames } from '../../actions/game_actions'

const mSTP = (state) => ({
    games: Object.values(state.entities.games),
});

const mDTP = (dispatch) => ({
    fetchGames: () => dispatch(fetchGames())
});

export default connect(mSTP, mDTP)(GamesIndex);