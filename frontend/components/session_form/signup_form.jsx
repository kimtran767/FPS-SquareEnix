import React from 'react';

 class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.forms;

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(this.props.switchAction)
        .then(() => this.props.history.push("/"));
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
                        <br/><br/>
                        <h2 className='session-header'>sign up with your email address</h2>
                        <br/>

                        <label className='session-text'>Username:
                            <input
                                onChange={this.handleInput('username')}
                                type="text"
                                value={this.state.username}
                                className="session-input"
                            />
                        </label>
                        <label className='session-text'>Email:
                            <input
                                onChange={this.handleInput('email')}
                                type="text"
                                value={this.state.email}
                                className="session-input"
                            />
                        </label>

                        <label className='session-text'>Password:
                            <input
                                onChange={this.handleInput('password')}
                                type="password"
                                value={this.state.password}
                                className="session-input"
                            />
                        </label>

                        <label className='session-text'>Birthday:
                                <input
                                onChange={this.handleInput('birthday')}
                                type="date"
                                value={this.state.birthday}
                                className="session-input"
                            />
                        </label>

                        <input  onClick={this.handleSubmit} 
                                type="submit"
                                id="session-submit"
                         />
                    </div>
                </div>
            
        );
    }
}

export default SignUpForm;





