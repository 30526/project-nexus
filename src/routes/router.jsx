import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Layout from "../LayOut/Layout";
import MyProfile from "../pages/MyProfile/MyProfile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../Private/PrivateRoute";
import AllCourses from "../pages/AllCourses/AllCourses";
import AllTopRatedCourses from "../pages/AllTopRatedCourses/AllTopRatedCourses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allCourses",
        element: <AllCourses></AllCourses>,
      },
      {
        path: "/topRatedCourses",
        element: <AllTopRatedCourses></AllTopRatedCourses>,
      },
    ],
  },
]);
