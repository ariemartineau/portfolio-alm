import React from 'react';
import Projet from './Projet';
import tabProjets from './data/projets.json';
import './ListeProjets.scss';

export default function ListeProjetsWeb() {
  return(
    <div className="ListeProjets"  id="ProjetsWeb">
      <ul>
        {
          tabProjets.filter(projet => projet.typeProjet == "web").map( 
            projet => <li><Projet key={projet} {...projet}/></li>
          )
        }
      </ul>
    </div>
  );
}