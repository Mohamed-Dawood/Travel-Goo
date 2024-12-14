import './App.css';
import Destinations from './Pages/Destinations';
import Services from './Pages/Services';
import Statics from './Pages/Statics';
import Home from './Pages/Home';
import Packages from './Pages/Packages';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
      <Statics />
      <Destinations />
      <Packages />
      <Footer />
    </div>
  );
}

export default App;
