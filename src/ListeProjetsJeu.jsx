import React from 'react';
import Projet from './Projet';
import tabProjets from './data/projets.json';
import './ListeProjets.scss';

export default function ListeProjetsJeu() {
  return(
    <div className="ListeProjets"  id="ProjetsJeu">
      <ul>
        {
          tabProjets.filter(projet => projet.typeProjet == "jeu").map( 
            projet => <li><Projet key={projet} {...projet}/></li>
          )
        }
      </ul>
    </div>
  );
}