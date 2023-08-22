import React, {useContext} from 'react'
import noteContext from './context/notes/noteContext'
import { Noteitems } from './Noteitems'
import { Addnote } from './Addnote'

export const Notes = () => {
    const context = useContext(noteContext)
    const { notes, addNote } = context

    return (
        <div className='container'>
            <Addnote/>
            {notes.map((note) => {
                return <Noteitems keys={note._id} note={note}/>
            })}
        </div>
    )
}
