import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home/Home'

export default function Routes_() {
  return (
    <div>
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route exact path='/practice' element={<practice/>} />
    </Routes>
    </div>
  )
}
