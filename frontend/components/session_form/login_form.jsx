import React from 'react';


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
        this._writeDemoUser = this._writeDemoUser.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


    handleDemoUser(e) {
        e.preventDefault();
        const demoUser = { email: "demo@aa.io", password: "password" };
        var i = 0;

        this._writeDemoUser(() =>
            this.props.login(demoUser)
                .then(this.props.switchAction)
                // .then(() => this.props.history.push("/guest"))
        )
    }

    _writeDemoUser(callback) {
        let i = 0;
        document.getElementById('input-email').value = '';
        document.getElementById('input-password').value = '';

        function typingEffect(id, txt) {
            if (i < txt.length) {
                document.getElementById(id).value += txt.charAt(i);
                i++;
                setTimeout(() => typingEffect(id, txt), 10);
            }
        }
        typingEffect('input-email', 'ddemo@aa.io');

        document.getElementById('input-password').value = 'password';

        callback();
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
      
            
                
                    <div>
                        <div id='x-modal'>
                            <button onClick={(this.props.switchAction)}>X</button>

                        </div>
                        <h2 className='session-header'>Login</h2>
                        <form className='session-form'>
                            {this.renderErrors()}
                        
                            <label className='session-text'>Email:
                                <input type="text"
                                    id='input-email'
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="session-input"
                                />
                            </label>
                            <br />

                            <label className='session-text'>Password:
                                <input type="password"
                                    id='input-password'
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
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input id="session-submit"
                                type="submit"
                                value='Demo User'
                                onClick={this.handleDemoUser}
                            />
                        </form>

                    </div>
                </div>
            
        );
    }
}

export default LoginForm;


