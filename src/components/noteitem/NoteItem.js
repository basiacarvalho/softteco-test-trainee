import './NoteItem.css';

function NoteItem(props) {
  return (
    <li className="note">
      <h3 className="note__title">{props.noteTitle}</h3>
      <p className="note__text">{props.noteContent}</p>
      <button className="note__button button" type="button">Delete</button>
    </li>
  );
}

export default NoteItem;