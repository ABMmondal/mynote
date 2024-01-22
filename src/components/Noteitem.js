import React, { useContext } from "react";
import NoteContext from "../context/Note/Notecontext";

const Noteitem = (props) => {
  const Context = useContext(NoteContext);
  const { deleteNote ,editNote} = Context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title"> {note.titel}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text"><small className="text-body-secondary">{note.tag}</small></p>
          <div className="d-flex justify-content-between">
            <i
              className="fa-solid fa-trash "
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i className="fa-solid fa-pen-to-square" onClick={() => {
                editNote(note._id);
              }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
