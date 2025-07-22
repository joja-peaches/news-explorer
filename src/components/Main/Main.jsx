import "./Main.css";
import About from "../About/About";
import NewsCards from "../NewsCards/NewsCards";

function Main({ handleSignInClick, isLoggedIn }) {
  return (
    <>
      <NewsCards isLoggedIin={isLoggedIn} handleSignInClick={handleSignInClick} />
      <About />
    </>
  );
}

export default Main;
