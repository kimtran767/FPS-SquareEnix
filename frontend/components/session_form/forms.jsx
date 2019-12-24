import React from 'react';

class SessionForms extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.forms;

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

};

export default SessionForms;