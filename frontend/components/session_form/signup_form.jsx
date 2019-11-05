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

    render() {
        
        return (
            <div className="signup-form">
                <h2>Sign Up!</h2>
                <form>
                    <label>Username:
                         <input
                            onChange={this.handleInput('username')}
                            type="text"
                            value={this.state.username} />
                    </label>
                </form>

                <form>
                    <label>Email:
                        <input
                            onChange={this.handleInput('email')}
                            type="text"
                            value={this.state.email} />
                    </label>
                </form>

                <form>
                    <label>Password:
                        <input
                            onChange={this.handleInput('password')}
                            type="password"
                            value={this.state.password} />
                    </label>
                </form>

                <form>
                    <label>Birthday:
                        <input
                            onChange={this.handleInput('birthday')}
                            type="date"
                            value={this.state.birthday} />
                    </label>
                </form>

                <input onClick={this.handleSubmit} type="submit" />
            </div>
        );
    }
}

export default SignUpForm;