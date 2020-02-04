import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_ALL_COMMENT = 'RECEIVE_ALL_COMMENT';
export const ERRORS_COMMENT = 'ERRORS_COMMENT';

const receiveAllComment = (comments) => {
    return {
        type: RECEIVE_ALL_COMMENT,
        comments
    }
}

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
});

const errorComment = errors => ({
    type: ERRORS_COMMENT,
    errors
})

export const fetchAllComment = () => dispatch => (
    CommentApiUtil.fetchAllComment()
        .then(comments => dispatch(receiveAllComment(comments)))
)

export const fetchComment = (comment) => dispatch =>  (
    CommentApiUtil.fetchComment(comment.id)
    .then( comment => dispatch(receiveComment(comment)))
);

export const createComment = (comment) => dispatch => {
    return (
    CommentApiUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment))),
    err => dispatch(errorComment(err.responseJSON))
    )};

export const updateComment = (comment) => dispatch => (
    CommentApiUtil.updateComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
);

export const deleteComment = (commentId) => dispatch => (
    CommentApiUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
);