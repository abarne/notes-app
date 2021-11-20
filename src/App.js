import { useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";

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

  const addNote = (text) => {
    const date = new Date();
    setNotes([...notes, {id:nanoid(), text:text, date: date.toLocaleDateString()}]);
  }

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
      )
};

export default App;