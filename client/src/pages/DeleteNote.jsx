import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import {toast} from "react-toastify";
export const action = async ({params})=>{
  try {
    await customFetch.delete(`/notes/${params.id}`)
    toast.success('Notatka usunięta!')
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
  return redirect('/dashboard/all-notes');
};

const DeleteNote = () => {
  return <h1>Delete Note</h1>;

};

export default DeleteNote;