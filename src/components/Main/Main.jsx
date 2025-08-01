import "./Main.css";
import About from "../About/About";
import NewsCards from "../NewsCards/NewsCards";

function Main({ handleSignInClick, isLoggedIn, handleSave, isSaved }) {
  return (
    <div className="main">
      <NewsCards isSaved={isSaved} isLoggedIn={isLoggedIn} handleSignInClick={handleSignInClick} handleSave={handleSave} />
      <About />
    </div>
  );
}

export default Main;
