// import { useState } from 'react'
import React from 'react'
// import Header from './user/Header';
// import Navbar from './Navbar';
import { Routes ,Route } from 'react-router'
import Home from './Home'


const App = () => {
  return (
    <>   
     <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/" element={<InsertData/>}/>
          <Route path="/" element={<ViewData/>}/>
          <Route path="/" element={<DeleteData/>} /> */}
      <Route path="*" element={<h1>Page not found</h1>} />
     </Routes>
    </>
  )
}

export default App 
 

 