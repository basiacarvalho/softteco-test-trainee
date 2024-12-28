import'./SearchBar.css';

function SearchBar ({ handleSubmit }) {
  return (
      <form className="search-form " onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search notes"
          name="searchName"
        ></input>
        <button type="submit" className="search-form__button"></button>
      </form>
  );
};

export default SearchBar;
