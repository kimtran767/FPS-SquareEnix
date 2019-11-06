import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/sessions_action';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">Join</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        switchAction: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);



