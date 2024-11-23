import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './Main Root/MainRoot';
import AllNews from './Component/Main Design/News Card Design/AllNews';
import AuthLayout from './Component/Auth Layout/AuthLayout';
import Register from './Component/Auth Layout/Register';
import Login from './Component/Auth Layout/Login';
import AuthContext from './Firebase Setup/AuthContext';
import DetailsNews from './Component/Main Design/News Card Design/DetailsNews';
import PrivetRout from './Component/Privet Router/PrivetRout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    children: [
      {
        path: "/",
        element: <Navigate to={"category/01"}></Navigate>
      },
      {
        path: "/category/:id",
        element: <AllNews></AllNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]

  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/register",
        element: <Register></Register>
      },
      {
        path: "/auth/login",
        element: <Login></Login>
      }
    ]
  },

  {
    path:"/news/:id",
    element: <PrivetRout><DetailsNews></DetailsNews></PrivetRout>,
    loader : ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)

  }

]);

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </AuthContext>
)
