import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"

    const noteInitail = []

    const [notes, setNotes] = useState(noteInitail)

    // function get all note for the adding a note

    const getAllNote = async () => {
        //Api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setNotes(json)
    }
    // Add a Note
    const addNote = async (title, description, tag) => {
          const response = await fetch(`${host}/api/notes/addnotes`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
          });
      
          const note = await response.json();
          setNotes(notes.concat(note));
      
      }
      

    // function for the deleting a note
    const deleteNote = async (id) => {
        //Api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        console.log(json)

        const newNote = notes.filter((note) => {
            return note._id !== id
        })
        setNotes(newNote)
    }
    // function for the editing a note
    const editNote = async (id, title, description, tag) => {
        //Api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, tag}),
        });
        const json = await response.json();
        console.log(json)
        //Logic to edit client
        const newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                newNotes[index].title = title;
                break;
            }
        }
        setNotes(newNotes)
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState