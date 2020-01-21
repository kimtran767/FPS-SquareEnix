import React from 'react';

const CommentIndex = (props) => {

    const { comment, user } = props;

    return (
        <li>
            {comment.body}
        </li>
    )
}

export default CommentIndex;