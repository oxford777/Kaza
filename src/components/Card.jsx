import { Link } from "react-router-dom";
import "../style/Card.scss";

export default function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img className="card__image" src={cover} alt={title} />
      <h2 className="card__title">{title}</h2>
    </Link>
  );
}