import "../style/Banner.scss";
export default function Banner({ image, title }) {
  return (
    <section className="banner">
      <img src={image} alt="" className="banner__image" />
      <div className="banner__overlay"></div>
      {title ? <h1 className="banner__title">{title}</h1> : null}
    </section>
  );
}