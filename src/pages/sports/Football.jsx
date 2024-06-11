import React from 'react';
import "../../styles/sports.css";

const Football = () => {
  return (
    <div>
        <div className='header football'>
            <div className='nom-sport'>
                <h1>FOOTBALL</h1>
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
                    <h4>BABIES (2017-2019) 3-5 ANS</h4>
                    <p><b>TERRAIN SYNTHETIQUE</b><br /><br />Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 10H30-12H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U6/U7 (2017-2018)</h4>
                    <p><b>TERRAIN SYNTHETIQUE</b><br /><br />Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 14H00-15H30< br/>SAMEDI 09H00 - 10H30</b></p>
                </div>
                {/*<hr className='ligne'></hr>*/}
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U8/U9 (2015-2016) MIXTE A 5</h4>
                    <p><b>TERRAIN SYNTHETIQUE</b><br /><br />Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 15H30-17H00<br />SAMEDI 10H30-12H00<br /><br/></b>Séances Gardien U9 uniquement :<br/><b>LUNDI 17H30-18H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U10 (2014) MIXTE A 8</h4>
                    <p><b>TERRAIN SYNTHETIQUE</b><br /><br />Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses<br/><br/>Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>VENDREDI 17H30-19H00</b><i> (parc)</i><br/>< br/>Séances Gardien : <br/><b>LUNDI 17H30 - 18H30 <br/>MERCREDI 15H00 - 16H30 </b><i> (panorama)</i><br/><br/>Matchs à domicile : <br/><b>SAMEDI 10H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U11C/U12C (2013-2012) MIXTE A 8</h4>
                    <p><b>TERRAIN SYNTHETIQUE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses<br/><br/>Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 13H30-15H00</b><i> (panorama)</i><br /><b>VENDREDI 17H30-19H00</b><i> (panorama)</i><br/><br />Matchs à domicile :<br/><b>U11 SAMEDI 11H00<br/>U12 SAMEDI 12H00</b><br/><br/>Séances Gardien : <i>(parc)</i><br/><b>LUNDI 17H30 18H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U13A (2011) MIXTE A 8</h4>
                    <p><b>TERRAIN SYNTHETIQUE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses<br/><br/>Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 17H30-19H00</b><i> (parc)</i><br/><br />Séances Gardien :<br/><b>LUNDI 17H30-18H30</b><br /><br/><b>LUNDI 17H30 - 19H00</b><i> (panorama)</i><br/><br/>Matchs à domicile :<br/><b>SAMEDI 13H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>FEMININE U13/U18 (2011-2006)</h4>
                    <p><b>TERRAIN SYNTHETIQUE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses<br/><br/>Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 18H30-20H00</b><i> (parc)</i><br /><b>VENDREDI 19H00-20H15</b><br /><br/>Séances Gardien : <br/><b>LUNDI 18H30-19H30</b><br/><br/>Matchs à domicile : <i>(panorama)</i><br/><b>SAMEDI 13H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U14 (2010) MIXTE A 8</h4>
                    <p><b>TERRAIN SYNTHETIQUE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses<br/><br/>Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses</p>
                    <p>Séances Gardien : <i>(parc)</i><br/><b>LUNDI 18H30-19H30<br /><br/>MARDI 18H30-20H00</b><i> (panorama)</i><br /><b>JEUDI 18H30 - 20H00</b><br/><br/>Matchs à domicile :<br/><b>SAMEDI 15H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>U16 (2009-2008) MASC. A 11</h4>
                    <p><b>TERRAIN SYNTHETIQUE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses<br/><br/>Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses</p>
                    <p>Séances Gardien :<i>(parc)</i> <br/><b>LUNDI 18H30-19H30<br /><br/>MERCREDI 18H30-20H00 </b><i> (panorama)</i><br /><b>VENDREDI 19H00 - 20H30</b><br/><br/>Matchs à domicile :<br/><b>DIMANCHE 13H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>SENIORS (2005-1987) MASC. A 11</h4>
                    <p><b>TERRAIN SYNTHETIQUE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses<br/><br/>Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses</p>
                    <p>Séances Gardien : <i>(parc)</i><br/><b>LUNDI 18H30-19H30<br/><br />MARDI 20H00-22H00<br />JEUDI 20H00-22H00<br /></b>Matchs à domicile :<br/>Séniors 1 <b>LUNDI 17H30-18H30</b><br/>Séniors 1 <b>LUNDI 17H30-18H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>FUTSAL LOISIRS ADULTES 18 ANS ET +</h4>
                    <p><b>TERRAIN SYNTHETIQUE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>DIMANCHE 18H00-20H00</b></p>
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
            <div className='cotisations-lignes'>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>BABIES 3 A 5 ANS </b></p>
                        <p className='prix-cotisation'><b>150€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>U6 A U12</b></p>
                        <p className='prix-cotisation'><b>290€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>U13 A U16</b></p>
                        <p><i>Ancien adhérent</i></p>
                        <p className='prix-cotisation'><b>285€</b></p>
                    </div>
                </div>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>SENIORS</b></p>
                        <p><i>Renouvellement 230€</i></p>
                        <p className='prix-cotisation'><b>285€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>FEMININES ET VETERANS</b></p>
                        <p className='prix-cotisation'><b>195€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>FUTSAL ADULTES </b></p>
                        <p className='prix-cotisation'><b>200€</b></p>
                    </div>
                </div>
                <div>
                    <h4>EQUIMENET D'ENTRAÎNEMENT ET DE MATCH + LICENSE FF COMPRIS</h4>
                    <p>Remise de 10€ à partir du 2ème enfant lors de l'inscription en ligne sur MonClub avec le code de remise FOOT10</p>
                </div>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>ASF FOOTBALL :</h4>
                <div className='infos-contact'>
                    <span className='label'>Mail : </span>
                    <span className='email'> football@as-fontenay.fr</span>
                    <span className='label'>Téléphone : </span>
                    <span className='email'> 06 68 75 53 41</span>
                    <span className='label'>Site Web : </span>
                    <span className='email'> www.asf-football.net</span>
                    <span className='label'> Instagram : </span>
                    <span className='email'> @asf_football92</span>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Football;