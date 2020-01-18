import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_ALL_COMMENT = 'RECEIVE_ALL_COMMENT';

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

export const fetchAllComment = () => dispatch => (
    CommentApiUtil.fetchAllComment()
        .then(comments => dispatch(receiveAllComment(comments)))
)

export const fetchComment = (commentId) => dispatch =>  (
    CommentApiUtil.fetchComment(commentId)
    .then( comment => dispatch(receiveComment(comment)))
);

export const createComment = (comment) => dispatch => (
    CommentApiUtil.createComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
);

export const updateComment = (comment) => dispatch => (
    CommentApiUtil.updateComment(comment)
    .then((comment) => dispatch(receiveComment(comment)))
);

export const deleteComment = (commentId) => dispatch => (
    CommentApiUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
);