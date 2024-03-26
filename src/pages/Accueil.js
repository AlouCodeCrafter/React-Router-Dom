import MovieList from "../Composants/MovieList";
import NewFilm from "../Composants/NewFilm";
import Navigation from "./Navigation";

const Accueil = () => {
  return (
    <div>
      <Navigation />
      <MovieList />
      <NewFilm />
    </div>
  );
};

export default Accueil;
