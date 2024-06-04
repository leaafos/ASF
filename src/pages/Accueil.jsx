import React from 'react';
import "../styles/accueil.css";
import ListeIcones from '../components/ListeIcones';
import BarreDeRecherche from '../components/BarreDeRecherche';
import BandeauAccueil from "../images/Accueil/bandeau-accueil.png";

const Accueil = () => {
  return (
    <div>
      <div className='header-accueil'>
          <img src={BandeauAccueil}></img>
      </div>
      <div className='barre-de-recherche'>
        <BarreDeRecherche></BarreDeRecherche>
      </div>
      <div className='icones-deroulant'>
        <ListeIcones></ListeIcones>
      </div>
      <div className='evenements'>
          <div className='event1'>
            <div className='heureDate'>
              <p>SAMEDI 25 MAI</p>
              <p>13:00 - 19:00</p>
            </div>
            <h5>LASER RUN</h5>
          </div>
          <div className='event2'>
            <div className='heureDate'>
              <p>SAMEDI 25 MAI</p>
              <p>13:00 - 19:00</p>
            </div>
            <h5>ESPORT</h5>
          </div>
          <div className='event3'>
            <div className='heureDate'>
              <p>JEUDI 27 JUIN</p>
              <p>10:00 - 12:00 <br/>13:00 - 16:00</p>
            </div>
            <h5>TOURNOI DE RUGBY</h5>
          </div>
          <div className='event4'>
            <div className='heureDate'>
              <p>8 ET 9 JUIN</p>
              <p>09:00 - 17:30</p>
            </div>
            <h5>TOURNOI DE FOOT</h5>
          </div>
      </div>
    </div>
  );
};

export default Accueil;