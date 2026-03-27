import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import aboutBanner from "../assets/images/banner-about.png"; 
import "./About.scss";

const aboutData = [
  { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
  { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
  { title: "Service", content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." },
  { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." },
];

export default function About() {
  return (
    <section className="about">
      <div className="about__banner">
    <Banner image={aboutBanner} title="" />
      </div>

      <div className="about__collapses">
        {aboutData.map((item) => (
          <Collapse key={item.title} title={item.title}>
            <p>{item.content}</p>
          </Collapse>
        ))}
      </div>
    </section>
  );
}
