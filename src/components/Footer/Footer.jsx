import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2024 Supersite, Powered by News API
      </p>
      <div className="footer__navigation">
        <div className="footer__navigation__link-container">
          <p className="footer__navigation__link">Home</p>
          <p className="footer__navigation__link">TripleTen</p>
        </div>
        <a href="https://github.com/joja-peaches">
          <div className="footer__navigation__github" />
        </a>
        <a href="https://www.facebook.com/georgialloydphoto">
          <div className="footer__navigation__facebook" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
