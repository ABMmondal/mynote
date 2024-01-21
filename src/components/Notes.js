import React ,{useContext, useState}from 'react'
import NoteContext from '../context/Note/Notecontext'
import Noteitem from './Noteitem';

const Notes = () => {
    const Context =useContext(NoteContext);
    const{Notes,setNotes}=Context;
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {Notes.map((note)=>{
        return <Noteitem note={note}/>;
      })}
    </div>
  )
}

export default Notes
