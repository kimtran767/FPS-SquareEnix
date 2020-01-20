import React from 'react';


class Popup extends React.Component {

    render() {
      return(

       <div>
           Hello
            <br/><br/><br/>
            <a href onClick={() => this.props.openModal('login')}>Click here to login in</a>
        </div>
    
      )}
}
export default Popup;