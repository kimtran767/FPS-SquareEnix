import React from 'react';


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user).then(this.props.switchAction);
        this.props.clearErrors;
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='session-main-container'>
                <div className='session-background-image'></div>
                <div className='modal-content'>
                    <div className='session-form'>
                        <h2 className='session-header'>Login</h2>
                        <form>
                            {this.renderErrors()}
                        
                            <label className='session-text'>Email:
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="session-input"
                                />
                            </label>
                            <br />

                            <label className='session-text'>Password:
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="session-input"
                                />
                            </label>
                            <br />
                            <input  id="session-submit" 
                                    type="submit" 
                                    value={this.props.formType} 
                                    onClick={this.handleSubmit} 
                            />
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;


