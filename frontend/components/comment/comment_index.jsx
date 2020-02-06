import React from 'react';

class CommentIndex extends React.Component {

  constructor(props) {
      super(props);
      // this.state = this.props.comment;
      this.state = Object.assign(this.props.comment, {refreshChild: false})
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.editComment = this.editComment.bind(this);
      this.cancelComment = this.cancelComment.bind(this);

    }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  // refreshUpdate() {
  //   this.setState({ refreshChild: undefined });
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateComment(this.state);
    document.getElementById('update-comment').classList.add('hidden');

  }

  handleDelete(e) {
    debugger
    e.preventDefault();
    this.props.deleteComment(this.state)
    document.getElementById('update-comment').classList.add('hidden'); 
    this.forceUpdate();   
  }

  editComment(e) {
    e.preventDefault();
    document.getElementById('update-comment').classList.remove('hidden');
    document.getElementById('to-cancel').classList.remove('hidden');
    document.getElementById('to-edit').classList.add('hidden');
  }

  cancelComment(e) {
    e.preventDefault();
    document.getElementById('update-comment').classList.add('hidden');
    document.getElementById('to-cancel').classList.add('hidden');
    document.getElementById('to-edit').classList.remove('hidden');
  }

  render() {
    const { comment, currentUser } = this.props;

    const editButton =
      currentUser === comment.user_id ? (
        <div>
          <button id='to-edit' className='comment-edit' onClick={this.editComment}>Edit</button> 
          <button id='to-cancel' className='comment-edit hidden' onClick={this.cancelComment}>Cancel</button>
        </div>
      
      )
      : null;

    return (
      <div className='comment-index'>
        <p>{comment.body}</p>

        <div className='comment-by'>
          <h3>
            By: {comment.author} &nbsp; &nbsp; &nbsp;
            <span className='comment-date'>{comment.date}</span>
            {editButton}
          </h3>
        </div>

        <div id='update-comment' className='comment-form hidden'>
          <form className='inside-comment-form' onSubmit={this.handleSubmit}>
            <textarea
              cols='30'
              rows='10'
              className='comment-input'
              type='text'
              placeholder='Update Review Here'
              onChange={this.update("body")}
              value={this.state.body}
            />
            <br /> <br />
            <input
              className='comment-submit'
              type='submit'
              value='Update Review'
            />
            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
          <input
              className='comment-submit'
              type='submit'
              value='Delete Review'
              onClick={this.handleDelete}
            />
          </form>
        </div>

        <br />
        <br />
      </div>
    );
  }
} 





export default CommentIndex;