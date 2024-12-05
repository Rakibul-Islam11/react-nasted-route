import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './all-componenets/home/Home.jsx';
import About from './all-componenets/about/About.jsx';
import Contact from './all-componenets/contact/Contact.jsx';
import Services from './all-componenets/srvce/Services.jsx';
import FoeSingle from './all-componenets/product/FoeSingle.jsx';
import EError from './all-componenets/error/EError.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: 'home',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'conacttt',
        element: <Contact></Contact>
      },
      {
        path: '/services',
        loader: ()=> fetch('https://jsonplaceholder.org/users'),
        element: <Services></Services>
      },
      {
        path: '/services/:proID',
        loader: ({params}) => fetch(`https://jsonplaceholder.org/users/${params.proID}`),
        
        element: <FoeSingle></FoeSingle>,
        
      }
    ]
  },
  {
    path: '*',
    element: <EError></EError>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
