import Retour from "../Composants/Retour";
import Navigation from "./Navigation";

const Anonce3 = () => {
  return (
    <div>
      <Navigation />

      <h1>Interstellar</h1>
      <iframe src="https://youtu.be/UwCaeFD3U4Y" frameborder="0"></iframe>
      <p>
        Dans un futur lointain où l'humanité a colonisé plusieurs planètes, le
        film "Les Échos de l'Infini" nous plonge dans une aventure épique et
        émouvante. L'histoire suit le parcours d'une jeune astrophysicienne
        nommée Nova, qui découvre un signal mystérieux en provenance d'une
        étoile lointaine. Convaincue qu'il s'agit d'un message extraterrestre,
        Nova se lance dans une quête interstellaire pour percer le secret des
        "Échos de l'Infini". Accompagnée d'une équipe hétéroclite de
        scientifiques et d'aventuriers, Nova affronte des dangers cosmiques,
        explore des mondes étranges et rencontre des civilisations
        extraterrestres fascinantes. Mais plus elle se rapproche de la source du
        signal, plus les enjeux deviennent cruciaux, car le destin de l'humanité
        elle-même semble être en jeu. Entre mystères cosmiques, dilemmes
        éthiques et réflexions sur notre place dans l'univers, "Les Échos de
        l'Infini" est un voyage cinématographique captivant qui mélange
        habilement science-fiction, suspense et émotions intenses. Préparez-vous
        à être transportés aux confins de la galaxie et au-delà, dans un voyage
        inoubliable à la découverte de ce qui nous relie tous à l'infini de
        l'espace.
      </p>
      <Retour />
    </div>
  );
};

export default Anonce3;
