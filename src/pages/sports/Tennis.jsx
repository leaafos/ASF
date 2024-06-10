import React from 'react';
import "../../styles/sports.css";

const Tennis = () => {
  return (
    <div>
        <div className='header athletisme'>
            <div className='nom-sport'>
                <h1>TENNIS</h1>
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
                    <h4>TOUTES LES CATEGORIES</h4>
                    <p><b>TENNIS MUNICIPAUX <br/>COURTS COUVERTS PANORAMA</b><br /><br />21 Bd de Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 17H00-22H00<br/>MARDI 17H00-22H00<br/>JEUDI 17H00-22H00<br/>VENDREDI 17H00-22H00<br/>MERCREDI 09H00-22H00<br/>SAMEDI 09H00-18H00<br/></b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>MINI TENNIS</h4>
                    <p><b>SALLE DE TENNIS DE TABLE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 09H45-11H45</b></p>
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
                <h4>TOUTES LES INFORMATIONS SONT DISPONIBLES SUR LE SITE DE L'ASF TENNIS https.//www.asftennis.com</h4>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>RESPONSABLE ADMINISTRATIVE : </h4>
                <span className='label'>Mail : </span>
                <span className='email'> contact@asftennis.com</span>
                <span className='label'> Téléphone : </span>
                <span className='email'> 01 46 60 86 21</span>
                <span className='label'>Site Web : </span>
                <span className='email'> www.asftennis.com</span>
            </div>
        </div>
    </div>
  );
};

export default Tennis;