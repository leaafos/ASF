
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Historique from './components/Historique.jsx';
import Benevole from './components/Benevole.jsx';
import ErrorBoundary from './ErrorBoundary.js';


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
                </ul>
              </nav>

              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/historique" element={<Historique/>}/>
                  <Route path="/benevole" element={<Benevole/>}/>
              </Routes>
            </div>
        </Router>
    </ErrorBoundary>
   
  );
}

export default App;
