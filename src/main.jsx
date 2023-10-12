import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import Home from './components/Home/Home';
import Research from './components/Pages/Research';
import Countries from './components/Pages/Countries';
import CapacityDevelopment from './components/Pages/CapacityDevelopment';
import News from './components/Pages/News';

import Data from './components/Pages/Data';
import Videos from './components/Pages/Videos';
import Publications from './components/Pages/Publications';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/research',
        element: <Research></Research>
      },
      {
        path: '/countries',
        element: <Countries></Countries>
      },
      {
        path: '/capacity',
        element: <CapacityDevelopment></CapacityDevelopment>
      },
      {
        path: '/news',
        element: <News></News>
      },
      {
        path: '/videos',
        element: <Videos></Videos>
      },
      {
        path: '/data',
        element: <Data></Data>
      },
      {
        path: '/publication',
        element: <Publications></Publications>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
