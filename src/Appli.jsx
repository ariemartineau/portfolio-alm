import './Appli.scss';
import './Variables.scss';
import Navigations from './Navigations';
import Accueil from './Accueil';
import ListeProjetsWeb from './ListeProjetsWeb';
import ListeProjetsJeu from './ListeProjetsJeu';
import { ArrowUpward } from '@material-ui/icons';
import DescProjet from './DescProjet';

export default function Appli() {
  return (
    <div className="Appli">
      <Navigations className="Navigations"/>
        <section className="contenu-principal">
          <Accueil/>
          <DescProjet/>
          <ListeProjetsWeb/>
          <ListeProjetsJeu/>
        </section>
      <button className="btnTop" onClick={() => window.scrollTo({top:0})}> <ArrowUpward/> </button>
    </div>
  );
}

/**
 * Change l'apparence du bouton vers le haut de la page et la couleur 
 * de fond de la navigation lorsque l'utilisateur n'est plus au haut.
 */
window.onscroll = function() {
  if(window.scrollY > 0) {
    document.querySelector(".Navigations").classList.add("scoll");
    document.querySelector(".btnTop").classList.remove("cache");
  }
  else{
    document.querySelector(".Navigations").classList.remove("scoll");
    document.querySelector(".btnTop").classList.add("cache");
  }
}

/**
 * Change le style des liens de la navigation principale lorsque
 * l'utilisateur se trouve dans la section.
 * source: https://www.youtube.com/watch?v=MXlAkBzKbpc&ab_channel=gjokobulovski
 */
window.addEventListener('scroll', event => {
  let liensNav = document.querySelectorAll('ul.navPrincipale li a');
  let fromTop = window.scrollY;

  liensNav.forEach(lien => {
    let section = document.querySelector(lien.hash);
    
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      lien.classList.add('active');
    }
    else {
      lien.classList.remove('active');
    }
  })
});
