import React from 'react';
import "../styles/benevole.css";
import BandeauBenevole from "../images/fondBénévole.png";
import Case1 from "../images/case1.png";
import Case2 from "../images/case2.png";
import Case3 from "../images/case3.png";
import Case4 from "../images/case4.png";
import Case5 from "../images/case5.png";
import Case6 from "../images/case6.png";
import Case7 from "../images/case7.png";
import Case8 from "../images/case8.png";
import Case9 from "../images/case9.png";
import Zigzag from "../images/zigzag.png";
import BandeauBenevoleFormulaire from "../images/bandeau-benevole-formulaire.png";
import ContactFormBenevole from '../components/FormulaireBenevole';


const Benevole = () => {
  return (
    <div>
      <div className='header-benevole'>
        <img src={BandeauBenevole}></img>
      </div>
      <div className='description-benevole'>
        <h2>NOTRE EQUIPE DE BENEVOLES VOUS ATTEND !</h2>
        <p>Devenir bénévole c'est :</p>
        <div className='cases'>
            <div className='colonne'>
              <div className='case'>
                <img src={Case1}></img>
                <p>Participer à la vie de votre club</p>
              </div>
              <div className='case'>
                <img src={Case2}></img>
                <p>Faire perdurer l'activité au sein de l'association</p>
              </div>
              <div className='case'>
                <img src={Case3}></img>
                <p>Avoir un rôle social auprès des enfants</p>
              </div>
            </div>
            <div className='colonne'>
              <div className='case'>
                <img src={Case4}></img>
                <p>Rendre accessible le sport à tous</p>
              </div>
              <div className='case'>
                <img src={Case5}></img>
                <p>Former les jeunes et créer des vocations</p>
              </div>
              <div className='case'>
                <img src={Case6}></img>
                <p>Monter des projets</p>
              </div>
            </div>
            <div className='colonne'>
              <div className='case'>
                <img src={Case7}></img>
                <p>Faire de belles rencontres</p>
              </div>
              <div className='case'>
                <img src={Case8}></img>
                <p>Participer à une experience enrichissante</p>
              </div>
              <div className='case'>
                <img src={Case9}></img>
                <p>Se former et passer des diplômes</p>
              </div>
            </div>
        </div>
      </div>
      <div className='separation'>
        <img src={Zigzag}></img>
      </div>
      <div className='formulaire-benevole'>
        <div className='formulaire-contact-benevole'>
          <ContactFormBenevole></ContactFormBenevole>
        </div>
          <div className='connexion-benevole'>
            <button>Se connecter</button>
          </div>
      </div>

    </div>
  );
};

export default Benevole;