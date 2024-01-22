import React ,{useContext,useEffect}from 'react'
import NoteContext from '../context/Note/Notecontext'
import Noteitem from './Noteitem';
import Addnote from "./Addnote"

const Notes = () => {
    const Context =useContext(NoteContext);
    const{Notes,getAllNotes}=Context;
    useEffect(() => {
      getAllNotes();
    }, [])
    
  return (
    <>
    <Addnote/>
    <div className="row my-3">
      <h2>Your Notes</h2>
      {Notes.map((note)=>{
        return <Noteitem key={note._id} note={note}/>;
      })}
    </div>
    </>
  )
}

export default Notes
