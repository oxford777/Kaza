import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Tag from "../components/Tag";
import "./LogementDetail.scss";

export default function LogementDetail() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) return <Navigate to="/404" replace />;

  const hostNameParts = logement.host.name.split(" ");

  return (
    <section className="logement-detail">
      <Slideshow pictures={logement.pictures} title={logement.title} />

      <div className="logement-detail__header">
        <div className="logement-detail__left">
          <h1 className="logement-detail__title">{logement.title}</h1>
          <p className="logement-detail__location">{logement.location}</p>

          <div className="logement-detail__tags">
            {logement.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>

        <div className="logement-detail__right">
          <div className="logement-detail__host">
            <p className="logement-detail__host-name">
              {hostNameParts.map((p, idx) => (
                <span key={idx}>{p}</span>
              ))}
            </p>
            <img
              className="logement-detail__host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          <Rating value={logement.rating} />
        </div>
      </div>

      <div className="logement-detail__collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="logement-detail__equipments">
            {logement.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  );
}

