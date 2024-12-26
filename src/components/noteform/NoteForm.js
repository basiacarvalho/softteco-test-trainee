import './NoteForm.css';

function NoteForm() {
  return (
    <form className="form">
      <div className="form__container">
        <label className="form__label" htmlFor="form_note_title">Note Title:</label>
        <input
          className="form__input"
          type="text"
          id="form_note_title"
          placeholder="title"
          required
          minLength="2"
          maxLength="50"
        />
        <label className="form__label" htmlFor="form_note_text">Note Text:</label>
        <textarea
          className="form__input"
          id="form_note_text"
          rows="5"
          placeholder="text"
          required
          minLength="2"
          maxLength="250"
        ></textarea>
        <button className="form__button button" type="submit">Add</button>
      </div>
    </form>
  );
}

export default NoteForm;
