import React from 'react';

const CommentIndex = props => {

    let { comment } = props;

    return (
        <li>
            {comment.body}
        </li>
    )

};

export default CommentIndex;