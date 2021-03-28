import React from 'react';
import './Accueil.scss';
import { Favorite, Face, Games, MenuBook, Movie, Code, Create} from '@material-ui/icons';

export default function Accueil() {
  return(
    <div className="Accueil"  id="Accueil" >
      <h1>Bonjour, je suis <br/><span>Ariane Laferrière-Martineau</span></h1>
      <h4>Finissante en Techniques d'Intégration Multimédia</h4>
      <div className="desc">
        <p>
        <span>Qui je suis <Face /> : </span>
          Je suis une jeune femme passionnée par les jeux vidéos et le Web. Je possède une personnalité autant créative que technique, ce qui fait de moi quelqu'un de très polyvalente qui aime autant la <span>création</span> que la <span>programmation</span> d'un projet multimédia J'ai étudié en programme linguistique au secondaire ce qui fait de moi une personne <span>bilingue</span>. Au cégep, j'ai choisi ma technique avec comme but de travailler un jour dans l'industrie du <span>jeu vidéo</span>. Aujourd'hui, en plus de on intérêt marqué vers cette industrie, j'ai également développé un intérêt comme <span>développeuse Web</span>.
        </p>

        <div>
          <span>Ce que j'aime <Favorite /> : </span>
          <ul>
            <li><Games fontSize="small"/> Jeux Vidéo</li>
            <li><MenuBook fontSize="small"/> Lecture</li>
            <li><Movie fontSize="small"/> Netflix</li>
            <li><Code fontSize="small"/> Programmation</li>
            <li><Create fontSize="small"/> Création</li>
          </ul>
        </div>
      </div>
    </div>
  );
}