import logo from "../assets/images/logo.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa" className="footer__logo" />
      <p className="footer__text">© 2026 Kasa. All rights reserved</p>
    </footer>
  );
}