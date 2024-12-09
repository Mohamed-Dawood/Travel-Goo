import './Statics.css';
import calender from '../images/Statics/calender.png';
import carbonMap from '../images/Statics/carbon-map.png';
import chartOutlined from '../images/Statics/chart-outlined.png';
import history from '../images/Statics/history.png';
function Statics() {
  return (
    <div className="statics">
      <div className="container">
        <div className="header">
          <h3>We always try to give you the best service</h3>
          <p>
            We always try to make our customer Happy. We provide all kind of
            facilities. Your Satisfaction is our main priority.
          </p>
        </div>
        <div className="info">
          <div className="item">
            <img src={calender} alt="calender" />
            <h4>15+</h4>
            <p>Years of Experience</p>
          </div>

          <div className="item">
            <img src={chartOutlined} alt="chartOutlined" />
            <h4>15K+</h4>
            <p>Happy Travellers</p>
          </div>

          <div className="item">
            <img src={carbonMap} alt="carbonMap" />
            <h4>650+</h4>
            <p>Places Visited</p>
          </div>

          <div className="item">
            <img src={history} alt="history" />
            <h4>2k+</h4>
            <p>Travel History</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statics;
