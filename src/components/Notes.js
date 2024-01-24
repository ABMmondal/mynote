import React, { useContext, useEffect, useRef ,useState} from 'react'
import NoteContext from '../context/Note/Notecontext'
import Noteitem from './Noteitem'
import Addnote from './Addnote'

const Notes = () => {
  const Context = useContext(NoteContext)
  const { Notes, getAllNotes } = Context
  useEffect(() => {
    getAllNotes()
    //eslint-disable-next-line
  }, [])
  const ref = useRef(null)
  const [notes, setNotes] = useState({ etitel: '', edescription: '', etag: '' })

  const updateNote = (currentnote) => {
    ref.current.click();
    setNotes({etitel:currentnote.titel ,edescription:currentnote.description, etag:currentnote.tag})
  }
  const Handleclick = e => {
    e.preventDefault()
    // addNote(notes.titel, notes.description, notes.tag)
  }

  const onchange = e => {
    setNotes({ ...notes, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Addnote />
      {/* modal */}
      <button
        type='button'
        className='btn btn-primary d-none'
        ref={ref}
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        Launch demo modal
      </button>
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Edit Note
              </h5>
              <button type='button'className='btn-close'data-bs-dismiss='modal'aria-label='Close'></button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='mb-3'>
                  <label htmlFor='titel' className='form-label'>
                    Title
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='etitel'
                    name='titel'
                    value={notes.etitel}
                    onChange={onchange}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='description' className='form-label'>
                    Description
                  </label>
                  <input
                    type='text'

                    className='form-control'
                    id='edescription'
                    value={notes.edescription}
                    name='description'
                    onChange={onchange}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='tag' className='form-label'>
                    Tag
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='etag'
                    name='tag'
                    value={notes.etag}
                    onChange={onchange}
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='button' onClick={Handleclick} className='btn btn-primary'>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row my-3'>
        <h2>Your Notes</h2>
        {Notes.map(note => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes
