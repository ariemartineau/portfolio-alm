import React from 'react';
import './Projet.scss';
import { useState } from 'react';

export default function Projet({titreProjet, imageProjet, descProjet, tachesProjet, technoProjet, lienProjet}) {
  /**
   * Fonction qui envoie les données du projet à afficher dans le composant DescProjet.
   * Ajoute les classes nécéssaires à l'apparition du composant DescProjet.
   */
  function projetCliquer(){
    // Aller chercher les éléments du composants de decription de projet.
    const imgLightbox = document.getElementById("imgLightbox");
    imgLightbox.src = `images-projets/${imageProjet}.png`;
    imgLightbox.alt = `${titreProjet}`;
    const titreLightbox = document.getElementById("titreLightbox");
    titreLightbox.innerHTML = `${titreProjet}`;
    const descLightbox = document.getElementById("descLightbox");descLightbox.innerHTML = `${descProjet}`;
    const tachesLightbox = document.getElementById("tachesLightbox");tachesLightbox.innerHTML = `${tachesProjet}`;
    const technosLightbox = document.getElementById("technosLightbox");technosLightbox.innerHTML = `${technoProjet}`;
    const btnLightbox = document.getElementById("btnLightbox");btnLightbox.href = `${lienProjet}`;

    const lightbox = document.getElementsByClassName("DescProjet")[0];
    lightbox.classList.remove("lightboxInactive");
    lightbox.classList.add("lightboxActive");
  }

  return (
      <div className="Projet">
          <div className="couverture">
            <img src={'images-projets/' + imageProjet + '.png'} alt={titreProjet}/>
          </div>
          <div className="descProjet">
            <h5>{titreProjet}</h5>
            <button onClick={projetCliquer}>Informations</button>
          </div>
      </div>
  );
}