import React from 'react';
import "../../styles/sports.css";

const GymnastiqueArtistique = () => {
  return (
    <div>
        <div className='header athletisme'>
            <div className='nom-sport'>
                <h1>GYMNASTIQUE ARTISTIQUE</h1>
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
                <p>La gymnastique artistique est une discipline athlétique consistant à enchaîner des mouvements acrobatiques sur des agrès. La compétition se déroule de deux manières : en concours par équipe et en concours individuel. Ce dernier se subdivise en concours général (l'intégralité des agrès) et en concours par appareil. Chez les femmes, il existe quatre agrès : le saut de cheval, les barres asymétriques, la poutre et le sol. <br/><br/>Atelier de motricité parent-bébé : s’adresse aux bébés âgés de 3 à 18 mois. L’objectif des ateliers est d’offrir un espace de motricité adapté pour soutenir le développement psychomoteur du tout-petit. <br/><br/>Dans les ateliers, la psychomotricienne est présente pour accompagner et encourager l’enfant dans ses découvertes, sans faire à sa place. L’enfant est alors acteur de son développement soutenu par le regard attentif et bienveillant des adultes. C’est également un espace de rencontre pour les parents et les enfants. La psychomotricienne pourra répondre à toutes les questions concernant le développement psychomoteur des enfants. <br/><br/>Yoga prénatal et postnatal (méthode De Gasquet) : Espace de bien-être et de rencontre entre les futures mamans et les jeunes mamans. Ils ont pour objectif de soulager les douleurs mécaniques et fonctionnels du corps (douleur au niveau du dos, des cervicales, du bassin ou encore les troubles digestifs), d’acquérir les postures et les respirations adaptées pour améliorer le bien-être de la future maman et de son bébé, récupérer forme et énergie après l’accouchement. Le yoga prénatal s’adresse aux femmes enceintes à partir du second trimestre.<br/><br/>Les jeunes mamans pourront participer aux cours de yoga postnatal 5 à 6 semaines après l’accouchement, les nouveau-nés seront les bienvenus pendant les ateliers. Nous mettrons à disposition des tapis et des matelas de change.</p>
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
                    <h4>2018 A 2019</h4>
                    <p><b>SALLE TENNIS DE TABLE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 09H00-09H45</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>2013 A 2017</h4>
                    <p><b>PISTE ET TERRAIN D'HONNEUR</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 16H30-18H00< br/> OU SAMEDI 10H15 - 12H00</b></p>
                </div>
                {/*<hr className='ligne'></hr>*/}
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>2008 ET AVANT</h4>
                    <p><b>PISTE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 18H30-20H00<br />MERCREDI 19H00-21H00<br />VENDREDI 20H00-21H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>2009 A 2012</h4>
                    <p><b>PISTE ET TERRAIN D'HONNEUR</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 18H00-20H00< br/>VENDREDI 18H30-20H00</b></p>
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

export default GymnastiqueArtistique;