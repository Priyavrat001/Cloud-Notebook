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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYTEzYjMwNjIxMzRhMmNkNzJhMDVmIn0sImlhdCI6MTY5MjAxMzQ5MX0.2sGGWAYjcW92wM7E07wG-kX1E6-okHu84R_9SKi8uvo"
            }
        });
        const json = await response.json();
        console.log(json)
        setNotes(json)
    }
    // Add a Note
    const addNote = async (title, description, tag) => {
          const response = await fetch(`${host}/api/notes/addnotes`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYTEzYjMwNjIxMzRhMmNkNzJhMDVmIn0sImlhdCI6MTY5MjAxMzQ5MX0.2sGGWAYjcW92wM7E07wG-kX1E6-okHu84R_9SKi8uvo"
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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYTEzYjMwNjIxMzRhMmNkNzJhMDVmIn0sImlhdCI6MTY5MjAxMzQ5MX0.2sGGWAYjcW92wM7E07wG-kX1E6-okHu84R_9SKi8uvo"
            },
        });
        const json = await response.json();
        console.log(json)
        console.log("Deletihng the note with id" + id)
        const newNote = notes.filter((note) => {
            return note._id !== id
        })
        setNotes(newNote)
    }
    // function for the editing a note
    const editNote = async (id, title, description, tag) => {
        //Api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkYTEzYjMwNjIxMzRhMmNkNzJhMDVmIn0sImlhdCI6MTY5MjAxMzQ5MX0.2sGGWAYjcW92wM7E07wG-kX1E6-okHu84R_9SKi8uvo"
            },
            body: JSON.stringify({title, description, tag}),
        });
        const json = await response.json();
        //Logic to edit client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.description = description;
                element.tag = tag;
                element.title = title;
            }
        }
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState