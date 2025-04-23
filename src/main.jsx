import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import Home from './components/home/Home.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx'
import Hero from './components/hero/Hero.jsx';
import ProdDetails from './components/prodDetails/ProdDetails.jsx';
import '@smastrom/react-rating/style.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home>
                <Hero></Hero>
             </Home>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/dashboard",
        element: <Dashboard></Dashboard>,
      },
      { 
        path:"/detail/:product_id",
        loader: ()=> fetch('/gadgets.json'),
        element: <ProdDetails/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
