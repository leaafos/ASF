
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Accueil from './pages/Accueil.jsx';
import Contact from './pages/Contact.jsx';
import Historique from './pages/Historique.jsx';
import Benevole from './pages/Benevole.jsx';
import ErrorBoundary from './ErrorBoundary.js';
import Aikido from './pages/sports/Aikido.jsx';
import Athletisme from './pages/sports/Athletisme.jsx';
import Badminton from './pages/sports/Badminton.jsx';
import BasketBall from './pages/sports/Basketball.jsx';
import BoxeThailandaise from './pages/sports/BoxeThailandaise.jsx';
import Capoeira from './pages/sports/Capoeira.jsx';


function App() {
  return (
    <ErrorBoundary>
         <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Accueil</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/historique">Historique</Link>
                  </li>
                  <li>
                    <Link to="/benevole">Bénévole</Link>
                  </li>
                  <li>
                    <Link to="/aikido">Aikido</Link>
                  </li>
                </ul>
              </nav>

              <Routes>
                  <Route path="/" element={<Accueil/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/historique" element={<Historique/>}/>
                  <Route path="/benevole" element={<Benevole/>}/>
                  <Route path="/aikido" element={<Aikido/>}/>
                  <Route path="/athletisme" element={<Athletisme/>}/>
                  <Route path="/badminton" element={<Badminton/>}/>
                  <Route path="/basketball" element={<BasketBall/>}/>
                  <Route path="/boxethailandaise" element={<BoxeThailandaise/>}/>
                  <Route path="/capoeira" element={<Capoeira/>}/>
              </Routes>
            </div>
        </Router>
    </ErrorBoundary>
   
  );
}

export default App;
