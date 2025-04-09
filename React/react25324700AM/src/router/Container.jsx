import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Career from './Career'
import Contact from './Contact'
 import Onlinetraining from './Onlinetraining'
import Offlinetraining from './Offlinetraining'
import Weekendtraining from './Weekendtraining' 


const Container = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        
          <Route path="/services" element={<Services />}>

            <Route path="onlinetraining" element={<Onlinetraining />}>
        
            </Route>

            <Route path="offlinetraining" element={<Offlinetraining />} />
            <Route path="weekendtraining" element={<Weekendtraining />} />
          </Route>

        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
</Routes>

    </div>
  )
}

export default Container