import { connect } from 'react-redux';
import Home from './home';
import { fetchGames } from '../../actions/game_actions';
import { fetchNewspapers } from '../../actions/newspaper_actions';
import { closeModal } from '../../actions/modal_actions';

const mstp = (state) => ({
    games: Object.values(state.entities.games),
    news: Object.values(state.entities.newspapers)
});

const mdtp = (dispatch) => ({
    fetchGames: () => dispatch(fetchGames()),
    fetchNewspapers: () => dispatch(fetchNewspapers()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mstp, mdtp)(Home)