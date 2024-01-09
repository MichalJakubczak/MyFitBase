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
  EditExercise,
  AddNote,
  AllNotes,
  EditNote
} from './pages/index';

import {action as registerAction} from './pages/Register';
import {action as loginAction} from './pages/Login';
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { action as addExerciseAction } from "./pages/AddExercise";
import { loader as allExcersisesLoader } from "./pages/AllExcersises";
import { action as editExerciseAction} from "./pages/EditExercise";
import { loader as editExerciseLoader } from "./pages/EditExercise";
import { action as deleteExerciseAction} from "./pages/DeleteExercise";
import { action as addNoteAction} from "./pages/AddNote";
import { loader as allNotesLoader } from "./pages/AllNotes";

import BMI from "./pages/BMI";
import Calories from "./pages/Calories";
import Agenda from "./pages/Agenda";


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
          path: 'all-exercises',
          element: <AllExcersises/>,
          loader: allExcersisesLoader,
        },
      
        {
          path: 'stats',
          element: <Stats/>
        },
        {
          index: true,
          element:<AddExercise/>,
          action: addExerciseAction
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
          path: 'add-notes',
          element: <AddNote/>,
          action: addNoteAction,
        },
        {
          path: 'all-notes',
          element: <AllNotes/>,
          loader: allNotesLoader,
        },
        {
          path: 'edit-note/:id',
          element: <EditNote/>,
        },
        {
          path: 'edit-exercise/:id',
          element: <EditExercise/>,
          loader: editExerciseLoader,
          action: editExerciseAction
        },
        {path: 'delete-exercise/:id', action: deleteExerciseAction},
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