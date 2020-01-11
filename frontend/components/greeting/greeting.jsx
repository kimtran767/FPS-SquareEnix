import React from 'react';


 class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.currentUser ? (
            <div className='greeting-with-user'>
                <div id='greeting-user'>
                    <button className='logging-btn' onClick={()=> this.props.logout()}>LOGOUT</button>
                    <div></div>
                </div>
                
                <br/>
            </div>
        ) : (
                <div id='greeting-no-user'>
                        <button className='logging-btn' onClick={() => this.props.openModal('login')}>LOG IN</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
};

export default Greeting;