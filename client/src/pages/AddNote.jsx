import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

import React from 'react'


export const action = async ({request}) =>{
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
        await customFetch.post('/notes',data)
        toast.success('Notatka dodana!');
        return redirect('/dashboard/add-notes')
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return error;
    }
};

const AddNote = () => {
    const {user} = useOutletContext();
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

    return (
        <Wrapper>
          <Form method='post' className='form'>
            <h4 className='form-title'>Dodaj wydarzenie</h4>
            <div className='form-center'>
              <FormRow type='text' name='title' labelText='Tytuł' />
              <FormRow type='text' name='event' labelText='wydarzenie' defaultValue="-" />
              <FormRow type='text' name='startdate' labelText='początek wydarzenia' defaultValue="-" />
              <FormRow type='text' name='enddate' labelText='koniec wydarzenia' defaultValue="-" />
              <FormRow type='text' name='content' labelText='prywatna notatka' defaultValue="brak" />
              <button
                type='submit'
                className='btn btn-block form-btn '
                disabled={isSubmitting}
              >
                {isSubmitting ? 'dodawanie...' : 'dodaj'}
              </button>
            </div>
          </Form>
        </Wrapper>
      );
    };

export default AddNote