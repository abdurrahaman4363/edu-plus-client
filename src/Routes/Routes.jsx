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
import AddTeachers from "../Pages/Dashboard/Teachers/AddTeachers";
import TeacherProfile from "../Pages/Dashboard/Teachers/TeacherProfile";



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
    element: <Dashboard></Dashboard>,
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
        path: 'add_teachers',
        element: <AddTeachers></AddTeachers>
      },
      {
        path: "teacher_profile/:teacherId",
        element: <TeacherProfile></TeacherProfile>
      },
      {
        path: 'attendence',
        element: <Attendence></Attendence>
      },

      // mamun vai section 
      {
        path: 'students',
        element: <Students></Students>
      },

    ],
  },
]);
