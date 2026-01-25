import { Link } from "react-router";

export default function Error404() {
  return (
    <main>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n’existe pas.</p>
      <Link to="/">Retour à l’accueil</Link>
    </main>
  );
}