import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (e) => {
        setNoteText(e.target.value);
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return(
        <div className="note new">
            <textarea value={noteText} cols="10" rows="8" placeholder='Type to add a note...' onChange={handleChange}></textarea>
            <div className="note-footer">
                <small>200 remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;