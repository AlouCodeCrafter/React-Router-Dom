import { NavLink } from "react-router-dom";

const Retour = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <button>Retour</button>
      </NavLink>
    </div>
  );
};

export default Retour;
