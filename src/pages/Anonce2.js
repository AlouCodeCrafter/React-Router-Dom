import Retour from "../Composants/Retour";
import Navigation from "./Navigation";

const Anonce2 = () => {
  return (
    <div>
      <Navigation />

      <h1>Le Seigneur des Anneaux : La Communauté de l'Anneau</h1>
      <iframe src="https://youtu.be/6oes49q1aDY?si=uthz4LjfBcSBxi3U" />
      <p>
        Dans un futur proche, la Terre est frappée par des phénomènes
        climatiques extrêmes qui menacent l'humanité. Pour percer le mystère de
        ces bouleversements, une équipe de scientifiques intrépides se lance
        dans une expédition périlleuse au cœur des océans. Sous les eaux
        tumultueuses, ils découvrent un monde fascinant et terrifiant, peuplé de
        créatures étranges et de secrets enfouis depuis des siècles. Alors que
        leur mission prend une tournure inattendue, les membres de l'équipe
        doivent faire face à des dangers insoupçonnés et à des choix déchirants
        qui pourraient changer le destin de la planète à jamais. Avec des effets
        visuels époustouflants, une intrigue captivante et des performances
        remarquables, "L'Énigme des Profondeurs" promet un voyage
        cinématographique palpitant qui mêle aventure, suspense et réflexion sur
        l'avenir de notre monde.
      </p>
      <Retour />
    </div>
  );
};

export default Anonce2;
