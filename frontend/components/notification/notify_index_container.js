import { connect } from "react-redux";
import { fetchNewspapers } from "../../actions/newspaper_actions";
import NotificationIndex from './notify_index';
import { closeModal } from "../../actions/modal_actions";

const mstp = state => ({
  newspapers: Object.values(state.entities.newspapers)
});

const mdtp = dispatch => ({
  fetchNewspapers: () => dispatch(fetchNewspapers()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mstp, mdtp)(NotificationIndex);