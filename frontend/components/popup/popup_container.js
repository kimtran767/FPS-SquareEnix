import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Popup from './popup';


const mdtp = dispatch => {
    return({

        openModal: modal => dispatch(openModal(modal))
    })
}

export default connect(null, mdtp)(Popup)