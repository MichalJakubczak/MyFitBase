import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData, useParams } from 'react-router-dom';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({params}) =>{
 try {
  const {data} = await customFetch.get(`/notes/${params.id}`)
  return data;
 } catch (error) {
  toast.error(error?.response?.data?.message);
  return redirect('/dashboard/all-notes');
 }
};
export const action = async ({request, params}) =>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.patch(`/notes/${params.id}`,data)
    toast.success('Notatka została zmieniona')
    return redirect('/dashboard/all-notes')
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }

  return null;
};


const EditNote = () => {
 const {note} = useLoaderData();
 const navigation = useNavigation();
 const isSubmitting = navigation.state === 'submitting';
  return <Wrapper>
    <Form method="post" className='form'>
      <h4 className='form-title'>Edytuj wydarzenie</h4>
      <div className='form-center'>
      <FormRow type='text' name='title' defaultValue={note.title} labelText='Nazwa wydarzenia'/>
        <FormRow type='text' name='event' defaultValue={note.event} labelText='Wydarzenie'/>
        <FormRow type='text' name='startdate' defaultValue={note.startdate} labelText='Data początkowa'/>
        <FormRow type='text' name='enddate' defaultValue={note.enddate} labelText='Data końcowa'/>
        <FormRow type='text' name='content' defaultValue={note.content} labelText='Treść notatki/uwagi'/>
        <button type='submit' className='btn btn-block form-btn' disabled={isSubmitting}>
          {isSubmitting? 'Edycja...' : 'Edytuj'}
        </button>
      </div>
    </Form>
  </Wrapper>

};

export default EditNote;