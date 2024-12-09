import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.css';
import Destinations from './Pages/Destinations';
import Services from './Pages/Services';
import Statics from './Pages/Statics';
import Home from './Pages/Home';
import Packages from './Pages/Packages';

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
      <Statics />
      <Destinations />
      <Packages />
    </div>
  );
}

export default App;
