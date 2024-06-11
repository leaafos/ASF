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
                    <p><b>LUNDI 20H30-22H30<br/>MERCREDI 13H30-15H00</b><i> (Débutants)</i><br/><b>MERCREDI 15H00-16H30</b><i> (Confirmés et compétiteurs)</i><br/><b>VENDREDI 17H00-19H30</b><i> (Perfectionnement et compétiteurs)</i></p>
                </div>
                <hr className='ligne-titre'></hr>
                <div className='entrainement-ligne'>
                    <h4>COMPETITEURS</h4>
                    <p><b>SALLE TENNIS DE TABLE, 1ER ETAGE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 20H30-22H45<br/>VENDREDI 17H30-19H30</b><i> (Perfectionnement et compétiteurs)</i></p>
                </div>
                <hr className='ligne-titre'></hr>
                <div className='entrainement-ligne'>
                    <h4>LIBRE TOUT PUBLIC</h4>
                    <p><b>SALLE TENNIS DE TABLE, 1ER ETAGE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 12H00-14H00<br/>MARDI 12H00-14H00<br/>MERCREDI 12H00-13H30<br/>JEUDI 12H00-14H00 ET 17H00-18H30<br/>VENDREDI 12H00-14H00<br/>SAMEDI 12H00-22H45</b><br/><i> (Hors compétition)</i><br/><b>DIMANCHE 08H00-19H45</b><br/><i> (Hors compétition)</i></p>
                </div>
                <hr className='ligne-titre'></hr>
                <div className='entrainement-ligne'>
                    <h4>ENTRAÎNEMENTS LIBRE & CORPO</h4>
                    <p><b>SALLE TENNIS DE TABLE, 1ER ETAGE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 17H00-20H30<br/>MERCREDI 16H30-20H30</b></p>
                </div>
                <hr className='ligne-titre'></hr>
                <div className='entrainement-ligne'>
                    <h4>ENTRAINEMENTS LOBRE (HORS COMPETITION)</h4>
                    <p><b>SALLE TENNIS DE TABLE, 1ER ETAGE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 20H00-23H00<br/>JEUDI 20H00-22H45<br/>VENDREDI 19H30-22H45</b></p>
                </div>
                <hr className='ligne-titre'></hr>
                <div className='entrainement-ligne'>
                    <h4>ENTRAÎNEMENTS CORPOS</h4>
                    <p><b>SALLE TENNIS DE TABLE, 1ER ETAGE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 08H00-12H00</b></p>
                </div>
                <hr className='ligne-titre'></hr>
                <div className='entrainement-ligne'>
                    <h4>ACTIVITE HANDISPORT</h4>
                    <p><b>SALLE TENNIS DE TABLE, 1ER ETAGE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 14H00-15H30</b><br/><i>(Réservé exclusivement à l'hôpital de jour)</i></p>
                </div>
                <hr className='ligne-titre'></hr>
                <div className='entrainement-ligne'>
                    <h4>COMPETITIONS CORPORATIVES</h4>
                    <p><b>SALLE TENNIS DE TABLE, 1ER ETAGE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>JEUDI 18H30-22H20</b></p>
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
                <h4>TOUTES LES INFORMATIONS SONT DISPONIBLES SUR LE SITE DE l'ASF TENNIS hhtps://www.asftennis.com</h4>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>REPSONSABLE ADMINISTRATIVE : </h4>
                <span className='label'>Mail : </span>
                <span className='email'> contact@asftennis.com</span>
                <span className='label'>Téléphone : </span>
                <span className='email'> 01 46 60 86 21</span>
                <span className='label'>Site Web : </span>
                <span className='email'> www.asftennis.com</span>
            </div>
        </div>
    </div>
  );
};

export default TennisDeTable;