import { Link } from "react-router-dom";
import "./Error404.scss";

export default function Error404() {
  return (
    <main className="error404">
      <h1 className="error404__code">404</h1>

      <p className="error404__text">
        Oups! La page que vous demandez n'existe pas.
      </p>

      <Link className="error404__link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}