import './App.css';
import React, { useState } from "react";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import NoteForm from './components/noteform/NoteForm';
import NoteList from './components/notelist/NoteList';
import Footer from './components/footer/Footer';
import notes from './notes';

function App() {

  const [notesList, setNotesList] = useState(notes)

  function addNote(newNote) {
    setNotesList(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(key) {
    setNotesList(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem.key !== key;
      })
    })
    console.log("Note was deleted");
  }

  return (
    <main className="container">
      <Header />
      <Section>
        <h1 className="section__header">EasyNotes</h1>
        <NoteForm onAdd={addNote}/>
      </Section>
      <Section>
        <h2 className="section__header">My EasyNotes</h2>
        <NoteList notesList={notesList} onDelete={deleteNote} />
      </Section>
      <Footer />
    </main>
  );
}

export default App;
