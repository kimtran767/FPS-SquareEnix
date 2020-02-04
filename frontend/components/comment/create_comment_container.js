import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateForm from './create_form';
import { createComment } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';

const mstp = (state, ownProps) => { 
    const news = ownProps.match.params.newspaperId;
    return {
      comment: {
        body: "",
        newsId: news,
        user_id: state.session.id
      },
      formType: "Post Comment",
      userId: state.session.id,
      errors: state.errors.comment
    };
};

const mdtp = (dispatch) => ({
    createComment: comment => dispatch(createComment(comment)),
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    openModal: modal => dispatch(openModal(modal))
});

let createContainer = connect(mstp, mdtp)(CreateForm)

export default withRouter(createContainer);