import React,{useContext,useEffect} from 'react'
import NoteContext from '../context/Note/Notecontext'


function About() { 

    const a= useContext(NoteContext)
    useEffect(() => { 
      a.update(); 
      //eslint-disable-next-line
    }, [])
    
  return (
    <div>About{a.State.name}</div>
  )
}

export default About