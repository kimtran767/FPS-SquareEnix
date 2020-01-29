import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Popup from './popup';


const mdtp = dispatch => {
    return({
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(null, mdtp)(Popup)