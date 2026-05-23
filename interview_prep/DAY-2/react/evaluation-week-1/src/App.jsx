import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Courses from './components/Courses'
import SavedCourses from './components/SavedCourses'

import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'

function App() {
 
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Courses' element={<Courses/>} />
      <Route path='/SavedCourses' element={<SavedCourses/>} />
      <Route path='/*' element={<PageNotFound/>} />

     </Routes>
    </>
  )
}

export default App
