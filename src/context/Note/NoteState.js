import NoteContext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 ={
        "name":'Abir',
        "title":"mondal"
    }
    const [State, setState] = useState(s1)
    const update =()=>{
        setTimeout(() => {
            setState({
                "name":'Ram',
                "title":"mondal"
            })
        }, 1000);
    }
  return (
  <NoteContext.Provider value={{State,update}}>
    {props.children}
  </NoteContext.Provider>
  )
};

export default NoteState;
