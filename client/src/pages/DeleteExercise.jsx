import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import {toast} from "react-toastify";
export const action = async ({params})=>{
  try {
    await customFetch.delete(`/excersises/${params.id}`)
    toast.success('Ćwiczenie usunięte!')
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
  return redirect('/dashboard/all-exercises');
};

const DeleteExercise = () => {
  return <h1>DeleteExercise</h1>;

};

export default DeleteExercise;