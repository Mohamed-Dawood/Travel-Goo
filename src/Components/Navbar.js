import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Star from '../images/Star.png';
import Profile from '../images/Profile.png';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpenNav() {
    setIsOpen(() => !isOpen);
    console.log(isOpen);
  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          travel <span>goo</span>
        </div>
        <ul className={!isOpen ? 'active' : ''}>
          <li>Home</li>
          <li>About Us</li>
          <li>Packages</li>
        </ul>
        <div className="utils">
          <button>
            <img src={Star} alt="" />
          </button>
          <button>
            <img className="profile" src={Profile} alt="" />
          </button>
        </div>
        <div
          className="bars"
          style={{ borderColor: !isOpen ? 'var(--main-color)' : 'transparent' }}
          onClick={handleOpenNav}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
