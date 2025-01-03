import './Header.css';
import img from '../../images/notes.png'
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';

function Header(props) {
  return (
    <header className="header">
      <div className='logo__container'>
        <img
          className="logo__img"
          src={img}
          alt="two notes with a push pin"
        />
        <Link className="logo" to="/"><span className="logo logo__accent">Easy</span>Notes</Link>
      </div>
      <SearchBar onChangeSearchValue={props.onChangeSearchValue} />
    </header>
  );
}

export default Header;
