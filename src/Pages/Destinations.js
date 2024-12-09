import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Destinations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Thailand from '../images/Destinations/Thailand.png';
import Indonesia from '../images/Destinations/Indonesia.png';
import NewZealand from '../images/Destinations/NewZealand.png';

function Destinations() {
  return (
    <div className="destinations">
      <div className="container">
        <div className="header">
          <h3>Our Popular Destinations</h3>
        </div>
        <div className="content">
          <div className="map">
            <iframe
              title="Our Popular Destinations"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.862549137532!2d30.99407504735141!3d30.82567722688672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c9b48984bb7d%3A0x3ca7f8d83591e9d8!2sFaculty%20of%20Computers%20and%20Information%2C%20Tanta%20University!5e0!3m2!1sen!2seg!4v1733092743888!5m2!1sen!2seg"
              style={{ border: 0, minHeight: '100%' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="countries">
            <div className="country">
              <img src={Thailand} alt="Thailand" />
              <div className="details">
                <h4>Thailand</h4>
                <span className="spots">20+ Spots 2D & 3N</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>{' '}
            <div className="country">
              <img src={Indonesia} alt="Indonesia" />
              <div className="details">
                <h4>Indonesia</h4>
                <span className="spots">25+ Spots 3D & 3N</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>{' '}
            <div className="country">
              <img src={NewZealand} alt="NewZealand" />
              <div className="details">
                <h4>New Zealand</h4>
                <span className="spots">20+ Spots 3D & 2N</span>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
