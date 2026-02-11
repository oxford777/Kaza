import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow";

export default function LogementDetail() {
  const { id } = useParams();

  const logement = logements.find(item => item.id === id);

  if (!logement) {
    return <p>Logement introuvable</p>;
  }

  return (
    <section className="logement-detail">
      <Slideshow
      pictures={logement.pictures}
      title={logement.title}
    />
    </section>
  );
}