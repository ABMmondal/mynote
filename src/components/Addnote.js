import React, { useContext, useState } from 'react'
import NoteContext from '../context/Note/Notecontext'

const Addnote = () => {
  const Context = useContext(NoteContext)
  const { addNote } = Context
  const [notes, setNotes] = useState({ titel: '', description: '', tag: '' })
  const Handleclick = e => {
    e.preventDefault()
    addNote(notes.titel, notes.description, notes.tag)
  }

  const onchange = e => {
    setNotes({ ...notes, [e.target.name]: e.target.value })
  }

  return (
    <div className="container my-3">
      <h1>Add Note</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="titel" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="titel"
            name="titel"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onchange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={Handleclick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Addnote
