import { connect } from 'react-redux';
import { fetchNewspapers } from '../../actions/newspaper_actions';
import NewspapersIndex from './newspapers_index';

const mstp = (state) => ({
    newspapers: Object.values(state.entities.newspapers)
    
});

const mdtp = (dispatch) => ({
    fetchNewspapers: () => dispatch(fetchNewspapers())
});

export default connect(mstp, mdtp)(NewspapersIndex)
