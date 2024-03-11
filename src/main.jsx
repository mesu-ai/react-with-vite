import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './error-page.jsx';
import LoginPage from './routes/LoginPage.jsx';
import ContactList from './routes/ContactList.jsx';
import RegisterPage from './routes/RegisterPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/contact-list",
    element: <ContactList/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/error",
    element: <ErrorPage/>,
    errorElement: <ErrorPage/>
  },
  // {
  //   path: "*",
  //   element: <ErrorPage/>,
  //   errorElement: <ErrorPage/>
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
