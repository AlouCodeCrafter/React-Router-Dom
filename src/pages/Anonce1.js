import Retour from "../Composants/Retour";
import Navigation from "./Navigation";
const Anonce1 = () => {
  return (
    <div>
      <Navigation />
      <h1>Inception</h1>
      <iframe
        src="https://youtu.be/6oes49q1aDY?si=wHFPdjfm3dO7e6ad"
        frameborder="0"
      ></iframe>
      <p>
        Dans un monde fantastique où la magie et l'aventure se côtoient, "Le
        Secret de l'Émeraude" transporte les spectateurs dans un périple épique
        et mystérieux. L'histoire débute dans le royaume enchanté d'Emeraldia,
        réputé pour abriter une puissante gemme légendaire, l'Émeraude
        d'Eternité, dont les pouvoirs pourraient changer le destin de toute la
        contrée. Le récit suit les pas de Luna, une jeune apprentie sorcière
        dotée d'un don exceptionnel pour la magie élémentaire. Lorsque
        l'Émeraude d'Eternité est dérobée par les forces obscures dirigées par
        le sorcier maléfique Arkanor, Luna se lance courageusement dans une
        quête périlleuse pour récupérer la gemme sacrée et sauver son royaume de
        la destruction imminente.
      </p>
      <Retour />
    </div>
  );
};

export default Anonce1;
