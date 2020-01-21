import React from 'react';

const CommentIndex = (props) => {

    const { comment} = props;
    
    return (
        <li>
            {comment.body}
            {comment.author}

        </li>
    )
}

export default CommentIndex;