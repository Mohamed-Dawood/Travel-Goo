import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import googlePlay from '../images/Footer/Google Play.png';
import appStore from '../images/Footer/Play Store.png';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <div className="logo">
            travel <span>goo</span>
          </div>
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className="list">
          <ul>
            <h3>company</h3>
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
          <ul>
            <h3>Contact</h3>
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affiliates</li>
          </ul>
          <ul>
            <h3>More</h3>
            <li>Airline Fees</li>
            <li>Airline</li>
            <li>Low fare tips</li>
          </ul>
        </div>
        <div className="box">
          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/mohamed.bdawod.5/"
                target="blank"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mohamed__dawood23/"
                target="blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohamed-basyouni-dawood/"
                target="blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://github.com/Mohamed-Dawood" target="blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          <h3>Discover our app</h3>
          <div>
            <img src={googlePlay} alt="googlePlay" />
            <img src={appStore} alt="appStore" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>All rights reserved &copy; Mohamed Dawood</p>
      </div>
    </div>
  );
}

export default Footer;
