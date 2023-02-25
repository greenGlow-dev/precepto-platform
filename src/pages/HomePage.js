import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from '../layout/homeLayout'

const HomePage = () => {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<HomeLayout/>} />
    </Routes>
    
    </>
  )
}

export default HomePage
