import React from 'react';

class Popup extends React.Component {

    render() {
      return(

       <div className='popup'>
           <a href 
                className='popup-close'
                onClick={ () => this.props.closeModal()}
                >X
           </a>
           <div className='inner-popup'>
            <h1>Welcome!</h1>
            <br/><br/>
            <p>It's nice to see you!</p>
            <p>Log in to post a comment</p>
            <br/>
            <a href 
                className='popup-login'
                onClick={() => this.props.openModal('login')}>Log in Here</a>

           </div>
        </div>
    
      )}
}
export default Popup;