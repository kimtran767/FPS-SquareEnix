import React from 'react';


class Popup extends React.Component {

    render() {
      return(

       <div className='popup'>
           <h1>Welcome!</h1>
           <p>It's nice to see you!</p>
           <p>Log in to post a comment</p>
            ``
            <a href onClick={() => this.props.openModal('login')}>login?</a>
        </div>
    
      )}
}
export default Popup;