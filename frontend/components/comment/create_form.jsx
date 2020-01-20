import React from 'react';
import Popup from "reactjs-popup";

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.expandForm = this.expandForm.bind(this);
    // this.collapseForm = this.collapseForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({ body: "" });
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  expandForm(e) {
    if (this.props.userId) {
      const formItems = Array.from(
        document.getElementsByClassName("comment-submit")
      );
      for (let formItem of formItems) {
        formItem.classList.remove("hidden");
      }
    } else {
      this.props.openModal("login");
    }
  }

  render() {
    return (
      <div className='comment-form'>
        <h2 className='comment-h2'>Comment</h2>
        <form className='inside-comment-form' onSubmit={this.handleSubmit}>
          <textarea
            className='comment-input'
            type='text'
            placeholder='Join the discussion'
            onChange={this.update("body")}
            value={this.state.body}
            onClick={this.expandForm}
          />
          <br/> <br/>
          <input
            className='comment-submit hidden'
            type='submit'
            value={this.props.formType}
          />
        </form>
      </div>
    );
  }
};

export default CreateForm;