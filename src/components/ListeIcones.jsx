import React from "react";
import { Link } from "react-router-dom";
import "../styles/accueil.css";
import IconeAikido from "../images/Accueil/iconesSports/aikido.png";
import IconeAthletisme from "../images/Accueil/iconesSports/athletisme.png";
import IconeBadminton from "../images/Accueil/iconesSports/badminton.png";
import IconeBasket from "../images/Accueil/iconesSports/basket.png";
import IconeBoxeThai from "../images/Accueil/iconesSports/boxeThailandaise.png";
import IconeCapoeira from "../images/Accueil/iconesSports/capoeira.png";
import IconeDanse from "../images/Accueil/iconesSports/danse.png";
import IconeSports from "../images/Accueil/iconesSports/ecoleDesSports.png";
import IconeFitness from "../images/Accueil/iconesSports/fitnessGymBienEtre.png";
import IconeFoot from "../images/Accueil/iconesSports/football.png";
import IconeGymnastiqueArtistique from "../images/Accueil/iconesSports/gymnastiqueArtistique.png";
import IconeGymnastiqueRythmique from "../images/Accueil/iconesSports/gymnastiqueRythmique.png";
import IconeHandball from "../images/Accueil/iconesSports/handball.png";
import IconeJudoJuJitsu from "../images/Accueil/iconesSports/JudoJuJitsu.png";
import IconeKarate from "../images/Accueil/iconesSports/karate.png";
import IconeKungFu from "../images/Accueil/iconesSports/kungFu.png";
import IconeMarcheNordique from "../images/Accueil/iconesSports/marcheNordique.png";
import IconeNatation from "../images/Accueil/iconesSports/natation.png";
import IconeParkour from "../images/Accueil/iconesSports/parkour.png";
import IconePetanque from "../images/Accueil/iconesSports/petanque.png";
import IconeRugby from "../images/Accueil/iconesSports/rugby.png";
import IconeSquash from "../images/Accueil/iconesSports/squash.png";
import IconeTaeKwonDo from "../images/Accueil/iconesSports/TaeKwonDo.png";
import IconeTennis from "../images/Accueil/iconesSports/tennis.png";
import IconeTennisDeTable from "../images/Accueil/iconesSports/tennisDeTable.png";
import IconeVolleyball from "../images/Accueil/iconesSports/volleyball.png";
import IconeYoga from "../images/Accueil/iconesSports/yoga.png";

const sports = [
    { name : "aikido", icon: IconeAikido, path: "/aikido"},
    { name : "athletisme", icon: IconeAthletisme, path: "/athletisme"},
    { name : "badminton", icon: IconeBadminton, path: "/badminton"},
    { name : "basketball", icon: IconeBasket, path: "/basketball"},
    { name : "boxeThailandaise", icon: IconeBoxeThai, path: "/boxethailandaise"},
    { name : "capoeira", icon: IconeCapoeira, path: "/capoeira"},
    { name : "danse", icon: IconeDanse, path: "/ecolededanse"},
    { name : "ecoleDesSports", icon: IconeSports, path: "/ecoledesdports"},
    { name : "fitness", icon: IconeFitness, path: "/fitness"},
    { name : "football", icon: IconeFoot, path: "/football"},
    { name : "gymnastiqueartistique", icon: IconeGymnastiqueArtistique, path: "/gymnastiqueartistique"},
    { name : "gymnastiquerythmique", icon: IconeGymnastiqueRythmique, path: "/gymnastiquerythmique"},
    { name : "handball", icon: IconeHandball, path: "/handball"},
    { name : "judojujitsu", icon: IconeJudoJuJitsu, path: "/judojujitsu"},
    { name : "karate", icon: IconeKarate, path: "/karate"},
    { name : "kungfu", icon: IconeKungFu, path: "/kungfu"},
    { name : "marchenordique", icon: IconeMarcheNordique, path: "/marchenordique"},
    { name : "natation", icon: IconeNatation, path: "/natation"},
    { name : "parkour", icon: IconeParkour, path: "/parkour"},
    { name : "petanque", icon: IconePetanque, path: "/petanque"},
    { name : "rugby", icon: IconeRugby, path: "/rugby"},
    { name : "squash", icon: IconeSquash, path: "/squash"},
    { name : "taekwondo", icon: IconeTaeKwonDo, path: "/taekwondo"},
    { name : "tennis", icon: IconeTennis, path: "/tennis"},
    { name : "tennisdetable", icon: IconeTennisDeTable, path: "/tennisdetable"},
    { name : "volleyball", icon: IconeVolleyball, path: "/volleyball"},
    { name : "yoga", icon: IconeYoga, path: "/yoga"},
]

const ListeIcones = () => {
    return (
        <div className='sports-icones-container'>
            <div className='sports-liste'>
                {sports.map((sport, index) => (
                    <Link key={index} to={sport.path} className='sport-link'>
                        <div className='sport-item'>
                            <img src={sport.icon} alt={sport.name} />
                            <span>{sport.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ListeIcones;