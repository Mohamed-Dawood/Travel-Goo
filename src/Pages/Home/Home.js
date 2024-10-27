import Navbar from '../../Components/Navbar';
import './Home.css';
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className="content">
      <h2>Your Imagination Is Your Only Limit</h2>
      <p>
        We always try to make our customer Happy. We provide all kind of
        facilities. Your Satisfaction is our main priority
      </p>
      <button>Discover more</button>
    </div>
  );
}

export default Home;
