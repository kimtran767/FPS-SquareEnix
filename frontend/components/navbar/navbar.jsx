import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.refreshPage = this.refreshPage.bind(this);
  }

  refreshPage() {
    // e.preventDefault();
    this.forceUpdate();
  }

  render() {

    return (
      <div className='navbar-header'>
        <Link onClick={this.refreshPage} className='nav-title' to='/'>
          FINAL EN<span className='red'>I</span>X
        </Link>

        <ul className='nav-links'>
          <li>
            <Link onClick={this.refreshPage} className='link' to='/games'>
              Games
            </Link>
          </li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li>
            <Link onClick={this.refreshPage} className='link' to='/newspapers'>
              News
            </Link>
          </li>
        </ul>

        <div className='nav-greeting'>
          <GreetingContainer />
        </div>
      </div>
    );
  }
}

// const NavBar = () => (
//   <div className='navbar-header'>
//     <Link className='nav-title' to='/'>
//       FINAL EN<span className='red'>I</span>X
//     </Link>

//     <ul className='nav-links'>
//       <li>
//         <Link className='link' to='/games'>
//           Games
//         </Link>
//       </li>
//       &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//       <li>
//         <Link className='link' to='/newspapers'>
//           News
//         </Link>
//       </li>
//     </ul>

//     <div className='nav-greeting'>
//       <GreetingContainer />
//     </div>
//   </div>
// );

export default NavBar;