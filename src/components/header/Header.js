import './Header.css';
import img from '../../images/notes.png'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src={img}
        alt="two notes with a push pin"
      />
      <Link className="logo" to="/"><span className="logo logo__accent">Easy</span>Notes</Link>
    </header>
  );
}

export default Header;
