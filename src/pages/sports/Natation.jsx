import React from 'react';
import "../../styles/sports.css";

const Natation = () => {
  return (
    <div>
        <div className='header athletisme'>
            <div className='nom-sport'>
                <h1>NATATION</h1>
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
                    <h4>BEBES NAGEURS 3 A 6 MOIS</h4>
                    <p><b>PISCINE MUNICIPALE DE FONTENAY</b><br /><br />22 rue jean jaurès, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 09H00-09H30<br/>SAMEDI 9H30-10H00<br/>SAMEDI 10H00-10H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>PETITS BAIGNEURS</h4>
                    <p><b>PISCINE MUNICIPALE DE FONTENAY</b><br /><br />22 rue jean jaurès, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 09H00-09H45<br/>SAMEDI 9H45-10H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>JEUNES 9 A 18 ANS</h4>
                    <p><b>PISCINE MUNICIPALE DE FONTENAY</b><br /><br />22 rue jean jaurès, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 18H15-19H15<br/>MARDI 19H00-20H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>JEUNES 6 A 9 ANS</h4>
                    <p><b>PISCINE MUNICIPALE DE FONTENAY</b><br /><br />22 rue jean jaurès, 92260 Fontenay-aux-Roses</p>
                    <p><b>JEUDI 17H00-18H00<br/>JEUDI 18H00-190H00<br/>VENDREDI 17H00-18H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>HANDISPORT JEUNES</h4>
                    <p><b>PISCINE MUNICIPALE DE FONTENAY</b><br /><br />22 rue jean jaurès, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 17H00-18H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>HANDISPORT ADULTES</h4>
                    <p><b>PISCINE MUNICIPALE DE FONTENAY</b><br /><br />22 rue jean jaurès, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 19H15-20H15<br/>MARDI 20H00-21H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>AQUAGYM</h4>
                    <p><b>PISCINE MUNICIPALE DE FONTENAY</b><br /><br />22 rue jean jaurès, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 19H15-20H00<br/>MERCREDI 20H00-20H45<br/>MERCREDI 20H45-21H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>AQUA BIKE</h4>
                    <p><b>PISCINE MUNICIPALE DE FONTENAY</b><br /><br />22 rue jean jaurès, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 09H00-09H30<br/>MERCREDI 09H30-10H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>LES AÎNES</h4>
                    <p><b>PISCINE MUNICIPALE DE FONTENAY</b><br /><br />22 rue jean jaurès, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 11H30-12H30<br/>LUNDI 12H30-13H30<br/>LUNDI 16H00-17H00</b></p>
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
                        <p><b>BEBES NAGEURS FONTENAISIENS</b></p>
                        <p className='prix-cotisation'><b>260€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>BEBES NAGEURS HORS COMMUNE</b></p>
                        <p className='prix-cotisation'><b>280€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>PETITS BAIGNEURS FONTENAISIENS</b></p>
                        <p className='prix-cotisation'><b>150€</b></p>
                    </div>
                </div>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>PETITS BAIGNEURS HORS COMMUNE</b></p>
                        <p className='prix-cotisation'><b>170€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>JEUNES 6 A 18 ANS FONTENAISIENS</b></p>
                        <p className='prix-cotisation'><b>150€</b></p>
                        <p>(1H PAR SEMAINE)</p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>JEUNES 6 A 18 ANS HORS COMMUNE</b></p>
                        <p className='prix-cotisation'><b>160€</b></p>
                        <p>(1H PAR SEMAINE)</p>
                    </div>
                </div>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>HANDISPORT JEUNES</b></p>
                        <p className='prix-cotisation'><b>125€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>HANDISPORT ADULTES</b></p>
                        <p className='prix-cotisation'><b>155€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>ADULTES FONTENAISIENS </b></p>
                        <p className='prix-cotisation'><b>170€</b></p>
                        <p>(1H PAR SEMAINE)</p>
                        <p className='prix-cotisation'><b>240€</b></p>
                        <p>(2H PAR SEMAINE)</p>
                    </div>
                </div>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>ADULTES HORS COMMUNE</b></p>
                        <p className='prix-cotisation'><b>205€</b></p>
                        <p>(1H PAR SEMAINE)</p>
                        <p className='prix-cotisation'><b>270€</b></p>
                        <p>(2H PAR SEMAINE)</p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>AQUAGYM FONTENAISIENS</b></p>
                        <p className='prix-cotisation'><b>190€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>AQUAGYM HORS COMMUNE</b></p>
                        <p className='prix-cotisation'><b>210€</b></p>
                    </div>
                </div>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>AQUA BIKE FONTENAISIENS</b></p>
                        <p className='prix-cotisation'><b>420€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>AQUA BIKE HORS COMMUNE</b></p>
                        <p className='prix-cotisation'><b>480€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>LES AÎNES FONTENAISIENS</b></p>
                        <p className='prix-cotisation'><b>162€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>LES AÎNES HORS COMMUNE</b></p>
                        <p className='prix-cotisation'><b>183€</b></p>
                    </div>
                </div>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>PRESIDENT BRUNO GUIDAL : </h4>
                <span className='label'>Mail : </span>
                <span className='email'> asf-natation@hotmail.fr</span>
            </div>
        </div>
    </div>
  );
};

export default Natation;