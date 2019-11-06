import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/sessions_action';
import SignUpForm from './signup_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">Login</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        switchAction: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);




