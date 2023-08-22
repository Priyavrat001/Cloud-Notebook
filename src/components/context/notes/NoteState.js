import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    // this is how the context api work

    const s1 = {
        "name": "jaidev",
        "class": "sb"
    }
    const [state, setState] = useState(s1)
    const updateState = ()=>{
        setTimeout(() => {
            setState({
                "name":"Priyavrat",
                "class": "10b"
            })
        }, 1000);
    }
    const noteInitail = [
        {
            "_id": "64das2cfdaba089ca43d88bf1",
            "user": "64da13b3062134a2cd72a05f",
            "title": "My notebook",
            "description": "This is my private note for my learning code",
            "tag": "Notes",
            "date": "2023-08-14T13:32:45.327Z",
            "__v": 0
        },
        {
            "_id": "64da2scfdaba089ca43d88bf1",
            "user": "64da13b3062134a2cd72a05f",
            "title": "My notebook",
            "description": "This is my private note for my learning code",
            "tag": "Notes",
            "date": "2023-08-14T13:32:45.327Z",
            "__v": 0
        },
        {
            "_id": "64da2scfdaba089ca43d88bf1",
            "user": "64da13b3062134a2cd72a05f",
            "title": "My notebook",
            "description": "This is my private note for my learning code",
            "tag": "Notes",
            "date": "2023-08-14T13:32:45.327Z",
            "__v": 0
        },
        {
            "_id": "64da2scfdaba089ca43d88bf1",
            "user": "64da13b3062134a2cd72a05f",
            "title": "My notebook",
            "description": "This is my private note for my learning code",
            "tag": "Notes",
            "date": "2023-08-14T13:32:45.327Z",
            "__v": 0
        },
        {
            "_id": "64da2scfdaba089ca43d88bf1",
            "user": "64da13b3062134a2cd72a05f",
            "title": "My notebook",
            "description": "This is my private note for my learning code",
            "tag": "Notes",
            "date": "2023-08-14T13:32:45.327Z",
            "__v": 0
        },
        {
            "_id": "64da2scfdaba089ca43d88bf1",
            "user": "64da13b3062134a2cd72a05f",
            "title": "My notebook",
            "description": "This is my private note for my learning code",
            "tag": "Notes",
            "date": "2023-08-14T13:32:45.327Z",
            "__v": 0
        },
        {
            "_id": "64da2scfdaba089ca43d88bf1",
            "user": "64da13b3062134a2cd72a05f",
            "title": "My notebook",
            "description": "This is my private note for my learning code",
            "tag": "Notes",
            "date": "2023-08-14T13:32:45.327Z",
            "__v": 0
        },
        {
            "_id": "64da3ss4006c51f14a16a8053e",
            "user": "64da13b3062134a2cd72a05f",
            "title": "My notebook",
            "description": "This is my private note for my learning code",
            "tag": "Notes",
            "date": "2023-08-14T14:02:40.309Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(noteInitail)
    // function for the adding a note
    const addNote = ( title, description, tag)=>{
        //Api call
        console.log("Adding a new note")
        const note =    {
            "_id": "64da3ss4006c51f14a16a8053e",
            "user": "64da13b3062134a2cd72a05f",
            "title": "Added My notebook",
            "description": "This is added my private note for my learning code",
            "tag": "Notes",
            "date": "2023-08-14T14:02:40.309Z",
            "__v": 0
        };
        setNotes(note.concat(note))
    }

    // function for the deleting a note
    const deleteNote = ()=>{

    }
    // function for the editing a note
    const editNote = ()=>{

    }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState