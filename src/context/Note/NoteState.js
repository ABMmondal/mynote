
import NoteContext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [Notes, setNotes] = useState(notesInitial);

  //get all notes
  const getAllNotes = async () => {
    const Response = await fetch(`${host}/api/auth/fetchNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhODM2M2Q4YTlkZjJiZDdhYmU5MWM3In0sImlhdCI6MTcwNTU4Nzg4NH0.0p9aQsSe8acN7q7UbLOOMjLwXfiezIPpFLrPRGF_a_I",
      },
    });
    const json = await Response.json();
    console.log(json);
    setNotes(json);
  };

  //add note
  const addNote = async (titel, description, tag) => {
    //api call
    const Response = await fetch(`${host}/api/auth/addNotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhODM2M2Q4YTlkZjJiZDdhYmU5MWM3In0sImlhdCI6MTcwNTU4Nzg4NH0.0p9aQsSe8acN7q7UbLOOMjLwXfiezIPpFLrPRGF_a_I",
      },
      body: JSON.stringify({ titel, description, tag }),
    });
    const note = {
      _id: "65a9425ef09b73322d414865",
      user: "65a8363d8a9df2bd7abe91c7",
      titel: titel,
      description: description,
      tag: tag,
      date: "2024-01-18T15:23:10.083Z",
      __v: 0,
    };
    setNotes(Notes.concat(note));
  };


  //delete note
  const deleteNote = async(id) => {
    const Response = await fetch(`${host}/api/auth/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhODM2M2Q4YTlkZjJiZDdhYmU5MWM3In0sImlhdCI6MTcwNTU4Nzg4NH0.0p9aQsSe8acN7q7UbLOOMjLwXfiezIPpFLrPRGF_a_I",
      }
    });
    // const json = Response.json;
    // console.log(json)
  };


  
  //edit Note
  const editNote = async (id, titel, description, tag) => {
    //api call
    const Response = await fetch(`${host}/api/auth/updateNotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVhODM2M2Q4YTlkZjJiZDdhYmU5MWM3In0sImlhdCI6MTcwNTU4Nzg4NH0.0p9aQsSe8acN7q7UbLOOMjLwXfiezIPpFLrPRGF_a_I",
      },
      body: JSON.stringify({ titel, description, tag }),
    });
    const json = Response.json;

    for (let index = 0; index < Notes.length; index++) {
      const element = Notes[index];
      if (element._id === id) {
        element.titel = titel;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ Notes, addNote, deleteNote, editNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
