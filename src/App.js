import './App.css';
import React, { useState } from "react";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import NoteForm from './components/noteform/NoteForm';
import NoteList from './components/notelist/NoteList';
import Footer from './components/footer/Footer';
import BtnScroll from './components/btnscroll/BtnScroll';
import notes from './notes';
import { useEffect } from 'react';


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

  useEffect(() => {
    const headerElement = document.querySelector('.header');
    const buttonScrollElement = document.querySelector('.scroll-to-top');

    const displayButtonScroll = function (entries) {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        buttonScrollElement.classList.remove('hidden');
      } else {
        buttonScrollElement.classList.add('hidden');
      }
    }

    const headerObserver = new IntersectionObserver(displayButtonScroll, {
      root: null,
      threshold: 0,
    });
    headerObserver.observe(headerElement);
   })
  

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
      <Footer>
        <BtnScroll/>
      </Footer>
    </main>
  );
}

export default App;
