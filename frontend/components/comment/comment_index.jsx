import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndex = (props) => {

    const { comment, currentUser, openModal } = props;

    const editButton = currentUser === comment.user_id ? (
      <button >Edit</button>
    ) : null;
    
    return (
      <div className='comment-index'>
        <p>{comment.body}</p>

        <div className='comment-by'>
          <h3>
            By: {comment.author} &nbsp; &nbsp; &nbsp;
            <span className='comment-date'>{comment.date}</span>
          </h3>
        </div>

        
        <Link to={`/newspapers/newspaperId/comments/${comment.id}`}>Edit</Link>
        <br />
        <br />
        <div>
          {/* {editButton} */}
        </div>
      </div>
    );
}

export default CommentIndex;