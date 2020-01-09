import { connect } from 'react-redux';
import { fetchNewspaper } from '../../actions/newspaper_actions';
import NewspaperShow from './newspaper_showpage';
// import { fetchComment } from '../../actions/comment_actions'


const mstp = (state, ownProps) => {

    return ({
        newspaper: state.entities.newspapers[ownProps.match.params.newspaperId],
        pulp: Object.values(state.entities.pulps),
        comment: Object.values(state.entities.comments)

    })
};

const mdtp = dispatch => ({
    fetchNewspaper: newspaperId => dispatch(fetchNewspaper(newspaperId)),
    // fetchComment: commentId => dispatch(fetchComment(commentId))
});

export default connect(mstp, mdtp)(NewspaperShow);