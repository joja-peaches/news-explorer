import "./Footer.css";
import GitHub from "../../assets/github-logo.png";
import Facebook from "../../assets/facebook-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2024 Supersite, Powered by News APi
      </p>
      <div className="footer__navigation">
        <p className="footer__navigation__link">Home</p>
        <p className="footer__navigation__link">TripleTen</p>
        <img src={GitHub} alt="GitHub Logo" className="footer__navigation__social" />
        <img src={Facebook} alt="Facebook Logo" className="fooger__navigation__social" />
      </div>
    </footer>
  );
}

export default Footer;
