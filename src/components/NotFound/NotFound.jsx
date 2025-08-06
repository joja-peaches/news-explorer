import "./NotFound.css";
import notFoundImage from "../../assets/not-found.svg";

function NotFound() {
  return (
    <section className="not-found">
      <img
        src={notFoundImage}
        alt="404 Not Found"
        className="not-found__image"
      />
      <h4 className="not-found__heading">Nothing found</h4>
      <p className="not-found__text">
        Sorry, but nothing matched
        <br />
        your search terms.
      </p>
    </section>
  );
}

export default NotFound;