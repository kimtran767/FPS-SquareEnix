import React from 'react';


 class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.currentUser ? (
            <div className='greeting-with-user'>
                <div id='greeting-user'>
                    <a className='logging-btn' onClick={()=> this.props.logout()}>LOGOUT</a>
                    <div></div>
                </div>
                
                <br/>
            </div>
        ) : (
                <div id='greeting-no-user'>
                        <a className='logging-btn' onClick={() => this.props.openModal('login')}>LOG IN</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className='logging-btn' onClick={() => this.props.openModal('signup')}>JOIN</a>
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
};

export default Greeting;