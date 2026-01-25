import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" end>
          Accueil
        </NavLink>{" "}
        |{" "}
        <NavLink to="/about">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}