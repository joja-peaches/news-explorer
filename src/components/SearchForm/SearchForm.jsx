import "./SearchForm.css";

function SearchForm() {
  return (
    <search className="search">
      <form action="/search" className="search__form">
        <input
          type="search"
          className="search__form__input"
          placeholder="Enter topic"
        />
        <button className="search__form__submit">Search</button>
      </form>
    </search>
  );
}

export default SearchForm;
