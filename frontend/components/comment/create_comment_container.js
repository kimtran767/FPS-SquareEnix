import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateForm from './create_form';
import { createComment, 
        fetchComment,
        deleteComment
     } from '../../actions/comment_actions';

const mstp = (state, ownProps) => { 
    const news = ownProps.match.params.newspaperId;
    return ({
        comment: {
            body: '',
            newsId: news
        },
        formtype: 'Post Comment'

    })
};

const mdtp = (dispatch) => ({
    createComment: comment => dispatch(createComment(comment)),
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
});

let createContainer = connect(mstp, mdtp)(CreateForm)

export default withRouter(createContainer);