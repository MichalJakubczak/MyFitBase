import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Register,
  DashboardLayout,
  Login,
  Landing,
  Error,
  AddExercise,
  Stats,
  Profile,
  Admin,
  AllExcersises,
  EditExercise
} from './pages/index';

import {action as registerAction} from './pages/Register';
import {action as loginAction} from './pages/Login';
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { action as addExerciseAction } from "./pages/AddExercise";
import { loader as allExcersisesLoader } from "./pages/AllExcersises";

import BMI from "./pages/BMI";
import Calories from "./pages/Calories";
import Agenda from "./pages/Agenda";
import Notes from "./pages/Notes";

export const checkDefaultTheme = ()  =>{
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
      document.body.classList.toggle('dark-theme',isDarkTheme);
      return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  
{
  path:'/',
  element:<HomeLayout />,
  errorElement: <Error/>,
  children:[
    {
      index: true,
      element: <Landing/> 

    },
    {
      path:'register',
      element:<Register />,
      action: registerAction,
      
    },
    
    {
      path:'dashboard',
      element:<DashboardLayout/>,
      loader:dashboardLoader,
      children:[
        {
          index: true,
          element:<AddExercise/>,
          action: addExerciseAction
        },
        {
          path: 'stats',
          element: <Stats/>
        },
        {
          path: 'all-exercises',
          element: <AllExcersises/>,
          loader: allExcersisesLoader,
        },
        {
          path: 'profile',
          element: <Profile/>
        },
        {
          path: 'admin',
          element: <Admin/>
        },
        {
          path: 'bmi',
          element: <BMI/>
        },
        {
          path: 'calories',
          element: <Calories/>
        },
        {
          path: 'agenda',
          element: <Agenda/>
        },
        {
          path: 'notes',
          element: <Notes/>
        },
        {
          path: 'edit-job',
          element: <EditExercise/>
        },
      ]
    },
    
    {
      path:'login',
      element:<Login />,
      action: loginAction,
    },

  ]
},


]);

export const App = () => {
  return <RouterProvider router={router}/>;
}

export default App;