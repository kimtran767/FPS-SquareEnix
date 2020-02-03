import { connect } from 'react-redux';
import UpdateFrom from './update_form';
import { updateComment, fetchComment } from '../../actions/comment_actions';


const mstp = (state, ownProps) => {
    // const user = ownProps.match.params.userId;

    return {
        comment: state.entities.comments[ownProps.match.params.comment.id];
    }
};

const mdtp = dispatch => ({
    updateComment: comment => dispatch(updateComment(comment)),
    fetchComment: commentId => dispatch(fetchComment(commentId))
});

export default connect(mstp, mdtp)(UpdateForm);