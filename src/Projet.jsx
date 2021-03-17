import React from 'react';
import './Projet.scss';

export default function Projet({titreProjet, imageProjet}) {
  return (
      <div className="Projet">
          <div className="couverture">
            <img src={'images-projets/' + imageProjet + '.png'} alt={titreProjet}/>
          </div>
          <div className="descProjet">
            <h5>{titreProjet}</h5>
            <button>Informations</button>
          </div>
      </div>
  );
}

/**
 * 
 */
function projetCliquer(){
  document.querySelector(".Projet").addEventListener('click', event => {

  });
}