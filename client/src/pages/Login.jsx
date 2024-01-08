import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/auth/login',data)
    toast.success('Pomyślnie zalogowano!')
    return redirect('/dashboard/all-exercises')
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
  
}


const Login = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  return (
    <Wrapper>
      <Form method='POST' className="form">
        <Logo/>
        <h4>Zaloguj się</h4>
        <FormRow type="email" name="email" labelText='Email'> </FormRow>
        <FormRow type="password" name="password" labelText='Hasło'></FormRow>
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>{isSubmitting?'Logowanie...':'Zaloguj'}</button>
        <p>
        Nie masz jeszcze konta? Kliknij tutaj aby się zarejestrować<br></br>
        <Link to='/register' className="member-btn">
          Zarejestruj się
        </Link>
        </p>
      </Form>

    </Wrapper>
  );
};

export default Login;