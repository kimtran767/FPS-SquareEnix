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
            <div className='signup-main-container'>
                <h2>Sign Up</h2>
                <div className='signup-background-image'></div>
                <div className='modal-signup'>
                    <div className='signup-form'>
                        <form>
                            {this.renderErrors()}
                            <label>Username:
                    <input
                                    onChange={this.handleInput('username')}
                                    type="text"
                                    value={this.state.username}
                                />
                            </label>
                        </form>

                        <form>
                            <label>Email:
                    <input
                                    onChange={this.handleInput('email')}
                                    type="text"
                                    value={this.state.email}
                                />
                            </label>
                        </form>

                        <form>
                            <label>Password:
                    <input
                                    onChange={this.handleInput('password')}
                                    type="password"
                                    value={this.state.password}
                                />
                            </label>
                        </form>

                        <form>
                            <label>Birthday:
                    <input
                                    onChange={this.handleInput('birthday')}
                                    type="date"
                                    value={this.state.birthday}
                                />
                            </label>
                        </form>

                        <input onClick={this.handleSubmit} type="submit" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpForm;