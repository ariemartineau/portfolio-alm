import './Appli.scss';
import './Variables.scss';
import Entete from './Entete';
import Accueil from './Accueil';
import ListeProjetsWeb from './ListeProjetsWeb';
import ListeProjetsJeu from './ListeProjetsJeu';

export default function Appli() {
  return (
    <div className="Appli">
        <Entete className="Entete"/>
        <section className="contenu-principal">
          <Accueil/>
          <ListeProjetsWeb/>
          <ListeProjetsJeu/>
        </section>
    </div>
  );
}

window.onscroll = function() {
  if(window.scrollY >= document.getElementById("Accueil").offsetTop) {
    devientActif("Accueil");
  }
  if(window.scrollY >= document.getElementById("ProjetsWeb").offsetTop) {
    devientActif("ProjetsWeb");
  }
  if(window.scrollY >= document.getElementById("ProjetsJeu").offsetTop) {
    devientActif("ProjetsJeu");
  }
}

function devientActif(element){
  document.querySelector('a[href="#' + element + '"]').className = "active";
}
