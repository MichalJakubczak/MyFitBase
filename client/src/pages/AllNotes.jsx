import React, { useState, useEffect } from 'react';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

const AllNotes = () => {
    const [notes, setNotes] = useState([]);
  
    useEffect(() => {
      customFetch.get('/notes')
        .then(response => {
          if (response.data) {
            setNotes(response.data);
          }
        })
        .catch(error => {
          console.error('Błąd podczas ładowania notatek:', error);
          toast.error('Nie udało się załadować notatek.');
        });
    }, []);
  
    return (
      <div>
        <h2>Notatki</h2>
        <ul>
          {notes.length === 0 ? (
            <li>Brak notatek do wyświetlenia...</li>
          ) : (
            notes.map(note => (
              <li key={note.id}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                {/* Dodatkowe akcje lub elementy dla każdej notatki */}
              </li>
            ))
          )}
        </ul>
      </div>
    );
  };
  
  export default AllNotes;