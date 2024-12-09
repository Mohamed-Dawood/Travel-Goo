import './Services.css';
import hotelBooking from '../images/Services/Hotel Booking.png';
import ticketBooking from '../images/Services/Ticket Booking.png';
import tourPlan from '../images/Services/Tour Plan.png';

function Services() {
  return (
    <div className="services">
      <div className="container">
        <h3 className="section-header">our services</h3>
        <div className="content">
          <div className="service">
            <img src={ticketBooking} alt="Hotel Booking" />
            <h4>Ticket Booking</h4>
            <p>
              We book all kind of national or international ticket for your
              destinaion.
            </p>
          </div>
          <div className="service">
            <img src={hotelBooking} alt="erer" />
            <h4>Hotel Booking</h4>
            <p>
              You can easily book your according to your budget hotel by our
              website.
            </p>
          </div>
          <div className="service">
            <img src={tourPlan} alt="erer" />
            <h4> Tour Plan</h4>
            <p>
              We provide you the best plan within a short time explore more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
