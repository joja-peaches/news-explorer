import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { fetchNewsArticles } from "../../utils/NewsApi";
import { authorize, checkToken } from "../../utils/auth";
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
import HamburgerModal from "../HamburgerModal/HamburgerModal";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isActivePage, setIsActivePage] = useState("home");
  const [activeModal, setActiveModal] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [visibleArticlesCount, setVisibleArticlesCount] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [noResults, setNoResults] = useState();

  const location = useLocation();
  let currentPath = location.pathname;

  const handleActivePage = () => {
    if ((currentPath = "/")) {
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
    console.log("handleSignUpSubmit called");
    alert("Function called!");
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      
      if (users.some((user) => user.email === email)) {
        throw new Error("Email already exists");
      }

      const userData = { email, password, username };
      console.log(userData);
      localStorage.setItem("userData", JSON.stringify(userData));

      const data = await authorize(email, password);
      console.log("authorize completed, token:", data.token);
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        const userData = await checkToken(data.token);
        if (userData.data) {
          console.log("About to show success modal");
          setActiveModal("success");
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      setIsError(error.message || "Registration failed. Please try again.");
    }
  };

  const handleSignInSubmit = async ({ email, password }) => {
    console.log("SIGN IN called");
    alert("Sign in called!");
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

  const handleHamburgerClick = () => {
    setActiveModal("hamburger");
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

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    setIsError(null);
    setNoResults(false);
    setNewsArticles([]);

    try {
      const response = await fetchNewsArticles(searchQuery);

      if (!response.articles || response.articles.length === 0) {
        setNoResults(true);
      } else {
        const articlesWithKeyword = response.articles.map((article) => ({
          ...article,
          keyword: searchQuery,
        }));
        console.log(articlesWithKeyword);
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

  // useEffect(() => {
  //   if (isSavedArticlesPage) {
  //     setArticles([]);
  //     setNoResults(false);
  //     setError(null);
  //     setVisibleCount(3);
  //   }
  // }, [isSavedArticlesPage]);

  const handleSaveArticle = (article) => {
    const existing = savedArticles.find((a) => a.url === article.url);

    if (existing) {
      const updated = savedArticles.filter((a) => a.url !== article.url);
      setSavedArticles(updated);
    } else {
      const newArticle = {
        ...article,
        id: Date.now(),
      };
      setSavedArticles([...savedArticles, newArticle]);
    }
  };

  useEffect(() => {
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
  }, [savedArticles]);

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
              handleSave={handleSave}
              isSaved={isSaved}
              newsArticles={newsArticles}
              visibleArticlesCount={visibleArticlesCount}
              setVisibleArticlesCount={setVisibleArticlesCount}
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
      <HamburgerModal
        isOpen={activeModal === "hamburger"}
        onClose={closeActiveModal}
        name="signIn"
        submitText="Sign in"
        handleSignInSubmit={handleSignInSubmit}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default App;
