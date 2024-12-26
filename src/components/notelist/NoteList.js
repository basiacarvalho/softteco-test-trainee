import './NoteList.css'
import NoteItem from '../noteitem/NoteItem';
import notes from '../../notes';

function displayNote(note) {
  return (
    <NoteItem key={note.key} noteTitle={note.title} noteContent={note.content} />
  )
}

function NoteList() {
  return (
    <ul className="notes">
      {notes.map(displayNote)}
    </ul>
  );
}

export default NoteList;
