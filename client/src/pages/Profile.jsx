import { FormRow } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { useNavigation, Form } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';


export const action = async ({request}) => {
  const formData = await request.formData();
  const file = formData.get('avatar')
  if(file && file.size > 500000){
    toast.error('zdjęcie jest zbyt duże')
    return null;
  }
  try {
    await customFetch.patch('/users/edit-user', formData)
    toast.success('Profil pomyślnie zaktualizowany!')
  } catch (error) {
    toast.error(error?.response?.data?.message);
  
  }
return null;
};

const Profile = () => {
  const { user } = useOutletContext();
  const { username, email, name, lastname, location } = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h4 className='form-title'>Profil</h4>

        <div className='form-center'>
          <FormRow type='text' name='username' defaultValue={username} labelText='Nazwa użytkownika' />
          <FormRow
            type='email'
            labelText='Email'
            name='email'
            defaultValue={email}
          />
          <FormRow type='text' name='name' defaultValue={name} labelText='Imię' />
          <FormRow type='text' name='lastname' defaultValue={lastname} labelText='Nazwisko' />
          <FormRow type='text' name='location' defaultValue={location} labelText='Miejscowość' />
          <button
            className='btn btn-block form-btn'
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'zapisywanie...' : 'zapisz'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;