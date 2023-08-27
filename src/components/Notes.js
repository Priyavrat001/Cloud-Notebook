import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from './context/notes/noteContext'
import { Noteitems } from './Noteitems'
import { Addnote } from './Addnote'

export const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getAllNote, addNote } = context

    useEffect(() => {
        getAllNote()
        //eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
    }

    const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" })

    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.etitle, note.edescription, note.etag)
    }
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className='container'>
            <Addnote />
            <button ref={ref} type='button' className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='container'>
                                <h1>Add Your Note</h1>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input onChange={handleChange} type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} aria-describedby="title" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input onChange={handleChange} type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input onChange={handleChange} type="text" className="form-control" id="etag" name='etag' value={note.etag} />
                                    </div>
                                </form>
                                <h1 className='my-3'>Your Note</h1>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            {notes.map((note) => {
                return <Noteitems keys={note.id} updateNote={updateNote} note={note} />
            })}
        </div>
    )
}
