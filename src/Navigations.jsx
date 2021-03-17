import React from 'react';
import './Navigations.scss';
import { ButtonGroup } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Email, LinkedIn, GitHub } from '@material-ui/icons';

export default function Navigations() {
  return(
    <header className="Navigations">
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
    </header>
  );
}