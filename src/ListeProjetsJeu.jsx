import React from 'react';
import Projet from './Projet';
import tabProjets from './data/projets.json';
import './ListeProjets.scss';

export default function ListeProjetsJeu() {
  return(
    <div className="ListeProjets"  id="ProjetsJeu">
    <h2>Mes projets Jeu</h2>
      <ul>
        {
          tabProjets.filter(projet => projet.typeProjet == "jeu").map( 
            projet => <li key={projet.titreProjet}> <Projet key={projet} {...projet}/></li>
          )
        }
      </ul>
    </div>
  );
}