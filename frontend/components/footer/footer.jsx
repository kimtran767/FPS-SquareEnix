import React from 'react';

const Footer = () => (
  <div className='footer'>
    

      <h2>Technologies</h2>
      <div className='footer-tech'>
        {/* <span className='dot'></span>
        &nbsp;&nbsp;&nbsp;&nbsp; */}
        <h5>PostgresSQL</h5>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='dot'></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h5>Ruby on Rails</h5>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='dot'></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h5>React &amp; Redux</h5>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='dot'></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h5>CSS3</h5>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='dot'></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <h5>HTML5</h5>
      {/* <img className='footer-erb' src='/ersb.jpg' /> */}
      </div>


    <div className='footer-last'>
      <p id='footer-p'>© 2019 FINAL ENIX LTD. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;