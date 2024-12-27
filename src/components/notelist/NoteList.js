import './NoteList.css'
import NoteItem from '../noteitem/NoteItem';

function displayNote(noteItem) {
  return (
    <NoteItem key={noteItem.key} noteTitle={noteItem.title} noteContent={noteItem.content} />
  )
}

function NoteList(props) {
  return (
    <ul className="notes">
      {props.notesList.map(displayNote)}
    </ul>
  );
}

export default NoteList;
