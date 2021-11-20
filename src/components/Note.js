import {MdDeleteForever} from 'react-icons/md';

const Note = ({id, text, date, handleDeleteNote}) => {

    const deleteNote = () => {
        handleDeleteNote(id);
    }

    return (
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size='1.3em' onClick={deleteNote}/>
            </div>
        </div>
    )
}

export default Note;