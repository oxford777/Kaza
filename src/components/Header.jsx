import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../style/Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Kasa" />

        <nav className="header__nav">
          <NavLink to="/" end className="header__link">
            Accueil
          </NavLink>
          
          <NavLink to="/about" className="header__link">
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}