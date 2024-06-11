import React from 'react';
import "../../styles/sports.css";

const Squash = () => {
  return (
    <div>
        <div className='header athletisme'>
            <div className='nom-sport'>
                <h1>SQUASH</h1>
            </div>
            <div className='saison'>
                <h2>SAISON 2024-2025</h2>
            </div>
        </div>
        <div className='infos'>
            <h2>QUELQUES INFORMATIONS</h2>
            <hr className='ligne-titre'></hr>
            <div className='methodes'>
                <h4>COURS ENSEIGNES</h4>
                <p>Sessions de 45 minutes. <br/><br/>Réservations via l'a^pplication "MonClub".</p>
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
                    <h4>1.</h4>
                    <p>Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>DU LUNDI AU SAMEDI 9H00 - 21H45</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>2.</h4>
                    <p>Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>DIMANCHE 9H00-19H30< br/> OU SAMEDI 10H15 - 12H00</b></p>
                </div>
                <h4>(OUVERTURE DE LA SALLE AUPRES DU GARDIEN LE JOUR DE LA RESERVATION)</h4>
            </div>
            <h2>INSCRIPTIONS</h2>
            <hr className='ligne-titre'></hr>
            <div className='inscription'>
                <h4>INSCRIPTION POSSIBLE VIA LE LIEN SUIVANT :</h4>
                <span className='lien'>LIEN D'INSCRIPTION</span>
            </div>
            <h2>COTISATIONS</h2>
            <hr className='ligne-titre'></hr>
            <div>
                <h4>1 TERRAIN POUR 2 JOUEURS</h4>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>1 TICKET DE RESERVATION</b></p>
                        <p className='prix-cotisation'><b>10€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>10 TICKETS DE RESERVATION</b></p>
                        <p className='prix-cotisation'><b>90€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>COTISATION ANNUELLE ILLIMITEE</b></p>
                        <p className='prix-cotisation'><b>230€</b></p>
                    </div>
                </div>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>SECRETARIAT ASF</h4>
                <span className='label'>Mail : </span>
                <span className='email'> I.latarse@as-fontenay.fr</span>
                <span className='label'>Téléphone : </span>
                <span className='email'> 01 46 01 98 01</span>
            </div>
        </div>
    </div>
  );
};

export default Squash;