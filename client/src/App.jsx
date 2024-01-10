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
  EditNote,
  AllUsers,
  EditUser
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
import { action as editNoteAction} from "./pages/EditNote";
import { loader as editNoteLoader } from "./pages/EditNote";
import { action as deleteNoteAction} from "./pages/DeleteNote";
import { action as profileAction} from "./pages/Profile";
import { loader as allUsersLoader } from "./pages/AllUsers";
import { action as editUserAction} from "./pages/EditUser";
import { loader as editUserLoader } from "./pages/EditUser";
import { action as deleteUserAction} from "./pages/DeleteUser";


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
          element: <Profile/>,
          action: profileAction,
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
          loader: editNoteLoader,
          action: editNoteAction
        },
        {
          path: 'all-users',
          element: <AllUsers/>,
          loader: allUsersLoader,
        },
        {
          path: 'edit-user/:id',
          element: <EditUser/>,
          loader: editUserLoader,
          action: editUserAction
        },
        {
          path: 'edit-exercise/:id',
          element: <EditExercise/>,
          loader: editExerciseLoader,
          action: editExerciseAction
        },
        {path: 'delete-exercise/:id', action: deleteExerciseAction},
        {path: 'delete-note/:id', action: deleteNoteAction},
        {path: 'delete-user/:id', action: deleteUserAction},
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