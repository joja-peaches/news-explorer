import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2024 Supersite, Powered by News API
      </p>
      <nav className="footer__navigation">
        <div className="footer__link-container">
          <Link to="/" className="footer__link">
            <p className="footer__link-text">Home</p>
          </Link>
          <a
            href="https://tripleten.com/"
            target="\_blank"
            className="footer__link"
          >
            <p className="footer__link-text">TripleTen</p>{" "}
          </a>
        </div>
        <a href="https://github.com/joja-peaches" target="\_blank">
          <div className="footer__github" />
        </a>
        <a href="https://www.facebook.com/georgialloydphoto" target="\_blank">
          <div className="footer__facebook" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
