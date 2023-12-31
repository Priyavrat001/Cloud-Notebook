import React, { useContext, useState } from 'react'
import noteContext from './context/notes/noteContext'

export const Addnote = (props) => {
    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({title: "", description: "", tag: "" })
        props.showAlert("Added Successfull", 'success')
    }
    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <div className='container'>
                <h1>Add Your Note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input onChange={handleChange} type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="title" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input onChange={handleChange} type="text" className="form-control" id="description" name='description' value={note.description} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input onChange={handleChange} type="text" className="form-control" id="tag" name='tag' value={note.tag}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
                <h1 className='my-3'>Your Note</h1>
            </div>
        </div>
    )
}
