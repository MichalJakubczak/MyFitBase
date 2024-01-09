import React, { useState, useEffect } from 'react';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import '../assets/css/NoteForm.css';
import { useNavigate } from 'react-router-dom';

const NoteForm = ({ onSave, selectedNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
    }
  }, [selectedNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Tytuł" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Treść"></textarea>
      <button type="submit">Zapisz</button>
    </form>
  );
};

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    customFetch.get('/notes')
      .then(data => setNotes(data))
      .catch(error => console.error('Błąd podczas ładowania notatek:', error));
  }, []);

  const handleSave = (noteData) => {
    const method = selectedNote ? 'put' : 'post';
    const endpoint = selectedNote ? `/notes/${selectedNote.id}` : '/notes';

    customFetch[method](endpoint, noteData)
      .then(() => {
        setSelectedNote(null);
        // Tutaj powinieneś zaktualizować stan notatek
      })
      .catch(error => console.error('Błąd podczas zapisywania notatki:', error));
  };
  const handleShowAllNotesClick = () => {
    navigate('../all-notes');
  };
  // Tutaj wyrenderuj formularz i listę notatek
  return (
    <div>
      <NoteForm onSave={handleSave} selectedNote={selectedNote} />
      <button onClick={handleShowAllNotesClick}>Pokaż wszystkie notatki</button>
    </div>
  );
};

export default Notes;
