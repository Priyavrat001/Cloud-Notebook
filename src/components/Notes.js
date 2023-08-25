import React, { useContext, useEffect, useRef } from 'react'
import noteContext from './context/notes/noteContext'
import { Noteitems } from './Noteitems'
import { Addnote } from './Addnote'

export const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getAllNote } = context

    useEffect(() => {
        getAllNote()
    }, [])
    const ref = useRef(null)
    const updateNote = (note) => {
        ref.current.click()
    }
    return (
        <div className='container'>
            <Addnote />
            <div ref={ref} className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {notes.map((note) => {
                return <Noteitems keys={note._id} updateNote={updateNote} note={note} />
            })}
        </div>
    )
}
