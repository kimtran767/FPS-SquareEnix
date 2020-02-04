import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UpdateForm from './update_form';
import { updateComment, fetchComment } from '../../actions/comment_actions';



const mstp = (state, ownProps) => {
    
    debugger
    return {
        comment: state.entities.comments[ownProps.match.params.comment.id],
    }
};

const mdtp = dispatch => ({
    updateComment: comment => dispatch(updateComment(comment)),
    fetchComment: commentId => dispatch(fetchComment(commentId))
});

export default withRouter(connect(mstp, mdtp)(UpdateForm))