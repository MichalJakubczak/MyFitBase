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
    },
    
    {
      path:'dashboard',
      element:<DashboardLayout />,
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
      ]
    },
    
    {
      path:'login',
      element:<Login />,
    },

  ]
},


]);

export const App = () => {
  return <RouterProvider router={router}/>;
}

export default App;