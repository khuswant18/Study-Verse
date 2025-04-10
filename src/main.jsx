import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';

import Hero from './Hero/Hero.jsx';
import Courses from './Courses/Courses.jsx';
import Pricing from './Pricing/Pricing.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';


import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Hero/>}></Route>
      <Route path='courses' element={<Courses/>}></Route>
      <Route path='pricing' element={<Pricing/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>


    </Route>  
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
) 
 