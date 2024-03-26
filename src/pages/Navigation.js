import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <NavLink to={"/"}>
          <li>Accueil</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
