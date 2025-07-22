import "./Preloader.css";
import loading from "../../assets/loading.png";

function Preloader() {
  return (
    <div className="preloader">
      <div className="circle-preloader" />
      <p className="preloader__text">Searching for news...</p>
    </div>
  );
}

export default Preloader;
