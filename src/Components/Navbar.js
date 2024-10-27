import './Navbar.css';
import Star from '../images/Star.png';
import Profile from '../images/Profile.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          travel <span>goo</span>
        </div>
        <ul>
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
        <div className="bars">
          <span>-</span>
          <span>-</span>
          <span>-</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
