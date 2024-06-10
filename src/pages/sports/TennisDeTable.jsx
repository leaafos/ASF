import React from 'react';
import "../../styles/sports.css";

const TennisDeTable = () => {
  return (
    <div>
        <div className='header athletisme'>
            <div className='nom-sport'>
                <h1>TENNIS DE TABLE</h1>
            </div>
            <div className='saison'>
                <h2>SAISON 2024-2025</h2>
            </div>
        </div>
        <div className='infos'>
            <h2>QUELQUES INFORMATIONS</h2>
            <hr className='ligne-titre'></hr>
            <div className='methodes'>
                <h4>PAS DE TEXTE</h4>
                <p>Pas de texte</p>
            </div>
            <div className='entrainements'>
                <div className='titre-entrainements'>
                    <h2>ENTRAÎNEMENTS</h2>
                    <div>
                        <p><b>Les premières séances d’entrainements se tiendront à partir du Lundi 04 Septembre 2023</b></p>
                    </div>
                </div>
                <hr className='ligne-titre'></hr>
                <div className='entrainement-ligne'>
                    <h4>ADULTES DEBUTANTS ET PERFECTIONNEMENT</h4>
                    <p><b>SALLE TENNIS DE TABLE, 1ER ETAGE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 20H30-22H30</b></p>
                </div>
                <hr className='ligne-titre'></hr>
                <div className='entrainement-ligne'>
                    <h4>JEUNES (- 19 ANS)</h4>
                    <p><b>SALLE TENNIS DE TABLE, 1ER ETAGE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 20H30-22H30</b></p>
                </div>
                
            </div>
            <h2>INSCRIPTIONS</h2>
            <hr className='ligne-titre'></hr>
            <div className='inscription'>
                <h4>INSCRIPTION POSSIBLE VIA LE LIEN SUIVANT :</h4>
                <span className='lien'>LIEN D'INSCRIPTION</span>
            </div>
            <h2>COTISATIONS</h2>
            <hr className='ligne-titre'></hr>
            <div className='cotisations'>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>2018 ET 2019</b></p>
                        <p className='prix-cotisation'><b>190€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>2013 ET 2017</b></p>
                        <p><i>Nouvelle adhésion (prix du maillot compris)</i></p>
                        <p className='prix-cotisation'><b>225€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>2013 ET 2017</b></p>
                        <p><i>Ancien adhérent</i></p>
                        <p className='prix-cotisation'><b>190€</b></p>
                    </div>
                </div>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>2012 ET AVANT</b></p>
                        <p><i>Nouvelle adhésion (prix du maillot compris)</i></p>
                        <p className='prix-cotisation'><b>240€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>2012 ET AVANT</b></p>
                        <p><i>Ancien adhérent</i></p>
                        <p className='prix-cotisation'><b>205€</b></p>
                    </div>
                </div>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>ASF ATHLETISME</h4>
                <span className='label'>Mail : </span>
                <span className='email'> asfathletisme2@gmail.com</span>
                <span className='label'>Site Web : </span>
                <span className='email'> www.asfathletisme.free.fr</span>
            </div>
        </div>
    </div>
  );
};

export default TennisDeTable;