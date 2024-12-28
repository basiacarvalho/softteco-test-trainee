import'./SearchBar.css';

function SearchBar(props) {

  function handleChange(event) {
    props.onChangeSearchValue(event.target.value);
  }

  return (
    <search>
      <form className="search-form ">
        <input
          className="search-form__input"
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search notes"
         name="searchContent"
         onChange={handleChange}
        ></input>
        <svg className="search-form__img"></svg>
      </form>
    </search>
  );
};

export default SearchBar;
