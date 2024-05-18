import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import Dashboard from "../Layout/Dashboard";
import Attendence from "../Pages/Dashboard/Attendence/Attendence";
import Teachers from "../Pages/Dashboard/Teachers/Teachers";
import Students from "../Pages/Dashboard/Students/Students";
import PrivateRoute from "./PrivateRoute";
import Courses from "../Pages/Dashboard/Courses/Courses";
import AddCourse from "../Pages/Dashboard/Courses/AddCourse";
import EditCourse from "../Pages/Dashboard/Courses/EditCourse";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Login></Login>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'employee',
        element: <Home></Home>,
      },

      // sharmin akter section 
      {
        path: 'teachers',
        element: <Teachers></Teachers>,
      },
      {
        path: 'attendence',
        element: <Attendence></Attendence>
      },
      // abdur rahaman
      {
        path: 'courses',
        element: <Courses></Courses>
      },
      {
        path: 'addCourses',
        element: <AddCourse></AddCourse>
      },
      {
        path: 'editCourse/:id',
        element: <EditCourse></EditCourse>
      },

      // mamun vai section 
      {
        path: 'students',
        element: <Students></Students>
      },
  
    ],
  },
]);
