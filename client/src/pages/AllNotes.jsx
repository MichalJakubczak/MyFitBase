import React from 'react';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { toast } from 'react-toastify';


export const loader = async ({}) =>{
    try {
      const { data } = await customFetch.get('/notes');

      return {data};
      
    } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
    }
};

const AllNotesContext = createContext();

const AllNotes = () => {
    const { data: notes } = useLoaderData();
  
    return (
      <div>
        <h2>Notatki</h2>
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              {/* Możesz dodać więcej detali lub akcji dla każdej notatki, np. przyciski edycji/usuwania */}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export const useAllNotesContext = () => useContext(AllNotesContext);
export default AllNotes;