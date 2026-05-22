import { useState } from 'react'
import {Route,Routes} from 'react-router-dom';
import './App.css'
import About from './components/About';
import Home from './components/Home';
import Course from './components/Course';
import CourseDetails from './components/Course_details';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Course' element={<Course/>}/>
      <Route path='/CourseDetails' element={<CourseDetails/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
