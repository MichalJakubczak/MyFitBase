import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import {toast} from "react-toastify";

export const action = async ({params})=>{
  try {
    await customFetch.delete(`/users/${params.id}`)
    toast.success('Użytkownik usunięty!')
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
  return redirect('/dashboard/all-users');
};

const DeleteUser = () => {
  return <h1>DeleteUser</h1>;

};

export default DeleteUser;