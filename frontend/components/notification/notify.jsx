import React from 'react';

class Notification extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showNotify: false
        }
        this.showNotify = this.showNotify.bind(this);
    };

    showNotify(e) {
        e.preventDefault();
        this.setState({showNotify: true});
    };

    render() {
        return (
          <div>
            <button onClick={this.showNotify}>Show menu</button>

            {this.state.showNotify ? (
              <div className='menu'>
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            ) : null}
          </div>
        );
    }
};

export default Notification;