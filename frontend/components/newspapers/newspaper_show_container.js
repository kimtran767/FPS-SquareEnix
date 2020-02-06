import { connect } from 'react-redux';
import { fetchNewspaper } from '../../actions/newspaper_actions';
import NewspaperShow from './newspaper_showpage';
import {
  fetchAllComment,
  updateComment,
  fetchComment,
  deleteComment
} from "../../actions/comment_actions";
import { closeModal, openModal } from '../../actions/modal_actions';

const mstp = (state, ownProps) => {
    return {
      newspaper: state.entities.newspapers[ownProps.match.params.newspaperId],
      pulp: Object.values(state.entities.pulps),
      comment: Object.values(state.entities.comments),
      currentUser: state.session.id,
    };
};

const mdtp = dispatch => ({
  fetchNewspaper: newspaperId => dispatch(fetchNewspaper(newspaperId)),
  fetchAllComment: () => dispatch(fetchAllComment()),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
  updateComment: comment => dispatch(updateComment(comment)),
  fetchComment: comment => dispatch(fetchComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mstp, mdtp)(NewspaperShow);