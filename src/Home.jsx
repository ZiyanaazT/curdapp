import React from 'react'
import Header from './Header'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Insert from './Insert'
import View from './View'

const Home = () => {

  const back = useNavigate()
  return (
    <>
    <Header/>
      <main className='position-relative'>

        <span className='position-absolute px-3 py-2 bg-danger end-0 top-0 bck-btn' onClick={()=>{back(-1)}}>back</span>
        
        <Routes>
          <Route path='/' element={<h1>default page</h1>}  />
          <Route path='insert' element={<Insert/>}  />
          <Route path='view' element={<View/>}  />
          <Route path='update' element={<h1>update</h1>}  />
          <Route path='delete' element={<h1>delete</h1>}  />
          <Route path='*' element={<h1>notfound page</h1>}  />
        </Routes>
      </main>
    </>
  )
}

export default Home