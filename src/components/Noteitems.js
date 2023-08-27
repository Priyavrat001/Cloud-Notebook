import React, { useContext } from 'react'
import noteContext from './context/notes/noteContext'

export const Noteitems = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note, updateNote } = props;
    return (
        <div className='row m-auto'>
            <div className="card col-md-4 row my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i onClick={()=>{deleteNote(note._id)}} className="fa-solid fa-trash-can mx-2"></i>
                    <i onClick={()=>{updateNote(note)}} className="fa-solid fa-pen-to-square mx-2"></i>
                </div>
            </div>
        </div>
    )
}
