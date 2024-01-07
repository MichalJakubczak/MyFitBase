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
  AllExercises,
} from './pages/index';

import {action as registerAction} from './pages/Register';
import {action as loginAction} from './pages/Login';
import { loader as dashboardLoader } from "./pages/DashboardLayout";
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
          element:<AddExercise/>
        },
        {
          path: 'stats',
          element: <Stats/>
        },
        {
          path: 'all-exercises',
          element: <AllExercises/>
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