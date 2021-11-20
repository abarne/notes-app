import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {

  const[notes, setNotes] = useState([{
    id:nanoid(),
    text:"This is the first note!",
    date: "10/10/2021"
  },{
    id:nanoid(),
    text:"This is the second note!",
    date: "10/11/2021"
  },{
    id:nanoid(),
    text:"This is the third note!",
    date: "10/12/2021"
  },{
    id:nanoid(),
    text:"This is the fourth note!",
    date: "10/13/2021"
  }]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }
    
  },[])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  },[notes])

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
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
      )
};

export default App;