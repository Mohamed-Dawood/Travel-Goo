import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from '../Components/Button';

import './Packages.css';
import Indonesia from '../images/Packages/Indonesia.png';
import Japan from '../images/Packages/Japan.png';
import Mountains from '../images/Packages/Mountains.png';

function Packages() {
  return (
    <div>
      <div className="packages">
        <div className="container">
          <div className="header">
            <h3>Best Packages For You</h3>

            <ul>
              <li className="active">Hot Deals</li>
              <li>Backpack</li>
              <li>South Asia</li>
              <li>Honeymoon</li>
              <li>Europe</li>
              <li>More</li>
            </ul>

            <section>
              <div className="package">
                <img src={Indonesia} alt="Indonesia" />
                <div className="details">
                  <div>
                    <h5>3 Days, 2 NIghts</h5>
                    <h5>$500 / Person</h5>
                  </div>
                  <p>
                    Explore the Beauty of the island for 3 days and 2 nights
                    with our travel agency
                  </p>
                  <div>
                    <h5>
                      <FontAwesomeIcon icon={faLocationDot} />
                      Indonesia
                    </h5>
                    <h5>Know More</h5>
                  </div>
                </div>
              </div>

              <div className="package">
                <img src={Japan} alt="Japan" />

                <div className="details">
                  <div>
                    <h5>3 Days, 2 NIghts</h5>
                    <h5>$800 / Person</h5>
                  </div>
                  <p>
                    Explore the Beauty of the island for 3 days and 2 nights
                    with our travel agency
                  </p>
                  <div>
                    <h5>
                      <FontAwesomeIcon icon={faLocationDot} />
                      Japan
                    </h5>
                    <h5>Know More</h5>
                  </div>
                </div>
              </div>

              <div className="package">
                <img src={Mountains} alt="Mountains" />

                <div className="details">
                  <div>
                    <h5>3 Days, 2 NIghts</h5>
                    <h5>$600 / Person</h5>
                  </div>
                  <p>
                    Explore the Beauty of the island for 3 days and 2 nights
                    with our travel agency
                  </p>
                  <div>
                    <h5>
                      <FontAwesomeIcon icon={faLocationDot} />
                      Mountains
                    </h5>
                    <h5>Know More</h5>
                  </div>
                </div>
              </div>
            </section>

            <Button buttonName="Discover More" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
