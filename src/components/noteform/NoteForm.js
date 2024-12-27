import React, { useState } from "react";
import './NoteForm.css';
import { v4 as uuidv4 } from 'uuid';

function NoteForm(props) {

  const initialNoteState = {
    key: "",
    title: "",
    content: "",
  }

  const [note, setNote] = useState(initialNoteState)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(currentNote => {
      return {
        ...currentNote,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd({ ...note, key: uuidv4()});
    setNote(initialNoteState);
    event.preventDefault();
  }

  return (
    <form className="form">
      <div className="form__container">
        <label className="form__label" htmlFor="form_note_title">Note Title:</label>
        <input
          className="form__input"
          type="text"
          id="form_note_title"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="title"
          required
          minLength="2"
          maxLength="50"
        />
        <label className="form__label" htmlFor="form_note_text">Note Text:</label>
        <textarea
          className="form__input"
          id="form_note_text"
          name="content"
          onChange={handleChange}
          value={note.content}
          rows="5"
          placeholder="text"
          required
          minLength="2"
          maxLength="250"
        ></textarea>
        <button
          className="form__button button" type="submit" onClick={submitNote}>Add</button>
      </div>
    </form>
  );
}

export default NoteForm;
