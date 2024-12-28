import './NoteItem.css';

function NoteItem(props) {

  function handleClick() {
    props.deleteNote(props.id);
  }

  return (
    <li className="note">
      <p className="note__date">{props.noteDate}</p>
      <h3 className="note__title">{props.noteTitle}</h3>
      <p className="note__text">{props.noteContent}</p>
      <button className="note__button button" type="button" onClick={handleClick}>Delete</button>
    </li>
  );
}

export default NoteItem;