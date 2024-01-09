import React from 'react'
import Note from './Note';
import Wrapper from "../assets/wrappers/NotesContainer";
import {useAllNotesContext} from "../pages/AllNotes";

const NotesContainer = () => {
    const {data} =  useAllNotesContext()
    const {notes} = data
    if(notes.length ===0){
        return (<Wrapper>
            <h2>Brak notatek do wyświetlenia...</h2>
        </Wrapper>
        );
    };
  return <Wrapper>
    <div className="notes">
        {notes.map((note)=>{
            return <Note key={note._id} {...note}/>
        })}
    </div>
  </Wrapper>
    
};

export default NotesContainer;