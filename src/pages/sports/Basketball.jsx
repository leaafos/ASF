import React from 'react';
import "../../styles/sports.css";

const BasketBall = () => {
  return (
    <div>
        <div className='header basketball'>
            <div className='nom-sport'>
                <h1>BASKETBALL</h1>
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
                    <h4>BABIES (2017-2019) 4-6 ANS</h4>
                    <p><b>HALLE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 09H00-10H15</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U9 (2015-2016) 7-8 ANS</h4>
                    <p><b>HALLE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 13H30-15H00< br/>SAMEDI 10H15 - 11H30</b></p>
                </div>
                {/*<hr className='ligne'></hr>*/}
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U11 (2015-2016) 9-10 ANS</h4>
                    <p><b>HALLE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 13H00-15H00<br />JEUDI 17H00-18H15</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U13 (2011-2012) 11-12 ANS</h4>
                    <p><b>HALLE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses < br/>Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 18H00-19H15</b><i>(Panorama)</i>< br/><b>MERCREDI 15H00-16H30</b><i>(Jean Fournier)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U13 FEMININE (2011-2012) 11-12 ANS</h4>
                    <p><b>HALLE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 17H30-19H00< br/>JEUDI 18H15-19H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U15 (2009-2010) 13-14 ANS</h4>
                    <p><b>HALLE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses < br/>Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 16H30-18H00</b><i>(Jean Fournier)</i>< br/><b>VENDREDI 17H30-19H00</b><i>(Panorama)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U15 FEMININE (2009-2010) 13-14 ANS</h4>
                    <p><b>HALLE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 17H30-19H00< br/>JEUDI 18H15-19H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U17 EQUIPE 1 (2007-2008) 15-16 ANS</h4>
                    <p><b>HALLE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 19H00-20H30< br/>VENDREDI 19H15-20H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U17 EQUIPE 2 (2007-2008) 15-16 ANS</h4>
                    <p><b>HALLE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses < br/>Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 19H00-20H30</b><i>(Panorama)</i>< br/><b>MERCREDI 18H00-19H30</b><i>(Jean Fournier)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U20 REGION (2004-2006) 17-19 ANS</h4>
                    <p><b>HALLE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 19H00-20H30< br/>JEUDI 19H30-20H45</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U20 EQUIPE 2 (2004-2006) 17-19 ANS</h4>
                    <p><b>HALLE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 19H00-20H30< br/>MERCREDI 19H30-21H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>SENIORS EQUIPE 1 (1978-2003) 20-45 ANS</h4>
                    <p><b>HALLE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses< br/>Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>JEUDI 20H30-20H30</b><i>(Panorama)</i>< br/><b>MARDI 20H30-22H30</b><i>(Jean Fournier)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>SENIORS EQUIPE 2 (1978-2003) 20-45 ANS</h4>
                    <p><b>HALLE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 21H00-20H00</b></p>
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
                <div className='case-cotisation'>
                    <p><b>BABIES</b></p>
                    <p className='prix-cotisation'><b>160€</b></p>
                </div>
                <div className='case-cotisation'>
                    <p><b>U9 A U17 INCLUS</b></p>
                    <p className='prix-cotisation'><b>208€</b></p>
                </div>
                <div className='case-cotisation'>
                    <p><b>ADULTES</b></p>
                    <p><i>(U20 à Séniors)</i></p>
                    <p className='prix-cotisation'><b>224€</b></p>
                </div>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>PRESIDENT CHRISTOPHE HIRSTEL :</h4>
                <span className='label'>Mail : </span>
                <span className='email'> contact.asfbasket@gmail.com</span>
            </div>
        </div>
    </div>
  );
};

export default BasketBall;