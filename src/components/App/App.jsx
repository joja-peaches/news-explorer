import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { fetchNewsArticles } from "../../utils/NewsApi";
import { authorize, checkToken } from "../../utils/auth";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import SignUpModal from "../SignUpModal/SignUpModal";
import SignInModal from "../SignInModal/SignInModal";
import SuccessModal from "../SuccessModal/SuccessModal";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import ProtectedRoute from "../ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isActivePage, setIsActivePage] = useState("home");
  const [activeModal, setActiveModal] = useState(null);
  const [_isError, setIsError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleArticlesCount, setVisibleArticlesCount] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [noResults, setNoResults] = useState();

  const location = useLocation();
  let currentPath = location.pathname;

  const handleActivePage = () => {
    if (currentPath === "/") {
      setIsActivePage("home");
    } else {
      setIsActivePage("savedNews");
    }
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignUpClick = () => {
    setActiveModal("signUp");
  };

  const handleSignInClick = () => {
    setActiveModal("signIn");
  };

  const handleSignUpSubmit = async ({ email, password, username }) => {
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      if (users.some((user) => user.email === email)) {
        throw new Error("Email already exists");
      }

      const userData = { email, password, username };
      localStorage.setItem("userData", JSON.stringify(userData));

      const data = await authorize(email, password);
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        const userData = await checkToken(data.token);
        if (userData.data) {
          setActiveModal("success");
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      setIsError(error.message || "Registration failed. Please try again.");
    }
  };

  const handleSignInSubmit = async ({ email, password }) => {
    try {
      const data = await authorize(email, password);
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        const userData = await checkToken(data.token);
        if (userData.data) {
          setCurrentUser(userData.data);
          setIsLoggedIn(true);
          closeActiveModal();
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setIsError(error.message || "Login failed.");
    }
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("jwt");
    setIsActivePage("home");
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((userData) => {
          if (userData.data) {
            setCurrentUser(userData.data);
            setIsLoggedIn(true);
          }
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  useEffect(() => {
    const storedArticles = localStorage.getItem("savedArticles");
    if (storedArticles) {
      try {
        const parsedArticles = JSON.parse(storedArticles);
        setSavedArticles(parsedArticles);
      } catch (error) {
        console.error("Error parsing savedArticles from localStorage:", error);
        localStorage.removeItem("savedArticles");
      }
    }
    setIsLoaded(true);
  }, []);

  const handleHamburgerClick = () => {
    setActiveModal("hamburger");
  };

  const handleSavedArticlesClick = () => {
    setIsActivePage("savedNews");
  };

  const handleHomeClick = () => {
    setIsActivePage("home");
  };

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    setIsError(null);
    setNoResults(false);
    setNewsArticles([]);
    setHasSearched(true);

    try {
      const response = await fetchNewsArticles(searchQuery);

      if (!response.articles || response.articles.length === 0) {
        setNoResults(true);
      } else {
        const articlesWithKeyword = response.articles.map((article) => ({
          ...article,
          keyword: searchQuery,
        }));
        setNewsArticles(articlesWithKeyword);
        setVisibleArticlesCount(3);
      }
    } catch (err) {
      console.error("Search error:", err);
      setIsError("Sorry, something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveArticle = (article) => {
    const existing = savedArticles.find((a) => a.url === article.url);

    if (existing) {
      const updated = savedArticles.filter((a) => a.url !== article.url);
      setSavedArticles(updated);
    } else {
      const newArticle = {
        ...article,
        id: Date.now(),
        keyword: article.keyword || "unknown",
      };
      setSavedArticles([...savedArticles, newArticle]);
    }
  };

  const handleRemoveSaved = (article) => {
    const updated = savedArticles.filter((a) => a.url !== article.url);
    setSavedArticles(updated);
  };

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
    }
  }, [savedArticles, isLoaded]);

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
          handleHamburgerClick={handleHamburgerClick}
          handleSearch={handleSearch}
          activeModal={activeModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isLoggedIn={isLoggedIn}
                handleSignInSubmit={handleSignInSubmit}
                handleSignInClick={handleSignInClick}
                handleSave={handleSaveArticle}
                isLoading={isLoading}
                newsArticles={newsArticles}
                visibleArticlesCount={visibleArticlesCount}
                setVisibleArticlesCount={setVisibleArticlesCount}
                hasSearched={hasSearched}
                savedArticles={savedArticles}
                noResults={noResults}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <SavedNews
                  isLoggedIn={isLoggedIn}
                  handleSave={handleSaveArticle}
                  savedArticles={savedArticles}
                  handleRemoveSaved={handleRemoveSaved}
                  handleSignInClick={handleSignInClick}
                  currentUser={currentUser}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <SuccessModal
          isOpen={activeModal === "success"}
          name="success"
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
          onSubmit={handleSignInSubmit}
          handleSignInSubmit={handleSignInSubmit}
          handleSignUpClick={handleSignUpClick}
        />
        <HamburgerMenu
          isOpen={activeModal === "hamburger"}
          onClose={closeActiveModal}
          name="signIn"
          handleSignInClick={handleSignInClick}
          submitText="Sign in"
          handleSignInSubmit={handleSignInSubmit}
          handleSignOut={handleSignOut}
          isLoggedIn={isLoggedIn}
        />
      </div>
  );
}

export default App;
