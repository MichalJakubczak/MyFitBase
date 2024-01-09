import { toast } from 'react-toastify';
import { ExcersisesContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async ({}) =>{
  try {
    const { data } = await customFetch.get('/excersises');
    return {data};
    
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
  
};

const AllExcersisesContext = createContext();
const AllExcersises = () => {
  const { data } = useLoaderData();

  return (
    <AllExcersisesContext.Provider value={{data}}>
      <SearchContainer />
      <ExcersisesContainer />
      </AllExcersisesContext.Provider>
  );
};

export const useAllExcersisesContext = () => useContext(AllExcersisesContext);

export default AllExcersises;