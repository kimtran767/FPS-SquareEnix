import React from 'react';

const CommentIndex = props => {
    
    return (
        <li>
            {props.comment.body}
        </li>

    )

};

export default CommentIndex;