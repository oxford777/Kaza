import Banner from "../components/Banner";
import bannerImage from "../assets/images/banner-home.png";

export default function Home() {
  return (
    <main className="home">
      <div className="container">
        <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
      </div>
    </main>
  );
}