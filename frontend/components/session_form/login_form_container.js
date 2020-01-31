import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/sessions_action';
import Forms from './forms';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.session,
      formType: "Login",
      navLink: <Link to='/signup'>Join</Link>,
      forms: {
        email: "",
        password: "",
        colorRed: 0
      }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        switchAction: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);



