import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import customFetch from "../utils/customFetch";
import {toast} from 'react-toastify';

/*
export const action = async ({ request }) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return null;
}
*/



export const action = async ({request}) =>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    await customFetch.post('/auth/register',data)
    toast.success('Rejestracja zakończona sukcesem')
    return redirect('/login');

  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }

  
};

const Register = () => {
  const navigation = useNavigation()
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting'
  return (
  <Wrapper>
    <Form method='post' className="form">
      <Logo/>
      <h4>Dołącz do FitBase</h4>
      <FormRow type='text' name='username' labelText='Nazwa użytkownika' defaultValue='Deadlyver'/>
      <FormRow type='email' name='email' labelText='email' defaultValue='fitbase@gmail.com'/>
      <FormRow type='password' name='password' labelText='hasło' defaultValue='secret123'/>
      <button type="submit" className="btn btn-block" disabled ={isSubmitting} >{isSubmitting ? 'Rejestracja...':'Zarejestruj'}</button>
      
      <p>
        Masz już konto? Kliknij tutaj aby się zalogować!<br></br>
        <Link to='/login' className="member-btn">Zaloguj</Link>
      </p>
    </Form>
  </Wrapper>
  );
};

export default Register;