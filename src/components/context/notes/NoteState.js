import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    // this is how the context api work

    // const s1 = {
    //     "name": "jaidev",
    //     "class": "sb"
    // }
    // const [state, setState] = useState(s1)
    // const updateState = ()=>{
    //     setTimeout(() => {
    //         setState({
    //             "name":"Priyavrat",
    //             "class": "10b"
    //         })
    //     }, 1000);
    // }

    return (
        //value={{state, updateState}}
        <NoteContext.Provider vlaue={''}> 
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState