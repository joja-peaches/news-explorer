import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import About from "../About/About";
import NewsCards from "../NewsCards/NewsCards";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import SignUpModal from "../SignUpModal/SignUpModal";
import SignInModal from "../SignInModal/SignInModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isActivePage, setIsActivePage] = useState("home");
  const [activeModal, setActiveModal] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [newsArticles, setNewsArticles] = useState([]);

  const location = useLocation();
  const currentPath = location.pathname;

  const handleSignUpClick = () => {
    setActiveModal("signUp");
  };

  const handleSignInClick = () => {
    setActiveModal("signIn");
  };

  const handleSavedArticlesClick = () => {
    setIsActivePage("savedNews");
  };

  const handleHomeClick = () => {
    setIsActivePage("home");
  };

  const handleSave = () => {
    console.log("saved");
    setIsSaved(!isSaved);
  };

  const handleRemoveSave = () => {
    console.log("removed save");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    closeActiveModal();
    setIsLoggedIn(true);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setActiveModal("success");
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setSavedArticles({});
    setIsActivePage("home");
  };

  const handleActivePage = () => {
    if ((currentPath = "/")) {
      setIsActivePage("home");
    } else {
      setIsActivePage("savedNews");
    }
  };

  return (
    <div className="app">
      <Header
        isLoggedIn={isLoggedIn}
        handleSignInClick={handleSignInClick}
        currentUser={currentUser}
        isActivePage={isActivePage}
        handleHomeClick={handleHomeClick}
        handleSavedArticlesClick={handleSavedArticlesClick}
        handleSignOut={handleSignOut}
        handleActivePage={handleActivePage}
        handleSignInSubmit={handleSignInSubmit}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              handleSignInSubmit={handleSignInSubmit}
              handleSignInClick={handleSignInClick}
              handleSave={handleSave}
              isSaved={isSaved}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedNews
                isLoggedIn={isLoggedIn}
                handleRemoveSaved={handleRemoveSave}
                isSaved={isSaved}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />

      {/* <Preloader /> */}
      {/* <NotFound /> */}
      <SuccessModal
        isOpen={activeModal === "success"}
        onClose={closeActiveModal}
        handleSignInClick={handleSignInClick}
      />

      <SignUpModal
        isOpen={activeModal === "signUp"}
        onClose={closeActiveModal}
        title="Sign up"
        name="signUp"
        submitText="Sign up"
        buttonText="Sign in"
        handleSignInSubmit={handleSignInSubmit}
        handleSignUpSubmit={handleSignUpSubmit}
        handleSignInClick={handleSignInClick}
      />
      <SignInModal
        isOpen={activeModal === "signIn"}
        onClose={closeActiveModal}
        title="Sign in"
        name="signIn"
        submitText="Sign in"
        buttonText="Sign up"
        handleSignInSubmit={handleSignInSubmit}
        handleSignUpClick={handleSignUpClick}
      />
    </div>
  );
}

export default App;
