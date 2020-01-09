import React from 'react';

const CommentIndex = props => {

    let { comment, news_id } = props;

    return (
        <li>
            {comment.body}
        </li>

    )

};

export default CommentIndex;