import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import RecoverPassword from './RecoverPassword';
import Home from './Home';
import { Registro } from './Registro';
import CreateQuestionnaire from './Createquestionnaire';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  
  {
    path: "/recover-password",
    element: <RecoverPassword/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/register",
    element: <Registro/>
  },
  {
    path: "/create-questionnaire",
    element: <CreateQuestionnaire/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();