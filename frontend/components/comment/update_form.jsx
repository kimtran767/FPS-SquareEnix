import React from 'react';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchComment(this.state.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateComment(this.state);
    // this.setState({ body: "" });
  }

  render() {
    return (
      <div className='comment-form'>
        <h2 className='comment-h2'>Comment</h2>
        <form className='inside-comment-form' onSubmit={this.handleSubmit}>
          {/* <h2>{this.renderErrors()}</h2> */}
          <textarea
            cols='30'
            rows='10'
            className='comment-input'
            type='text'
            placeholder='Join the discussion'
            onChange={this.update("body")}
            value={this.state.body}
            // onClick={this.expandForm}
          />
          <br /> <br />
          <input
            className='comment-submit hidden'
            type='submit'
            value='Update Review'
          />
        </form>
      </div>
    );
  }
}

export default UpdateForm;