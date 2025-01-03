import './NoteList.css'
import NoteItem from '../noteitem/NoteItem';

function NoteList(props) {
  
  function displayNote(noteItem) {
    return (
      <NoteItem
        key={noteItem.key}
        id={noteItem.key}
        noteTitle={noteItem.title}
        noteContent={noteItem.content}
        noteDate={noteItem.date}
        deleteNote={props.onDelete}
      />
    )
  }

  return (
    <ul className="notes">
      {props.notesList.filter((noteItem) => {
        return noteItem.title.toLowerCase().trim().includes(props.searchValue.toLowerCase().trim());
      }).map((noteItem) => {
        return displayNote(noteItem)
      })}
    </ul>
  );
}

export default NoteList;
