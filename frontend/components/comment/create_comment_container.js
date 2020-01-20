import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateForm from './create_form';
import { createComment, 
        fetchComment,
        deleteComment
     } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';

const mstp = (state, ownProps) => { 
    // debugger
    const news = ownProps.match.params.newspaperId;
    return ({
        comment: {
            body: '',
            newsId: news
        },
        formType: 'Post Comment',
        userId: state.session.id,
        // user: state.entities.users[state.session.id].username
    })
};

const mdtp = (dispatch) => ({
    createComment: comment => dispatch(createComment(comment)),
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    openModal: modal => dispatch(openModal(modal))
});

let createContainer = connect(mstp, mdtp)(CreateForm)

export default withRouter(createContainer);