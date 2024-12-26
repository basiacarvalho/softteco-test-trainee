import './App.css';
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import NoteForm from './components/noteform/NoteForm';
import NoteList from './components/notelist/NoteList';
import Footer from './components/footer/Footer';

function App() {
  return (
    <main className="container">
      <Header />
      <Section>
        <h1 className="section__header">EasyNotes</h1>
        <NoteForm />
      </Section>
      <Section>
        <h2 className="section__header">My EasyNotes</h2>
        <NoteList />
      </Section>
      <Footer />
    </main>
  );
}

export default App;
