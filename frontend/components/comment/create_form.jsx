import React from 'react';
import Popup from "reactjs-popup";

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.expandForm = this.expandForm.bind(this);
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

  expandForm() {
    if (this.props.userId) {
      // const forms = Array.from(
      //   document.getElementsByClassName("comment-submit")
      // );
      // for (let form of forms) {
      //   form.className;
      // }
      Array.getElementsByClassName('comment-submit').classList.remove('comment-hidden');
    } else {
      this.props.openModal('login');
    }
  }

  expandForm(e) {
    if (this.props.authorId) {
      const formItems = Array.from(
        document.getElementsByClassName("comment-form-item")
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
          <input
            className='comment-submit comment-hidden'
            type='submit'
            value={this.props.formType}
          />
        </form>
      </div>
    );
  }
};

export default CreateForm;