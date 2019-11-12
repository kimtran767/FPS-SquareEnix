import { connect } from 'react-redux';
import GamesIndex from './games_index';
import { fetchGames } from '../../actions/game_actions'

const mstp= (state) => ({
    games: Object.values(state.entities.games),
});

const mdtp= (dispatch) => ({
    fetchGames: () => dispatch(fetchGames())
});

export default connect(mstp, mdtp)(GamesIndex);