
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Historique from './pages/Historique.jsx';
import Benevole from './pages/Benevole.jsx';
import ErrorBoundary from './ErrorBoundary.js';
import Aikido from './pages/sports/Aikido.jsx';


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
                  <Route path="/" element={<Home/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/historique" element={<Historique/>}/>
                  <Route path="/benevole" element={<Benevole/>}/>
                  <Route path="/aikido" element={<Aikido/>}/>
              </Routes>
            </div>
        </Router>
    </ErrorBoundary>
   
  );
}

export default App;
