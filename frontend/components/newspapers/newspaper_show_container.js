import { connect } from 'react-redux';
import { fetchNewspaper } from '../../actions/newspaper_actions';
import NewspaperShow from './newspaper_showpage';
import { fetchAllComment } from '../../actions/comment_actions';

const mstp = (state, ownProps) => {
    // let comments = Object.values(state.entities.comments);
    // let commentArea = [];

    return ({
        newspaper: state.entities.newspapers[ownProps.match.params.newspaperId],
        pulp: Object.values(state.entities.pulps),
        comment: Object.values(state.entities.comments),
        // comment: commentArea,
        // comment: state.entities.comments[ownProps.match.params.newspaperId],
        user: Object.values(state.entities.users) 
    })
};

const mdtp = dispatch => ({
    fetchNewspaper: newspaperId => dispatch(fetchNewspaper(newspaperId)),
    fetchAllComment: () => dispatch(fetchAllComment())
});

export default connect(mstp, mdtp)(NewspaperShow);