import { connect } from "react-redux";
import { fetchNewspapers } from "../../actions/newspaper_actions";
import Notification from './notify';
// import { openModal } from '../../actions/modal_actions';


const mstp = state => ({
  newspapers: Object.values(state.entities.newspapers)
});

const mdtp = dispatch => ({
  fetchNewspapers: () => dispatch(fetchNewspapers()),
  // openModal: modal => dispatch(openModal(modal))
});

export default connect(mstp, mdtp)(Notification);
