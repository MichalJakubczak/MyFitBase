import { toast } from 'react-toastify';
import { NotesContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get('/notes');
    return {data};
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const AllNotesContext = createContext();
const AllNotes = () => {
  const {data} = useLoaderData();
  return (
    <AllNotesContext.Provider value={{data}}>
    <NotesContainer/>
    </AllNotesContext.Provider>
  );
};

export const useAllNotesContext = () => useContext(AllNotesContext);
export default AllNotes;