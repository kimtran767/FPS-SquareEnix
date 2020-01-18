import { connect } from 'react-redux';
import { fetchNewspaper } from '../../actions/newspaper_actions';
import NewspaperShow from './newspaper_showpage';
import { fetchAllComment } from '../../actions/comment_actions';

const mstp = (state, ownProps) => {

    return ({
        newspaper: state.entities.newspapers[ownProps.match.params.newspaperId],
        pulp: Object.values(state.entities.pulps),
        comment: Object.values(state.entities.comments),
        user: Object.values(state.entities.users) 
    })
};

const mdtp = dispatch => ({
    fetchNewspaper: newspaperId => dispatch(fetchNewspaper(newspaperId)),
    fetchAllComment: () => dispatch(fetchAllComment())
});

export default connect(mstp, mdtp)(NewspaperShow);