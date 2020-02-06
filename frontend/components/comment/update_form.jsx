// import React from 'react';
// import { Link, withRouter } from "react-router-dom";

// class UpdateForm extends React.Component {
//   constructor(props) {
//     super(props);

//     // this.state = this.props.comment;
//     this.state = Object.assign(this.props.comment, {refresh: false})
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//   }

//   update(field) {
//     return e => this.setState({ [field]: e.currentTarget.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.updateComment(this.state);
//   }

//   handleDelete(e) {
//     debugger
//     e.preventDefault();
//     this.props.deleteComment(this.state);

//   }

//   render() {
//     return (
//       <div className='comment-update'>
//         <h2 className='comment-h2'>Comment</h2>
//         <form className='inside-comment-form' onSubmit={this.handleSubmit}>
//           <textarea
//             cols='30'
//             rows='10'
//             className='comment-input'
//             type='text'
//             placeholder='Update Review Here'
//             onChange={this.update("body")}
//             value={this.state.body}
//           />
//           <br /> <br />
//           <input
//             className='comment-submit'
//             type='submit'
//             value='Update Review'
//           />
//           &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
//           <input
//             className='comment-submit'
//             type='submit'
//             value='Delete Review'
//             onClick={this.handleDelete}
//             // onClick={() => this.props.deleteComment(this.state)}
//           />
//         </form>
//       </div>
//     );
//   }
// }

// export default withRouter(UpdateForm);