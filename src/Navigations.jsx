import React from 'react';
import './Navigations.scss';
import { ButtonGroup } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Email, LinkedIn, GitHub, Close, Menu } from '@material-ui/icons';

export default function Navigations() {
  /**
   * Fonction qui gère l'ouverture et la fermeture de la
   * navigation sur mobile.
   */
  function ouvreNavBurger() {
    let btnBurger = document.querySelector(".b-menu");
    let menuBurger = document.querySelector(".contenuNav");
    if(btnBurger.classList.contains("menu-ouv")) {
      menuBurger.classList.remove("ouvreNav");
      btnBurger.classList.remove("menu-ouv");
    }

    else {
      btnBurger.classList.add("menu-ouv");
      menuBurger.classList.add("ouvreNav");
    }
  }
  return(
    <header className="Navigations">
      <div className="navBurger">
        <h6>Ariane L.M.</h6>
        <div className="b-menu" onClick={ouvreNavBurger}>
          <div className="b-bun b-bun--top"></div>
          <div className="b-bun b-bun--mid"></div>
          <div className="b-bun b-bun--bottom"></div>
        </div>
      </div>
      <div className="contenuNav">
        <ul className="navPrincipale">
          <li><a href="#Accueil">ALM</a></li>
          <li><a href="#ProjetsWeb">Projets Web</a></li>
          <li><a href="#ProjetsJeu">Projets Jeu</a></li>
        </ul>
        <ul className="navUtil">
          <ButtonGroup>
            <IconButton onClick={() => {navigator.clipboard.writeText("ariane.laferriere.martineau@gmail.com")}} className="btnContacts" aria-label="email">
              <Email/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/ariane-laferri%C3%A8re-martineau-221784204/" target="_blank" className="btnContacts" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
            <IconButton href="https://github.com/ariemartineau" target="_blank" className="btnContacts" aria-label="GitHub">
              <GitHub />
            </IconButton>
          </ButtonGroup>
        </ul>
      </div>
    </header>
  );
}