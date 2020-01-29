import React from 'react';


const CommentIndex = (props) => {

    const { comment} = props;
    
    return (
      <div className='comment-index'>
        <p>{comment.body}</p>
        <div className='comment-by'>
          <h3>
            By: {comment.author} &nbsp; &nbsp; &nbsp;
            <span className='comment-date'>{comment.date}</span>
          </h3>
        </div>
        <br />
        <br />
      </div>
    );
}

export default CommentIndex;