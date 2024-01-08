import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData, useParams } from 'react-router-dom';
import { EXERCISE_STATUS } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({params}) =>{
 try {
  const {data} = await customFetch.get(`/excersises/${params.id}`)
  return data;
 } catch (error) {
  toast.error(error?.response?.data?.message);
  return redirect('/dashboard/all-exercises');
 }
};
export const action = async ({request, params}) =>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.patch(`/excersises/${params.id}`,data)
    toast.success('Ćwiczenie zostało zmienione')
    return redirect('/dashboard/all-exercises')
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }

  return null;
};


const EditExercise = () => {
 const {excercise} = useLoaderData();
 const navigation = useNavigation();
 const isSubmitting = navigation.state === 'submitting';
  return <Wrapper>
    <Form method="post" className='form'>
      <h4 className='form-title'>Edytuj ćwiczenie</h4>
      <div className='form-center'>
      <FormRow type='text' name='excersiseName' defaultValue={excercise.excersiseName} labelText='Nazwa ćwiczenia'/>
        <FormRow type='text' name='mainMuscle' defaultValue={excercise.mainMuscle} labelText='Główna partia mięśniowa'/>
        <FormRow type='text' name='addsMuscle' defaultValue={excercise.addsMuscle} labelText='Dodatkowa partia mięśniowa' />
        <FormRow type='text' name='excersiseDescription' defaultValue={excercise.excersiseDescription} labelText='Opis ćwiczenia' customClass="large-text-input"/>
        <FormRowSelect name='excersiseType' defaultValue={excercise.excersiseType} list={Object.values(EXERCISE_STATUS)} labelText='Typ ćwiczenia'></FormRowSelect>
        <button type='submit' className='btn btn-block form-btn' disabled={isSubmitting}>
          {isSubmitting? 'Edycja...' : 'Edytuj'}
        </button>
      </div>
    </Form>
  </Wrapper>

};

export default EditExercise;