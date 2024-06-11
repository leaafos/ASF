import React from 'react';
import "../../styles/sports.css";

const Rugby = () => {
  return (
    <div>
        <div className='header athletisme'>
            <div className='nom-sport'>
                <h1>RUGBY</h1>
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
                    <h4>BABY RUGBY A PARTIR DE 3 ANS</h4>
                    <p><b>TERRAIN EN HERBE <br/>COULEE VERTE</b></p>
                    <p><b>MERCREDI 14H00-15H00<br/>MERCREDI 15H00 - 16H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U6 (2018)</h4>
                    <p><b>TERRAIN EN HERBE <br/>COULEE VERTE</b></p>
                    <p><b>MERCREDI 14H00-16H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U8 (2016 - 2017)<br/>U10 (2014 - 2015)<br/>U12 (2012 - 2013)</h4>
                    <p><b>TERRAIN EN HERBE <br/>COULEE VERTE</b></p>
                    <p><b>MERCREDI 14H00-16H00<br/>SAMEDI 10H00 - 11H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>RUGBY ADAPTE 9 - 12 ANS</h4>
                    <p><b>TERRAIN EN HERBE <br/>COULEE VERTE</b></p>
                    <p><b>MERCREDI 09H30-10H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>RUGBY ADAPTE SENIORS</h4>
                    <p><b>TERRAIN EN HERBE <br/>COULEE VERTE</b></p>
                    <p><b>JEUDI 20H00-22H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>RUGBY A 5 MIXTE</h4>
                    <p><b>TERRAIN EN HERBE <br/>COULEE VERTE</b></p>
                    <p><b>MARDI 20H00-22H00<br/>SAMEDI 10H00 - 11H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>FOLKLOS (+ 35 ANS)</h4>
                    <p><b>TERRAIN EN HERBE <br/>COULEE VERTE</b></p>
                    <p><b>MERCREDI 20H00-22H00<br/>DIMANCHE 10H00 - 12H00</b></p>
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
                        <p><b>BABY / U6</b></p>
                        <p className='prix-cotisation'><b>100€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>U8 / U10 / U12 / U14</b></p>
                        <p className='prix-cotisation'><b>210€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>SENIORS</b></p>
                        <p className='prix-cotisation'><b>250€</b></p>
                    </div>
                </div>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>FOLKLOS</b></p>
                        <p className='prix-cotisation'><b>220€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>RUGBY A 5 MIXTE</b></p>
                        <p className='prix-cotisation'><b>130€</b></p>
                    </div>
                </div>
                <h4>Remise lors de l'inscription en ligne sur MonClub avec les codes suivants : <br/>FRATERIE10 -10% à partir du 2ème enfant <br/>FRATERIE20 -20% à partir du 3ème enfant</h4>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>ECOLE DE RUGBY : TONY VALIER-BRASIER</h4>
                <span className='label'>Mail : </span>
                <span className='email'> edr.fontenay@gmail.com</span>
                <span className='label'>Téléphone : </span>
                <span className='email'>06 54 95 79 89</span>
            </div>
            <div className='contacts'>
                <h4>RUGBY ADAPTE : KARINE GRENIER</h4>
                <span className='label'>Mail : </span>
                <span className='email'> grenierkarine@yahoo.fr</span>
                <span className='label'>Téléphone : </span>
                <span className='email'>06 99 51 15 32</span>
            </div>
            <div className='contacts'>
                <h4>RUGBY A 5 MIXTE : PIERRE CHOUTEAU</h4>
                <span className='label'>Téléphone : </span>
                <span className='email'>06 84 96 96 62</span>
            </div>
            <div className='contacts'>
                <h4>RUGBY SENIORS : STEPAHNIE LECUYER</h4>
                <span className='label'>Téléphone : </span>
                <span className='email'>06 84 10 44 49</span>
                <span className='label'>Réseaux sociaux : </span>
                <span className='email'>www.facebook.com/rygbyasf/</span>
            </div>
        </div>
    </div>
  );
};

export default Rugby;