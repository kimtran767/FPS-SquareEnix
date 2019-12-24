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
      .then(() => this.props.history.push("/"));
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
      
  }
};

export default SessionForms;