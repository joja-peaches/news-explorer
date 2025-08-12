import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ handleSearch }) {
  const [isError, setIsError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery) {
      setIsError("Please enter a keyword");
      return;
    }
    setIsError("");
    handleSearch(searchQuery);
  };

  return (
    <search className="search">
      <form onSubmit={handleSearchSubmit} className="search__form">
        <input
          type="search"
          className="search__input"
          placeholder="Enter topic"
          value={searchQuery}
          onChange={(e) => {setSearchQuery(e.target.value);
            searchQuery && setIsError("");
          }}
        />
        <button className="search__submit">Search</button>
        {isError && <p className="search__error">{isError}</p>}
      </form>
    </search>
  );
}

export default SearchForm;
