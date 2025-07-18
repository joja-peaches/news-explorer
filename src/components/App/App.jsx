import { useState } from "react";
import "./App.css";

import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import About from "../About/About";
import NewsCards from "../NewsCards/NewsCards";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SignUpModal from "../SignUpModal/SignUpModal";
import SignInModal from "../SignInModal/SignInModal";

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [newsArticles, setNewsArticles] = useState([]);

  const handleSignUpClick = () => {
    setActiveModal("signUp");
  };

  const handleSignInClick = () => {
    setActiveModal("signIn");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignInSubmit = () => {
    closeActiveModal();
    setIsLoggedIn(true);
  }

  const handleSignUpSubmit = () => {
    closeActiveModal();
    setIsLoggedIn(true);
  }

  return (
    <div className="app">
      <Header
        isLoggedIn={isLoggedIn}
        handleSignInClick={handleSignInClick}
        currentUser={currentUser}
      />
      <Preloader />
      <About />
      {/* <NewsCards /> */}
      {/* <Main /> */}
      <Footer />
      <SignUpModal
        isOpen={activeModal === "signUp"}
        onClose={closeActiveModal}
        title="Sign up"
        name="signUp"
        submitText="Sign up"
        buttonText="Sign in"
        onSubmit={handleSignUpSubmit}
        handleSignInClick={handleSignInClick}
      />
      <SignInModal
        isOpen={activeModal === "signIn"}
        onClose={closeActiveModal}
        title="Sign in"
        name="signIn"
        submitText="Sign in"
        buttonText="Sign up"
        onSubmit={handleSignInSubmit}
        handleSignUpClick={handleSignUpClick}
      />
    </div>
  );
}

export default App;
