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
import EditContact from './routes/EditContact.jsx';
import AddContact from './routes/AddContact.jsx';

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
    path: "/register",
    element: <RegisterPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/contacts",
    element: <ContactList/>,
    errorElement: <ErrorPage/>,
    // children:[
    //   {
    //     path: ":id",
    //     element: <EditContact/>,
    //     // errorElement: <ErrorPage/>
    //   },
    // ]
  },
  {
    path: "/contact/edit/:id",
    element: <EditContact/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/contact/add",
    element: <AddContact/>,
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
