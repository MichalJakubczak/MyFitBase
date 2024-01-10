import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData, useParams } from 'react-router-dom';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({params}) =>{
 try {
  const {data} = await customFetch.get(`/users/${params.id}`)
  return data;
 } catch (error) {
  toast.error(error?.response?.data?.message);
  return redirect('/dashboard/all-users');
 }
};
export const action = async ({request, params}) =>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.patch(`/users/${params.id}`,data)
    toast.success('Dane użytkownika zmienione!')
    return redirect('/dashboard/all-users')
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }

  return null;
};


const EditUser = () => {
 const {user} = useLoaderData();
 const navigation = useNavigation();
 const isSubmitting = navigation.state === 'submitting';
  return <Wrapper>
    <Form method="post" className='form'>
      <h4 className='form-title'>Edytuj użytkownika</h4>
      <div className='form-center'>
      <FormRow type='text' name='username' defaultValue={user.username} labelText='Nazwa użytkownika'/>
        <FormRow type='email' name='email' defaultValue={user.email} labelText='Email'/>
        <FormRow type='text' name='role' defaultValue={user.role} labelText='Dodatkowa partia mięśniowa' />

      </div>
    </Form>
  </Wrapper>

};

export default EditUser;