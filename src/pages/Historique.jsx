import React from 'react';
import "../styles/historique.css";
import Bandeau from "../images/Historique/bandeau-historique.png";
import ImageHistoire from "../images/Historique/photo-historique.png";
import ZigZag from "../images/zigzag.png";
import BandeauSeparation from "../images/Historique/bandeau-separation-historique.png";

const Historique = () => {
  return (
    <div>
      <div className='header-historique'>
        <img src={Bandeau}></img>
      </div>
      <div className='histoire'>
        <div className='texte-histoire'>
          <h3>HISTOIRE DE L'ASSOCIATION</h3>
          <p>L'association Sportive Fontennaissienne est un club omnisports créé en 1961 à Fontenay-aux-Roses avec pour objectif de proposer des activités physiques et sportives dans la ville avec un rôle social important.</p>
          <p>Elle compte aujourd'hui plus de 3 600 adhérents chaque année, porpose près de 30 activités sportives différentes et met en place des projets, des compétitions, des activités handisports, des animations, des spectacles... seule ou en partenariat avec d'autres associations et/ou les services municipaux de la ville de Fontenay-aux-Roses.</p>
        </div>
        <img src={ImageHistoire}></img>
      </div>
      <div className='presidents'>
        <h3>LES PRESIDENT(E)S DE L'ASSOCIATION</h3>
         {/**la frise chrono ici */}
      </div>
      <div className='separations'>
        <img src={ZigZag} className='zigzag'></img>
        <img src={BandeauSeparation}></img>
      </div>
      <div className='assemblee-generale'>
        <h3>BENEVOLES ELUS EN 2022 EN ASSEMBLEE GENERALE</h3>
        <p>Comité Directeur ASF</p>
        <div className='arbre-assemblee-generale'>
          <div className='colonne ligne1'>
            <div className='case'>
              <h3>PRESIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
          </div>
          <div className='colonne ligne2'>
            <div className='case'>
              <h3>PRESIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
            <div className='case'>
              <h3>PRESIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
          </div>
          <div className='colonne ligne3'>
            <div className='case'>
              <h3>PRESIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
            <div className='case'>
              <h3>PRESIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
            <div className='case'>
              <h3>PRESIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
            <div className='case'>
              <h3>PRESIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
          </div>
          <div className='colonne ligne4'>
            <div className='case'>
              <h3>PRESIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
            <div className='case'>
              <h3>PRESIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
            <div className='case'>
              <h3>PRESIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
          </div>
          <div className='colonne ligne5'>
            <div className='case'>
              <h3>PRESIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
            <div className='case'>
              <h3>PRESIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
          </div>
          <div className='status'>
            <h3>STATUS ET REGLEMENTS</h3>
            <p>Les Status de l'association modifés en 2021</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Historique;