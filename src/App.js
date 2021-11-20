import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {

  const[notes, setNotes] = useState([{
    id:nanoid(),
    text:"Sample Note",
    date: "10/10/2021"
  }]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    const storedDarkMode = JSON.parse(localStorage.getItem('react-notes-app-dark-mode'));
    if(storedDarkMode){
      setDarkMode(storedDarkMode);
      console.log(`darkMode ${darkMode} storedDarkMode ${storedDarkMode}`);
    }
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  },[notes])

  useEffect(()=>{
    localStorage.setItem('react-notes-app-dark-mode', JSON.stringify(darkMode));
  },[darkMode])

  const addNote = (text) => {
    const date = new Date();
    setNotes([...notes, {id:nanoid(), text:text, date: date.toLocaleDateString()}]);
  }

  const deleteNote = (id) => {
    //console.log(`note with id of ${id} will be deleted`);
    const newNoteList = [];
    notes.map((note) => {
      if(note.id !== id){
        newNoteList.push(note);
      }
    });
    console.log(newNoteList);
    setNotes(newNoteList);
  }  

  return (
    //<div className={`${darkMode && 'dark-mode'}`}>
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
      )
};

export default App;