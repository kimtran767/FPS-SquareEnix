import React from "react";
import { Link } from "react-router-dom";

class NotificationIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNewspapers();
  }

  render() {

    return (
      <div className='notification-index'>

        <div id='dropdown-content'>
          <div className='notify-header'>
            <h3>NOTIFICATION</h3>
            <h4>
              <button onClick={() => this.props.closeModal()}>X</button>
            </h4>
          </div>
          {this.props.newspapers.map(newspaper => (
            <div className='notify-content'>
              <Link to={`/newspapers/${newspaper.id}`} className='notify-link'>
                <img src={newspaper.photoUrl} className='notify-image' />
                <p className='notify-title'>{newspaper.title}</p>
              </Link>
            </div>
          ))}
        </div>
    </div>
    );
  }
}

export default NotificationIndex;
