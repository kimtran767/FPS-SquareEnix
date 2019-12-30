import React from 'react';

class SessionForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.forms;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
    this._writeDemoUser = this._writeDemoUser.bind(this);
  }

  update(type) {
    return e => this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state)
      .then(this.props.switchAction)
    this.props.clearErrors;
  }

  handleDemoUser(e) {
    e.preventDefault();
    const demoUser = { email: "demo@aa.io", password: "password" };
    var i = 0;

    this._writeDemoUser(() =>
      this.props.login(demoUser).then(this.props.switchAction)
    );
  }

  _writeDemoUser(callback) {
    let i = 0;
    document.getElementById("input-email").value = "";
    document.getElementById("input-password").value = "";

    function typingEffect(id, txt) {
      if (i < txt.length) {
        document.getElementById(id).value += txt.charAt(i);
        i++;
        setTimeout(() => typingEffect(id, txt), 10);
      }
    }
    typingEffect("input-email", "ddemo@aa.io");

    document.getElementById("input-password").value = "password";

    callback();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
      const { formType } = this.props;

      const outputForm =
        formType === "Login" ? (
          <div className='formtype'>
            <h2 className='session-info'>enter your members credentials</h2>

            <form className='session-form'>
              <label>
                <h3>EMAIL</h3>
                <br />
                <input
                  type='text'
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>
              <label>
                <h3>PASSWORD </h3>
                <br />
                <input
                  type='password'
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              <input
                type='submit'
                value={this.props.formType}
                onClick={this.handleSubmit}
                className='session-submit'
              />
            </form>
          </div>
        ) : (
          <div className='formtype'>
            <div className='signup-info'>
              <h2>why join?</h2>
              <li>Be the first to get news on your favourite games!</li>
              <li>Join the discussion in our vibrant SQUARE ENIX community</li>
              <li>
                Move freely between all SQUARE ENIX gaming sites with only one
                sign-in needed
              </li>
              <li>Download full games directly from the store</li>
              <li>Win copies of free games and other cool stuff</li>
            </div>

            <div className='session-total'>
              <h2 className='session-info'>sign up with your email address</h2>
              <form className='session-form'>
                <label>
                  <h3>EMAIL</h3>
                  <br />
                  <input
                    onChange={this.update("email")}
                    type='text'
                    value={this.state.email}
                  />
                </label>
                <label>
                  <h3>PASSWORD</h3>
                  <br />
                  <input
                    onChange={this.update("password")}
                    type='password'
                    value={this.state.password}
                  />
                </label>
                <label>
                  <h3>BIRTHDAY</h3>
                  <br />
                  <input
                    onChange={this.update("birthday")}
                    type='date'
                    value={this.state.birthday}
                  />
                </label>
                <input
                  type='submit'
                  value={this.props.formType}
                  onClick={this.handleSubmit}
                  className='session-submit'
                />
              </form>
            </div>
          </div>
        );

        return (
          <div className='session'>
            <div className='session-type'>
                <div></div>
              <button
                className='session-type-button'
                onClick={() => this.props.openModal("login")}
              >
                LOG IN
              </button>

              <button
                className='session-type-button'
                onClick={() => this.props.openModal("signup")}
              >
                JOIN
              </button>
            </div>
            {outputForm}
          </div>
        );
  }
};

export default SessionForms;