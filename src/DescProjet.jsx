import React from 'react';
import './DescProjet.scss';
import { HighlightOff } from '@material-ui/icons';

export default function DescProjet() {
  
  /**
   * Fonction qui ajoute la classe CSS au composant pour qu'il disparaisse.
   */
  function fermerDescProjet() {
    document.querySelector(".DescProjet").classList.remove("lightboxActive");
  }

  return (
    <div className="DescProjet">
      <div className="conteneurImg">
        <button className="btnFermeLightbox" onClick={fermerDescProjet}><HighlightOff className="iconeFermeLightbox"/></button>
        <img id="imgLightbox" alt=""/>
      </div>
      <h4 id="titreLightbox"></h4>
      <div id="descLightbox"></div>
      <div className="divTaches">
        <span> Mes tâches:</span><p id="tachesLightbox"></p>
      </div>
      <div className="divTechnos">
        <span>Les technologies utilisées:</span><p id="technosLightbox"></p>
      </div>
      <button className="btnVoirProjet"><a id="btnLightbox" href="" target="_blank">Voir le projet</a></button>
    </div>
  );
}