import NoteContext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial= [
        {
          "_id": "65a9425ef09b52322d414865",
          "user": "65a8363d8a9df2bd7abe91c7",
          "titel": "kelaaa choda",
          "description": "mala ghura bokachoda",
          "tag": "personal",
          "date": "2024-01-18T15:23:10.083Z",
          "__v": 0
        },
        {
            "_id": "65a9425ef09b52322d414865",
            "user": "65a8363d8a9df2bd7abe91c7",
            "titel": "kelaaa choda",
            "description": "mala ghura bokachoda",
            "tag": "personal",
            "date": "2024-01-18T15:23:10.083Z",
            "__v": 0
          },
          {
            "_id": "65a9425ef09b52322d414865",
            "user": "65a8363d8a9df2bd7abe91c7",
            "titel": "kelaaa choda",
            "description": "mala ghura bokachoda",
            "tag": "personal",
            "date": "2024-01-18T15:23:10.083Z",
            "__v": 0
          },
          {
              "_id": "65a9425ef09b52322d414865",
              "user": "65a8363d8a9df2bd7abe91c7",
              "titel": "kelaaa choda",
              "description": "mala ghura bokachoda",
              "tag": "personal",
              "date": "2024-01-18T15:23:10.083Z",
              "__v": 0
            },
            {
                "_id": "65a9425ef09b52322d414865",
                "user": "65a8363d8a9df2bd7abe91c7",
                "titel": "kelaaa choda",
                "description": "mala ghura bokachoda",
                "tag": "personal",
                "date": "2024-01-18T15:23:10.083Z",
                "__v": 0
              },
              {
                  "_id": "65a9425ef09b52322d414865",
                  "user": "65a8363d8a9df2bd7abe91c7",
                  "titel": "kelaaa choda",
                  "description": "mala ghura bokachoda",
                  "tag": "personal",
                  "date": "2024-01-18T15:23:10.083Z",
                  "__v": 0
                }
      ]
    const[Notes,setNotes] =useState(notesInitial)
  return (
  <NoteContext.Provider value={{Notes,setNotes} }>
    {props.children}
  </NoteContext.Provider>
  )
};

export default NoteState;
