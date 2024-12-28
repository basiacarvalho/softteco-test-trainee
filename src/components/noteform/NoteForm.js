import './NoteForm.css';
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NoteForm(props) {

  const initialNoteState = {
    key: "",
    date: "",
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
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();

    const newDate = `${day}/${month}/${year}`;


    event.preventDefault();
    props.onAdd({ ...note, key: uuidv4(), date: newDate});
    setNote(initialNoteState);
    
  }

  return (
    <form className="note-form" onSubmit={submitNote}>
      <div className="note-form__container">
        <label className="note-form__label" htmlFor="form_note_title">Note Title:</label>
        <input
          className="note-form__input"
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
        <label className="note-form__label" htmlFor="form_note_text">Note Text:</label>
        <textarea
          className="note-form__input"
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
          className="note-form__button button" type="submit">Add</button>
      </div>
    </form>
  );
}

export default NoteForm;
