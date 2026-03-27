import Banner from "../components/Banner";
import Card from "../components/Card";
import bannerImage from "../assets/images/banner-home.png";
import logements from "../data/logements.json";
import "./Home.scss";

export default function Home() {
  return (
    <main className="home">
        <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
        <section className="home__gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}
