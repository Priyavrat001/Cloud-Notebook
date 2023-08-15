import React from "react";
import NoteContext from "./noteContext";

const NoteState = ()=>{
    const state = {
        "name": "jaidev",
        "class": "sb"
    }
    return (
        <NoteContext.Provider value={{state}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState