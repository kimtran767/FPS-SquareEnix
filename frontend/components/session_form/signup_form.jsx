import React from 'react';

 class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            birthday: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
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
                <div className='session-background-image'></div>
                <div className='modal-content'>
                    <div className='modal-content-sessionform'>
                        <h2 className='session-header'>Sign Up</h2>
                        <form>
                            {this.renderErrors()}
                            <label className='session-text'>Username:
                            <input
                                    onChange={this.handleInput('username')}
                                    type="text"
                                    value={this.state.username}
                                    className="session-input"
                                />
                            </label>
                        </form>

                        <form>
                            <label className='session-text'>Email:
                    <input
                                    onChange={this.handleInput('email')}
                                    type="text"
                                    value={this.state.email}
                                    className="session-input"
                                />
                            </label>
                        </form>

                        <form>
                            <label className='session-text'>Password:
                                <input
                                    onChange={this.handleInput('password')}
                                    type="password"
                                    value={this.state.password}
                                    className="session-input"
                                />
                            </label>
                        </form>

                        <form>
                            <label className='session-text'>Birthday:
                                <input
                                    onChange={this.handleInput('birthday')}
                                    type="date"
                                    value={this.state.birthday}
                                    className="session-input"
                                />
                            </label>
                        </form>

                        <input  onClick={this.handleSubmit} 
                                type="submit"
                                id="session-submit"
                         />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpForm;