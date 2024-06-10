import React from 'react';
import "../../styles/sports.css";

const VolleyBall = () => {
  return (
    <div>
        <div className='header athletisme'>
            <div className='nom-sport'>
                <h1>VOLLEY BALL</h1>
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
                    <h4>ECOLE DE VOLLEY <br/>A PARTIR DE 6 ANS (2013 ET +)</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 17H00-18H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>M13/M15 FILLES (2009 A 2012)</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 17H00-18H30</b></p>
                </div>
                {/*<hr className='ligne'></hr>*/}
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>M13/M15 GARCONS (2009 A 2012)</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 17H30-18H30<br />OU LUNDI 17H00-18H45</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>M18 FILLES (1) (2006 A 2008)</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses<b>HALLE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 18H30-20H30< br/>VENDREDI 18H45-20H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>M18 FILLES (2) (2006 A 2008)</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 18H45-20H30<br />MERCREDI 18H30-20H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>M21 FILLES (2003 A 2005)</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 18H45-20H30<br />MERCREDI 18H30-20H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>M18/M21 GARCONS (2003 A 2008)</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 18H45-20H30<br />MERCREDI 18H30-20H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>VOLLEY LOISIR</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 20H30-22H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>NATIONALE 3, REGIONAL LOISIRS CONPETITION</h4>
                    <p><b>CONTACTER LE 06 28 54 45</b></p>
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
                        <p><b>ECOLE DE VOLLEY (2013 ET +)</b></p>
                        <p className='prix-cotisation'><b>200€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>M13/M15 (2009 A 2012)</b></p>
                        <p className='prix-cotisation'><b>210€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>M18/M21 (2003 A 2008)</b></p>
                        <p className='prix-cotisation'><b>220€</b></p>
                    </div>
                </div>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>VOLLEY LOISIR</b></p>
                        <p className='prix-cotisation'><b>250€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>SENIORS COMPETITION (2002 et -)</b></p>
                        <p className='prix-cotisation'><b>260€</b></p>
                    </div>
                </div>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>PRESIDENT PHILIPPE SCHAUB : </h4>
                <span className='label'>Mail : </span>
                <span className='email'> philoufox@gmail.com</span>
                <span className='label'>Téléphone : </span>
                <span className='email'> 06 28 25 51 45</span>
                <span className='label'>Site Web : </span>
                <span className='email'> www.asvolley.fr</span>
            </div>
        </div>
    </div>
  );
};

export default VolleyBall;