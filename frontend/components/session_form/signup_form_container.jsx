import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/sessions_action';
import Forms from './forms'
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
    return {
      errors: errors.session,
      formType: 'join now',
      navLink: <Link to='/login'>Login</Link>,
      forms: {
        email: '',
        username: '',
        password: '',
        birthday: ''
      }
    };
};

const mapDispatchToProps = dispatch => {
    return {
      action: user => dispatch(signup(user)),
      clearErrors: () => dispatch(clearErrors()),
      switchAction: () => dispatch(closeModal()),
      openModal: modal => dispatch(openModal(modal)),
      closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);




