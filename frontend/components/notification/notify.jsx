import React from 'react';
import NewspapersItem from '../newspapers/newspapers_item'

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotify: false
    };
    this.showNotify = this.showNotify.bind(this);
    this.closeNotify = this.closeNotify.bind(this);
  }

  componentDidMount() {
    this.props.fetchNewspapers();
  }

  showNotify(e) {
    e.preventDefault();
    this.setState({ showNotify: true });
  }

  closeNotify() {
    this.setState({ showNotify: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.showNotify}>Show menu</button>

        {this.state.showNotify ? (
          <div className='menu'>
            {this.props.newspapers.map(newspaper => (
              <NewspapersItem newspaper={newspaper} key={newspaper.id} />
            ))}
          </div>
        ) : null}

        <button onClick={this.closeNotify}>Close menu</button>
      </div>
    );
  }
};

export default Notification;