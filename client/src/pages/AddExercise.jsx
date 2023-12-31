import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { EXERCISE_STATUS } from '../../../utils/constants';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = async ({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('/excersises', data)
    toast.success("Ćwiczenie dodane pomyślnie!")
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
    
  }
}

const AddExercise = () => {
  const {user} = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  return <Wrapper>
    <Form method='post' className='form'>
      <h4 className='form-title'>Dodaj ćwiczenie</h4>
      <div className="form-center">
        <FormRow type='text' name='excersiseName' labelText='Nazwa ćwiczenia'/>
        <FormRow type='text' name='mainMuscle' labelText='Główna partia mięśniowa'/>
        <FormRow type='text' name='addsMuscle' labelText='Dodatkowa partia mięśniowa' defaultValue='brak'/>
        <FormRow type='text' name='excersiseDescription' labelText='Opis ćwiczenia' customClass="large-text-input"/>
        <FormRowSelect labelText='Typ ćwiczenia' 
        name='excersiseType' 
        defaultValue={EXERCISE_STATUS.ALL} list={Object.values(EXERCISE_STATUS)}/>
        <button type='submit' className='btn btn-block form-btn' disabled={isSubmitting}>{isSubmitting?'Dodawanie...':'Dodaj'}</button>
      </div>
    </Form>
  </Wrapper>
};

export default AddExercise;