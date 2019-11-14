\import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.currentUser ? (
            <div className='greeting-with-user'>
                <div id='greeting-user'>
                    <div>
                        <p>Hello, {this.props.currentUser.username}</p>
                    </div>

                    <div id='greeting-user-logout'>
                        <button onClick={this.props.logout}>Log Out</button>
                    </div>
                </div>
                
                <br/>
            </div>
        ) : (
                <div id='greeting-no-user'>
                        <button className='logging-btn' onClick={() => this.props.openModal('login')}>LOG IN</button>
                        <button className='logging-btn' onClick={() => this.props.openModal('signup')}>JOIN</button>
                </div>
            );

        return (
            <header className="nav-bar">
                <div>
                    {display}
                </div>
            </header>
        )
    }
}