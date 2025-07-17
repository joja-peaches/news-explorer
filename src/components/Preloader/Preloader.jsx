import "./Preloader.css";
import loading from "../../assets/loading.png";

function Preloader() {
  return (
    <section className="preloader">
      <img
        src={loading}
        alt="line circle with a gray gradient"
        className="preloader__loading-image"
      />
      <p className="preloader__text">Searching for news...</p>
    </section>
  );
}

export default Preloader;
