import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Career from './Career'
import Contact from './Contact'

const Container = () => {
  return (
    <div>
        <h1>Display Content Area here...</h1>

        <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/career' element={<Career />}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Container